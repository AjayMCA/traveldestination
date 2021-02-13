import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-journey',
  templateUrl: './adventure-journey.component.html',
  styleUrls: ['./adventure-journey.component.css']
})
export class AdventureJourneyComponent implements OnInit {
  router: any;

  constructor() { }

  adventureJourney : any[] = [
    {s_id : 1, description : 'Tanda Fall', state : 'Uttar Pradesh', district : 'Mirzapur',AboutPlace : 'This is cover the full lush green area'},
    {s_id : 2, description : 'Lakhaniya Dari', state : 'Uttar Pradesh', district : 'Chanduli',AboutPlace : 'This is cover the full lush green area'},
    {s_id : 3, description : 'Lateef Shah', state : 'Uttar Pradesh', district : 'Chanduli',AboutPlace : 'This is cover the full lush green area'},
    {s_id : 4, description : 'Siddanath Dari', state : 'Uttar Pradesh', district : 'Chunar',AboutPlace : 'This is cover the full lush green area'},
    {s_id : 5, description : 'Windom Fall', state : 'Uttar Pradesh', district : 'Mirzapur',AboutPlace : 'This is cover the full lush green area'},
    {s_id : 6, description : 'Sirsi Fall', state : 'Uttar Pradesh', district : 'Mirzapur',AboutPlace : 'This is cover the full lush green area'},
    {s_id : 7, description : 'Bakhariya Fall', state : 'Uttar Pradesh', district : 'Mirzapur',AboutPlace : 'This is cover the full lush green area'}
  ];

  ngOnInit() {
  }
  showTab(msg:any) {
    console.log(msg);
  }

}
