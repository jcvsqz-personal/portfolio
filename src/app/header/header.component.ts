import { Component, OnInit, ComponentFactoryResolver, Injector } from '@angular/core';
declare var anime: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{
    const animate = anime({
      targets: ['.hero div'],
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
      baseFrequency: 0,
      scale: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo'
    });

  }

}
