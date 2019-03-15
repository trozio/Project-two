$("#formValidate").validate({
    rules: {
        // uname: {
        //     required: true,
        //     minlength: 5
        // },
        email: {
            required: true,
            email: true
        },
        cemail: {
            required: true,
            email: true,
            equalTo: "#email"
        },
        password: {
            required: true,
            minlength: 5
        },
        cpassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        
    },
    //For custom messages
    messages: {
        uname: {
            // required: "Enter a username",
            minlength: "Enter at least 5 characters"
        },
        // curl: "Enter your website",
    },
    errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});