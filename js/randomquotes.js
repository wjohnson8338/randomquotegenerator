function generateQuote() {
    const quotes = [   // Creating an object, array of quotes
        {
            quote: "Never put off until tommorow what can be done today",
            author: "Sensei Wu"
        },
        {
            quote: "We must be better",
            author: "Kratos"
        },
        {
            quote: "Its Lit!",
            author: "Travis Scott"
        },
        {
            quote: "Alex Smells",
            author: "alex"
        },
        {
            quote: "wick we have to wift",
            author: "tony"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    // console.log(currentQuote);

    document.getElementById("quotation").innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById("author").innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote();
    //document.getElementById("generate").addEventListener('click', generateQuote);
}