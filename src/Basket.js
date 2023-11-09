function Basket(basketItems, setBasketItems){    
    this.basketItems = basketItems;
    this.setBasketItems = setBasketItems;

    this.add = (product) => {              
        let found = false;
        let newItems = this.basketItems.map(entry => {
            if(entry.product === product){
                found = true;
                if(product.available > entry.quantity){
                    entry.quantity += 1;
                }
            }
            return entry;
        });
        if(!found){
            newItems.push({product, quantity: 1})
        }
        this.setBasketItems(newItems);
    };

    this.set = (product, quantity) => {
        if(product.available < quantity){
            return;
        }
        let newItems = [];  
        if(quantity > 0){
            let found = false;
            newItems = this.basketItems.map(entry => {
                if(entry.product === product){
                    found = true;
                    entry.quantity = quantity;
                }
                return entry;
            });  
            if(!found){
                newItems.push({product, quantity})
            }
        }
        else{
            newItems = this.basketItems.filter(entry => entry.product !== product)
        }
        this.setBasketItems(newItems);
    }
    
    this.getTotalAmount = () => this.basketItems.reduce((a, p) => a + p.quantity * p.product.price, 0); 
    this.getTotalCount = () => this.basketItems.reduce((a, p) => a + p.quantity, 0); 

    this.clear = () => this.setBasketItems([]);
}

export default Basket;