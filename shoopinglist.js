class ShoppingItem { // change details within
    
    _itemName;
    _itemQuantity;
    constructor(itemName, itemQuantity,){
      this._itemName = itemName;
      this._itemQuantity = itemQuantity;
    }
    get itemName(){
      return this._itemName;
    }
    set itemQuantity(newQuantity){
        this._itemQuantity;
      }
    get itemQuantity(){
      return this._itemQuantity;
    } 
  }
  
  class Shoppinglist { //change details within
    
    shoppingbasket;
      constructor(shoppingBasket){
        this.shoppingbasket = shoppingBasket;
        this.shoppingBasket = [];
      }
      add(item){
        this.shoppingBasket.push(item)
        return "This item has been added to your list";
    }
      remove(item){
        for (let i = 0; i < this.shoppingBasket.length; i++) {
          if (this.shoppingBasket[i].itemName === item) {
            this.shoppingBasket.splice(i,1);
            return `Item: '${item}'has been removed from your shopping list.`;
          }
        }
        return "Item not found.";
    }
      
        getListOfItems(){
        for (let i = 0; i < this.shoppingBasket.length; i++){
          console.log(this.shoppingBasket[i].itemName);
        }
        return `End of list.`
    }

       getnumberOfItems(){
        return `Items in your list: ${this.shoppingBasket.length}`;
    }
 }

let dorisList = new Shoppinglist()
let item1 = new ShoppingItem("Milk", 1);
let item2 = new ShoppingItem("Sugar", 6);
console.log(item2.itemName);

console.log(item2.itemQuantity = 12);
console.log (dorisList.add(item1));
console.log (dorisList.getnumberOfItems());
console.log (dorisList.add(item2));

console.log(dorisList.add(new ShoppingItem("sugar", 4)));
console.log(dorisList.getnumberOfItems());
console.log(dorisList.getListOfItems());
console.log(dorisList.remove("Milk"));

  
