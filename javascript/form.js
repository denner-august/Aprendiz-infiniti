var nome = document.getElementById('nome')
var email = document.getElementById('email')
var texto = document.getElementById('texto')

document.getElementById('enviar').onclick = function(){
       if(nome.value == ''){
            
       }else if(email.value == ''){
          
       }else if(texto.value == ''){
          
       }
       else{    var teste = document.getElementById('nome').value;
                localStorage.setItem("nome", teste);
                document.getElementById('enviar').innerText ='Obrigado'
            }

};