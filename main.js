
let productos = [
    {categoria: "mouse", nombre: "Mouse ASUS ROG Strix P714 Keris II Ace Wireless 42.000 DPI White", precio: 159000, img: " "},
    {categoria: "mouse", nombre: "Mouse Corsair M75 SlipStream Wireless Bluetooth Black RGB 26K 89g 105Hs", precio: 55000, img: " "},
    {categoria: "mouse", nombre: "Mouse Razer Cobra PRO Wireless LightWight RGB Black", precio: 55000, img: " "},
    {categoria: "teclado", nombre: "Teclado OptoMecanico Razer Huntsman Mini 60% Mercury Black RGB", precio: 170000, img: " "},
    {categoria: "teclado", nombre: "Teclado Mecanico Razer BlackWidow V4 RGB Switch Yellow", precio: 155000, img: " "},
    {categoria: "teclado", nombre: "Teclado Mecanico Razer BlackWidow V3 Tenkeyless RGB Switch Yellow", precio: 175000, img: " "},
    {categoria: "auriculares", nombre: "Auriculares Inalambricos Logitech PRO X 2 Lightspeed Magenta", precio: 287690, img: " "},
    {categoria: "auriculares", nombre: "Auriculares Corsair Virtuoso Wireless White RGB 7.1 Surround", precio: 127690, img: " "},
    {categoria: "auriculares", nombre: "Auriculares Inalambricos Logitech G733 Lightspeed RGB Lila", precio: 177690, img: " "},
]

let busqueda_usuario = (prompt("¿Qué producto estás buscando?"))

function BuscadorPorCategoria(busqueda_usuario){
    let resultados=[]
    for(let i=0; i<productos.length; i++){
        if(productos[i].categoria ==busqueda_usuario.toLowerCase()){
            resultados.push(productos[i])
        }
    }
    if(resultados.length>0){
        console.log(resultados);
    }
    else{
        console.log("No se encontró la categoría: ", busqueda_usuario);
        
    }
}
BuscadorPorCategoria(busqueda_usuario);

