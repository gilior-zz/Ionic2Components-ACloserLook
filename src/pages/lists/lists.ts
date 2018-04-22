import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, reorderArray} from 'ionic-angular';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

 public items = ['Apples', 'Bananas', 'Berries'];

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
  }

}
