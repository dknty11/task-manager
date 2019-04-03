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
    }).done(function() {
        console.log('Success!')
    }).fail(function(e) {
        console.log(e.status)
        if (e.status == 400) {
            alert('Your email or password is wrong');
        }
    })
})