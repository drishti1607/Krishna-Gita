function randomFeedDom(numOfVerses, numOfVersesDisplayed) {
    var verseNum = randomFeed(numOfVerses, numOfVersesDisplayed); //10,3
    var i = 0;
    while(i < numOfVersesDisplayed) {
        var devanagri = document.getElementById("devanagri" + (i+1));
        var devanagriContent = Gita.Verses[(verseNum[i] - 1)].content.devanagri;
        devanagri.innerHTML = devanagriContent;
        var varVerse = document.getElementById("verse" + (i+1)); 
        var verseContent = Gita.Verses[(verseNum[i] - 1)].content.shloka;
        varVerse.innerHTML = verseContent;
        var varVerseTrans = document.getElementById("translation" + (i+1));
        var transContent = Gita.Verses[(verseNum[i] - 1)].content.translation;
        varVerseTrans.innerHTML = transContent;
        var k = 0;
        while(k < Gita.Verses[(verseNum[i] - 1)].content.insights.length ) {
            if(Gita.Verses[(verseNum[i] - 1)].content.insights[k][0] != "") {
                var insightImg= document.createElement("img");
                insightImg.src="../Assets/Pictures/insight.png";
                insightImg.setAttribute("class","Img");
                var insightText=document.createElement("p");
                insightText.setAttribute("class","subText");
                insightText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[k][0];
                var para = document.getElementById("randomVerse" + (i+1));
                para.appendChild(insightImg);
                para.appendChild(insightText);
                var br = document.createElement("br");
                para.appendChild(br);
            }
            if(Gita.Verses[(verseNum[i] - 1)].content.insights[k][1] != "") {
                var expImg= document.createElement("img");
                expImg.src="../Assets/Pictures/explanation.png";
                expImg.setAttribute("class","Img");
                var expText=document.createElement("p");
                expText.setAttribute("class","subText");
                expText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[k][1];
                var para = document.getElementById("randomVerse" + (i+1));
                para.appendChild(expImg);
                para.appendChild(expText);
            }
            k++;
        }
        i++;
    }
}
