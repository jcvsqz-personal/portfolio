import { Component, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { Type } from '@angular/core';
import { DataService } from './service/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  contactCom: Promise<Type<ContactComponent>>;
  lazyInjector: Injector;
  data: string;

  constructor(
    private viewViewContainerRef: ViewContainerRef,
    private crf: ComponentFactoryResolver,
    private dataServise: DataService,
    private injector: Injector
  ){

  }

  async load(){
    this.dataServise.data = "DATAKO"
    // this.viewViewContainerRef.clear();
    // const {ContactComponent} = await import('./contact/contact.component');

    // this.viewViewContainerRef.createComponent(this.crf.resolveComponentFactory(ContactComponent))

    if(!this.contactCom){
      this.data = " Some Data";
      this.lazyInjector = Injector.create({
        providers: [{
            provide: 'contactForm',
            useValue: this.data
          }],
          parent: this.injector
      });
      this.contactCom = import('./contact/contact.component').then(({ContactComponent}) => ContactComponent);

    }

  }


}
