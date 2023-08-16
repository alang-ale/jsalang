let id = 0
class player{
    constructor (name,posicion,id){
        this.name = name
        this.posicion = posicion
        this.id = id
    }
}

class playerController{
    constructor(){
        this.listaPlayers = []
    }
    cargarLs(){

    }
    agregarPlayer(nombre,posicion) {
        
        id = id+1
        alert("Jugador "+nombre +id+" registrado correctamente")
        
        let jugador = new player(nombre,posicion,id)
        this.listaPlayers.push(jugador)
        controlador_players.mostrarPlayer(jugador)
        
        this.listaPlayers.forEach(el=>{ 
          document.getElementById(`eliminar${el.id}`).addEventListener("click", function() {controlador_players.eliminarPlayer(el.name,el.id,el.posicion);});})
          localStorage.setItem("equipo",JSON.stringify(controlador_players.listaPlayers))

      }
    
    eliminarPlayer(nombre,borrar,pos){  
        console.log(`Se pidio eliminar al jugador ${nombre}`)
 
        document.getElementById(`eliminar${borrar}`).parentNode.remove()

        this.listaPlayers.forEach(el=>{
            if(el.id == borrar){
                let orden = this.listaPlayers.indexOf(el)
                this.listaPlayers.splice(orden, 1);
               
            }

        })
        
        console.log(this.listaPlayers)
        
            }
      
    
      
      mostrarPlayer(player){
      
        document.getElementById(player.posicion).innerHTML += ` <div class="card">
          
        <img class="card-img-top" src="./assets/img/nophoto.jfif" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title" id="name">${player.name}</</h5>
            <p class="card-text">${player.posicion.toUpperCase()}</p>
            
         </div>
         <button type="button" class="close" aria-label="Close" id="eliminar${player.id}">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;

      
  
       

          

        
        
        
      
        console.log(this.listaPlayers)
        
        

        

      }
      
    }  



function submit(e){
e.preventdefault();
}

function toast(mensaje){
  Toastify({

    text: mensaje,
    duration: 3000
    
    }).showToast();
}

let arq = 0;
let def = 0;
let med = 0;
let del = 0;
  function main(form){
       
        let posicion = form.pos.value
        let jugador = form.nombre.value




        if(posicion=="arq"){
            arq=arq+1
            if(arq>1){
                toast("Maximo 1 arquero")
              }
              else{
                controlador_players.agregarPlayer(jugador,posicion)
              }
            }

              else if(posicion=="def"){
                def=def+1
                if(def>4){
                  toast("Maximo 4 defensores")
                }
                else{
                  controlador_players.agregarPlayer(jugador,posicion)
                }
              }

              else if(posicion=="med"){
                med=med+1
                if(med>4){
                  toast("Maximo 4 mediocampistas")
                }
                else{
                  controlador_players.agregarPlayer(jugador,posicion)
                }
              }

              else if(posicion=="del"){
                del=del+1
                console.log(del)
                if(del>2){
                  toast("Maximo 2 delanteros")
                }
                else{
                  controlador_players.agregarPlayer(jugador,posicion)
                }
              }
              
           
           

        }
        

      
      





let jugadores = []

const controlador_players = new playerController()

const storage = JSON.parse(localStorage.getItem("equipo"))

console.log(storage)