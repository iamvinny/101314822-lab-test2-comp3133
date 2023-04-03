import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  @Input() selectedYear: number = 0;
  launches: any[] = [];
  apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getLaunches(); // get all launches when the component is initialized
  }

  ngOnChanges(): void {
    if (this.selectedYear === 0) {
      this.getLaunches();
    } else {
      this.getLaunchesByYear(this.selectedYear);
    }
  }

  getLaunches() {
    this.http.get<any[]>(`https://api.spacexdata.com/v3/launches`)
      .subscribe(data => {
        this.launches = data;
      });
  }

  getLaunchesByYear(year: number) {
    this.http.get<any[]>(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
      .subscribe(data => {
        this.launches = data;
      });
  }

  showMissionDetails(flightNumber: string) {
    this.router.navigate(['/missiondetails', flightNumber]);
  }

}