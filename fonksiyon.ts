const topla = (sayi1:number, sayi2?:number):number|null => {
    if (sayi2) {
        return null;
    }
    return sayi1;
}

const diziliTopla = (dizi:number[]):number|null => {
    if (dizi.length < 1) {
        return null;
    }

    let result:number = 0;

    dizi.forEach((item:number) => result = result + item);

    return result;
}

console.log(diziliTopla([1,2,3]));