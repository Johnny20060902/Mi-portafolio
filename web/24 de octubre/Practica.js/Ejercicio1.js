let mensaje="La trilogia del señor de los anillos , es la mejor trilogia de la historia";
let countvocales=0;
let countconsonantes=0;
for (let i=0;i<mensaje.length;i++)
{
    if(mensaje[i]=="a"||mensaje[i]=="e"||mensaje[i]=="i"||mensaje[i]=="o"||mensaje[i]=="u")
    {
        countvocales=countvocales+1;
    }
    else
    if(mensaje[i]!="a"&&mensaje[i]!=" "&&mensaje[i]!=","||mensaje[i]!="e"&&mensaje[i]!=" "&&mensaje[i]!=","||mensaje[i]!="i"&&mensaje[i]!=" "&&mensaje[i]!=","||mensaje[i]!="o"&&mensaje[i]!=" "&&mensaje[i]!=","||mensaje[i]!="u"&&mensaje[i]!=" "&&mensaje[i]!=",")
    {
        countconsonantes++;
    }
}
console.log(`El numero de vocales es:${countvocales}`);
console.log(`El numero de consonantes es:${countconsonantes}`);