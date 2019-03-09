window.addEventListener('load', function () {
    let idToken;
    let accessToken;
    let expiresAt;

    let webAuth = new auth0.WebAuth({
        domain: 'chrisoffiong.auth0.com',
        clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN',
        responseType: 'token id_token',
        scope: 'openid',
        redirectUri: window.location.href
    });

    let loginBtn = document.getElementById('btn-login');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        webAuth.authorize();
    });

});