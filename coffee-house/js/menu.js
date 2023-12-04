import products from "./product.json" assert { type: "json" };

let currentCategory = 'coffee';
let currentProducts = [];
const itemCategoryButtons = document.querySelectorAll('.menu-choice-button');
let menuList = document.querySelector('.menu-list');
let list = '';

const getCurrentProduts = () => {
    currentProducts = products.filter((item) => item.category === currentCategory);
};

itemCategoryButtons.forEach((button) => {
    
    button.addEventListener ('click', event => {
        itemCategoryButtons.forEach((currentButton) => currentButton.classList.remove('active'));
        button.classList.add('active');

        currentCategory = button.querySelector('.menu-choice-button-title').innerText.toLowerCase();
        getCurrentProduts();
        showMenuList(currentProducts);
    });
});

const showMenuList = (currentProducts) => {   
  
    menuList.style.opacity = 0;  

    setTimeout(() => {
      menuList.innerHTML = '';
      list = '';
      currentProducts.forEach((item, index) => {
        list += menuItem(item, index);      
      }); 
      menuList.style.opacity = 1;
      menuList.innerHTML = list;
    }, 500);
}

function menuItem (item, index)  {
    return `<li class="menu-item">
    <article class="menu-card">
      <h2 class="hidden">menu-card</h2>
      <div class="menu-item-overflow">
        <img class="menu-item-img" src="./assets/img/${item.category}-${index+1}.jpg" alt="Image ${item.category}_${index+1}">
      </div>
      <div class="menu-item-desc">
        <strong class="menu-item-title">${item.name}</strong>
        <p class="menu-item-text">${item.description}</p>
        <span class="menu-item-price">$${item.price}</span>
      </div>
    </article>
  </li>`;
}

window.addEventListener('load', () => {
  getCurrentProduts();
  showMenuList(currentProducts);
});

