import {Component, OnInit} from '@angular/core';
import {LandingService} from '../services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  participants: Array<any> = [];
  message: string;

  constructor(
    private landingService: LandingService,
  ) {
  }

  ngOnInit(): void {
    this.participants = this.landingService.loadData();
    if (!this.participants) {
      this.landingService.getLadingData().subscribe(data => {
        this.participants = data;
      });
    }
  }

  update(voted: boolean): void {
    this.landingService.saveData(this.participants);
    if (voted) {
      this.message = 'Thank you for voting!';
      setTimeout(() => {
        this.message = '';
      }, 1500);
    }
  }

}
