//Utilizar un array para mostrar el elemento con mayor valor
let edades=[20,26,20,15,14,25,13,27,32,12];
var guardar=edades[0];
// let nuevo=17;
// edades.push(nuevo);
// console.log(edades);
for(let i=0;i<11;i++)
{
    
    if(edades[i]>guardar)
    {
        guardar=edades[i];
    }
}
console.log(`El valor maximo es:${guardar}`)
let char="*";
for(let j=0;j<3;j++)
{
    console.log(`${char}`)
}