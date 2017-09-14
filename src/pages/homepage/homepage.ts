import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'homepage.html'
})
export class HomeLandPage{

  constructor(public navCtrl: NavController) {
  
  }
  
  showChatBox() {
    this.navCtrl.setRoot(HomePage);
  }

}
