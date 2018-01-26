import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeachattPage } from '../teachatt/teachatt';

/**
 * Generated class for the TeachloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teachlogin',
  templateUrl: 'teachlogin.html',
})
export class TeachloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachloginPage');
  }

  teachattPage() {
    this.navCtrl.setRoot(TeachattPage);
  }

}
