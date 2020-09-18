import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, Inject } from '@angular/core';
import { DataService } from '../service/data.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('child', {read:ViewContainerRef})
  contactForm: ViewContainerRef

  contactFormComp: ContactFormComponent;
  inputData: string;

  constructor(
    private viewViewContainerRef: ViewContainerRef,
    private crf: ComponentFactoryResolver,
    public dataService: DataService,
    @Inject('contactForm') data
    ) {
      this.inputData = data
    }

  async ngOnInit() {
    const {ContactFormComponent} = await import('../contact-form/contact-form.component');
    const ref = this.viewViewContainerRef.createComponent(this.crf.resolveComponentFactory(ContactFormComponent))
    this.contactFormComp = ref.instance;
    this.contactFormComp.data = "JC";

    this.contactFormComp.emitter.subscribe(console.log);
  }

}
