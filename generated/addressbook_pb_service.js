// package: foo
// file: addressbook.proto

var addressbook_pb = require("./addressbook_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DirLookup = (function () {
  function DirLookup() {}
  DirLookup.serviceName = "foo.DirLookup";
  return DirLookup;
}());

DirLookup.ByName = {
  methodName: "ByName",
  service: DirLookup,
  requestStream: false,
  responseStream: false,
  requestType: addressbook_pb.Name,
  responseType: addressbook_pb.LookupResult
};

exports.DirLookup = DirLookup;

function DirLookupClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DirLookupClient.prototype.byName = function byName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DirLookup.ByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DirLookupClient = DirLookupClient;

