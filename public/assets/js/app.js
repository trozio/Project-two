let apiUrl = 'http://chrisoffiong.auth0.com/userinfo';
let token = window.location.hash;

function convertToken(token) {
	let tokenObj = {};
	let hashToken = token.slice(1).split('&');
	for (let i = 0; i < hashToken.length; i++) {
		let subResult = hashToken[i].split('=');
		for (let j = 0; j < subResult.length; j++) {
			tokenObj[subResult[0]] = subResult[1];
		}
	}
	return tokenObj;
}

let convertedToken = convertToken(token);


window.addEventListener('load', function() {

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

	var loginBtn = document.getElementById('button');
	if (loginBtn) {
		loginBtn.addEventListener('click', function(e) {
			e.preventDefault();
			webAuth.authorize();
		});
	}


	var signUpButton = document.getElementById('button3');
	if (signUpButton) {
		signUpButton.addEventListener('click', function(e) {
			e.preventDefault();
			webAuth.authorize();
			$.ajax({
				type: "POST",
				url: '/api/users',
				data: convertedToken
			}).then(function(data) {
				// $('.container').html(`<p>My Name is ${data.nickname}</p><img src="${data.picture}" /><p>Email: ${data.name}</p>`);
			});
		});
	}

    var logoutBtn = document.getElementById('button2');
	if (logoutBtn) {
		logoutBtn.addEventListener('click', function(e) {
	        console.log("Event listner added.");
	        webAuth.logout({
	            returnTo: 'http://localhost:3000/homepage.html',
	            clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN'
	        });
	    });
	}

});
