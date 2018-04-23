import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeGamePage } from './code-game';
import {BtnsComponent} from "../../components/btn.component";

@NgModule({
  declarations: [
    CodeGamePage,
    BtnsComponent
  ],
  imports: [
    IonicPageModule.forChild(CodeGamePage),
  ],
})
export class CodeGamePageModule {}
