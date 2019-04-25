import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import {firestore } from 'firebase/app'
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {

  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigateByUrl('/mainpage');
  }
}
