//Ejemplo basico del uso de promesas con asyncAwait

//Se declara una función que retorne un objeto Promise
function promesa (name){
    console.info("se llama a la promesa con",name)
    return new Promise(function(resolve,rejected){
        console.info("resolviendose promesa con",name)
        setTimeout(function(){
            resolve(name);
        },2000)
    });
}

//Se declara una función en donde se llame a la función promesa
//es importante declararla como async

async function callPromise(){
    //cada vez que se llame a la función promesa se debe escribir la palabra reservada await
    const frase1 = await promesa('Persona 1');
    console.log(frase1)
    const frase2 = await promesa('Persona 2')
    console.log(frase2)
    //Aqui se puede seguir realizando los llamados a promesas o las operaciones
    //que se requieran
}


callPromise();
