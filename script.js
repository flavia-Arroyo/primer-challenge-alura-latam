
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function encriptarTexto(texto){
    texto =texto.replaceAll("e", "enter")
    texto = texto.replaceAll("i", "imes")
    texto = texto.replaceAll("a", "ai")    
    texto = texto.replaceAll("o", "ober")
    texto = texto.replaceAll("u", "ufat")

return texto
}
function desencriptarTexto(textoOculto){
    
    
    textoOculto = textoOculto.replaceAll("enter", "e")
    textoOculto = textoOculto.replaceAll("imes", "i")
    textoOculto = textoOculto.replaceAll("ai", "a")    
    textoOculto= textoOculto.replaceAll("ober", "o")
    textoOculto = textoOculto.replaceAll("ufat", "u")
        
        
    
return textoOculto;
}

var boton = document.querySelector("#btn-copy")
boton.addEventListener("click", function(event){

    event.preventDefault()
    var id = document.getElementById("msg");
    if (id.value.length > 0){
        id.select()
        swal({
            title:"texto copiado!!",
            text : "boton Pegar, LO PEGA EN ENTRADA",
            icon: "success",
            buttons :false,
            timer:2000

        });
        navigator.clipboard.writeText(id.value)
        
        
    }else{
        swal({
            title:"NO existe texto",
            icon:"error",
            buttons :false,
            timer:2000
            
        })
    }
    
        
})



var pegar = document.querySelector("#btn-pegar")
pegar.addEventListener("click", function(event){
    event.preventDefault()
    var id = document.getElementById("msg")
    if(id.value.length > 0){
        document.getElementById("input-texto").value= " "
        document.getElementById("input-texto").value = id.value
        swal({
            title:"Texto pagado en Entrada Mensaje",
            icon:"success",
            buttons :false,
            timer:2000
        })
    }else{
        swal({
            title:"NO existe texto",
            icon:"error",
            buttons :false,
            timer:2000
        })

    }
})

