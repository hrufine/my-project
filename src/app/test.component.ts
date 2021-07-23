import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
 selector:"app-test",
 template:`<input [(ngModel)]="test" (input)="emitEvent($event)"><p>Test component</p> <p [textContent]="test"></p>`
})
export class TestComponent{
  @Input() test;
  @Output() nameChanged = new EventEmitter<string>();
  emitEvent($event){
    this.nameChanged.emit($event.target.value);
  }
}
