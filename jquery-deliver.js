const Http = new XMLHttpRequest();
const url = 'https://random-word-api.herokuapp.com/word?number=10';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
    window.location.href = Http.response
}