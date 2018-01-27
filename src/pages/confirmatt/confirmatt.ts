import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AttpagePage } from '../attpage/attpage';

/**
 * Generated class for the ConfirmattPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirmatt',
  templateUrl: 'confirmatt.html',
})
export class ConfirmattPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmattPage');
  }

  attPage() {
    this.navCtrl.push(AttpagePage);
  }

}
