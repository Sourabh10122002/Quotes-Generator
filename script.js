const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function copyQuote() {
    var copyText = document.getElementById("quote").innerHTML;

    var textarea = document.createElement("textarea");
    textarea.value = copyText;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);
}


getQuote(api_url);
