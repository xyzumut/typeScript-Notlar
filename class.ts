interface InsanParameters{
    ad:string, 
    soyad:string, 
    yetenek?:Function
}

class Insan implements InsanParameters{

    ad:string;
    soyad:string;
    public yetenek?:Function;
    private yas:number;

    constructor(yas:number = 0, parameters:InsanParameters) {
        this.ad      = parameters.ad;
        this.soyad   = parameters.soyad;
        this.yetenek = parameters.yetenek || undefined;
        this.yas     = yas || 0;
    }

    bilgileriGetir = ():void => {
        console.log(`${this.ad}, ${this.soyad} ve yaş : ${this.yas}`);
    }
}


const umut = new Insan(24, {ad:'Umut', soyad:'Gedik'});


umut.bilgileriGetir();