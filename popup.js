//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "Big results require big ambitions.";
authors[0] = "Heraclitus";
quotes[1] = "We don't see things as they are, we see things as we are";
authors[1] = "Anais Nin";
quotes[2] = "Escapism is survival to me.";
authors[2] = "Johnny Depp";
quotes[3] = "The production of too many useful things results in too many useless people.";
authors[3] = "Karl Marx";
quotes[4] = "A dream you dream alone is only a dream. A dream you dream together is reality.";
authors[4] = "Yoko Ono";
quotes[5] = "If someone is right for you, you'll know it.";
authors[5] = "Rihanna";
quotes[6] = "Skill is the unified force of experience, intellect and passion in their operation.";
authors[6] = "John Ruskin";
quotes[7] = "I'm a perfectionnist, so my bossiness definitely comes out.";
authors[7] = "Emma Watson";
quotes[8] = "When placed in command, take charge.";
authors[8] = "Norman Schwarzkopf";
quotes[9] = "I'm a lesbian, an Aquarian and a vegetarian.";
authors[9] = "Ellen De Generes";
quotes[10] = "The possession of anything begins in the mind.";
authors[10] = "Bruce lee";

window.onload = function start(){
	index = Math.floor(Math.random() * quotes.length);
	var quoteNew = quotes[index];
	var authorNew = authors[index];
	el1 = document.getElementById('quote');
	el1.textContent = quoteNew;
	el2 = document.getElementById('author');
	el2.textContent = '~~' + authorNew;
}
