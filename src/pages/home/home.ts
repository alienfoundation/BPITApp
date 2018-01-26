import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentloginPage } from '../studentlogin/studentlogin';
import { TeachloginPage } from '../teachlogin/teachlogin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bpitlogo:string = "./assets/imgs/logo.png";

  constructor(public navCtrl: NavController) {
    
  }

  studentLogin() {
    this.navCtrl.push(StudentloginPage);
  }

  teachLogin() {
    this.navCtrl.push(TeachloginPage);
  }

}
