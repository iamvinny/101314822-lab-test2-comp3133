import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101314822-lab-test2-comp3133';
  selectedYear: number = 0;

  onYearSelected(year: number) {
    this.selectedYear = year;
  }
}
