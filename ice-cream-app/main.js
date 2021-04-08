const app = Vue.createApp({
    data(){
        return{
            varients: [
                {id: 1, name: 'Vanilla', price: 100},
                {id: 2, name: 'Chocolate', price: 120},
                {id: 3, name: 'Strawberry', price: 90},
                {id: 4, name: 'Orange', price: 50},
                {id: 5, name: 'Lemon', price: 30},
            ],
            cart: [],
            showModal: false
        }
    },

    methods: {
        addToCart(varientId){
            this.cart.push(this.varients.find(varient => varient.id === varientId));
        },
        removeFromCart(varientId){
            if(this.cart.length > 0){
            let position = this.cart.findIndex(varient => varient.id === varientId);
                if(position >= 0){
                    this.cart.splice(position, 1);
                }
            }
        },
        toggleModal(){
            this.showModal = !this.showModal;
        },
        clearCart(){
            this.cart = [];
        }
    },

    computed: {
        totalPrice(){
            return this.cart.reduce((total, varient) => total + varient.price, 0);
        }
    }
});