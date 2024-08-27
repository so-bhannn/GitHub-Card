const container=document.querySelector('.container');
const error=document.querySelector('.error')
    document.querySelector('button').addEventListener('click',(e)=>{
        e.preventDefault()
        const username=document.querySelector('#textbox').value;
        if(username){
            console.log(username)
            const requestURL=`https://api.github.com/users/${username}`;
            const xhr=new XMLHttpRequest();
            xhr.open('GET',requestURL);
            console.log(xhr.readyState);
            xhr.onreadystatechange=function(){
                console.log(xhr.readyState)
                if(xhr.readyState===4){
                    if(xhr.status===200){
                        data=JSON.parse(this.responseText);
                        document.querySelector('.username').textContent=username;
                        document.querySelector('img').src=data.avatar_url;
                        document.querySelector('.name').textContent=data.name;
                        document.querySelector('.followers').textContent=data.followers;
                        document.querySelector('.following').textContent=data.following;
                        document.querySelector('.location').textContent=data.location;
                        document.querySelector('.repos').textContent=data.public_repos;
                        document.querySelector('form').style.display='none';
                        document.querySelector('.github-card').style.display='block';
                        var refresh=document.querySelector('.refresh');
                        refresh.style.display='inline';
                        refresh.addEventListener('click',(e)=>{
                            location.reload();
                        })
                    }
                    else if(xhr.status===500){
                        document.querySelector('.error').innerText='The server encountered an error.';
                    }
                    else{
                        document.querySelector('.error').innerText='Invalid Username.';
                    }
                }
                }
                xhr.send();
            }
            else{
                error.textContent='Username cannot be empty.';
            }
        })