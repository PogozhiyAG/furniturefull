function Basket(entries, setEntries){    
    this.entries = entries;
    this.setEntries = setEntries;

    this.add = (product) => {              
        this.setEntries(lastEntries => {
            let found = false;
            let newEntries = lastEntries.map(entry => {
                if(entry.product === product){
                    found = true;
                    if(product.available > entry.quantity){
                        entry.quantity += 1;
                    }
                }
                return entry;
            });
            if(!found){
                newEntries.push({product, quantity: 1});
            }
            return newEntries;
        });
    };

    this.set = (product, quantity) => {
        if(quantity < 0 || quantity > product.available){
            return;
        }

        this.setEntries(lastEntries => {
            let newEntries = [];  
            if(quantity > 0){
                let found = false;
                newEntries = lastEntries.map(entry => {
                    if(entry.product === product){
                        found = true;
                        entry.quantity = quantity;
                    }
                    return entry;
                });  
                if(!found){
                    newEntries.push({product, quantity});
                }
            }
            else{
                newEntries = lastEntries.filter(entry => entry.product !== product);
            }
            return newEntries;
        });
    }
    
    this.clear = () => this.setEntries([]);

    this.getTotalAmount = () => this.entries.reduce((a, p) => a + p.quantity * p.product.price, 0); 

    this.getTotalCount = () => this.entries.reduce((a, p) => a + p.quantity, 0); 
}

export default Basket;