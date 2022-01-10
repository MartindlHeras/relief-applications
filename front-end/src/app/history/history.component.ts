import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HISTORY } from '../history';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  history=HISTORY;
  selectedH?: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  onSelect(h: string) {
    this.selectedH = h;
    this.addNewItem(h);
  }
}
