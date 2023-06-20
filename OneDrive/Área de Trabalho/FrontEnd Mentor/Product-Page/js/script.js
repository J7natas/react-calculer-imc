
let efect = document.getElementById('efect');
let cardImg = document.getElementById('card').addEventListener('click', handleClick);
let img = document.querySelector('.product-images img');
let img1 = document.querySelector('.img-1');
let img2 = document.querySelector('.img-2');
let img3 = document.querySelector('.img-3');
let banner = document.querySelector('.banne img');
let input = document.querySelector('#text');
let element = document.getElementById("element");
let Delete = document.getElementById('Image-js');
let iconCard = document.getElementById('icon-Card');
let ActiveImge = document.getElementById('ActiveImge');
let Banner = document.getElementById('Banner-Active');

let bg1 = document.getElementById('bg1');
let extend1 = document.getElementById('extend1');
let extend2 = document.getElementById('extend2');
let extend3 = document.getElementById('extend3');
let extend4 = document.getElementById('extend4');

function handleClick() {
    if(efect.style.display == "none"){
        efect.style.display = 'block';
    }else {
        efect.style.display = 'none'
    }
}
;
ActiveImge.style.border = '2px solid orange';
ActiveImge.style.opacity = '0.5'

function addBorder(){

    img1.style.border = 'none';
    img1.style.opacity = '1';
    img2.style.border = 'none';
    img2.style.opacity = '1';
    img3.style.border = 'none';
    img3.style.opacity = '1';

    extend1.style.border = 'none';
    extend1.style.opacity = '1';

    ActiveImge.style.border = '2px solid orange';
    ActiveImge.style.opacity = '0.5';
    banner.src = '../images/image-product-1.jpg'

    if(extend1.style.border == 'none'){
       extend1.style.border = '2px solid orange';
       extend1.style.opacity = '0.5';
        bg1.src = '../images/image-product-1.jpg'
    }

    extend2.style.border = 'none';
    extend2.style.opacity = '1';
    extend3.style.border = 'none';
    extend3.style.opacity = '1';
    extend4.style.border = 'none';
     extend4.style.opacity = '1';

}

function addBorder1(){

    img.style.border = 'none';
    img.style.opacity = '1';
    img1.style.border = 'none';
    img1.style.opacity = '1';
    img2.style.border = 'none';
    img2.style.opacity = '1';
    img3.style.border = 'none';
    img3.style.opacity = '1';

    extend2.style.border = 'none';
    extend2.style.opacity = '1';

    if(img1.style.border == 'none'){
        img1.style.border = '2px solid orange';
        img1.style.opacity = '0.5';
        banner.src = '../images/image-product-2.jpg'
    }
    if(extend2.style.border == 'none'){
        extend2.style.border = '2px solid orange';
        extend2.style.opacity = '0.5';
        bg1.src = '../images/image-product-2.jpg'
     }
 
     extend1.style.border = 'none';
     extend1.style.opacity = '1';
     extend3.style.border = 'none';
     extend3.style.opacity = '1';
     extend4.style.border = 'none';
     extend4.style.opacity = '1';
}

function addBorder2(){

    img.style.border = 'none';
    img.style.opacity = '1';
    img1.style.border = 'none';
    img1.style.opacity = '1';
    img2.style.border = 'none';
    img2.style.opacity = '1';
    img3.style.border = 'none';
    img3.style.opacity = '1';

    extend3.style.border = 'none';
    extend3.style.opacity = '1';

    if(img2.style.border == 'none'){
        img2.style.border = '2px solid orange';
        img2.style.opacity = '0.5';
        banner.src = '../images/image-product-3.jpg'
    }
    if(extend3.style.border == 'none'){
        extend3.style.border = '2px solid orange';
        extend3.style.opacity = '0.5';
        bg1.src = '../images/image-product-3.jpg'
    }

    extend1.style.border = 'none';
     extend1.style.opacity = '1';
     extend2.style.border = 'none';
     extend2.style.opacity = '1';
     extend4.style.border = 'none';
     extend4.style.opacity = '1';

}

function addBorder3(){

     img.style.border = 'none';
     img.style.opacity = '1';
     img1.style.border = 'none';
     img1.style.opacity = '1';
     img2.style.border = 'none';
     img2.style.opacity = '1';
     img3.style.border = 'none';
    img3.style.opacity = '1';

    extend4.style.border = 'none';
    extend4.style.opacity = '1';

    if(img3.style.border == 'none'){
        img3.style.border = '3px solid orange';
        img3.style.opacity = '0.5';
        banner.src = '../images/image-product-4.jpg'
    }
    if(extend4.style.border == 'none'){
        extend4.style.border = '2px solid orange';
        extend4.style.opacity = '0.5';
        bg1.src = '../images/image-product-4.jpg'
    }

     extend1.style.border = 'none';
     extend1.style.opacity = '1';
     extend2.style.border = 'none';
     extend2.style.opacity = '1';
     extend3.style.border = 'none';
     extend3.style.opacity = '1';
}

let cont = 0;

function AddCount(){
    cont++;
    input.innerHTML = cont;
}

function Diminuir() {
    if(input.innerHTML === 0 || input.innerHTML > 0){
        cont--;
        input.innerHTML = cont;
    }
    
}

function DeleteItem() {
    element.innerHTML = `
    <div> 
        <p>Your cart is empty</p>
    </div>
    `
    iconCard.innerHTML = ''

}

function Onsubmit(){
    element.innerHTML = `
    <div id="Card-submit">
        <h4>Succes</h4>
    </div>
    `
    iconCard.innerHTML = ''
}


function handlerButton(){

    let valorInicial = 125;

    element.innerHTML = `
        <div>
        <div class="flex">
        <img class="Img-js" style="width:'50px'" src='../images/image-product-1-thumbnail.jpg' />
        <p class="Pjs">Fall Limited Edition Snikers <br>
        $125.00 x ${cont} <h5>$${valorInicial * cont}</h5>
        <p>
        <img onClick="DeleteItem()" id="Image-js" src="../images/icon-delete.svg" />
        </div>
         <button onClick="Onsubmit()">Finalizar</button>
        </div>

    `
        iconCard.innerHTML = `
            <div id="Bola-orange">
                ${cont}
            </div>
        `
    input.innerHTML = 0;
    cont = 0;
}

function expandBaner(){
    Banner.style.display = 'block'
}

function handlerClose(){
    Banner.style.display = 'none'
}