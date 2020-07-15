import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post.model';
import { User } from '../user.model';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  user: User;
  comments: Comment[];

  constructor(
    public postService: PostService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const postId: number = parseInt(this.route.snapshot.params['id']);
    this.postService
      .getPostById(postId)
      .subscribe(
        (data: Post) => (this.post = data),
        (err: any) => console.log(err),
        () => console.log('All done getting post.')
      );

    this.postService
      .getUserDetailsById(postId)
      .subscribe(
        (data: User) => (this.user = data),
        (err: any) => console.log(err),
        () => console.log('Done getting user details.')
      );

    this.postService
      .getCommentsByPostId(postId)
      .subscribe(
        (data: Comment[]) => (this.comments = data),
        (err: any) => console.log(err),
        () => console.log('Done getting user details.')
      );
  }
}
