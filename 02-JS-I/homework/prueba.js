var nombre = "sebastian"
let apellido = "loaiza"
var edad = "24"
const humano = true
 

console.log(apellido)
console.log(edad)
console.log(humano)
console.log("hello world")
console.log(nombre +" "+apellido)
console.log(21 % 6) // 6 x 3 = 18 - 21 =3
 
function mifuncion(dia) {
    
    return "que lindo es el " + dia
}

function sumar(a, b) {
    console.log(a + b)
    if (a + b > 2000) {
     return "la rompiste";
    } else if (a + b >1000) {
        return "estas conbrando mas o menos"
    }  else {
        return " la cagaste"
    }

}
console.log(sumar(1000,1500))
console.log(sumar(1000,100))
console.log(sumar(100,500))
console.log(sumar(1000,1500))
    
