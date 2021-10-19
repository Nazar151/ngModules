import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Comment} from "../interface/Comment"

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
