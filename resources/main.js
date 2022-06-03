    "use strict";

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.getElementsByClassName("menu-item");
    const shopNav = document.getElementsByClassName("shop-nav-wrapper");
    const logoImage = document.getElementById("logo-image");


    for(let i = 0; i < menuItems.length; i++){
        const menuItem = menuItems[i];

        menuItem.addEventListener("click", function() {
            
            for(let j = 0; j < menuItems.length; j++){
                menuItems[j].classList.remove("selected");
            }
            
            this.classList.add("selected");
            
            const dataContent = this.dataset.content;
            const contentElements = document.getElementsByClassName("content");
            for(let k = 0; k < contentElements.length; k++) {
                contentElements[k].classList.add("hidden");
            }

            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");

            if(menuItem === menuItems[0]){
                shopNav[0].classList.add("hidden");
                
            }else{
                shopNav[0].classList.remove("hidden");
            }

            // schimba imaginea logoului in functie de pagina
            if(dataContent === "your-orders" || dataContent === "order-details"){
                logoImage.setAttribute("src", "assets/logo-vip.png");
            } else if(dataContent === "reward-status"){
                logoImage.setAttribute("src", "assets/logo-gold.png");
            } else if(dataContent === "account-settings"){
                logoImage.setAttribute("src", "assets/logo-elite.png");
            } else if(dataContent === "payment"){
                logoImage.setAttribute("src", "assets/logo-member.png");
            }
        });
        
    }
});