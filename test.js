import { Person } from "./generated/addressbook_pb";
import { DirLookupClient } from "./generated/addressbook_pb_service";

const client = new DirLookupClient("http://localhost:3000/DirLookup");