// JS code writing steps
// 1
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json(); 

        console.log("User Data:", users); 

        
        const userList = document.getElementById('user-list');
        userList.innerHTML = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}


fetchUserData();

// 2
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();

        console.log("User Data:", users); 

        
        const userList = document.getElementById('user-list');
        userList.innerHTML = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}


fetchUserData();

// 3 
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 

    try {
        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();

        console.log("User Data:", users); 

        
        dataContainer.innerHTML = users.map(user => `<p>${user.name} - ${user.email}</p>`).join('');
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}


fetchUserData();

// 4 
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 

    try {
        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json(); 

        console.log("User Data:", users); 

        
        dataContainer.innerHTML = users.map(user => `<p>${user.name} - ${user.email}</p>`).join('');
    } catch (error) {
        console.error("Error fetching user data:", error);
        dataContainer.innerHTML = `<p style="color: red;">Failed to load user data. Please try again later.</p>`;
    }
}


fetchUserData();

// 5
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 
    try {
        dataContainer.innerHTML = 'Loading user data...';

        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json(); 

        dataContainer.innerHTML = '';
        console.log("User Data:", users); 

        
        dataContainer.innerHTML = users.map(user => `<p>${user.name} - ${user.email}</p>`).join('');
    } catch (error) {
        console.error("Error fetching user data:", error);
        dataContainer.innerHTML = `<p style="color: red;">Failed to load user data. Please try again later.</p>`;
    }
}


fetchUserData();

// 6 
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 

    try {
        dataContainer.innerHTML = 'Loading user data...'; 

        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json(); 

        dataContainer.innerHTML = ''; 

        console.log("User Data:", users); 

       
        const userList = document.createElement('ul');

       
        users.forEach(user => {
            const listItem = document.createElement('li'); 
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

        
        dataContainer.appendChild(userList);

    } catch (error) {
        console.error("Error fetching user data:", error);
        dataContainer.innerHTML = `<p style="color: red;">Failed to load user data. Please try again later.</p>`;
    }
}


fetchUserData();

// 7
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 

    try {
        dataContainer.innerHTML = 'Loading user data...';

        const response = await fetch(apiUrl); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json(); 

        dataContainer.innerHTML = ''; 

        console.log("User Data:", users);

        
        const userList = document.createElement('ul');

        
        users.forEach(user => {
            const listItem = document.createElement('li'); 
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

      
        dataContainer.appendChild(userList);

    } catch (error) {
        console.error("Error fetching user data:", error);
        
        
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}


fetchUserData();

// 8
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 

    try {
        dataContainer.innerHTML = 'Loading user data...'; 

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json(); N

        dataContainer.innerHTML = ''; 

        console.log("User Data:", users); 

        
        const userList = document.createElement('ul');

       
        users.forEach(user => {
            const listItem = document.createElement('li'); 
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

     
        dataContainer.appendChild(userList);

    } catch (error) {
        console.error("Error fetching user data:", error);
        
        
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}


document.addEventListener('DOMContentLoaded', fetchUserData);
