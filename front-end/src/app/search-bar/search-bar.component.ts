import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor (private service:SharedService, private dataService: DataService) { }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(){
    this.notifyForChange();
  }

  notifyForChange() {
    this.dataService.notifyAboutChange();
  }

  play(url: any) {
    this.addNewItem(url.value);
    this.service.addHistory({Url:url.value}).subscribe(res=>{
      alert(res.toString());})
    this.notifyForChange();
  }
  bookmark(url: any) {
    this.service.addBookmarks({Url:url.value}).subscribe(res=>{
      alert(res.toString());})
    this.notifyForChange();
  }
}
