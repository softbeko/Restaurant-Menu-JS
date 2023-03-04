
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
/* GEREKLİ OLAN ELEMTLERİ SEÇİYORUZ  */
let SingleItem = document.querySelector("#SingleItem");
let button = document.querySelector(".btn-container");
let arrayButton =["All","Korea" , "Japan" , "China"];
/* Filter Buton Classın içine atıyoruz. Ve gerekli Idleri veriyoruz */
for(i=0;i<=arrayButton.length-1;i++){
let newId = document.createElement("button");
newId.innerHTML = `${arrayButton[i]}`;
newId.setAttribute("class" , "btn btn-outline-dark mx-2 px-4" );
newId.setAttribute("id" , `${arrayButton[i]}` );
newId.setAttribute("onclick" , `filterSelection('${arrayButton[i]}')` );
button.appendChild(newId);
};



//Filtreleme Tuşlarının Ayarları
function filterSelection(c){
  //Korea Olmayan diğer Classlar None
  if(c=="Korea"){
    document.querySelectorAll(".Korea").forEach(function(index){
      index.style.display = "flex";
    })
    document.querySelectorAll(".China").forEach(function(index){
      index.style.display = "none";
    })
    document.querySelectorAll(".Japan").forEach(function(index){
      index.style.display = "none";
    })
   }
   //China Olmayan diğer Classlar None
   if(c=="China"){
    document.querySelectorAll(".China").forEach(function(index){
      index.style.display = "flex";
    })
    document.querySelectorAll(".Korea").forEach(function(index){
      index.style.display = "none";
    })
    document.querySelectorAll(".Japan").forEach(function(index){
      index.style.display = "none";
    })
   }
   //Japan Olmayan diğer Classlar None
   if(c=="Japan"){
    document.querySelectorAll(".Japan").forEach(function(index){
      index.style.display = "flex";
    })
    document.querySelectorAll(".China").forEach(function(index){
      index.style.display = "none";
    })
    document.querySelectorAll(".Korea").forEach(function(index){
      index.style.display = "none";
    })
   }
   //All Olmayan diğer Classlar None
   if(c=="All"){
    document.querySelectorAll(".All").forEach(function(index){
      index.style.display = "flex";
    })
   }
}
/* ÜST TUŞLAR BİTTİ MENÜYE GEÇİYORUZ */
for(a=0;a<=menu.length-1;a++){
let SingleCard = document.createElement("div");
SingleCard.setAttribute("id" , "single-item");
SingleCard.setAttribute("class" , `menu-items col-lg-6 col-sm-12  ${menu[a].category} All` )
SingleCard.innerHTML=`  
<img src="${menu[a].img}" alt="${menu[a].title}" class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[a].title}</h4>
    <h4 class="price">${menu[a].price}</h4>
  </div>
  <div class="menu-text">
   ${menu[a].desc}
  </div>
</div>
</div>  `;
SingleItem.appendChild(SingleCard);
}