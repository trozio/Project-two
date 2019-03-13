window.addEventListener('load', function () {

    var idToken;
    var accessToken;
    var expiresAt;

    var webAuth = new auth0.WebAuth({
        domain: 'chrisoffiong.auth0.com',
        clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN',
        responseType: 'token id_token',
        scope: 'openid profile',
        redirectUri: 'http://localhost:3000/api/profile'
    });

    // ...
    var loginBtn = document.getElementById('button');
    let logoutBtn = document.getElementById('rally');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        webAuth.authorize();
    });
    logoutBtn.addEventListener('click', function() {
    
    // Remove tokens and expiry time
    accessToken = '';
    idToken = '';
    expiresAt = 0;
    })
    
  function isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiration = parseInt(expiresAt) || 0;
    return localStorage.getItem('isLoggedIn') === 'true' && new Date().getTime() < expiration;
  }


})
function matchUser() {

}
$("submit").on("click", function() {

})