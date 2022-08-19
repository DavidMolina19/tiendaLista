//Se traen los datos de los productos (consultar la bd)
import {productosBD} from '../helpers/baseDatos.js'

//llamamos al metodo encargado de aplicar traversing y pintar la tienda
import {pintarProductos} from './controladorPintar.js'
pintarProductos(productosBD)

//llamamos al metodo encargado de buscar productos por texto coincidente
import {buscarProductos} from './controladorBuscar.js'
buscarProductos()

//escuchamos clic en el contenedor padre de la tienda
let contenedor=document.getElementById("fila")

import {ampliarInfoProducto} from './controladorAmpliarInfo.js'

contenedor.addEventListener("click",function(evento){
    let producto  =  ampliarInfoProducto(evento)
    console.log(producto)
   
    //ALMACENAR EN EL sessionStorage LA INFORMACION DEL PRODUCTO SELECCIONADO
    sessionStorage.setItem('infoProducto',JSON.stringify(producto))
    console.log(sessionStorage.getItem('infoProducto'))

    //abro nueva ventana
    window.location.href="./src/views/ampliarInfo.html"

})
