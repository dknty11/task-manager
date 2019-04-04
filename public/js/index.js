$('button').click(function (e) {
    console.log('here is index file')
    e.preventDefault();
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    $.ajax({
        url: '/users/login',
        method: 'POST',
        data: {
            username: username,
            password: password
        }
    }).done(function(res) {
        // var bodyContent = response.match(/<body>[\s\S]+<\/body>/)[0]
        // console.log(bodyContent)
        // $('body').html(bodyContent);
        window.location.href = '/tasks'
    }).fail(function(e) {
        console.log(e.status)
        if (e.status == 400) {
            alert('Your email or password is wrong');
        }
    })
})