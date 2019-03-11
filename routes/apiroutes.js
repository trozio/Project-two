let axios = require('axios')

function GetAccessToken() {
    $.ajax({
        type: "GET",
        url: "https://localhost:3000/Account/GetAccessTokenAsync",
        contentType: 'json',
        dataType: 'json',
        success: function (data) {
            return JSON.stringify(data)
        }
    });
}

GetAccessToken();