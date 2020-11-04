import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Celebrity} from '../../../main/models/lading-response.interface';
import {calculatePercentage} from '../../utils/utils';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss'],
})
export class VotingCardComponent implements OnInit {
  @Input() participant: Celebrity;
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  voted: boolean;
  thumbsUpPercentage: number;
  thumbsDownPercentage: number;

  constructor() {
  }

  ngOnInit(): void {
    this.thumbsUpPercentage = calculatePercentage(this.participant.thumbsUp, this.participant.thumbsDown);
    this.thumbsDownPercentage = calculatePercentage(this.participant.thumbsDown, this.participant.thumbsUp);
  }

  vote(): void {
    this.voted = !this.voted;
    if (this.voted) {
      if (this.participant.thumbsUpSelected) {
        this.participant.thumbsUp = this.participant.thumbsUp + 1;
      } else {
        this.participant.thumbsDown = this.participant.thumbsDown + 1;
      }
    } else {
      this.participant.thumbsUpSelected = false;
      this.participant.thumbsDownSelected = false;
    }
    this.thumbsUpPercentage = calculatePercentage(this.participant.thumbsUp, this.participant.thumbsDown);
    this.thumbsDownPercentage = calculatePercentage(this.participant.thumbsDown, this.participant.thumbsUp);
    this.update.emit(this.voted);
  }

  onThumbClick(opt: string, participant: Celebrity): void {
    if (opt === 'up') {
      participant.thumbsUpSelected = true;
      participant.thumbsDownSelected = false;
    } else {
      participant.thumbsDownSelected = true;
      participant.thumbsUpSelected = false;
    }
  }

}
