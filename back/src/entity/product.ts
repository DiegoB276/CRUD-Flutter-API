export class Product{
    public name: String;
    public price: Number;
    public desc: String;

    constructor(name: String, price: Number, desc: String){
        this.name = name;
        this.price = price;
        this.desc = desc;
    }
}


export default Product;