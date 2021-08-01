import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LogService } from './log.service';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { map } from 'rxjs/operators';
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
  constructor(private logService: LogService,private http:HttpClient) {}
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === chosenList);
  }
  fetchCharacters(){
    this.http.get("https://swapi.dev/api/people").pipe(map((response:any)=>{
      const extractedChars = response.results;
      const chars = extractedChars.map((char)=>{
        return {
          name:char.name,
          side:''
        }
      })
      return chars;
    })).
    subscribe((data)=>{
    this.characters = data;
    this.charactersChanged.next()
    })
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
