import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nature-journey',
  templateUrl: './nature-journey.component.html',
  styleUrls: ['./nature-journey.component.css']
})
export class NatureJourneyComponent implements OnInit {

  constructor() { }
  naturalJourney : any[] = [
    {s_id : 1, description : 'Gokak Falls', state : 'Karnataka', district : 'Belgavi'},
    {s_id : 2, description : 'Surla Waterfalls', state : 'Karnataka', district : 'Surla'},
    {s_id : 3, description : 'Honnavar', state : 'Karnataka', district : 'Karwar'},
    {s_id : 4, description : 'Gopalaswamy hills', state : 'Karnataka', district : 'Gundlupete Taluk'},
    {s_id : 5, description : 'Kudremukh', state : 'Karnataka', district : ' Mudigere Taluk'},
    {s_id : 6, description : 'Jog falls', state : 'Karnataka', district : 'Sagara'},
    {s_id : 7, description : 'Coorg', state : 'Karnataka', district : 'Kodagu'}
  ];
  ngOnInit() {
  }

}
