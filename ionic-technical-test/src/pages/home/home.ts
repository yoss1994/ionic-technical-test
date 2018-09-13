import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PostPage } from '../post/post';
import { PostServiceProvider } from '../../providers/post-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Post = PostPage;
  myValue: Boolean = false;
  readmore = false;
  postsList = [];

  constructor(public navCtrl: NavController, public http: Http, private PostService: PostServiceProvider) {

    /*************************************Get all the posts  *********************************************************/
    this.getPosts();
  }

  /*************************************The read more button function  ***********************************************/
  Readmore() {
    /****************************readmore gets true if the button is clicked  ****************************************/
    this.readmore = true;
  }

  /***********************************API GET all the posts  *********************************************************/
  getPosts() {
    this.PostService.getPosts().subscribe(posts => {
      this.postsList = posts;
      console.log(posts);
    },
      err => {
        console.log("err!");
      }
    );
  }

  /***********************************Push the Id to the PostPage  *************************************************/
  goTo(id) {
    id = id;
    this.navCtrl.push(PostPage, {
      data: id
    });
  }

}
