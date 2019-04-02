import * as firebase from 'firebase';

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

var config = {
  apiKey: "AIzaSyAjK3AL7oJ-2sGf1u3tLlq8ebKLXqdLQwM",
  authDomain: "healthappid.firebaseapp.com",
  databaseURL: "https://healthappid.firebaseio.com",
  projectId: "healthappid",
  storageBucket: "healthappid.appspot.com",
  messagingSenderId: "677816387333"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
