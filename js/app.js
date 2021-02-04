function campoRequerido(elemento){
    console.log('en la funcion campo requerido')
 //   let elemento = document.querySelector('#nombre');
    if(elemento.value === ''){
        elemento.className = 'form-control is-invalid';
    }else{
        elemento.className = 'form-control is-valid';  
    }
}

function validarMail(){
    console.log('en la funcion campo requerido')
    let elemento = document.querySelector('#email');
    if(elemento.value === ''){
        elemento.className = 'form-control is-invalid';
    }else{
        elemento.className = 'form-control is-valid';  
    }
}