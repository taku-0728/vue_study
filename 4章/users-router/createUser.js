// 疑似的に情報を更新したようにする
// 実際のアプリケーションではサーバ再度へPOSTリクエストを行う
var postUser = function (params, callback) {
    setTimeout(function () {
        // idは追加されるごとに自動的にincrementされていく
        params.id = userData.length + 1
        userData.push(params)
        callback(null, params)
    }, 1000)
}

// 新規ユーザ作成コンポーネント
var UserCreate = {
    template: '#user-create',
    data: function () {
        return {
            sending: false,
            user: this.defaultUser(),
            error: null
        }
    },

    created: function () {
    },

    methods: {
        defaultUser: function () {
            return {
                name: '',
                description: ''
            }
        },

        createUser: function () {
            // 入力パラメーターのバリデーション
            if (this.user.name.trim() === '') {
                this.error = 'Nameは必須です'
                return
            }
            if (this.user.description.trim() === '') {
                this.error = 'Descriptionは必須です'
                return
            } 
            postUser(this.user, (function (err, user) {
                this.sending = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.error = null
                    // デフォルトでフォームをリセット
                    this.user = this.defaultUser()
                    alert('新規ユーザが登録されました')
                    // ユーザ一覧ページに戻る
                    this.$router.push('/users')
                }
            }).bind(this))
        }
    }
}