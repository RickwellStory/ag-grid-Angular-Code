import {IItemResponse} from "./item.interface";
import {IPageInfoResponse} from "./page-info.interface";

export interface IVideoResponse {
  etag: string;
  items: IItemResponse[];
  kind: string;
  nextPageToken: string;
  pageInfo: IPageInfoResponse;
  regionCode: string;
}
