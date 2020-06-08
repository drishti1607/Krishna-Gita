//require didnt work

function randomFeedDom(numOfVerses, numOfVersesDisplayed) {
    var verseNum = randomFeed(numOfVerses, numOfVersesDisplayed); //8,3
    var i = 0;
    while(i < numOfVersesDisplayed) {
        var varVerse = document.getElementById("verse" + (i+1));
        var verseContent = verses.Verses[(verseNum[i] - 1)*2].content;
        varVerse.innerHTML = verseContent;
        var varVerseExp = document.getElementById("exp" + (i+1));
        var expContent = verses.Verses[(verseNum[i] - 1)*2 + 1].content
        varVerseExp.innerHTML = expContent;
        i++;
    }

}