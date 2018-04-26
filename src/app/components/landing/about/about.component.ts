import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { SiteContentService } from '../../../services/site-content.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: []
})
export class AboutComponent implements OnInit {
  private page = 'about';
  private content$: Observable<{}>;
  private aboutSub: Subscription;
  private about: {};

  constructor(private contentService: SiteContentService) {
    this.content$ = this.contentService.readContent(this.page);
    console.log('The About Info Observable', this.content$);

    // .map(index => {
    //   return index.filter(obj => {
    //     return obj.id === this.page;
    //   });
    // });

    this.aboutSub = this.content$.subscribe(payload => {
      this.about = payload;
      console.log('The About Info Subscribe', this.about);
    });
  }

  ngOnInit() {}
}
