const Http=new XMLHttpRequest,url="https://random-word-api.herokuapp.com/word?number=10";Http.open("GET",url),Http.send(),Http.onreadystatechange=(t=>{window.location.href=Http.response});
