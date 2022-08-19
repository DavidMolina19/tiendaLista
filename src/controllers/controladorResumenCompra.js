import{pintarResumenCompra} from './controladorPintarResumen.js'




//accedemos a la variable local del carrito
let carrito=JSON.parse(sessionStorage.getItem('carrito'))


let cantidaddecarrito=localStorage.getItem("cantidad")
console.log(localStorage.getItem("cantidad"))

let cantidadCarrito= document.getElementById("bolita")
cantidadCarrito.textContent=cantidaddecarrito

//comparo o pregunto si el carrito esta vacio
if(carrito==null){
    pintarResumenCompra('../../assets/img/carrito_vacio.png','Carrito vacio',true,false,null,false,null,null)
}else{ //el carrito esta lleno

    //recorro el carrito de compras


    let total=0
    carrito.forEach(function(producto){
        total=total+(Number(producto.precio.split("$")[1])*Number(producto.cantidad))
        console.log(total)

        let cambioDolar=document.getElementById("cambioMoneda")
        let totalf=document.getElementById("total")
        cambioDolar.addEventListener("click",function(evento){
            let coptousd=total/4378.27 
            totalf.innerHTML=coptousd+("usd")
        })

        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,total)
    })

}

//RUTINA PARA LIMPIAR EL RESUMEN DE LA COMPRA
let botonLimpiar=document.getElementById("botonLimpiar")
botonLimpiar.addEventListener("click",function(evento){
    sessionStorage.removeItem("carrito")

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""

    let cambioDolar=document.getElementById("cambioMoneda")
    cambioDolar.classList.add("invisible")
    pintarResumenCompra('../../assets/img/carrito_vacio.png','Carrito vacio',true,false,null,false,null,null)

})


