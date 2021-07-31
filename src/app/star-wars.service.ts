import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private characters = [
    {
      name:'Jishnu',side:''
    },
    {
      name:'Vishnu',side:''
    }
  ];
  getCharacters(chosenList){
    if(chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char)=>char.side === chosenList)
  }
  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char)=>char.name == charInfo.name);
    this.characters[pos].side = charInfo.side;
}
  constructor() { }
}
