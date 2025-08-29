document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const hallticket = document.getElementById('hallticket').value;
    const password = document.getElementById('password').value;

    const matchedUser = users.find(user =>
      user.email === email &&
      user.hallticket === hallticket &&
      user.password === password
    );

    if (matchedUser) {
      alert(`Welcome, ${matchedUser.name}!`);
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    } else {
      alert("Invalid credentials.");
    }
  });