var apiUrl = 'http://chrisoffiong.auth0.com/userinfo';
var token = window.location.hash;

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

let result = convertToken(token);

function callAPI() {

    $.ajax({
        type: "POST",
        url: '/get/token',
        data: result
    }).then(function (data) {
        $('.container').html(`
            <p>My Name is ${data.nickname}</p>
            <img src="${data.picture}" />
            <p>Email: ${data.name}</p>

        `);
    })
}

callAPI();
