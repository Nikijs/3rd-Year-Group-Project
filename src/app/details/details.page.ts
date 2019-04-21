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

      var cityRef = afstore.collection('users').doc(this.user.getUID());
      var detail = cityRef.get().subscribe(doc => {
          console.log('Document data:', doc.data());
          this.userDetails = doc.data();
        
      })
      
     }
    
     
  ngOnInit() {
    var email = this.user.getUsername().split("@");
    this.username = email[0];
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

    this.afstore.doc('users/'+this.user.getUID()).update({
      details: {
          height,
          weight,
          age,
          gender

      }
    })
  }
  getDetails(){
      console.log(this.userDetails);
  }
}
