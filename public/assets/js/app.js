window.addEventListener('load', function () {

    var idToken;
    var accessToken;
    var expiresAt;

    var webAuth = new auth0.WebAuth({
        domain: 'chrisoffiong.auth0.com',
        clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN',
        responseType: 'token id_token',
        scope: 'openid profile',
        redirectUri: 'http://localhost:3000/'
    });

    // ...
    var loginBtn = document.getElementById('button');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        webAuth.authorize();
    });
})
