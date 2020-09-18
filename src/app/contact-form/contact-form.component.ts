import { Component, OnInit, EventEmitter} from '@angular/core';
@Component({
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  data: string;
  emitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit(){
    this.emitter.emit("Emited");
  }
}
