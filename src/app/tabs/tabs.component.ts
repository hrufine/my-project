import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {
      name:'Jishnu',side:''
    },
    {
      name:'Vishnu',side:''
    }
  ];
  chosenList = 'all';
  constructor() { }

  ngOnInit(): void {
  }
  onChoose(side){
    this.chosenList = side;
  }
  getCharacters(){
    if(this.chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char)=>char.side === this.chosenList)
  }
  onSideChosen(charInfo){
      const pos = this.characters.findIndex((char)=>char.name == charInfo.name);
      this.characters[pos].side = charInfo.side;
  }

}
