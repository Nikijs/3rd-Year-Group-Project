import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {firestore } from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  userDetails

  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {
    this.getDetails();
  }


  goBack(){
    this.router.navigateByUrl('/mainpage');
  }

  getDetails(){
    const posts = this.afstore.collection('posts').doc(this.user.getUID());
    posts.get().subscribe((snapshot) => {
     console.log('Document data:', snapshot.data().posts);
     this.userDetails = snapshot.data();
     });
}
}
