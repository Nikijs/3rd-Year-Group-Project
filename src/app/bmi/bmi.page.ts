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

  height:number;
  weight:number;
  age:number;
  gender:string;
  healtStatus: string;
  
  
  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {
  }

  calculateBmi(){
   var bmi = (this.weight)/(this.height/100*this.height/100);
   bmi = Math.round(bmi);

    if(bmi < 18.5){
     this.healtStatus = "You are underweight. BMI = " + bmi;
    }
    else if(bmi > 18.5 && bmi < 25){
      this.healtStatus = "You have a normal weight. BMI =" + bmi;
    }
    else if(bmi > 30){
	    this.healtStatus = "You are overweight. BMI = " + bmi;
    }
    else{
	    this.healtStatus = "Error when calculating BMI." + bmi;
    }
    console.log(bmi , this.weight, this.height, this.age);
  }
  
  goBack(){
    this.router.navigateByUrl('/mainpage');
  }
}
