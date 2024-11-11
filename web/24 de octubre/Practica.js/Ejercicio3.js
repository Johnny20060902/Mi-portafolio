
let i;
let r=0;
let m=0;
function factorial(i,n)
{
    for(i=5;i>0;i--)
    {
 
     m=i*n;
     r=r+m;
    }
    console.log(`El fatorial de !5 es:${r}`);
    
}
for(i=n;i>0;i--)
{
 
   m=i*n;
   r=r+m;
}
console.log(`El fatorial de !5 es:${r}`);
function factorial(n) {
    let result = 1;  // inicializamos el resultado en 1
    for (let i = n; i > 0; i--) {
        result *= i;  // multiplicamos el resultado por i
    }
    return result;
}

let n = 5;  // número cuyo factorial quieres calcular
let fact = factorial(n);  // llamada a la función factorial
console.log(`El factorial de ${n} es: ${fact}`);
   
