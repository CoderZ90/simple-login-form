
function login() {
    var userID = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if (userID == 'secretName' && password == 'secretpassword1234') {
        location.href = './page.html'
    } else {
        alert('Incorrect username or password');
    }
}