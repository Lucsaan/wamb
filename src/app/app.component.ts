import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyB9jmjNp6TGh9WaEahZx2BeUVC6x1Ugz4k",
      authDomain: "wamb-d43a5.firebaseapp.com",
      databaseURL: "https://wamb-d43a5.firebaseio.com",
      projectId: "wamb-d43a5",
      storageBucket: "wamb-d43a5.appspot.com",
      messagingSenderId: "342202611139"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
      if (!user){
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

