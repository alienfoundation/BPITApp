import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditattPage } from '../editatt/editatt';

/**
 * Generated class for the TdateattPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tdateatt',
  templateUrl: 'tdateatt.html',
})
export class TdateattPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TdateattPage');
  }

  editattPage() {
    this.navCtrl.push(EditattPage);
  }

}
