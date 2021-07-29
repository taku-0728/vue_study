// ユーザ詳細ページのコンポーネント定義
var User = {
    template:
        '<div class="user">'
        + '<h2>ユーザIDは {{ $route.params.userId }} です。</h2>'
        + '<router-link :to="\'/user/\' +$route.params.userId + \'/profile\'">ユーザのプロフィールページをみる</router-link>'
        + '<router-link :to="\'/user/\' +$route.params.userId + \'/posts\'">ユーザの投稿ページをみる</router-link>'
        + '<router-view></router-view>'
        + '</div>'
}

// ユーザ詳細ページ内で部分的に表示されるユーザのプロフィールページ
var UserProfile = {
    template:
        '<div class="user-profile">'
        + '<h3>こちらはユーザ {{ $route.params.userId }} のプロフィールページです。</h3>'
        + '</div>'
}

// ユーザ詳細ページないで部分的に表示されるユーザの投稿ページ
var UserPosts = {
    template:
        '<div class="user-posts">'
        + '<h3>こちらはユーザ {{ $route.params.userId }} の投稿ページです</h3>'
        + '</div>'
}