import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AttendencePage } from '../attendence/attendence';

/**
 * Generated class for the StudentloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-studentlogin',
  templateUrl: 'studentlogin.html',
})
export class StudentloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentloginPage');
  }

  attendencePage() {
    this.navCtrl.setRoot(AttendencePage);
  }

}
