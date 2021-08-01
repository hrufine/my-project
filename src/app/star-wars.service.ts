import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  charactersChanged = new Subject<void>();
  private characters = [
    {
      name: 'Jishnu',
      side: '',
    },
    {
      name: 'Vishnu',
      side: '',
    },
  ];
  constructor(private logService: LogService) {}
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === chosenList);
  }
  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => char.name == charInfo.name);
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog(
      `Changed side ${charInfo.name},new side ${charInfo.side}`
    );
    this.charactersChanged.next();
  }
  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => char.name == name);
    if(pos !== -1){
      return;
    }
    const newChar = { name, side };
    this.characters.push(newChar);
  }

}
