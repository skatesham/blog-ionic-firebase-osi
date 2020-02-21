import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Post } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  create(post: Post) {
    return firebase
      .firestore()
      .collection('posts')
      .doc(post.getId()).set(post.getDTO());
  }

  getAll(post: Post) {
    return firebase
      .firestore()
      .collection('posts')
      .get();
  }

  getById(postId: string) {
    return firebase
      .firestore()
      .collection('posts')
      .doc(postId).get()
  }

  update(post: Post) {
    return firebase
      .firestore()
      .collection('posts')
      .doc(post.getId())
      .update(post.getDTO());
  }

  patch(post: Post) {
    return firebase.firestore()
      .collection('posts')
      .doc(post.getId())
      .set(post.getDTO(), { merge: true });
  }

  remove(postId: string): Promise<any> {
    return firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .delete();
  }


}
