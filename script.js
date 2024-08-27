const container=document.querySelector('.container');
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
                console.log(data);
                }
                else if(xhr.status===500){
                    console.log('The server encountered an error.')
                }
                else{
                    console.log('Invalid Username.')
                }
            }
            }
            xhr.send();
        }
        else{
            console.log('Enter A Valid Username cannot be empty.')
        }
    })