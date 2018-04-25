import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Journal } from '../models/journal';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const JOURNALS = [
  new Journal(11, 'Eyes Journal 11'),
  new Journal(12, 'Eyes Journal 12'),
  new Journal(13, 'Eyes Journal 13'),
  new Journal(14, 'Eyes Journal 14')
];

@Injectable()
export class ShopService {
  constructor() {}

  getJournals() {
    return Observable.of(JOURNALS);
  }

  getJournal(id: number | string) {
    return this.getJournals().map(journals =>
      journals.find(journal => journal.id === +id)
    );
  }
}
