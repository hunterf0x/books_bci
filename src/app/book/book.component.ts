import { Component, OnInit } from '@angular/core';
import {BookService} from './book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  goBack(): void {
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.bookService.viewBook(params.id);
    });
  }

}
