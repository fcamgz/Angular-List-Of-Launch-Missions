import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { flight } from '../flight';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missionDetails: any = [];

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService.getFlights().subscribe({
      next: (response) => {
        this.missionDetails.push(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => console.log(this.missionDetails[0]),
    });
  }
}
