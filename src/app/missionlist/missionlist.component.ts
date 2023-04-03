import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.launches = data;
    });
  }
}