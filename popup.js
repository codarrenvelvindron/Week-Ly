//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "Peace begins with a smile";
authors[0] = "Mother Teresa";
quotes[1] = "The trouble is you think you have time.";
authors[1] = "Buddha";
quotes[2] = "Life is a shipwreck, but we must not forget to sing in the lifeboats.";
authors[2] = "Voltaire";
quotes[3] = "Whatever you are, be a good one.";
authors[3] = "Abraham Lincoln";
quotes[4] = "Try and fail, but never fail to try";
authors[4] = "Jared Leto";
quotes[5] = "Man invented language to satisfy his deep need to complain.";
authors[5] = "Lily Tomlin";
quotes[6] = "Better be drunk than in bad company.";
authors[6] = "Codarren Velvindron";
quotes[7] = "Success is a lousy teacher. It seduces smart people into thinking they can't lose";
authors[7] = "Bill Gates";
quotes[8] = "A great writer reveals the truth even if he or she does not wish to.";
authors[8] = "Tom Bissell";
quotes[9] = "The journey of a thousand miles begins with one step.";
authors[9] = "Lao Tzu";
quotes[10] = "Enlightened people seldom or never possess a sense of responsibility.";
authors[10] = "George Orwell";

window.onload = function start(){
	index = Math.floor(Math.random() * quotes.length);
	var quoteNew = quotes[index];
	var authorNew = authors[index];
	el1 = document.getElementById('quote');
	el1.innerHTML = quoteNew;
	el2 = document.getElementById('author');
	el2.innerHTML = '~~' + authorNew;
}
