const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const registerForm = document.querySelector(".registerForm");

// create array of object to store data from input
const users = [];
registerForm.onsubmit = function (e) {
  e.preventDefault();
  const user = {
    fname: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  users.push(user);
  console.log(users);
  display(users);
};

// display user data in table
const display = function (user) {
  let data = "";
  const tbody = document.querySelector("tbody");
  for (let user of users) {
    data += `
    <tr>
    <td>${user.fname}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    </tr>
    `;
  }
  tbody.innerHTML = data;
};
