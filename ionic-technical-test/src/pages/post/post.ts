import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post = [];
  id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private PostService: PostServiceProvider) {

    /***********************************Get the ID of the post from HomePage *********************************************/
    this.id = navParams.get('data');
    this.getPost(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  /***********************************GetPost By ID *********************************************/
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
