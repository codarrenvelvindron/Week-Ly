//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "Wanting to be someone else is a waste of the person you are";
authors[0] = "Kurt Cobain";
quotes[1] = "Sleep is the best meditation";
authors[1] = "Dalai Lama";
quotes[2] = "Great companies are built on great products.";
authors[2] = "Elon Musk";
quotes[3] = "Don't find fault, find a remedy";
authors[3] = "Henry Ford";
quotes[4] = "Every blessing ignored becomes a curse";
authors[4] = "Paulo Coelho";
quotes[5] = "It's good to make your brain work more than your body";
authors[5] = "Conor Mcgregor";
quotes[6] = "Youth is a gift of nature, but age is a work of art";
authors[6] = "Stanislaw Jerzy Lec";
quotes[7] = "Progress is man's ability to complicate simplicity";
authors[7] = "Thor Heyerdahl";
quotes[8] = "Being pregnant is an occupational hazard of being a wife";
authors[8] = "Queen Victoria";
quotes[9] = "Isn't it amazing how much stuff we get done the day before vacation?";
authors[9] = "Zig Ziglar";
quotes[10] = "The giving of love is an education in itself.";
authors[10] = "Eleanor Roosevelt";

window.onload = function start(){
	index = Math.floor(Math.random() * quotes.length);
	var quoteNew = quotes[index];
	var authorNew = authors[index];
	el1 = document.getElementById('quote');
	el1.textContent = quoteNew;
	el2 = document.getElementById('author');
	el2.textContent = '~~' + authorNew;
}
