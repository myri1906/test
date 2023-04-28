
var menu = 'close';

function MenuMobile() {
  var mobile_menu = document.getElementById('mobile_menu');
  var iconmenu = document.getElementById('iconmenu');

  if (menu == 'close') {
    mobile_menu.style.width = '100%';
    menu = 'open';
    iconmenu.src = 'https://i.postimg.cc/tRxJfmHt/menu-open.png';
  } else {
    mobile_menu.style.width = '0%';
    menu = 'close';
    iconmenu.src = 'https://i.postimg.cc/4yV39n1F/menu-close.png';
  }
}












var n_img = 5;
var corrente = 1;

function succ(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

setInterval(succ, 5000);