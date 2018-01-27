import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TdateattPage } from '../tdateatt/tdateatt';

/**
 * Generated class for the AllclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-allclass',
  templateUrl: 'allclass.html',
})
export class AllclassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllclassPage');
  }

  tdateattPage() {
    this.navCtrl.push(TdateattPage)
  }

}
