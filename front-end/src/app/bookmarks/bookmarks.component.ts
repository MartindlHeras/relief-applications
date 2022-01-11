import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  bookmarks:any=[];
  bookmarksVisible=false;
  selectedBookmark?: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor (private service:SharedService, private dataService: DataService) { }

  notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
    this.refreshBookmarks();
  });

  ngOnInit() {
    this.refreshBookmarks();
  }

  refreshBookmarks(){
    this.service.getBookmarksList().subscribe(data=>{this.bookmarks=data;
    });
  }

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
