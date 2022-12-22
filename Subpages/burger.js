const product = [
  {
    id: 0,
    image: '../imgs/bean.jpeg',
    title: 'Bean Burger',
    price: 70,
    },
  {
    id: 1,
    image: '../imgs/hamb.jpeg',
    title: 'Hamburger',
    price: 89,
    },
  {
    id: 2,
    image: '../imgs/salmonb.jpeg',
    title: 'Salmon Burger',
    price: 100,
    },
  {
    id: 3,
    image: '../imgs/turkey.jpeg',
    title: 'Turkey Burger',
    price: 120,
    },
    {
        id: 4,
          image: '../imgs/veggieb.jpeg',
          title: 'Veggie Burger',
          price: 99,
        },
        {
            id: 5,
              image: '../imgs/cheese.jpeg',
              title: 'Cheese Burger',
              price: 90,
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
