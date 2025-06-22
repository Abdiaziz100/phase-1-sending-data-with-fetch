// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      const idElement = document.createElement("p");
      idElement.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}

// Connect to the form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("user-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    submitData(nameInput.value, emailInput.value);
    form.reset();
  });
});

