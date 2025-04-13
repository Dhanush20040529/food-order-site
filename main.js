 /* || cart show and hide function || */

    const cartCloseBtn = document.getElementById("close-btn");
    const cartContainer = document.querySelector(".cart-container");
    const cartOpenBtn = document.getElementById("cart-btn");
    const menuContainer = document.querySelector(".menu-container")
    console.log(menuContainer);
    const arrowCloseBtn = document.querySelector(".cart-header");

    arrowCloseBtn.addEventListener("click",()=>{
        cartContainer.style.display = "none";
        menuContainer.style.padding = "2.5rem 1.2rem 2.5rem 1.2rem"
        
    })

    cartCloseBtn.addEventListener("click",()=>{
        cartContainer.style.display = "none"
        menuContainer.style.padding = "2.5rem  2.5rem 0 2.5rem"
        
    })

    cartOpenBtn.addEventListener("click",()=>{
         cartContainer.style.display = "block"
         menuContainer.style.padding = "2.5rem  16rem 2rem 0"
         
    })

    document.addEventListener("DOMContentLoaded",loadContent());

    function loadContent(){
        loadFunction()
        
        
        
    }

    function loadFunction(){


        // remove cart item from cart
        
        const cartItemRemoveBtn = document.querySelectorAll(".cart-item-remove-btn");
        cartItemRemoveBtn.forEach((remove)=>{
            remove.addEventListener("click",removeItem)
        })

        //Change quantity

        const quantity = document.querySelectorAll(".qty");
        quantity.forEach((change)=>{
            change.addEventListener("change",changeQty)
        })

        // Add cart items

        const addCartBtn = document.querySelectorAll(".add-icon");
        
        addCartBtn.forEach((add)=>{
            add.addEventListener("click",addItem)
        })
        
        updateAmount()

        // place order 

        const placeOrderBtn = document.querySelector(".order-btn")

        placeOrderBtn.addEventListener("click",placeOrder);

    }
  
    let itemList = [];
     
    //remove item function

    function removeItem(event){
        if(confirm("Are you sure to remove")){
            const tittle = this.parentElement.querySelector(".cart-tittle").textContent;
            itemList = itemList.filter(el=>el.tittle != tittle)
            event.target.parentElement.parentElement.remove()
            
        }
        console.log(itemList.length)
        addedItemCount()
        loadContent()
        
       
        
        
        
    }

    //change qunatity function

    function changeQty() {
        if(isNaN(event.target.value) || event.target.value<=1){
            event.target.value = 1
        }

        loadContent()
    }
    

   

    

    
    // Add item function
    
    function addItem(){
        
        console.log(this.parentElement);
        const tittle = this.parentElement.querySelector(".food-tittle").textContent;
        const price = this.parentElement.querySelector(".food-price").textContent;
 
        const imgSrc = this.parentElement.querySelector(".img").src

        let newProduct = {tittle,price,imgSrc}
        if(itemList.find((el)=>el.tittle === newProduct.tittle)){
            alert("product Already added in cart")
            return;
        }
        else{
            itemList.push(newProduct)
        }
        console.log(itemList);
        console.log(itemList.length);


        const div = document.createElement("div");
        const cartFoodList = document.getElementById("cart-box")
    
        
        div.innerHTML = `   <div class="cart-item">
                            <div class="cart-img">
                                <img src="${imgSrc}" alt="no">
                            </div>
                            <div class="food-details">
                                <p class="cart-tittle">${tittle}</p>
                                <p class="cart-price">${price}</p>
                                <input type="number" name="qty" class="qty" value = "1">
                            </div>
                            <p class="cart-amount">Rs.130</p>
                            <div class="cart-item-remove-btn" onclick="deleteCart(event)" >
                                <i class="fa-solid fa-trash"></i>
                            </div>
                            </div>
                        `

                      

        cartFoodList.appendChild(div);
        console.log(div)
        loadContent()
        addedItemCount()

        
        
    }

    function updateAmount(){
       
        const cartItem = document.querySelectorAll(".cart-item");
        const totalAmt = document.querySelector(".total-value");

        let total = 0;

        cartItem.forEach((product) =>{
            let priceElement = product.querySelector(".cart-price");
            let price = parseFloat(priceElement.textContent.replace("Rs.",""))
            let qty = product.querySelector(".qty").value;
            
            total+=(price*qty)
            product.querySelector(".cart-amount").innerText="Rs."+price*qty;  
            
        });

        totalAmt.innerHTML = "Rs."+total;
       
    } 

    
    // cart count function
    
    function addedItemCount(){
        const cartCount = document.querySelector(".cart-count")
        console.log(cartCount)
        let count = itemList.length;
        cartCount.textContent = count;
        console.log(count) 
    }
 

    // place order function 

    function placeOrder(){
        
        if(itemList==0){
            alert("add some dish in cart")
        }
        else{
            alert("Your order is placed");
        }
        
        
    }

    
    
