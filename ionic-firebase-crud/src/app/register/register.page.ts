import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  password:string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  registerAcc(){
    console.log("Username: " + this.username + ", Password: " + this.password);
    //this.navCtrl.navigateRoot('/home');
  }
  goBack(){
    this.navCtrl.navigateRoot('/home');
  }
  
}
