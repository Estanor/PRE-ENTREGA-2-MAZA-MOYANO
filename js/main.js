
//Comics/Mangas
function Manga(nombre, demografia, genero, autor,){
    this.nombre = nombre;
    this.demografia = demografia;
    this.genero = genero;
    this.autor = autor;

    this.hablar=function (){alert("El mejor manga de la historia es " + this.nombre)}
}
const manga1= new Manga("Attack on Titan", "Shonen", "fantasía, sobrenatural, accion", "Hajime Isayama")
const manga2= new Manga("Berserk", "Seinen", "Fantasía Medieval Oscura", "Kentaro Miura")


console.log(manga1)
console.log(manga2)

function Producto(nombre, precio){
    this.nombre= nombre;
    this.precio= parseFloat(precio);

    this.sumarIva= ()=>{this.precio = this.precio * 1.21}
}
const arroz= new Producto("arroz", "240")

console.log(arroz)
console.log(arroz.precio)
arroz.sumarIva()
console.log(arroz.precio)

console.log("nombre" in arroz)
console.log("peso" in arroz)


//Calculadora

function asignarOperacion(op) {
    switch (op) {
        case "+":
            return (a, b) => a + b;

        case "-":
            return (a, b) => a - b;
        
        case "*":
            return (a, b) => a * b;

        case "/":
            return (a, b) => a / b;

        default:
            return () => "El operador no es válido"
    }
}

let operacion = prompt("Ingrese la operación (+,-,*,/)")
let resultado = asignarOperacion(operacion);

let n1 = parseFloat(prompt("ingresa el primer numero"))
let n2 = parseFloat(prompt("ingresa el segundo numero"))

alert (resultado(n1,n2));


const productos = [
    {id: 1, nombre: "Arroz", precio: 124 },
    {id: 2, nombre: "Papa", precio: 123 },
    {id: 3, nombre: "Tomate", precio: 400 },
    {id: 4, nombre: "Morrón", precio: 100 },
    {id: 5, nombre: "Pan", precio: 300 },
    {id: 6, nombre: "Granola", precio: 120 },
    {id: 7, nombre: "Arroz", precio: 200 },
];

let ingreso=prompt("ingresa el producto")
const buscador=productos.filter(prod=>{
    return prod.nombre ==(ingreso)
})
console.log(buscador)