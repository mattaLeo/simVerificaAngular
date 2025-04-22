export class Email{
    destinatario: string
    titolo: string
    corpo: string

    constructor(destinatario: string, titolo: string, corpo: string){
        this.destinatario = destinatario
        this.titolo = titolo
        this.corpo = corpo
    }
}