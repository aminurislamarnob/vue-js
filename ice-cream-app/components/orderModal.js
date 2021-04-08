app.component("order-modal", {
    props: {
        cart: {
            type: Array,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="react" id="modal">
        <div class="backdrop" v-on:click="hideOrderForm"></div>
        <div class="modalBody">
        <div class="formContainer react" id="orderForm">
            <h1>Complete the form below and hit submit</h1>
            <p v-if="errors.length > 0">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <form class="orderForm" @submit="onSubmit">
            <ul>
                <li>
                <input
                    type="text"
                    v-model="name"
                    class="fieldStyle fieldSplit alignLeft"
                    placeholder="Name"
                />
                <input
                    type="text"
                    v-model="phone"
                    class="fieldStyle fieldSplit alignRight"
                    placeholder="Phone no."
                />
                </li>
                <li>
                <input
                    type="text"
                    v-model="email"
                    class="fieldStyle fieldFull"
                    placeholder="Email"
                />
                <input
                    type="hidden"
                    v-model.number="total"
                />
                </li>
                <li>
                <textarea
                    v-model="address"
                    class="fieldStyle"
                    placeholder="Address"
                ></textarea>
                </li>
                <li>
                <input type="submit" value="Submit Order" />
                </li>
            </ul>
            </form>
        </div>
        </div>
    </div>`,
    data(){
        return{
            errors: [],
            name: '',
            phone: '',
            email: '',
            address: ''
        }
    },
    methods: {
        hideOrderForm(){
            this.$emit("toggle-order-form");
        },
        clearCartItems(){
            this.$emit("clear-cart-items");
        },
        onSubmit(e){
            if (this.name && this.phone && this.email && this.total) {
                let orderDetails = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    total: this.total,
                    address: this.address
                }
                console.log(orderDetails);
                this.hideOrderForm();
                this.clearCartItems();
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.phone) {
                this.errors.push('Phone required.');
            }
            if (!this.email) {
                this.errors.push('Email required.');
            }
            if (!this.total) {
                this.errors.push('Total required.');
            }
            e.preventDefault();
            
        }
    }
});