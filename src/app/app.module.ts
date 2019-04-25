import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { BookComponent } from './book/book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookService } from './book/book.service';
import { AppRouters } from './app.routes';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { SearchComponent } from './search/search.component';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    WelcomeComponent,
    DashboardComponent,
    BookDialogComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxMatSelectSearchModule,
    AppRouters
  ],
  entryComponents: [
    BookDialogComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
