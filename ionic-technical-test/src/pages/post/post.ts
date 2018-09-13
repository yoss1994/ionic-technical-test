import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post = [];
  id: string;
  CommentsNum = 0;
  postsList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private PostService: PostServiceProvider) {

    /***********************************Get the ID of the post from HomePage ***********************************/
    this.id = navParams.get('data');
    this.getPost(this.id);
    console.log("id" + this.id);

  }


  /***********************************Get all the comments ****************************************************/
  getPostComments(id) {
    this.PostService.getPostComments(id).subscribe(posts => {
      this.postsList = posts;
      console.log(posts);
    },
      err => {
        console.log("err!");
      }
    );
  }

  /*************************************GetPost By ID ********************************************************/
  getPost(id) {

    this.PostService.getPost(id).subscribe(post => {
      this.post = post;
      console.log(post);
    },
      err => {
        console.log("err!");
      }
    );
  };

}
