function randomFeedDom(numOfVerses, numOfVersesDisplayed) {
    var verseNum = randomFeed(numOfVerses, numOfVersesDisplayed); //10,3
    var i = 0;
    while(i < numOfVersesDisplayed) {
        var varVerse = document.getElementById("verse" + (i+1));
        var verseContent = Gita.Verses[(verseNum[i] - 1)].content.shloka;
        varVerse.innerHTML = verseContent;
        var varVerseTrans = document.getElementById("translation" + (i+1));
        var transContent = Gita.Verses[(verseNum[i] - 1)].content.translation;
        varVerseTrans.innerHTML = transContent;
        var varVerseInsight = document.getElementById("insight" + (i+1));
        var insightContent = Gita.Verses[(verseNum[i] - 1)].content.insights[0][0]; //for now
        console.log(insightContent)
        varVerseInsight.innerHTML = insightContent;
        var varVerseExp = document.getElementById("explanation" + (i+1));
        var expContent = Gita.Verses[(verseNum[i] - 1)].content.insights[0][1]; //for now
        varVerseExp.innerHTML = expContent;
        i++;
    }
}


//What is left: take care of case where there is no insight, add for loop for multiple insights and explanations, alignment, addition of picture