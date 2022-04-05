import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  flight: any;
  constructor(private route: ActivatedRoute, private fetch: FetchService) {}

  ngOnInit() {
    this.fetch.getFlight(this.route.snapshot.paramMap.get('id') as any).subscribe({
      next: (response) => {
        this.flight = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log(this.flight)
    })
  }
}
