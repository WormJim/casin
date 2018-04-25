import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Journal } from '../../../models/journal';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  journal$: Observable<Journal[]>;
  private selectedId: number;

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('injournal init');
    this.journal$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');
      console.log('injournal init', this.shopService.getJournals());
      return this.shopService.getJournals();
    });
  }
}
