import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[];
  public searchText: string;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService
      .getAllPosts()
      .subscribe(
        (data: Post[]) => {
          this.posts = data;
          localStorage.setItem('posts', JSON.stringify(data));
        },
        (err: any) => console.log(err),
        () => console.log('All done getting posts.')
      );
  }

}
