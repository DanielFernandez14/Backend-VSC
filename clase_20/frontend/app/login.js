const form = document.querySelector('#register-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const inputUserName = document.getElementById("register-username"); 
  const inputEmail = document.getElementById("register-email"); 
  const inputPassword = document.getElementById("register-password"); 

  const newDataUser = {username: inputUserName.value, email: inputEmail.value, password: inputPassword.value};

  const response = await fetch('http://localhost:1234/api/auth/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newDataUser)
})

const data = await response.json()

inputUserName.value = '';
inputEmail.value = '';
inputPassword.value = '';

console.log(data)

})



