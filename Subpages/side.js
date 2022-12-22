const product = [
  {
    id: 0,
    image: '../imgs/fries.jpeg',
    title: 'French fries',
    price: 80,
    },
  {
    id: 1,
    image: '../imgs/asp.jpeg',
    title: 'Oven Roasted Asparagus',
    price: 89,
    },
  {
    id: 2,
    image: '../imgs/broc.jpeg',
    title: 'Brocolli',
    price: 50,
    },
  {
    id: 3,
    image: '../imgs/potato.jpeg',
    title: 'Mashed Potato',
    price: 60,
    },
    {
        id: 4,
          image: '../imgs/roll.jpeg',
          title: 'Chicken Kebab',
          price: 79,
        },
        {
            id: 5,
              image: '../imgs/bean.jpeg',
              title: 'Baked Bean',
              price: 49,
            },
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) =>
{
  var { image, title, price } = item;
  return (
    `<div class='box' style="background-color:white">
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>php ${price}.00</h2>` +
    "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
    `</div>
        </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "php " + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) =>
    {
      var { image, title, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = "php " + total + ".00";
      return (
        `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }


}
