// caixas expansiveis
$('.caixa-container button.btpluscaixa').click(function () {
  let caixa = $(this).prev()
  if (caixa.hasClass('aberta')) {
    caixa.removeClass('aberta')
    $(this).css('background-image', 'url("assets/img/bt_mais2.png")')
  } else {
    caixa.addClass('aberta')
    $(this).css('background-image', 'url("assets/img/bt_menos2.png")')
  }
})


//---- Troca de BGs conforme página ----\\
jQuery("document").ready(function($){

  var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  var tema_pagina;

  //localStorage.clear();

  if(pg_number == 1){
    //document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html1.png')";
    $("body").addClass("bg-gradiente");
  }else if(pg_number == 2){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html2.png')";
  }else if(pg_number == 3){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_html3.png')";
  }else if(pg_number == 4){
    document.body.style.backgroundImage = "url('assets/imgAjuste/versionamento/bg_ref.png')";
  }


  $(".btn-tema_pagina").click(function(){
    if($("body").hasClass('bg-claro')){
      $("body").removeClass('bg-claro');
      $("body").addClass("bg-escuro");
      localStorage.setItem('tema_pagina', 'bg-escuro');
    }else if($("body").hasClass('bg-escuro')){
      $("body").removeClass('bg-escuro');
      $("body").addClass("bg-claro");
      localStorage.setItem('tema_pagina', 'bg-claro');
    }else{
      $("body").addClass("bg-escuro");
      localStorage.setItem('tema_pagina', 'bg-escuro');
    }
  });

  tema_pagina = localStorage.getItem('tema_pagina');  

  if (tema_pagina == 'bg-claro'){
    $("body").addClass("bg-claro");
  }
  if (tema_pagina == 'bg-escuro'){
    $("body").addClass("bg-escuro");
  }else{
    $("body").addClass("bg-claro");
  }

});