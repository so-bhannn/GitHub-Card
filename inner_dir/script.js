const container=document.querySelector('.container');
const error=document.querySelector('.error')
document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault()
    const username = document.querySelector('#textbox').value;
    if (username) {
        const requestURL = `https://api.github.com/users/${username}`;
        fetch(requestURL)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 500) {
                        throw new Error('The server encountered an error.');
                    } else {
                        throw new Error('Invalid Username.');
                    }
                }
                return response.json();
            })
            .then(data => {
                document.querySelector('.username').textContent = username;
                document.querySelector('img').src = data.avatar_url;
                document.querySelector('.name').textContent = data.name;
                document.querySelector('.followers').textContent = data.followers;
                document.querySelector('.following').textContent = data.following;
                document.querySelector('.location').textContent = data.location;
                document.querySelector('.repos').textContent = data.public_repos;
                document.querySelector('form').style.display = 'none';
                document.querySelector('.github-card').style.display = 'block';
                var refresh = document.querySelector('.refresh');
                refresh.style.display = 'inline';
                refresh.addEventListener('click', (e) => {
                    location.reload();
                });
            })
            .catch(error => {
                document.querySelector('.error').innerText = error.message;
            });
    } else {
        document.querySelector('.error').innerText = 'Please enter a username.';
    }
})    