import { Injectable } from '@angular/core';
import {Book} from '../Book';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  ELEMENT_DATA: Book[] = [
    {
      position: 0,
      title: 'Unlocking Android',
      category: 'Development',
      thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg',
      author: 'Charlie Collins',
      description: 'Unlocking Android: A Developer\'s' +
        'Guide provides concise, hands-on instruction for the Android operating system and development tools. ' +
        'This book teaches important architectural concepts in a straightforward writing style and ' +
        'builds on this with practical and useful examples throughout.',
      ISBN: '1933988673'},
    {
      position: 1,
      title: 'Android in Action, Second Edition',
      category: 'Android Development',
      thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg',
      author: 'Robi Sen',
      description: 'Android in Action, Second Edition is a comprehensive tutorial for Android developers. ' +
        'Taking you far beyond \\"Hello Android,\\" this fast-paced book puts you in the driver\'s seat as you ' +
        'learn important architectural concepts and implementation strategies. You\'ll master the SDK, ' +
        'build WebKit apps using HTML 5, and even learn to extend or replace Android\'s built-in features by ' +
        'building useful and intriguing examples.',
      ISBN: '1935182722'},
    {
      position: 2,
      title: 'Hello! Flex 4',
      category: 'Internet',
      thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg',
      author: 'Peter Armstrong',
      description: 'Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. ' +
        'They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. ' +
        'And in the last chapter you\'ll learn to build a full Flex application called SocialStalkr a mashup ' +
        'that lets you follow your friends by showing their tweets on a Yahoo map.',
      ISBN: '1933988762'},
    {
      position: 3,
      title: 'The Quick Python Book, Second Edition',
      category: 'Python',
      thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg',
      author: 'Naomi R. Ceder',
      description: 'This revision of Manning\'s popular The Quick Python Book offers a clear, crisp introduction to the elegant ' +
        'Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, ' +
        'this updated edition covers features common to other languages concisely, while introducing Python\'s comprehensive ' +
        'standard functions library and unique features in detail.',
      ISBN: '193518220X'},
    {
      position: 4,
      title: 'The Art of Unit Testing',
      category: 'Software Engineering',
      thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/osherove.jpg',
      author: 'Roy Osherove',
      description: 'Unit testing, done right, can mean the diff erence between a failed project and a successful one, ' +
        'between a maintainable code base and a code base that no one dares touch, and between getting home at 2 AM ' +
        'or getting home in time for dinner, even before a release deadline.    ' +
        'The Art of Unit Testing builds on top of what\'s already been written about this important topic. ' +
        'It guides you step by step from simple tests to tests that are maintainable, readable, and trustworthy.',
      ISBN: '1933988274'},
    {
      position: 5,
      title: 'Node.js in Action',
      category: 'Web Development',
      thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cantelon.jpg',
      author: 'Marc Harter',
      description: 'Node.js in Action is an example-driven tutorial that starts at square one and guides you through all ' +
        'the features, techniques, and concepts you\'ll need to build production-quality Node applications. ' +
        'You\'ll start by learning how to set up your Node development environment, including loading the ' +
        'community-created extensions. Next, you\'ll run several simple demonstration programs where you\'ll learn the ' +
        'basics of a few common types of Node applications. Then you\'ll dive into asynchronous programming, a model Node ' +
        'leverages to lessen application bottlenecks.',
      ISBN: '1617290572'},
  ];
  categories = [
    {value: 'Development', viewValue: 'Development'},
    {value: 'Android Development', viewValue: 'Android Development'},
    {value: 'Internet', viewValue: 'Internet'},
    {value: 'Python', viewValue: 'Python'},
    {value: 'Software Engineering', viewValue: 'Software Engineering'},
    {value: 'Web Development', viewValue: 'Web Development'},
    {value: 'IOS Development', viewValue: 'IOS Development'}
  ];

  constructor() { }

  getData(): Observable<Book[]> {
    return of<Book[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addBook(data) {
    this.ELEMENT_DATA.push(data);
  }

  viewBook(id) {
    console.log('this.ELEMENT_DATA[id]: ',this.ELEMENT_DATA[id] );
    return this.ELEMENT_DATA[id];
  }

  deleteBook(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
