import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('myContainer', {read: ViewContainerRef}) myContainer:ViewContainerRef;

  viewStarted = false;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {

  }

  viewButton() {


  }

}
