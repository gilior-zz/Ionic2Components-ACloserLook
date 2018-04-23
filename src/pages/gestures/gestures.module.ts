import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GesturesPage } from './gestures';
import {TouchEventComponent} from "../../components/touch-event.component";

@NgModule({
  declarations: [
    GesturesPage,
    TouchEventComponent
  ],
  imports: [
    IonicPageModule.forChild(GesturesPage),
  ],
})
export class GesturesPageModule {}
