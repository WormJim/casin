import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ShopService } from '../../../../services/shop.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Journal } from '../../../../models/journal';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  journal$: Observable<Journal>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    this.journal$ = this.route.paramMap.switchMap(
      (params: ParamMap): Observable<Journal> => {
        return this.shopService.getJournal(params.get('id'));
      }
    );
  }

  goToJournals(journal: Journal) {
    this.router.navigate(['/journal']);
  }
}
