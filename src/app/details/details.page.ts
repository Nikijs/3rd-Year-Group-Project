import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {firestore } from 'firebase/app'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  username:string;
  height:string;
  weight:string;
  age:string;
  gender:string;
  userDetails; //container for users -> userID -> details in firebase

  
  constructor(public afAuth: AngularFireAuth,
     public router: Router,
     public afstore: AngularFirestore,
     public user: UserService) {

       const posts = afstore.collection('users').doc(this.user.getUID());
      posts.get().subscribe((snapshot) => {
        console.debug('Document data:', snapshot.data().details);
        this.userDetails = snapshot.data();
      
        
     });
     
     }
    
     
  ngOnInit() {
    var email = this.user.getUsername().split("@");
    this.username = email[0];
    //this.getDetails();
  }
  
  goBack(){
    this.router.navigateByUrl('/mainpage');
  }

  saveDetails(){
    console.log(this.height, this.weight, this.age, this.gender);
    const height = this.height;
    const weight = this.weight;
    const age = this.age;
    const gender = this.gender;
    //updates the details container properties for the user
    this.afstore.doc('users/'+this.user.getUID()).update({
      details: {
          height,
          weight,
          age,
          gender
      }
    })
    this.getDetails(); //updates on save
  }
  //gets user posts and subscribes to the 
  getDetails(){
    const posts = this.afstore.collection('users').doc(this.user.getUID());
    posts.get().subscribe((snapshot) => {
     console.log('Document data:', snapshot.data().details);
     this.userDetails = snapshot.data();
     });
  }
}
