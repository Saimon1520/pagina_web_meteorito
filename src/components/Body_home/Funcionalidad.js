var numero=1;
const adelantar =  () =>{
    numero = numero + 1;
    if(numero>10)
        numero=1;
        var noticias = document.getElementsByClassName('noticia1');
        noticias.src="imgs/foto1.jpg" + numero + ".jpg";
}
function atras(){
}