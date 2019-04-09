import { Component, OnInit } from '@angular/core';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

  constructor(private stepcounter: Stepcounter) { }

  ngOnInit() {
    
    //https://ionicframework.com/docs/native/stepcounter
    let startingOffset = 0;
this.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), 
onFailure => console.log('stepcounter-start error', onFailure));

this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), 
onFailure => console.log('stepcounter-history error', onFailure));
  }

}
