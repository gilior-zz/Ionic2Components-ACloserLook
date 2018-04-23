import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'btns-game',
  template: `
    <ion-row>
      <ion-col>
        <button ion-button small color="danger" (click)="onClck(0)" small >reset all</button>
        <button ion-button small color="danger" (click)="onClck(1)" small >reset taps</button>
        <button ion-button small color="danger" (click)="onClck(2)" small >reset presses</button>

      </ion-col>
    </ion-row>
      `
})

export class BtnsComponent {
  @Output() onAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() onTaps: EventEmitter<void> = new EventEmitter<void>();
  @Output() onPress: EventEmitter<void> = new EventEmitter<void>();

  onClck(val: number) {
    switch (val) {
      case   0:
        this.onAll.emit();
        return;
      case   1:
        this.onTaps.emit();
        return;
      case   2:
        this.onPress.emit();
        return;
    }
  }
}
