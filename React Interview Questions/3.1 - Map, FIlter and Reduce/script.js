const products = [
  {
    "productName": "iPhone 15",
    "price": 79999,
    "category": "Electronics"
  },
  {
    "productName": "Samsung Galaxy S24",
    "price": 74999,
    "category": "Electronics"
  },
  {
    "productName": "Nike Air Max",
    "price": 8999,
    "category": "Footwear"
  },
  {
    "productName": "Levi's 511 Jeans",
    "price": 2999,
    "category": "Clothing"
  },
  {
    "productName": "Sony WH-1000XM5",
    "price": 24999,
    "category": "Electronics"
  },
  {
    "productName": "Dell Inspiron 15",
    "price": 55999,
    "category": "Computers"
  },
  {
    "productName": "Wooden Dining Table",
    "price": 15999,
    "category": "Furniture"
  },
  {
    "productName": "LG Smart TV 43 Inch",
    "price": 32999,
    "category": "Electronics"
  },
  {
    "productName": "Puma Sports T-Shirt",
    "price": 1499,
    "category": "Clothing"
  },
  {
    "productName": "Milton Water Bottle",
    "price": 499,
    "category": "Home & Kitchen"
  }
]

function ProductList(){
    const names = ["Deep","Pooja","Renuka","Deep","Keval"]
 return(
    <div>
        <h2>Rendering Lists and Conditional Operators</h2>
        <h5>
            Question 1: How does the map function work in React for rendering list? Can you provide an example?
        </h5>
        {/* 
        - Commonly used to iterate through an array and render components dynamically.
        - It allows us to create a new array of React elements based on an original array.
        */}
        <ul>
            {
                products.map((product)=>{
                    return(
                        <li key={product.productName}>
                            <strong>{product.productName}</strong> - {product.price} - Category : {product.category}
                        </li>
                    )
                })
            }
        </ul>
        <h5>Question 2: How can you filter product with a specific category?</h5>
        <ul>
            {
                products.filter((products)=> products.category === "Electronics").map((product)=>{
                    return(
                        <li key={product.productName}>
                            <strong>{product.productName}</strong> - {product.price} - Category : {product.category}
                        </li>
                    )
                })
            }
        </ul>
        <h5>Question 3: How can you render a summary of total prices for products?</h5>
        <div>
            <p>
                Total Price Summary: Rs.{" "}
                {
                    products.reduce((acc,product)=>{
                        return acc + product.price;
                    },0)
                }
            </p>
        </div>

        <h5>Question 4: Add discountPrice key with 10% discount to all the products with price more than Rs. 20 and render it.</h5>
        <ul>
            {products.filter((product)=> product.price > 20)
            .map((product)=>{
                return{
                    ...product,
                    discountedPrice: product.price * (10/100)
                }
            }).map((product)=>{
                    return(
                        <li key={product.productName}>
                            <strong>{product.productName}</strong> - {product.discountedPrice} - from : {product.price}
                        </li>
                    )
                })}
        </ul>

        <h5>Question 5: How can you filter and resuce unique elements from an array using filter in React?</h5>
        {
            names.filter((name,index)=>{
                return names.indexOf(name)=== index;
            }).map((name)=>{
                return <li>{name}</li>
            })
        }
        
    </div>
 )
}

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(ProductList))