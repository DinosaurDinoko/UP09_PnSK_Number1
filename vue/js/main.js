let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        //задаёт уникальное свойство объекту
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],
        cart: 0
    },
    methods: {
        // метод для отслеживания события click
        addToCart() {
            this.cart += 1
        },
        //метод для обновлени продукта при наведении
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})
