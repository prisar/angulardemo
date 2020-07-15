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
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts.find(p => p.id === id);
    return of(post);
  }

  getUserDetailsById(id: number): Observable<User> {
    const user = this.http.get<User>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    return user;
  }

  getCommentsByPostId(id: number): Observable<Comment[]> {
    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", JSON.stringify([]));
    }

    const localComments = JSON.parse(localStorage.getItem("comments")).find(comment => comment.postId);
    if (localComments === undefined && localComments.length === 0) {
      const comments = this.http.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      console.log('comments', comments);
      return comments;
    }
    return of(localComments);
  }

  // updatePost(Post: Post): Observable<void> {
  //   return this.http.put<void>(
  //     "https://dxPostsapi.azurewebsites.net/api/v1/Posts/" + Post.id,
  //     Post,
  //     {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json"
  //       })
  //     }
  //   );
  // }

  // addPost(newPost: Post): Observable<Post> {
  //   return this.http.post<Post>(
  //     "https://dxPostsapi.azurewebsites.net/api/v1/Posts/",
  //     newPost,
  //     {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json"
  //       })
  //     }
  //   );
  // }

  // deletePost(PostId: number): Observable<void> {
  //   return this.http.delete<void>(
  //     `https://dxPostsapi.azurewebsites.net/api/v1/Posts/${PostId}`
  //   );
  // }
}
