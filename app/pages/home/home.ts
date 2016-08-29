import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

      /*setTimeout(() => {
          $("#myCarousel").swiperight(function() {
              //$(this).carousel('prev');
          });
          $("#myCarousel").swipeleft(function() {
              //$(this).carousel('next');
              alert(9);
          });
      }, 2000);*/

  }
}
