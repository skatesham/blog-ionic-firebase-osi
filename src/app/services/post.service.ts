import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Post } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  create(post:Post) {
    return firebase
    .firestore()
    .collection('posts')
    .add(post);
  }

  getAll(post:Post) {
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

  update(post:Post) {
    return firebase
    .firestore()
    .collection('posts')
    .doc(post.id)
    .update(post);
  }

  patch(post) {
    return firebase.firestore()
    .collection('posts')
    .doc(post.id)
    .set(post, {merge: true});
  }

  remove(postId): Promise<any> {
    return firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .delete();
  }


}
