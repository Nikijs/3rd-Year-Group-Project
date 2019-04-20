import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }
  
  stepCount(){
    this.router.navigateByUrl('/steps');

    console.log("test")
  }
  userDetails(){
    this.router.navigateByUrl('/details');
  }
}
