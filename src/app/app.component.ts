import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  firebaseConfig = {
    apiKey: "AIzaSyDeZ1zpMUNu0MgJVytN-4Lv1MKkHKWWJc0",
    authDomain: "blog-osi.firebaseapp.com",
    databaseURL: "https://blog-osi.firebaseio.com",
    projectId: "blog-osi",
    storageBucket: "blog-osi.appspot.com",
    messagingSenderId: "194832492154",
    appId: "1:194832492154:web:c11b7542a1108465363dc3",
    measurementId: "G-0JV2M8JLE5"
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    firebase.initializeApp(this.firebaseConfig);
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
