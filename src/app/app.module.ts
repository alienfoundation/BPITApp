import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StudentloginPage } from '../pages/studentlogin/studentlogin';
import { AttendencePage } from '../pages/attendence/attendence';
import { CanteenPage } from '../pages/canteen/canteen';
import { AttallPage } from '../pages/attall/attall';
import { TeachloginPage } from '../pages/teachlogin/teachlogin';
import { TeachattPage } from '../pages/teachatt/teachatt';
import { TeachseeallPage } from '../pages/teachseeall/teachseeall';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StudentloginPage,
    AttendencePage,
    CanteenPage,
    AttallPage,
    TeachloginPage,
    TeachattPage,
    TeachseeallPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StudentloginPage,
    AttendencePage,
    CanteenPage,
    AttallPage,
    TeachloginPage,
    TeachattPage,
    TeachseeallPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
