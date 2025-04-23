import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  imports: [],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent implements OnInit{
  @Input() mail: Email
  show: boolean

  constructor(){
    this.mail = new Email("", "", "")
    this.show = false
  }

  toggleExpand(){
    if(this.show){
      this.show = false
    }else{
      this.show = true
    }
  }

  ngOnInit(): void {
    
  }
}
