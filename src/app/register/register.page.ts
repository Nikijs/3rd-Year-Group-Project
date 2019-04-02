import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  password:string;

  constructor(public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public alert: AlertController) { }

  ngOnInit() {
  }

  async registerAcc(){
    const { username, password } = this
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username,password)
      console.log(res)
      this.popupMessage("Success", "Signed up as: "+username);
      this.navCtrl.navigateRoot('/home'); //once signed up will bring back to login page
    } catch (err){
      console.log(err)
      this.popupMessage("Error", err);
    }
    
    //this.navCtrl.navigateRoot('/home');
  }
  goBack(){
    this.navCtrl.navigateRoot('/home');
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
