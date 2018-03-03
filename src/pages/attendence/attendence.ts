import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimetableService } from '../../app/services/timetable.service';
import { HttpModule } from '@angular/http';

/**
 * Generated class for the AttendencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attendence',
  templateUrl: 'attendence.html',
})
export class AttendencePage {

  enrollment:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public timeTable: TimetableService) {
    console.log(navParams.data.enrollment);
    this.enrollment = navParams.data.enrollment;
  }

  course:string = 'CSE';
  year:number = 2;

  public attendance = {
    'COA': {
      'present' : 0,
      'absent' : 0,
      'percentage' : 93,
      'color' : 'rgba(11,162,11,0.95)',
      'shadowcolor' : '0 0 9px rgba(11,162,11,0.7)'
    },
    'CS': {
      'present' : 0,
      'absent' : 0,
      'percentage' : 74,
      'color' : 'rgba(236,153,4,0.95)',
      'shadowcolor' : '0 0 9px rgba(236,153,4,0.7)'
    },
    'DBMS': {
      'present' : 0,
      'absent' : 0,
      'percentage' : 65,
      'color' : 'rgba(255,0,0,0.95)',
      'shadowcolor' : '0 0 9px rgba(255,0,0,0.7)'
    }
  };
  public subjects = ['DBMS', 'CS', 'COA'];
  public present;
  public absent;
  public percent;
  public total;
  public bgcolor;
  public shadowcolor;

  timetableData:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendencePage');
  }
temp:any;
  getTimetable() {
    this.timeTable.getData(this.year, this.course).subscribe(data => {
      this.timetableData = data;
      console.log(this.timetableData);
      this.setAttendance();
    });
  }

  setAttendance() {
    this.subjects.forEach(sub => {
      this.temp = this.timetableData._2.CSE.A[sub].last;
      this.total = this.timetableData._2.CSE.A[sub].total;
      this.present = this.timetableData._2.CSE.A[sub][this.temp].attendance.enrollment_no[this.enrollment];
      this.absent = this.total-this.timetableData._2.CSE.A[sub][this.temp].attendance.enrollment_no[this.enrollment];
      this.percent = Math.round((this.present*100)/this.total);
      console.log('subject; ', sub, 'present: ',this.present,' absent: ',this.absent,' percentage: ',this.percent);
      if(this.percent >= 75) {
        this.bgcolor = 'rgba(11,162,11,0.95)';
        this.shadowcolor = '0 0 9px rgba(11,162,11,0.7)';
      } else if (this.percent >=70 && this.percent<75) {
        this.bgcolor = 'rgba(236,153,4,0.95)';
        this.shadowcolor = '0 0 9px rgba(236,153,4,0.7)';
      } else {
        this.bgcolor = 'rgba(255,0,0,0.95)';
        this.shadowcolor = '0 0 9px rgba(255,0,0,0.7)';
      }
      this.attendance[sub] = {
        'present' : this.present,
        'absent' : this.absent,
        'percentage' : this.percent,
        'bgcolor' : this.bgcolor,
        'shadowcolor' : this.shadowcolor

      }
    });
    console.log('attandenc obj');
    console.log(this.attendance);
  }

  changeDay(){
    console.log("day change");
  }

}



// checkNetwork=()=> {
//   this.platform.ready().then(() => {
//       var networkState = navigator.connection.type;
//       var states = {};
//       states[Connection.UNKNOWN]  = 'Unknown connection';
//       states[Connection.ETHERNET] = 'Ethernet connection';
//       states[Connection.WIFI]     = 'WiFi connection';
//       states[Connection.CELL_2G]  = 'Cell 2G connection';
//       states[Connection.CELL_3G]  = 'Cell 3G connection';
//       states[Connection.CELL_4G]  = 'Cell 4G connection';
//       states[Connection.CELL]     = 'Cell generic connection';
//       states[Connection.NONE]     = 'No network connection';

//       if(states[networkState]==='No network connection'){
//         this.global_api.showAlert("No internet access!");
//       }

//   });
// };
