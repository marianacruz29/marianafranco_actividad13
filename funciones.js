const amigos =[]
while(true){
    let nombre=prompt("Ingresa el nombre de tu amigo o amiga")

    if(nombre !=="fin"){
        amigos.push(nombre)
    }else{
        break;
    }
}

console.table(amigos);