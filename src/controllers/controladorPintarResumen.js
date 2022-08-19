export function pintarResumenCompra(fotoURL,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto,total){
     
    
    let contenedor=document.getElementById("contenedor")
    
   
    let fila=document.createElement("div")
    fila.classList.add("row","mb-3")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6","align-self-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL

    let nombre=document.createElement("h3")
    //nombre.classList.add("text-center")
    nombre.textContent=nombreMensaje

    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href","../../index.html")

    let cantidad=document.createElement("h3")
    cantidad.textContent="Cantidad: "+cantidadProducto

    let precio=document.createElement("h3")
    precio.textContent="Precio Und: "+precioProducto

     let subtotalEtiqueta = document.createElement("h5")
     subtotalEtiqueta.textContent='subtotal: ' + '$' + (Number(cantidad.textContent.split('Cantidad: ')[1])*Number(precio.textContent.split('$')[1]))
     
     
     
     /*let cantidadp=(Number(cantidad.textContent.split('Cantidad: ')[1]))
     console.log(cantidadp)

     let preciop=(Number(precio.textContent.split('$')[1]))
     console.log(preciop)

     total = total+Number(cantidadp*preciop)
     console.log(total)*/

     let totalEtiqueta = document.getElementById("total")
     totalEtiqueta.textContent=total

     
    



    

   
    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    if(banderaBoton==true){
        columna2.appendChild(boton)
    }
    if(banderaPrecio==true){
        columna2.appendChild(precio)
    }
    if(banderaCantidad==true){
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotalEtiqueta)
    }
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
    


    
}