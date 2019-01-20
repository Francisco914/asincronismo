//Ejemplo basico de una promesa con then

function promesa (name){
    console.info("se llama a la promesa con",name)
    return new Promise(function(resolve,rejected){
        console.info("resolviendose promesa con",name)
        setTimeout(function(){
            resolve(name);
        },2000)
    });
}

promesa('Person 1')
.then((name)=>{
    console.log(name)
    return promesa('Persona 2');
})
.then((name)=>console.log(name));
