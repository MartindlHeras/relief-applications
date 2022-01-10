import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { BOOKMARKS } from '../bookmarks';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  bookmarks=BOOKMARKS;
  bookmarksVisible=false;
  selectedBookmark?: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  showHide() {
    if (this.bookmarksVisible) this.bookmarksVisible = false;
    else this.bookmarksVisible = true;
  }

  onSelect(bookmark: string) {
    this.selectedBookmark = bookmark;
    this.addNewItem(bookmark);
  }
}
