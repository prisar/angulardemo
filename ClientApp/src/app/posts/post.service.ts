import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { Post } from './post.model';
import { User } from './user.model';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
   }

   getAllPosts(): Observable<Post[]> {
    if (!localStorage.getItem('posts')) {
      return of(JSON.parse(localStorage.getItem('posts')));
    }
    return this.http.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }

  getPostById(id: number): Observable<Post> {
    const post = this.http.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return post;
  }

  getUserDetailsById(id: number): Observable<User> {
    const user = this.http.get<User>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    return user;
  }

  getCommentsByPostId(id: number): Observable<Comment[]> {
    // if (!localStorage.getItem("comments")) {
    //   localStorage.setItem("comments", JSON.stringify([]));
    // }

    // const localComments = JSON.parse(localStorage.getItem("comments")).filter(comment => comment.postId);
    // console.log('localComments', localComments);
    // if (localComments === undefined || localComments.length === 0) {
    //   const comments = this.http.get<Comment[]>(
    //     `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    //   );
    //   console.log('comments', comments);
    //   return comments;
    // }
    // return of(localComments);

    const comments = this.http.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    console.log('comments', comments);
    return comments;
  }
}
