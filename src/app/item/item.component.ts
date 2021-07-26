import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name:string,side:string}>();
  constructor() { }

  ngOnInit(): void {
  }
  onAssign(side){
    //Below directly changing parent since objects are referenced.
    //Commented that line
    // this.character.side = side;
    //One way of implementaion with emittor but it is not the best way
    this.sideAssigned.emit({name:this.character.name,side:side});
  }

}
