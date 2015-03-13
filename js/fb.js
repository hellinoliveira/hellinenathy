window.fbAsyncInit = function() {
    FB.init({
        appId      : '797118780374988',
        xfbml      : true,
        version    : 'v2.2'
    });
    FB.api(
        "/4/picture",
        {
            "redirect": false,
            "height": 200,
            "width": 200,
            "type": "normal"
        },
        function (response) {
            if (response && !response.error) {
                console.log(response)
                $('#fb-photo').html(response)
            }
        }
    );
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
