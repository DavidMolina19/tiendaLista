import {productosBD} from '../helpers/baseDatos.js'
import {pintarProductos} from './controladorPintar.js'

export function buscarProductos(){

    //controlador el input donde escribe el usuario
    let buscador=document.getElementById("busqueda")

    //detectamos que el usuario escribe y capturamos lo
    //que esta escribiendo
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value
        
        let filtro=productosBD.filter(function(producto){
            return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()))
        })

        console.log(filtro)
        pintarProductos(filtro)

    })

}