document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password")
        })
    }

    const response = await fetch("http://localhost:4000/users/register", options);
    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
        alert(`User ${data.username} created!`)
        window.location.assign('./login.html');
    }

})
