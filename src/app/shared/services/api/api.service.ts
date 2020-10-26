import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IVideoResponse} from "../../interfaces/video.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(): Observable<IVideoResponse>{
    return this.http.get<IVideoResponse>(environment.YOUTUBE_API)
  }
}
