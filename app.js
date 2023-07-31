
const agregarPlayer = (nombre,posicion) => {
    alert("Jugador "+nombre+" que juega de "+posicion+" registrado correctamente")
    jugadores.push([nombre,posicion])

  }

  const eliminarPlayer = (nombre) => {  
    alert(productos.find(producto => nombre==producto))//usar includes
    
  }



let decision 
let salir 
let jugadores = []

while(salir!=true){
    decision=3
    while(decision !=1 && decision !=2){

    decision = prompt("Jugadores\n¿Qué desea hacer?\n1-Agregar jugador\n2-Eliminar jugador\n3-Ingrese `delanteros` para verlos\n3-Ingrese `defensores` para verlos\n0-Salir")

    if(decision==0)
    {
       salir=true;
       listado= jugadores.join("\n")
       
       listado = listado.replaceAll(",","             ")
       alert("Ingresó los siguientes jugadores y su posición: \n JUGADOR       POSICION\n" + listado)
        alert("Proceso finalizado. Para hacer otra acción vuelva a ingresar al sitio")
        break
        
    }

        else if(decision==1)
        {
            let nombre = prompt("Ingrese nombre de jugador")
            let valor = prompt("Ingrese posicion")
            agregarPlayer(nombre,valor)

            
        }

            else if(decision==2)
            {
                let nombre = prompt("Ingrese nombre de producto a eliminar")
                eliminarPlayer(nombre)
            }
                else if(decision=="delanteros" || decision=="defensores"){
                   
                    filtro = jugadores.filter(posicion => posicion = decision)
                  
                    filtro.forEach(el => {
                        console.log(el[0])
                    });
                }
                    else if(decision=="listar"){
                        
                        const listado = jugadores.map(jugador => jugador[0])
                        alert(listado)
                    }

                }
}
