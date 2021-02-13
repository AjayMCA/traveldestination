import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devotional-journey',
  templateUrl: './devotional-journey.component.html',
  styleUrls: ['./devotional-journey.component.css']
})
export class DevotionalJourneyComponent implements OnInit {

  constructor() { }

  devotionalJourney : any[] = [
    {s_id : 1, description : 'Kashi Vishvanath Mandir', village : 'Dashaswamedh Ghat', state : 'Uttar Pradesh', district : 'Varanasi'},
    {s_id : 2, description : 'Maa Vindhyawasini Mandir', village : 'Vindhyachal', state : 'Uttar Pradesh', district : 'Mirzapur'},
    {s_id : 3, description : 'Chitrakoot Mandir', village : 'Karvi', state : 'Uttar Pradesh', district : 'Chitrakoot'},
    {s_id : 4, description : 'Sheetala Maata Mandir', village : 'Adalpura', state : 'Uttar Pradesh', district : 'Varanasi'},
    {s_id : 5, description : 'Kali Khoh, Astbhuja Mandir', village : 'Vindhyachal', state : 'Uttar Pradesh', district : ' Mirzapur'},
    {s_id : 6, description : 'Vrindawan Mandir', village : 'Vrindavan', state : 'Uttar Pradesh', district : 'Mathura'},
    {s_id : 7, description : 'Baanke Bihari Mandir', village : 'Vindhyachal', state : 'Uttar Pradesh', district : 'Mathura'}
  ];

  ngOnInit() {
  }

}
