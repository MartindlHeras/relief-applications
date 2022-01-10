import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HISTORY } from '../history';
import { BOOKMARKS } from '../bookmarks';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  history = HISTORY;
  bookmarks = BOOKMARKS;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  play(url: any) { 
    this.history.push(url.value);
    this.addNewItem(url.value);
  }
  bookmark(url: any) {
    this.bookmarks.push(url.value);
  }
}
