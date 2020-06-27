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
        var para = document.getElementById("randomVerse" + (i+1));
        /*
        while(k < Gita.Verses[(verseNum[i] - 1)].content.insights.length ) {
            if(Gita.Verses[(verseNum[i] - 1)].content.insights[k][0] != "") {
                var insightImg= document.createElement("img");
                insightImg.src="Assets/Pictures/insight.png";
                insightImg.setAttribute("class","Img");
                var insightText=document.createElement("p");
                insightText.setAttribute("class","subText");
                insightText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[k][0];
                var para = document.getElementById("randomVerse" + (i+1));
                para.insertBefore(insightImg, devanagri);
                para.insertBefore(insightText, devanagri);
                var br = document.createElement("br");
                para.appendChild(br);
            }
            if(Gita.Verses[(verseNum[i] - 1)].content.insights[k][1] != "") {
                var expImg= document.createElement("img");
                expImg.src="Assets/Pictures/explanation.png";
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
        */
        if(Gita.Verses[(verseNum[i] - 1)].content.insights[0][0] != "") {
            var insightImg= document.createElement("img");
            insightImg.src="Assets/Pictures/insight.png";
            insightImg.setAttribute("class","Img");
            var insightText=document.createElement("p");
            insightText.setAttribute("class","insights");
            insightText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[0][0];
            para.insertBefore(insightText, para.childNodes[0]);
            para.insertBefore(insightImg, para.childNodes[0]);
        }
        

        var bookmark = document.createElement("img");
        bookmark.src = "Assets/Pictures/bookmark.png";
        bookmark.setAttribute("class","bookmark");
        para.insertBefore(bookmark, para.childNodes[0]);

        var chapter = Gita.Verses[(verseNum[i] - 1)].chapter.slice(-1);
        var bookmarkText = document.createElement("p");
        bookmarkText.innerHTML = " Ch " + chapter;
        bookmarkText.setAttribute("class", "bookmarkText");
        para.insertBefore(bookmarkText, para.childNodes[1]);
        
        
        if(Gita.Verses[(verseNum[i] - 1)].content.insights[0][1] != "") {
            var expImg= document.createElement("img");
            expImg.src="Assets/Pictures/explanation.png";
            expImg.setAttribute("class","Img");
            var expText=document.createElement("p");
            expText.setAttribute("class","subText");
            expText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[0][1];
            var expDiv = document.createElement("div");
            expDiv.appendChild(expImg);
            expDiv.appendChild(expText);
            expDiv.setAttribute("class", "exp");
            para.appendChild(expDiv);
        }
        
        i++;
    }
}

function shlokaLangEng(numOfVersesDisplayed) { //hide devanagri
    var i = 0;
    while(i < numOfVersesDisplayed) {
        var devanagri = document.getElementById("devanagri" + (i+1));
        var verse = document.getElementById("verse" + (i+1));

        var checkBox = document.getElementById("langToggle");
        if (checkBox.checked == true){
            devanagri.style.display = "none";
            verse.style.display = "block";
        } else {
            devanagri.style.display = "block";
            verse.style.display = "none";
        }
        i++;
    }
}

function transliteration() {
    var verse = event.target.parentNode.id;
    var num = verse.slice(-1);
    var trans = document.getElementById("translation" + num);
    var list = trans.getElementsByClassName("transliteration");
    for(var i=0; i<list.length; i++) {
        if(list[i].style.display == "inline") {
            list[i].style.display = "none";
        }
        else {
            list[i].style.display = "inline";
        }
    }

}

