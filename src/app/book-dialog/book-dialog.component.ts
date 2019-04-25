import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BookService} from '../book/book.service';


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent {
  book = {
    title: '',
    category: '',
    thumbnailUrl: '',
    author: '',
    ISBN: '',
    position: 0,
    description: ''
  };

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public bookService: BookService
  ) {
  }

  ngOnInit() {
    if (this.data.id !== null ) {
      this.book = this.bookService.viewBook(this.data.id);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.data.id === null ) {
      this.book.position = this.bookService.dataLength();
    } else {
      this.book.position = this.data.id;
    }
    this.event.emit({data: this.book});
    this.dialogRef.close();
  }

  categories = this.bookService.getCategories();
}
