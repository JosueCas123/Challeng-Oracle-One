document.addEventListener('DOMContentLoaded', () => {
  
    
    // seleccionar elmentos de la interfaz
    const inputText = document.querySelector('#texto')
    const btnEncriptar = document.querySelector('.button-azul')
    const divInfo = document.querySelector('.mensaje-info')
    const divMensaje = document.querySelector('.mensaje')
    const btnDesencriptar = document.querySelector('.button-white')
    // crear un textarea
    const parrafo = document.createElement('textarea');

    // agregar eventos
    inputText.addEventListener('input', leerElTextarea);

    // crear una variable global
    let texto;

    //funcion para leer el texto del textarea
    function leerElTextarea(e){

        // obtenemos el texto y reasignamos a la variable global
        texto = e.target.value

        
        //el texto obtenido lo mandamos a la funcion
       
        
        textoObtenido(texto) 
        
    }

    // la funcion recibe el texto y lo pasa al btnEncriptar
    function textoObtenido(texto){
       
        btnEncriptar.onclick = () => {
            encriptar(texto)
            inputText.value = '';
            
        }
    }

    // la funcion encritar recibe el texto y lo encripta 
    function encriptar(texto){

       elminarHtml();
        
        texto = texto.replaceAll('e','enter')
        texto = texto.replaceAll('i','imes')
        texto = texto.replaceAll('a','ai')
        texto = texto.replaceAll('o','ober')
        texto = texto.replaceAll('u','ufat')

        

        if (texto === '') {
            divInfo.classList.add('mensaje-info')
            
        }else {
            divInfo.classList.add('mensaje-none')
            
           
            parrafo.classList.add('texto-mensaje','focus')
            parrafo.textContent = texto
            
            divMensaje.appendChild(parrafo)

          
            const btnCopiar = document.createElement('button');
            btnCopiar.classList.add('btnCopiar')
            btnCopiar.textContent = 'Copiar'
            btnCopiar.onclick = copiarTexto;
            divMensaje.appendChild(btnCopiar)

           
        }

    


       // console.log(texto)
    }
    
   function elminarHtml (){
        while (divMensaje.firstChild) {
            divMensaje.removeChild(divMensaje.firstChild);
        }
   }
    
    
   function copiarTexto(){

    let parrafoSeleccionado = document.querySelector('.texto-mensaje');
    parrafoSeleccionado.select();
    parrafoSeleccionado.setSelectionRange(0,99999);
    document.execCommand('copy');
    inputText.value = parrafoSeleccionado.value

    //console.log(btnDesencriptar)
    btnDesencriptar.onclick = function(){
                desencriptar()
               inputText.value = ''
        }
    }
     //hacer click a llamar btn desencritar
    
    
   

  function desencriptar(){
        texto = texto.replaceAll("ai","a");
        texto = texto.replaceAll("imes","i");
        texto = texto.replaceAll("enter","e");
        texto = texto.replaceAll("ober","o");
        texto = texto.replaceAll("ufat","u");
        parrafo.textContent = texto
    
    //inputText.value = parrafoSeleccionado.value
    
    
  }




})