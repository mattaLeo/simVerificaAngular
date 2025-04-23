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
  speciale: boolean
  colore: string

  constructor(){
    this.mail = new Email("", "", "")
    this.show = false
    this.speciale = false
    this.colore = "white"
  }

  toggleExpand(){
    if(this.show){
      this.show = false
    }else{
      this.show = true
    }
  }

  toggleSpecial(){
    if(this.speciale){
      this.speciale = false
      this.colore = "white"
    }else{
      this.speciale = true
      this.colore = "yellow"
    }
  }

  ngOnInit(): void {
    
  }
}
