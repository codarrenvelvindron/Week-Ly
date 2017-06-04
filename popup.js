//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "As you think, so shall you become.";
authors[0] = "Bruce Lee";
quotes[1] = "Love is like a virus. It can happen to anybody at any time";
authors[1] = "Maya Angelou";
quotes[2] = "Heaven lent you a soul, Earth will lend a grave.";
authors[2] = "Christian Nestell Bovee";
quotes[3] = "Space is the breath of art.";
authors[3] = "Frank Lloyd Wright";
quotes[4] = "A liar will not be believed, even when he speaks the truth.";
authors[4] = "Aesop";
quotes[5] = "We know the road to freedom has always been stalked by death.";
authors[5] = "Angela Davis";
quotes[6] = "Courage is found in unlikely places";
authors[6] = "J.R.R.Tolkien";
quotes[7] = "One good thing about music, when it hits you, you feel no pain.";
authors[7] = "Bob Marley";
quotes[8] = "Be your own competitor.";
authors[8] = "Lorina Tsivinirana";
quotes[9] = "We forge the chains we wear in life.";
authors[9] = "Charles Dickens";
quotes[10] = "The wise man does at once what the fool does finally.";
authors[10] = "Niccolo Machiavelli";

window.onload = function start(){
	index = Math.floor(Math.random() * quotes.length);
	var quoteNew = quotes[index];
	var authorNew = authors[index];
	el1 = document.getElementById('quote');
	el1.textContent = quoteNew;
	el2 = document.getElementById('author');
	el2.textContent = '~~' + authorNew;
}
