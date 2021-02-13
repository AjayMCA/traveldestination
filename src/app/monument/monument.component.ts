import { Component } from '@angular/core';
@Component({
  selector: 'app-monument',
  templateUrl : 'monument.component.html'
})
export class monumentComponent{
  constructor() {
    
  }
  monument : any[] = [
    {s_id : 1, description : 'Red Fort', state : 'New Delhi', district : 'New Delhi'},
    {s_id : 2, description : 'Agra Fort', state : 'Uttar Pradesh', district : 'Agra'},
    {s_id : 3, description : 'Statue of Unity', state : 'Gujarat', district : 'Kevadia'},
    {s_id : 4, description : 'Tajmahal', state : 'Uttar Pradesh', district : 'Agra'},
    {s_id : 5, description : 'India Gate', state : 'New Delhi', district : 'New Delhi'},
    {s_id : 6, description : 'Qutub Minar', state : 'New Delhi', district : 'New Delhi'},
    {s_id : 7, description : 'Charminar', state : 'Andhra Pradesh', district : 'Hyderabad'}
  ];
}