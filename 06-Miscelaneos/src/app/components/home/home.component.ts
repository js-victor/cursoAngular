import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <hr>
  <app-css></app-css>
  <p>Hola mundo desde app.component</p>
  <hr>
  <app-clases></app-clases>
  <hr>
  <p [appResaltado]="'red'">
    Hola mundo
  </p>
  <hr>
  <app-ng-switch></app-ng-switch>
  <hr>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit() ');
  }

  ngOnChanges() {
    console.log('ngOnChanges() ');
  }

  ngDoCheck() {
    console.log('ngDoCheck() ');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() ');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() ');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() ');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() ');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() ');
  }


}
