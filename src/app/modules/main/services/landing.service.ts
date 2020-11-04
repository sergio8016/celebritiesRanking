import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Celebrity, LadingResponseInterface} from '../models/lading-response.interface';

@Injectable({
  providedIn: 'root',
})
export class LandingService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getLadingData(): Observable<Array<Celebrity>> {
    return this.httpClient.get<LadingResponseInterface>('../../../../assets/JSON/celebrities.json')
      .pipe(
        map((response: LadingResponseInterface) => response.celebrities),
      );
  }

  saveData(participants: Array<Celebrity>): void {
    localStorage.setItem('participants', JSON.stringify(participants));
  }

  loadData(): Array<Celebrity> {
    return JSON.parse(localStorage.getItem('participants'));
  }
}
