import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import {debounceTime, delay, tap, filter, map, takeUntil} from 'rxjs/operators';
import {BookService} from '../book/book.service';

import {Book} from '../Book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  protected books = this.bookService.ELEMENT_DATA;
  constructor( public bookService: BookService) {
    console.log(this.books);
  }
  public bookServerSideCtrl: FormControl = new FormControl();
  public bookServerSideFilteringCtrl: FormControl = new FormControl();
  public searching = false;
  public  filteredServerSideBooks: ReplaySubject<Book[]> = new ReplaySubject<Book[]>(1);
  protected _onDestroy = new Subject<void>();

  ngOnInit() {
    // listen for search field value changes
    this.bookServerSideFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          if (!this.books) {
            return [];
          }
          return this.books.filter(book => book.author.toLowerCase().indexOf(search) > -1);
        }),
        delay(500)
      )
      .subscribe(filteredBooks => {
          this.searching = false;
          this.filteredServerSideBooks.next(filteredBooks);
        },
        error => {
          console.log('error: ', error);
          this.searching = false;
        });
  }
}
