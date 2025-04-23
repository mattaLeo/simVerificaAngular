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

  constructor(){
    this.mail = new Email("", "", "")
  }

  ngOnInit(): void {
    
  }
}
