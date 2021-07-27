// APIの代わりに疑似的にJsonを返す関数
var getUsers = function (callback) {
    setTimeout(function() {
        callback(null, userData)
    }, 1000)
}

var UserList = {
    // HTML上のscriptタグのidを指定する
    template: '#user-list',
    data: function () {
        return {
            loading: false,
            users: function() { return [] }, // 初期値の空配列
            error: null
        }
    },

    // 初期化時にデータを取得する
    created: function () {
        this.fetchData()
    },
    
    // $routeの変更をwatchすることでルーティングが変更された時に再度データを取得
    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData: function () {
            this.loading = true
            // 取得したデータの結果をusersに格納する
            getUsers((function (err, users) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.users = users
                }
            }).bind(this))
        }
    }
}