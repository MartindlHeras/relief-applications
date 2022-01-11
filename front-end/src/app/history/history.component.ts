import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  history:any=[];
  selectedH?: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor (private service:SharedService, private dataService: DataService) { }

  notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
    this.refreshHistory();
  });

  ngOnInit() {
    this.refreshHistory();
  }

  refreshHistory() {
    this.service.getHistoryList().subscribe(data=>{this.history=data;
    });
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  onSelect(h: string) {
    this.selectedH = h;
    this.addNewItem(h);
  }
}
