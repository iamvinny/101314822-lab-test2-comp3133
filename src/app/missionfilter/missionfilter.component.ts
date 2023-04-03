import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {

  @Output() onYearSelected: EventEmitter<number> = new EventEmitter();
  
  selectedYear: number = 0;
  years: number[] = [];
  launches: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    for (let year = 2006; year <= 2023; year++) {
      this.years.push(year);
    }
  }

  getLaunchesByYear(year: number) {
    this.onYearSelected.emit(year);
  }

}