import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CodeGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-game',
  templateUrl: 'code-game.html',
})
export class CodeGamePage {
  tapCounter: number=0;
  pressCounter: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  get won(): boolean {
    return this.tapCounter == 2 && this.pressCounter == 4;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodeGamePage');
  }

  resetAll() {
    this.pressCounter = this.tapCounter = 0;
  }

  resetTaps() {
    this.tapCounter = 0;
  }

  resetPress() {
    this.pressCounter = 0;
  }
}
