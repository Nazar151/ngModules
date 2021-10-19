import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../interface/Comment"

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpclient : HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.httpclient.get<Comment[]>(this.url)
  }
}
