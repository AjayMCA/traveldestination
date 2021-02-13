import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haunted-journey',
  templateUrl: './haunted-journey.component.html',
  styleUrls: ['./haunted-journey.component.css']
})
export class HauntedJourneyComponent implements OnInit {

  constructor() { }

  hauntedJourney : any[] = [
    {s_id : 1, description : 'Bhangarth Fort', state : 'Rajasthan', district : 'Alwar'},
    {s_id : 2, description : 'Kasara Ghat', state : 'Maharastra', district : 'CMumbai Nashik Highway'},
    {s_id : 3, description : 'Blue Cross Road', state : 'Tamilnadu', district : 'Chennai'},
    {s_id : 4, description : 'Kashedi Ghat', state : 'Maharastra', district : 'Mumbai Goa Highway'},
    {s_id : 5, description : 'Delhi Cantonment Road', state : 'New Delhi', district : 'New Delhi'},
    {s_id : 6, description : 'Igorchem Road', state : 'Goa', district : 'Goa'},
    {s_id : 7, description : 'East Coast Road', state : 'Tamilnadu', district : 'Chennai'}
  ];

  ngOnInit() {
  }

}
