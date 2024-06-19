interface MyInterface{
    ad:string,
    soyad:string,
    yas:number,
    kanGrubu?:string,
    yetenegi?:Function
}

const yazdir = (parameters:MyInterface) => {
    console.log(JSON.stringify(parameters));
}

yazdir({ad:'Umut', soyad:'Gedik', yas:24});

interface Canli{
    bacakSayisi:number,
    nefesAl:Function,
}

class Insan implements Canli{
    bacakSayisi: number;
    nefesAl: Function;
}