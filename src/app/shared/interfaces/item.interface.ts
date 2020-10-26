import {IItemId} from "./item-id.interface";
import {ISnippet} from "./snippet.interface";

export interface IItemResponse {
  etag: string;
  id: IItemId;
  kind: string;
  snippet: ISnippet;
}
