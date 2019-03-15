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

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0; i<vars.length ;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {return pair[1];}
	}
	return(false);
}

let convertedToken = convertToken(token);

window.addEventListener('load', function() {

	var idToken;
	var accessToken;
	var expiresAt;


	if (getQueryVariable("newUser") == "true") {
		$.ajax({
			url: "http://localhost:3000/get/token",
			type: "POST",
			data: convertedToken
		}).then(function(results) {
			console.log(results);
			$("#userName").html(results.userName);
			$("#email").html(results.email);
			$("#photo").attr("src", results.photo);
			$("#background").attr("src", "./img/background.jpg");

		});
	}

	if (getQueryVariable("newUser") == "false") {
		$.ajax({
			url: "http://localhost:3000/login",
			type: "POST",
			data: convertedToken
		}).then(function(results) {
			console.log(results);
			$("#userName").html(results.userName);
			$("#email").html(results.email);
			$("#photo").attr("src", results.photo);
			$("#background").attr("src", "./img/background.jpg");

		});
	}

	var loginBtn = document.getElementById('button');
	if (loginBtn) {
		loginBtn.addEventListener('click', function(e) {
			e.preventDefault();
			var loginAuth = new auth0.WebAuth({
				domain: 'chrisoffiong.auth0.com',
				clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN',
				responseType: 'token id_token',
				scope: 'openid profile',
				redirectUri: 'http://localhost:3000/?newUser=false'
			// });	$.ajax({
			// 		url: "http://localhost:3000/login",
			// 		method: "GET"
			// 	}).then(function(response){

				})
		loginAuth.authorize();
		});
	};


	var signUpButton = document.getElementById('button3');
	if (signUpButton) {
		signUpButton.addEventListener('click', function(e) {
			e.preventDefault();
			var signUpAuth = new auth0.WebAuth({
				domain: 'chrisoffiong.auth0.com',
				clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN',
				responseType: 'token id_token',
				scope: 'openid profile',
				redirectUri: 'http://localhost:3000/?newUser=true'
			});
			signUpAuth.authorize();
		});
	}

    var logoutBtn = document.getElementById('button2');
	if (logoutBtn) {
		logoutBtn.addEventListener('click', function(e) {
			var webAuth = new auth0.WebAuth({
				domain: 'chrisoffiong.auth0.com',
				clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN',
				responseType: 'token id_token',
				scope: 'openid profile',
				redirectUri: 'http://localhost:3000/'
			});
			$.ajax({
				url: "http://localhost:3000/logout",
				method: "GET"
			}).then(function(response){
				webAuth.logout({
		            returnTo: 'http://localhost:3000/homepage.html',
		            clientID: 'hkwpOqxy86BQtd8MpVH8wpRNNw08R1FN'
		        });
			})


	    });
	}

});
