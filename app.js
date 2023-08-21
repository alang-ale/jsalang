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
          document.getElementById(`eliminar${el.id}`).addEventListener("click", function() {controlador_players.eliminarPlayer(el.name,el.id,el.posicion); });})
          //localStorage.setItem("equipo",JSON.stringify(controlador_players.listaPlayers))
          
          
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



  
  function main(form){
       
        let posicion = form.pos.value
        let jugador = form.nombre.value

        let arq = controlador_players.listaPlayers.filter(jug=> jug.posicion="arq")
        let def = controlador_players.listaPlayers.filter(jug=> jug.posicion="def")
        let med = controlador_players.listaPlayers.filter(jug=> jug.posicion="med")
        let del = controlador_players.listaPlayers.filter(jug=> jug.posicion="del")
        
        if(posicion=="arq"){
        
            
            if(arq.length>=1){
                toast("Maximo 1 arquero")
              }
              else{
                
                
              controlador_players.agregarPlayer(jugador,posicion)
     
              }
            }

              else if(posicion=="def"){
                
                if(def.length>=4){
                  toast("Maximo 4 defensores")
                }
                else{
                  
                  def = controlador_players.agregarPlayer(jugador,posicion,def)
                }
              }

              else if(posicion=="med"){
                
                if(med.length>=4){
                  toast("Maximo 4 mediocampistas")
                }
                else{
                  med=med+1
                 med= controlador_players.agregarPlayer(jugador,posicion,med)
                }
              }

              else if(posicion=="del"){
               
                console.log(del)
                if(del.length>=2){
                  toast("Maximo 2 delanteros")
                }
                else{
                  del=del+1
                  del = controlador_players.agregarPlayer(jugador,posicion,del)
                }
              }
              
           
           

        }
        

      
      





let jugadores = []

const controlador_players = new playerController()

const storage = JSON.parse(localStorage.getItem("equipo"))

console.log(storage)