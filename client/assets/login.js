console.log("Loaded!")

document.getElementById("login-form").addEventListener("submit", async (e) => {
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

    const response = await fetch("http://localhost:4000/users/login", options);
    const data = await response.json();

    if (response.status === 200) {
        alert(`You have logged in!`)
        window.location.assign('./board.html');
    }

})
