import { Component } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) { }

  login(){
    console.log("Username: " + this.username + ", Password: " + this.password);
  }
  register(){
    this.navCtrl.navigateRoot('/register');
  }
}
