import { Component } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public afAuth:AngularFireAuth) { }

  async login(){
      const { username, password } = this
      try{
          const res = await this.afAuth.auth.signInWithEmailAndPassword(username,password)
      } catch(err){
          console.log(err);
      }
    console.log("Username: " + this.username + ", Password: " + this.password);
  }
  register(){
    this.navCtrl.navigateRoot('/register');
  }
}
