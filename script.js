function media() {

    var n1 = parseFloat(document.getElementById("n1").value)
    
    var n2 = parseFloat(document.getElementById("n2").value)

    var n3 = parseFloat(document.getElementById("n3").value)

    var n4 = parseFloat(document.getElementById("n4").value)

    console.log(n1,n2,n3,n4)
   
    var medFinal= (n1 + n2 + n3 + n4)/ 4

    var medfixa= parseFloat(medFinal.toFixed(2))
    console.log(medfixa)
    
    var mediaFINAL= document.getElementById("medcalculada")
    var mensagem= ("Sua média é " + medfixa)
    mediaFINAL.innerHTML= mensagem
}

 
