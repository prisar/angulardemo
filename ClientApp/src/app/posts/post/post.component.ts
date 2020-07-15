import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PostService } from "../post.service";
import { Post } from "../post.model";
import { User } from "../user.model";
import { Comment } from "../comment.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  post: Post;
  user: User;
  comments: Comment[];
  commentText: string;

  constructor(public postService: PostService, private route: ActivatedRoute) {
    this.commentText = '';
  }

  ngOnInit() {
    const postId: number = parseInt(this.route.snapshot.params["id"]);
    this.postService
      .getPostById(postId)
      .subscribe(
        (data: Post) => (this.post = data),
        (err: any) => console.log(err),
        () => console.log("All done getting post.")
      );

    this.postService
      .getUserDetailsById(postId)
      .subscribe(
        (data: User) => (this.user = data),
        (err: any) => console.log(err),
        () => console.log("Done getting user details.")
      );

    this.postService
      .getCommentsByPostId(postId)
      .subscribe(
        (data: Comment[]) => {
          this.comments = data;
          const localComments = JSON.parse(localStorage.getItem("comments")) ? JSON.parse(localStorage.getItem("comments")).filter(comment => comment.postId === postId) : [];
          console.log('localComments', localComments)
          this.comments = this.comments.concat(localComments);
          console.log('this.comments', this.comments)
        },
        (err: any) => console.log(err),
        () => console.log("Done getting user details.")
      );
  }

  addComment(e: any): void {
    const comments = JSON.parse(localStorage.getItem("comments")) ? JSON.parse(localStorage.getItem("comments")) : [];
    const newComment = {
      postId: this.post.id,
      name: this.user.name,
      email: this.user.email,
      body: this.commentText
    };
    comments.push(newComment);
    this.comments.push(newComment);

    localStorage.setItem("comments", JSON.stringify(comments));
  }
}
