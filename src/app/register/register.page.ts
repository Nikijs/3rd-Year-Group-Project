import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {firestore } from 'firebase/app'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  password:string;

  slept:number;
  water:number;
  coffee:number;
  exercise:number;
  createdAt:number;

  constructor(public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public user: UserService,
    public afstore: AngularFirestore) { }

  ngOnInit() {
  }

  async registerAcc(){
    const { username, password } = this
    const slept = this.slept=0;
    const water = this.water=0;
    const coffee = this.coffee=0;
    const exercise = this.exercise=0;
    const createdAt = this.createdAt=0;
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username,password)
      console.log(res)

      this.afstore.doc('users/'+res.user.uid).set({
        username
      })
      
        this.user.setUser({
          username,
          uid: res.user.uid
        });

        const posts = this.afstore.doc('posts/'+this.user.getUID()).set({
          posts: firestore.FieldValue.arrayUnion({
            slept,
            water,
            coffee,
            exercise,
            createdAt
          })
        })

      this.popupMessage("Success", "Signed up as: "+username);
      this.router.navigateByUrl('/home'); //once signed up will bring back to login page
    } catch (err){
      console.log(err)
      this.popupMessage("Error", err);
    }
    
    //this.navCtrl.navigateRoot('/home');
  }
  goBack(){
    this.router.navigateByUrl('/home');
  }
    //popup error message method which takes header and message args
    async popupMessage(header: string, message: string){
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["Close"],
        cssClass: 'alertCustomCss'
      })
      await alert.present()
    }
}
