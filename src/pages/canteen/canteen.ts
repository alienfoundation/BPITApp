import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the CanteenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-canteen',
  templateUrl: 'canteen.html',
})
export class CanteenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanteenPage');
  }

  viewMenu() {
    console.log('photoviwe m hu');
    this.photoViewer.show('./assets/imgs/bpit1.jpg');
  }
}
