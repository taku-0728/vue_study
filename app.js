var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if(!value) {
                return 'o'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    methods: {
        doBuy: function () {
            // 本来はここで、サーバーと通信を行う
            alert(this.totalPriceWithTax + '円のお買い上げ！')
            this.items.forEach(function (item) {
                item.quantity = 0
            })
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function (sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function () {
            return this.totalPrice >= 1000 // 1000円以上から購入可能にする
        },
        errorMessageStyle: function() {
            // canBuyが偽の時に赤く表示する
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'
            }
        }
    }
})
window.vm = vm
