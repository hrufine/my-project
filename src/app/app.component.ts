import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';
import { StarWarsService } from './star-wars.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private swService:StarWarsService){}
  number = 0;
  title = 'my-project';
  ngOnInit(): void {
    this.swService.fetchCharacters();
  }
  onClick(){
    this.number = random(1,10);
  }
}
