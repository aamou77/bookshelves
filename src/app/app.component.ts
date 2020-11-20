import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAOK5fxMkZxZqu6EwmlZEJgI_efa4Ty3V8",
      authDomain: "bookshelves-a0deb.firebaseapp.com",
      databaseURL: "https://bookshelves-a0deb.firebaseio.com",
      projectId: "bookshelves-a0deb",
      storageBucket: "bookshelves-a0deb.appspot.com",
      messagingSenderId: "76887412632",
      appId: "1:76887412632:web:e14ae6a68423e6ab0d65ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
