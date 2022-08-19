let plato1={
    nombre:"bandeja paisa",
    precio:39900,
    descripcion:'The bandeja paisa is our most important regional dish. It comes with beans, meat crumbles, sausage, fried egg, plantains and pork cracklings. Accompanied with rice and avocado',
    foto:'na',
    categoria:2
}

let plato2={
    nombre:"ajiaco",
    precio:35900,
    descripcion:'An Ajiaco is Bogota’s chicken and potato soup with corn on the cob and served with capers, and cream. Accompanied with rice and avocado',
    foto:'na',
    cateoria:1
}

let plato3={
    nombre:"Mondongo",
    precio:35400,
    descripcion:'Mondongo is a traditional soup with beef tripe, pork, potatoes and vegetables. Accompanied with banana, rice and avocado. You can add some lemon and coriander to enhance the flavor',
    foto:'na',
    categoria:2
}

let plato4={
    nombre:"Lengua en Salsa Criolla",
    precio:41900,
    descripcion:'Stewed Tongue in creole sauce (tomato and onions) with potato, yuca, rice and avocado',
    foto:'na',
    categoria:1
}

let plato5={

    nombre:"Sopa de cura",
    precio:25900,
    descripcion:'Delicious Rice Soup with vegetables, served with minced meat, sweet plantain, avocado, arepa and potato chips. Accompanied with hogao and fresh coriander',
    foto:'na',
    categoria:3

}

let platos=Array(plato1,plato2,plato3,plato4,plato5)

//1. forEach
platos.forEach(function(plato){
    console.log(plato.nombre)
})

//2. filter
let resultado=platos.filter(function(plato){
    return(plato.categoria==2)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.precio>20000)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.categoria==1 || plato.categoria==3)
})
console.log(resultado)

//3.find
let busqueda=platos.find(function(plato){
    return(plato.precio==41900)
})
console.log(busqueda)

//4.map
let mapa=platos.map(function(plato){
    return(plato.categoria=100)
})
console.log(mapa)


//5. push
let plato6={

    nombre:"Sopa de guineo",
    precio:20900,
    descripcion:'Delicious Rice Soup with vegetables, served with minced meat, sweet plantain, avocado, arepa and potato chips. Accompanied with hogao and fresh coriander',
    foto:'na',
    categoria:3
}
platos.push(plato6)
console.log(platos)

