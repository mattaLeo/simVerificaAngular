import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'email-matta';

  mails: Email[] = []

  sendMail(dest: HTMLInputElement, title: HTMLInputElement, body: HTMLTextAreaElement){
    this.mails.push(new Email(dest.textContent, title.textContent, body.textContent))
  }
}
