import { Component } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController,
     public afAuth:AngularFireAuth,
     public alert: AlertController,
     public router: Router,
     public user: UserService) { }

  async login(){
      const { username, password } = this //just so you dont have to do this.
      try{
          const res = await this.afAuth.auth.signInWithEmailAndPassword(username,password)

          if(res.user){
            this.user.setUser({
              username,
              uid: res.user.uid
            });

          }
          this.popupMessage("Welcome", "Logged in as "+username) 
          this.router.navigateByUrl('/mainpage');  //navigated to the main page when logged in
      } catch(err){
          console.log(err);
          this.popupMessage("Error",err.message); //displays the auth error
      }
  }

  register(){
    this.router.navigateByUrl('/register');
  }
  //popup error message method which takes header and message args
  async popupMessage(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Close"]
    })
    await alert.present()
  }
}
