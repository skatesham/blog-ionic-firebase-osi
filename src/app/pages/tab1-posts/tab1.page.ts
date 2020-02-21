import { PostDTO } from './../../core/models/post-interface';
import { PostService } from './../../services/post.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../core/models/post-model';
import { IonInfiniteScroll, IonList } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  items = [];
  // SIZE_PAGE: number = 3;
  // FIRST_SIZE_PAGE: number = 5;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll()
    .then(result => { 
      result.forEach((doc) => {
        this.items.push(doc.data());
      });
    })
    .catch(err => console.log("ngOnInit :" + err));
  }

  // doInfinite(): Promise<any> {
  //   console.log('Begin async operation');

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       this.postService
  //       .getPage(this.items[this.items.length], this.SIZE_PAGE)
  //       .then(result => {
  //         result.docs.forEach(value => {
  //           this.items.push(value);
  //         });
  //         console.log('Async operation has ended');
  //         resolve();
  //       })
  //       .catch(err => console.log("doInfinite :" + err));;
  //     }, 500);
  //   });
  // }
}
