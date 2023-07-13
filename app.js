
const agregarProducto = (nombre,valor) => {
    alert("Producto "+nombre+" con el valor "+valor+" ingresado correctamente")
    return productos.push([nombre,valor])

  }

  const eliminarProducto = (nombre) => {
    alert(productos.find(producto => nombre==producto))
    
  }

let decision 
let salir 
let productos = [[]]

while(salir!=true){
    decision=3
    while(decision !=1 && decision !=2){

    decision = prompt("ABM Productos\n¿Qué desea hacer?\n1-Agregar producto\n2-Eliminar producto\n0-Salir")

    if(decision==0)
    {
       salir=true;
       listado= productos.join("\n")
       
       listado = listado.replaceAll(",","             ")
       alert("Ingresó los siguientes productos y sus valores: \n PRODUCTO       VALOR" + listado)
        alert("Proceso finalizado. Para hacer otra acción vuelva a ingresar al sitio")
        break
        
    }

        else if(decision==1)
        {
            let nombre = prompt("Ingrese nombre de producto")
            let valor = prompt("Ingrese valor del producto")
            agregarProducto(nombre,valor)

            
        }

            else if(decision==2)
            {
                let nombre = prompt("Ingrese nombre de producto a eliminar")
                eliminarProducto(nombre)
    }
}
}
