import { Component,OnInit } from '@angular/core';
import { FileLoggerService } from '../Services/filelogger.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  

  constructor(private logger : FileLoggerService){

  }

  ngOnInit(): void {
    this.logger.warn("warn is called");
  }
}
