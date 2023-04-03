import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  mission: any = {};

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('myModal') modal!: ElementRef;

  ngOnInit(): void {
    this.getMissionDetails();
  }

  getMissionDetails() {
    const flightNumber = this.route.snapshot.paramMap.get('flightNumber');
    this.http.get<any>(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
      .subscribe(data => {
        this.mission = data;
        this.showModal();
      });
  }

  showModal() {
    const modal = this.modal.nativeElement as HTMLElement;
    modal.classList.add('show');
  }

  closeModal() {
    const modal = this.modal.nativeElement as HTMLElement;
    modal.classList.remove('show');
    this.router.navigate(['/']);
  }

}
