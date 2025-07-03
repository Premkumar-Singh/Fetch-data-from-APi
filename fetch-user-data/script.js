const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = '';
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userDiv);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}.<br> Please check your internet connection and try again.</p>`;
    });
}

reloadBtn.addEventListener('click', fetchUserData);


fetchUserData();
