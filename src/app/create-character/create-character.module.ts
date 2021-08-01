//this is for example

import { NgModule } from '@angular/core';
import { CreateCharacterComponent } from '../create-character/create-character.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CreateCharacterComponent],
  imports:[FormsModule,CommonModule,RouterModule.forChild([
    {
      path: '',
      component: CreateCharacterComponent,
    },
  ])]
})
export class CreateCharacterModule {}
