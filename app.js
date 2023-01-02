// gathering important dom elements
const quote_text = document.querySelector(".main_quote");
const quote_text_author = document.querySelector(".main_quote_author");
const generate_button = document.querySelector(".quote_btn");
const tweet_button = document.querySelector(".tweet_btn");

function functionality(quote, author) {
    quote_text.textContent = quote;
    quote_text_author.textContent = author;
}
//get quotes from API
let apiQuotes = [];
async function getQuotes() {
    const apiurl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiurl);
        apiQuotes = await response.json();
        let quote_data = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        let quote_gen = quote_data['text'];
        let quote_gen_author = quote_data['author'];
        if (quote_gen_author == "") {
            quote_gen_author = "unknown";
        }
        functionality(quote_gen, quote_gen_author);
        // return [quote_gen, quote_gen_author];
    } catch (error) {
        console.log(error);
    }
}
// data = getQuotes();
function tweet() {
    const twitterurl = `https://twitter.com/intent/tweet?text=${quote_text.textContent} -${quote_text_author.textContent}`;
    window.open(twitterurl, "_blank");
}
generate_button.addEventListener("click", getQuotes);
tweet_button.addEventListener('click', tweet);