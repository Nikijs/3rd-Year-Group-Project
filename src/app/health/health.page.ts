import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {firestore } from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth';

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

  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {
  }
  accept(){
    const slept = this.slept;
    const water = this.water;
    const coffee = this.coffee;
    const exercise = this.exercise;

    const posts = this.afstore.doc('posts/'+this.user.getUID()).set({
    posts: firestore.FieldValue.arrayUnion({
      slept,
      water,
      coffee,
      exercise
    })
  })
  
  }
  goBack(){
    this.router.navigateByUrl('/mainpage');
  }
}
