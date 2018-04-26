import { Component, OnInit } from '@angular/core';
import { SiteContentService } from '../../../services/site-content.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: []
})
export class ContactComponent implements OnInit {
  private page = 'contact us';
  private content$: Observable<{}>;
  private contactSub: Subscription;
  private contact: {};

  constructor(private contentService: SiteContentService) {}

  ngOnInit() {
    this.content$ = this.contentService.readContent(this.page);
    this.contactSub = this.content$.subscribe(payload => {
      this.contact = payload;
      console.log('The Contact Info Subscribe', this.contact);
    });
  }
}
