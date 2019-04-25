import {Component} from '@angular/core';
import {BookService} from '../book/book.service';
import {Book} from '../Book';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {BookDialogComponent} from '../book-dialog/book-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, public dialog: MatDialog, private bookService: BookService) {
  }

  displayedColumns: string[] = [ 'ISBN', 'title', 'category', 'author', 'view', 'edit', 'delete'];
  dataSource = new BookDataSource(this.bookService);


  viewBook(id) {
    this.router.navigate(['book', id]);
  }

  deleteBook(id) {
    this.bookService.deleteBook(id);
    this.dataSource = new BookDataSource(this.bookService);
  }

  openDialog(id = null): void {

    let dialogRef = this.dialog.open(BookDialogComponent, {
      width: '600px',
      data: {
        title: id == null ? 'Add Book' : 'Edit Book',
        button: id == null ? 'SAVE' : 'UPDATE',
        id
      },
    });



    dialogRef.componentInstance.event.subscribe((result) => {
      if (id === null) {
        this.bookService.addBook(result.data);
      } else {
        console.log('result.data: ', result.data);
        //this.bookService.updateBook(result.data);
      }

      this.dataSource = new BookDataSource(this.bookService);
    });
  }


}

export class BookDataSource extends DataSource<any> {
  constructor(private bookService: BookService) {
    super();
  }

  connect(): Observable<Book[]> {
    return this.bookService.getData();
  }

  disconnect() {
  }
}
