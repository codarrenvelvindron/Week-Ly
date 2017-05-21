//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "The good times of today,are the sad thoughts of tomorrow";
authors[0] = "Bob Marley";
quotes[1] = "Forgive your enemies, but never forget their names.";
authors[1] = "John F.Kennedy";
quotes[2] = "I wish I could write as mysterious as a cat.";
authors[2] = "Edgar Allan Poe";
quotes[3] = "I'm sorry,if you were right, I'd agree with you";
authors[3] = "Robin Williams";
quotes[4] = "I've always believed that if you put in the work, the results will come";
authors[4] = "Michael Jordan";
quotes[5] = "Fear is stupid, so are regrets";
authors[5] = "Marilyn Monroe";
quotes[6] = "Peace begins with a smile.";
authors[6] = "Mother Teresa";
quotes[7] = "People won't have time for you if you are always angry and complaining";
authors[7] = "Stephen Hawking";
quotes[8] = "Do not take life too seriously. You will never get out of it alive.";
authors[8] = "Elbert Hubbard";
quotes[9] = "Everything is funny, as long as it's happening to somebody else.";
authors[9] = "Will Rogers";
quotes[10] = "There are only three things women need in life: Food, water and compliments.";
authors[10] = "Chris Rock";

window.onload = function start(){
	index = Math.floor(Math.random() * quotes.length);
	var quoteNew = quotes[index];
	var authorNew = authors[index];
	el1 = document.getElementById('quote');
	el1.textContent = quoteNew;
	el2 = document.getElementById('author');
	el2.textContent = '~~' + authorNew;
}
