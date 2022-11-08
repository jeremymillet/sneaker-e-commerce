
var nb_produit=0;
var pu=125;
var prixtotal1=0


function prixtotal(){
  prixtotal1=nb_produit*pu;
  document.getElementsByClassName("prixtotal")[0].innerText = prixtotal1;
}



document.getElementsByClassName("counting")[0].innerText = nb_produit;
document.getElementsByClassName("counting2")[0].innerText = nb_produit
function increment() {
    nb_produit = nb_produit + 1;
    document.getElementsByClassName("counting")[0].innerText = nb_produit;
    document.getElementsByClassName("counting2")[0].innerText = nb_produit
    nb_produit = nb_produit
}
function decrement() {
    if (nb_produit<=0) return;
    nb_produit = nb_produit - 1;
    document.getElementsByClassName("counting")[0].innerText = nb_produit;
    document.getElementsByClassName("counting2")[0].innerText = nb_produit
    nb_produit = nb_produit
}

const btn=document.querySelector(".panier2")
const panieroverlay=document.querySelector(".panier-overlay")

btn.addEventListener('click', () => {
  panieroverlay.classList.toggle('visible')
})

const photo1=document.querySelector(".photo1");
const fullsizeimg1=document.querySelector(".fullsizeimg1");
const croix=document.querySelector(".close")

function ouvrir2(){
    if(fullsizeimg1.style.display="none")
        {fullsizeimg1.style.display="flex"}
}

function fermez2(){
    if(fullsizeimg1.style.display='flex')
    {fullsizeimg1.style.display="none"}
    
}

const images = document.querySelectorAll("#galery img");
let imgactive=0;

for(let i = 1;i< images.length;i+=1){
    images[i].classList.add('hidden')
  }

  document.querySelector('#next').addEventListener('click',function(){
    images[imgactive].classList.add('hidden');
    imgactive+=1;
    if (imgactive>=images.length){
      imgactive=3;
    }
    images[imgactive].classList.remove('hidden');
  })
  

  document.querySelector('#prev').addEventListener('click',function(){
    images[imgactive].classList.add('hidden');
    imgactive-=1;
    if (imgactive<=0){
      imgactive=0
    }
    images[imgactive].classList.remove('hidden');
  })


for(let i = 1;i< images.length;i+=1){
    images[i].classList.add('hidden')
  }

  document.querySelector('#img1').addEventListener('click',function(){
    images[imgactive].classList.add('hidden');
    imgactive=0;
    images[imgactive].classList.remove('hidden');
  })
  
  document.querySelector('#img2').addEventListener('click',function(){
    images[imgactive].classList.add('hidden');
    imgactive=1;
    images[imgactive].classList.remove('hidden');
  })
  document.querySelector('#img3').addEventListener('click',function(){
    images[imgactive].classList.add('hidden');
    imgactive=2;
    images[imgactive].classList.remove('hidden');
  })
  document.querySelector('#img4').addEventListener('click',function(){
    images[imgactive].classList.add('hidden');
    imgactive=3;
    images[imgactive].classList.remove('hidden');
  })


  const trash=document.querySelector(".trash")
  const panieritem=document.querySelector(".article1")
  const btnadd=document.querySelector('ajoutée')
  
  function ouvriritem(){
    if(panieritem.style.display='none')
    {panieritem.style.display="flex"}
  }
  

  function fermezitem(){
    if(panieritem.style.display='flex')
    {panieritem.style.display="none"}
    
  }
const cartisempty=document.querySelector('.text-vide')
  function ouvriritem2(){
    if(cartisempty.style.display='none')
    {cartisempty.style.display="flex"}
  }
  

  function fermezitem2(){
    if(cartisempty.style.display='flex')
    {cartisempty.style.display="none"}
    
  }



const checkout=document.querySelector('.checkout')

  function ouvrircheckout(){
    if (checkout.style.display='none')
      checkout.style.display='flex'

  }
  function fermezcheckout(){
    if (checkout.style.display='flex')
      checkout.style.display='none'

  }
   

const listmobile=document.querySelector('.list-mobile')

function fermez3(){
  if (listmobile.style.display='flex')
      listmobile.style.display='none'

}


function ouvrir3(){
  if (listmobile.style.display='none')
      listmobile.style.display='flex'

}

   