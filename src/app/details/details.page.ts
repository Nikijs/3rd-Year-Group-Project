import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  username:string;
  constructor(public afAuth: AngularFireAuth,
     public router: Router,
     public afstore: AngularFirestore,
     public user: UserService) { }

     
  ngOnInit() {
    this.username = this.user.getUsername();
  }
  
}
