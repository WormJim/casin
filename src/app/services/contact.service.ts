import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from '../models/contact';

@Injectable()
export class ContactService {
  contact$: Observable<Contact>;

  constructor() {}
}
