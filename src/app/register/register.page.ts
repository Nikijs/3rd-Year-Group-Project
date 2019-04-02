import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  password:string;

  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async registerAcc(){
    const { username, password } = this
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username,password)
      console.log(res)
    } catch (err){
      console.log(err)
    }
    
    //this.navCtrl.navigateRoot('/home');
  }
  goBack(){
    this.navCtrl.navigateRoot('/home');
  }
  
}
