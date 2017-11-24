function shuffle(words) {
	var newText = [], i, phraseLength;
	while ( words.length ) {
		i = parseInt( Math.random() * words.length -1, 10 );
		phraseLength = parseInt( Math.random() * 9, 10 );
		newText = newText.concat(words.splice(i, phraseLength));
	}
	return newText;
}

function cutup(text) {
	var words = text.replace(/\n\r/g, ' ').split(' ');
	var cut = shuffle(words);
  return cut.join(' ').toLowerCase();
}

module.exports = cutup;
