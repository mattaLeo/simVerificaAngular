import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Email } from './email.model';
import { SentMailComponent } from './sent-mail/sent-mail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SentMailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'email-matta';

  mails: Email[]

  constructor(){
    this.mails = []
  }

  sendMail(dest: HTMLInputElement, title: HTMLInputElement, body: HTMLTextAreaElement){
    this.mails.push(new Email(dest.value, title.value, body.value))
  }
}
