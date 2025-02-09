
    let cart = [];

    function addToCart(name, price, image) {

        const item = { name, price, image };

        cart.push(item);

        localStorage.setItem('cart', JSON.stringify(cart));

        
    }

    function loadCart() {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            cart = JSON.parse(cartData);
        }
    }

    window.onload = loadCart;
