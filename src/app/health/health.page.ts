import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {firestore } from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
  
  slept:string;
  water:string;
  coffee:string;
  exercise:string;
  createdAt:Date;

  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
    public alert: AlertController) { }

  ngOnInit() {
    this.getDate();
  }
  accept(){
    const slept = this.slept;
    const water = this.water;
    const coffee = this.coffee;
    const exercise = this.exercise;
    const createdAt = this.createdAt;
    
    const posts = this.afstore.doc('posts/'+this.user.getUID()).update({
    posts: firestore.FieldValue.arrayUnion({
      slept,
      water,
      coffee,
      exercise,
      createdAt
    })
  })
  this.popupMessage("Success", "Updates pushed to logs page.");
  }
  goBack(){
    this.router.navigateByUrl('/mainpage');
  }

  getDate(){
    var time = new Date().getTime();
    this.createdAt = new Date(time);
    console.log(this.createdAt.toString());
  }
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
