import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SiteContentService {
  private page: string;
  private siteContent$: Observable<any[]>;
  private siteDoc: AngularFirestoreDocument<any>;
  private siteCollection: AngularFirestoreCollection<any>;

  constructor(db: AngularFirestore) {
    this.siteCollection = db.collection('site content'); // reference to db collection
    // this.siteDoc = this.siteCollection.doc(this.page);

    // observable of site content data
    this.siteContent$ = this.siteCollection.snapshotChanges().map(changes => {
      return changes.map(obj => {
        const data = obj.payload.doc.data();
        data.id = obj.payload.doc.id;
        return data;
      });
    });
  }

  readContent(request: string) {
    console.log('The Request to the collection:', request);
    return this.siteCollection.doc(request).valueChanges();
  }
}
