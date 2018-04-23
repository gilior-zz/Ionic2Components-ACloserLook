import {Component} from "@angular/core";

@Component({
  selector: 'touch-event',
  template: `
    <div padding class="gestures" (click)="onClk()"> click me</div>
    <div padding class="gestures" (tap)="onTp()"> tap me</div>
    <div padding class="gestures" (press)="onPress()"> long press me</div>
    <div padding class="gestures" (tap)="onTp()" (press)="onPress()"> long press me | tap me</div>
  `
})

export class TouchEventComponent {
  constructor() {
    console.log('TouchEventComponent loaded')
  }

  onClk() {
    console.log('i was onClk')
  }

  onTp() {
    console.log('i was onTp')
  }

  onPress() {
    console.log('i was onPress')
  }
}
