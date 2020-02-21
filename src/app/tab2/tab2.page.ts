import { PostService } from './../services/post.service';
import { Component } from '@angular/core';
import { Post } from '../models/post-model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  post:Post = new Post();
  constructor(private postService:PostService, private alertCtrl: AlertController) {

  }

  createPost(){
    this.postService.create(this.post).then(() => {
      this.presentAlert();
    })
    this.post = new Post();
  }

  async presentAlert() {
    let opts = {
      title: 'Successfully created',
      subTitle: 'Successs!!!',
      buttons: ['Dismiss']
    }
    let alert = await this.alertCtrl.create(opts);
    alert.present();
  }

}
