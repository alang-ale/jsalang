let id = 0


function toast(mensaje){
  Toastify({

    text: mensaje,
    duration: 3000
    
    }).showToast();
}


class player{
    constructor (name,posicion,id){
        this.name = name
        this.id = id
        this.posicion = posicion
    }
    
}

class playerController{
    constructor(){
        this.listaPlayers = []
    }


    agregarPlayer(nombre,posicion) {
      let def =   this.listaPlayers.filter(jug=> jug.posicion=="def")
      let med =   this.listaPlayers.filter(jug=> jug.posicion=="med")
      let del =   this.listaPlayers.filter(jug=> jug.posicion=="del")
      let arq =   this.listaPlayers.filter(jug=> jug.posicion=="arq")

     if(posicion=="arq"){
       
           
       if(arq.length>=1){
           toast("Maximo 1 arquero")
         }
         else{
           
          id = id+1
           let jugador = new player(nombre,posicion,id)      

           this.listaPlayers.push(jugador)
           this.mostrarPlayer(jugador)

         }
       }

         else if(posicion=="def"){
           
           if(def.length>=4){
           
             toast("Maximo 4 defensores")
           }
           else{
            id = id+1
             let jugador = new player(nombre,posicion,id)      

             this.listaPlayers.push(jugador)
             this.mostrarPlayer(jugador)
           }
         }

         else if(posicion=="med"){
          
           if(med.length>=4){
             toast("Maximo 4 mediocampistas")
           }
           else{
            id = id+1
             let jugador = new player(nombre,posicion,id)      

             this.listaPlayers.push(jugador)
             this.mostrarPlayer(jugador)
           }
         }

         else if(posicion=="del"){
          
          
           if(del.length>=2){
             toast("Maximo 2 delanteros")
           }
           else{
            id = id+1
             let jugador = new player(nombre,posicion,id)      

             this.listaPlayers.push(jugador)
             this.mostrarPlayer(jugador)
           }
         }
    
      console.log(this.listaPlayers)
        

        
        this.listaPlayers.forEach(el=>{ 
          document.getElementById(`eliminar${el.id}`).addEventListener("click", function() {controlador_players.eliminarPlayer(el.name,el.id); });})
         
          localStorage.setItem("equipo",JSON.stringify(this.listaPlayers))  
          
      }
    
    eliminarPlayer(nombre,borrar){  
        console.log(`Se pidio eliminar al jugador ${nombre}${borrar}`)
 
        this.listaPlayers.forEach(el=>{
            if(el.id == borrar){
                let orden = this.listaPlayers.indexOf(el)
                this.listaPlayers.splice(orden, 1);
                document.getElementById(`eliminar${el.id}`).parentNode.remove()
            }

        })
        
        localStorage.setItem("equipo",JSON.stringify(this.listaPlayers))  
        
      }
      
    
      
    mostrarPlayer(player){
      
        document.getElementById(player.posicion).innerHTML += ` <div class="card">
          
        <img class="card-img-top" src="./assets/img/nophoto.jfif" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title" id="name">${player.name}</h5>
            <p class="card-text">${player.posicion.toUpperCase()}</p>
            
         </div>
         <button type="button" class="close" aria-label="Close" id="eliminar${player.id}">
          <span aria-hidden="true">X</span>
        </button>
      </div>`;

      }
      
}  



function submit(e){
e.preventdefault();

}

function main(form){
   
    let juegade = form.pos.value
    let jugador = form.nombre.value
       
    controlador_players.agregarPlayer(jugador,juegade)
    
        
}
        
function stg(){
  if(localStorage.getItem("equipo")==null){
    Swal.fire('No se encontraron formaciones guardadas. Recordá que se guarda automaticamente tu ultima sesión.')
  }
  else{
  Swal.fire({
    title: 'Se encontró una formación anterior',
    text: "¿Desea cargarla? Todo su progreso se perderá",
    icon: 'question',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Cargar',
    denyButtonText: `Seguir editando`,
    confirmButtonColor: '#d36a11',
    denyButtonColor: '#124bd1',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        const storage = JSON.parse(localStorage.getItem("equipo"))
        storage.forEach(el=>{
        controlador_players.agregarPlayer(el.name,el.posicion)
  })
    } else if (result.isDenied) {
      
    }
  })
  }
}
           
function ind(){


fetch("./ind2017.json")
.then(response=> response.json())
.then(json=>{
  Swal.fire({
    title: 'Si cargas esta formación, perderás todo tu progreso.',
    text: "¿Desea cargarla? Todo su progreso se perderá",
    icon: 'question',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Cargar',
    denyButtonText: `Seguir editando`,
    confirmButtonColor: '#d36a11',
    denyButtonColor: '#124bd1',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      json.forEach(el=>controlador_players.agregarPlayer(el.name,el.posicion))
    } else if (result.isDenied) {
      
    }
  })
           
} )


}

const stg_btn = document.getElementById("stg")            
stg_btn.addEventListener("click",stg)

const ind_btn = document.getElementById("ind")            
ind_btn.addEventListener("click",ind)



const controlador_players = new playerController()



