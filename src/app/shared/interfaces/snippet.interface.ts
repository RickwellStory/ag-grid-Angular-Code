import {IThumbnails} from "./thumbnails.interface";

export interface ISnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: IThumbnails;
  title: string;
}
