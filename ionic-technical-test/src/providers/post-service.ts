import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PostServiceProvider Provider');
  }

  /**************************** GET all posts *****************************/
  getPosts() {

    return this.http.get(' https://jsonplaceholder.typicode.com/posts')
      .map((res) => res.json());
  }

  /**************************** GET a single post by ID *******************/
  getPost(id) {

    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .map(res => res.json());
  }

  /**************************** GET post comments *************************/
  getPostComments(id) {

    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .map(res => res.json());
  }
}
