import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl : 'search.component.html'
})
export class searchComponent implements OnInit {
  searchForm : FormGroup;
  state : any[] = [
    {s_id : 0, s_name : '<-- Select State -->'},
    {s_id : 1, s_name : 'Andra Pradesh'},
    {s_id : 2, s_name : 'Arunachal Pradesh'},
    {s_id : 3, s_name : 'Assam'},
    {s_id : 4, s_name : 'Bihar'},
    {s_id : 5, s_name : 'Chhattisgarh'},
    {s_id : 6, s_name : 'Goa'}
  ];
  journeyType: any[] = [
    { j_id: 0, j_name: '<-- Journey Type -->' },
    { j_id: 1, j_name: 'Adventure' },
    { j_id: 2, j_name: 'Nature' },
    { j_id: 3, j_name: 'Devotional' },
    { j_id: 4, j_name: 'Haunted' },
    { j_id: 5, j_name: 'Mounment' }
  ];
  constructor() { }
  ngOnInit() {
    this.searchForm = new FormGroup({
      State : new FormControl(),
      District : new FormControl(),
      journeyCategory : new FormControl()
    })
  }
  searchData(){
    alert("Work in progress");
  }
}