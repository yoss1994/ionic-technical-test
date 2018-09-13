import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: string;
  myValue: Boolean = false;
  readmore = false;

  constructor(public navCtrl: NavController, public http: Http) {
    /*************************************Get all the posts  *********************************************************/
    this.getPosts();
  }
  /*************************************The read more button function  *************************************************/

  Readmore() {
    /****************************readmore gets true if the button is clicked  ***************************************/
    this.readmore = true;
  }


  /***********************************API GET all the posts  *********************************************************/
  getPosts() {
    this.http.get(' https://jsonplaceholder.typicode.com/posts').map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(data);
      },
        err => {
          console.log("err!");
        }
      );

  }
  /***********************************API GET post by ID  *********************************************************/

  getPost(id) {
    this.http.get(' https://jsonplaceholder.typicode.com/post/' + id).map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(data);
      },
        err => {
          console.log("err!");
        }
      );
  }



}
