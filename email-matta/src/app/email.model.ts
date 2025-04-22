export class Email{
    destinatario: string | null
    titolo: string | null
    corpo: string | null

    constructor(destinatario: string | null, titolo: string | null, corpo: string | null){
        this.destinatario = destinatario
        this.titolo = titolo
        this.corpo = corpo
    }
}