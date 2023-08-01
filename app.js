class player{
    constructor (name,posicion){
        this.name = name
        this.posicion = posicion
    }
}

class playerController{
    constructor(){
        this.listaPlayers = []
    }

    agregarPlayer(player) {
        alert("Jugador "+player.name+" que juega de "+player.posicion+" registrado correctamente")
        this.listaPlayers.push(player)
        
      }
    
    eliminarPlayer(nombre){  
      
        this.listaPlayers.forEach(el=>{
            if(el.name == nombre){
                let id = this.listaPlayers.indexOf(el)
                this.listaPlayers.splice(id, 1);
            }

        })

        return this.listaPlayers
      }
    

      mostrarPlayer(){
       return this.listaPlayers.map(player => player.name)
      }
    }

let decision 
let salir 
let jugadores = []
const controlador_players = new playerController()

while(salir!=true){
    decision=3
    while(decision !=1 && decision !=2){

    decision = prompt("Jugadores\n¿Qué desea hacer?\n1-Agregar jugador\n2-Mostrar jugador\n3-Eliminar jugador\n0-Salir")

    if(decision==0)
    {
       salir=true;
       listado= jugadores.join("\n")
       listado = controlador_players.mostrarPlayer()
       alert("Quedaron registrados los siguientes jugadores: \n" + listado)
        alert("Proceso finalizado. Para hacer otra acción vuelva a ingresar al sitio")
        break
        
    }

        else if(decision==1)
        {
            let nombre = prompt("Ingrese nombre de jugador")
            let valor = prompt("Ingrese posicion")
            
            playerNew = new player(nombre,valor)
            controlador_players.agregarPlayer(playerNew)

            
        }

        else if(decision==2)
        {
           alert(controlador_players.mostrarPlayer())
        }
            
        else if(decision == 3){
           let nombre = prompt("Ingrese nombre de jugador a eliminar")
            controlador_players.eliminarPlayer(nombre)
        }

    
                }
}