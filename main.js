function acesso(form){
      
   if(form.nome.value == 'admin' && form.senha.value == 'admin'){
        location="page.html"
   }else{
       window.alert('Dados Incorretos')
   }

}