function explanation() {
    var verse = event.target.parentNode.id;
    verse = document.getElementById(verse);
    var exp = verse.getElementsByClassName("exp")[0];
    var btn = event.target;
    if(exp.style.display == "inline") {
        exp.style.display = "none";
        btn.innerHTML = "Read more";
    }
    else {
        exp.style.display = "inline";
        btn.innerHTML = "Read less";
    }
}
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
        var para = document.getElementById("randomVerse" + (i+1));
        /*
        while(k < Gita.Verses[(verseNum[i] - 1)].content.insights.length ) {
            if(Gita.Verses[(verseNum[i] - 1)].content.insights[k][0] != "") {
                var insightImg= document.createElement("img");
                insightImg.src="Assets/Pictures/insight.png";
                insightImg.setAttribute("class","Img");
                var insightText=document.createElement("p");
                insightText.setAttribute("class","subText");
                insightText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[k][0];
                var para = document.getElementById("randomVerse" + (i+1));
                para.insertBefore(insightImg, devanagri);
                para.insertBefore(insightText, devanagri);
                var br = document.createElement("br");
                para.appendChild(br);
            }
            if(Gita.Verses[(verseNum[i] - 1)].content.insights[k][1] != "") {
                var expImg= document.createElement("img");
                expImg.src="Assets/Pictures/explanation.png";
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
        */
        if(Gita.Verses[(verseNum[i] - 1)].content.insights[0][0] != "") {
            var insightImg= document.createElement("img");
            insightImg.src="Assets/Pictures/insight.png";
            insightImg.setAttribute("class","Img");
            var insightText=document.createElement("p");
            insightText.setAttribute("class","insights");
            insightText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[0][0];
            para.insertBefore(insightText, para.childNodes[0]);
            para.insertBefore(insightImg, para.childNodes[0]);
        }
        

        var bookmark = document.createElement("img");
        bookmark.src = "Assets/Pictures/bookmark.png";
        bookmark.setAttribute("class","bookmark");
        para.insertBefore(bookmark, para.childNodes[0]);

        var chapter = Gita.Verses[(verseNum[i] - 1)].chapter.slice(-1);
        var bookmarkText = document.createElement("p");
        bookmarkText.innerHTML = " Ch " + chapter;
        bookmarkText.setAttribute("class", "bookmarkText");
        para.insertBefore(bookmarkText, para.childNodes[1]);
        
        
        if(Gita.Verses[(verseNum[i] - 1)].content.insights[0][1] != "") {
            var expImg= document.createElement("img");
            expImg.src="Assets/Pictures/explanation.png";
            expImg.setAttribute("class","Img");
            var expText=document.createElement("p");
            expText.setAttribute("class","subText");
            expText.innerHTML=Gita.Verses[(verseNum[i] - 1)].content.insights[0][1];
            var expDiv = document.createElement("div");
            expDiv.appendChild(expImg);
            expDiv.appendChild(expText);
            expDiv.setAttribute("class", "exp");
            para.appendChild(expDiv);
        }
        
        i++;
    }
}

function shlokaLangEng(numOfVersesDisplayed) { //hide devanagri
    var i = 0;
    while(i < numOfVersesDisplayed) {
        var devanagri = document.getElementById("devanagri" + (i+1));
        var verse = document.getElementById("verse" + (i+1));

        var checkBox = document.getElementById("langToggle");
        if (checkBox.checked == true){
            devanagri.style.display = "none";
            verse.style.display = "block";
        } else {
            devanagri.style.display = "block";
            verse.style.display = "none";
        }
        i++;
    }
}

function transliteration() {
    var verse = event.target.parentNode.id;
    var num = verse.slice(-1);
    var trans = document.getElementById("translation" + num);
    var list = trans.getElementsByClassName("transliteration");
    for(var i=0; i<list.length; i++) {
        if(list[i].style.display == "inline") {
            list[i].style.display = "none";
        }
        else {
            list[i].style.display = "inline";
        }
    }

}

function explanation() {
    var verse = event.target.parentNode.id;
    verse = document.getElementById(verse);
    var exp = verse.getElementsByClassName("exp")[0];
    var btn = event.target;
    if(exp.style.display == "inline") {
        exp.style.display = "none";
        btn.innerHTML = "Read more";
    }
    else {
        exp.style.display = "inline";
        btn.innerHTML = "Read less";
    }
}
