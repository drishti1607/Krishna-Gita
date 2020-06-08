function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFeed(numOfVerses, numOfVersesDisplayed) {
    var verseNum = []
    var i = 1;
    var x = getRandomInt(1,numOfVerses);
    while(i <= numOfVersesDisplayed) {
        while(verseNum.includes(x)) {
            x = getRandomInt(1,7);
        }
        verseNum.push(x);
        x = getRandomInt(1,numOfVerses);
        i++;
    }
    return verseNum;
}

var verses = {
    "Verses" : [
                {
                    "id" : "P1",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "dhr'tarAShTra uvAcha<br>dharmakShEtrE kurukShEtrE samavEtA yuyutsava: |<br>mAmakA: pAMDavA: chaiva kimakurvata sanjaya || 1 ||"
                },
                {
                    "id" : "P1",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[dhr'tarAShTra uvAcha] Dhrtarashtra said - [sanjaya] Sanjaya, [mAmakA:] my people [cha] and [pAMDavA:] the sons of Pandu [samavEtA:] have assembled [kurukShEtrE] in Kurukshetra, [dharmakShEtrE] the place of righteousness. [kim akurvata] What are they doing?"
                },
                {
                    "id" : "P2",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "sanjaya uvAcha<br>dr'ShTvA tu pAMDavAnIkam vyUDham duryOdhana: tadA |<br>AchAryam upasaMgamya rAjA vachanam abravIt || 2 ||"
                },
                {
                    "id" : "P2",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[sanjaya uvAcha] Sanjaya said - [rAjA] my king, [dr'ShTvA tu tadA] upon seeing [pAMDavAnIkam vyUDham] the armies of the Pandava in formation, [duryOdhana:] Duryodhana [upasaMgamya] approached [AchAryam] his Guru [abravIt vachanam] and said this -"               
                },
                {
                    "id" : "P3",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "paShyaitAn pAMDuputrANAm AchArya mahatIm chamUm |<br>vyUDhAm drupada putrENa tava shiShyENa dhImatA || 3 ||"
                },
                {
                    "id" : "P3",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[AchArya] O my guru Drona, [paShyaitAn] see these [mahatIm chamUm] great armies [pAMDuputrANAm] of the Pandava. [vyUDham] They have been placed in formation [tava dhImatA shiShyENa] by your bright student, [drupada putrENa] the Son of Drupada."               
                },
                {
                    "id" : "P4",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "atra shUrA mahEShvAsA bhImArjuna samA yudhi |<br>yuyudhAnO virATashcha drupada: cha mahAratha: || 4 ||<br>dhr'ShTakEtu: chEkitAna: kAshI rAjashcha vIryavAn |<br>purujit kuntibhOja: cha shaibya: cha narapuMgava: || 5 ||<br>yudhAmanyu: cha vikrAnta: uttamauja: cha vIryavAn |<br>saubhadrO draupadEyA: cha sarva Eva mahArathA: || 6 ||"
                },
                {
                    "id" : "P4",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[atra] In that army, [shUrA:] the daring warriors [mahEShvAsA:] carrying great bows, [bhImArjuna samA:] equal to Bhima and Arjuna [yudhi] in war are - [yuyudhana:] Satyaki, [virATa:] Virata, [drupada: mahAratha:] Drupada the great chariot-warrior, [dhr'ShTakEtu: chEkitAna: cha vIryavAn kAshI rAja:] Dhrshtaketu, Chekitana along with the brave king of Kashi, [purujit kuntibhOja: cha shaibya: narapuMgava:] Purujit, Kuntibhoja and Shaibya, who are heroes among men; [yudhAmanyu: cha vikrAnta:] Yudhamanyu, who is proficient in war, [cha uttamauja: vIryavAn] along with Uttamauja the brave; [saubhadra: draupadEyA:] the son of Saubhadra and the sons of Draupadi - [sarva Eva mahArathA:] they are all great chariot-warriors themselves."               
                },
                {
                    "id" : "P5",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "asmAkam tu vishiShTA yE tAnnibOdha dvijottama |<br>nAyakA mama sainyasya saMjnArtham tAn bravImi tE || 7 ||<br>bhavan bhIShma: cha karNa: cha kr'pa: cha samitinjaya: |<br>ashwatthAmA vikarNa: cha sOmadatta: tathaiva cha || 8 ||<br>anyE cha bahava: shUrA: madarthO tyakta jIvitA: |<br>nAnA shastra praharaNA: sarvE yuddha vishAradA: || 9 ||"
                },
                {
                    "id" : "P5",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[dvijottama] O best of Brahmins, [tu] on the other hand, [nibOdha] consider [yE] those [vishiShTA:] who are distinguished [asmAkam] among us. [bravImi tE] I will tell you [nAyakA: mama sainyasya] about the leaders in my army [saMjnArtham] for your recognition. [bhavAn] Your illustrious self, [cha] along with [bhIShma:] Bhishma, [karNa:] Karna [cha kr'pa: samitinjaya:] and the victorious Kripacharya; [ashwatthAmA vikarNa: cha sOmadatta:] Ashwatthama along with Vikarna and Somadatta; [bahava: anyE] many other [shUrA:] brave warriors [tyakta jIvitA:] have left their livelihoods [madartha:] for my sake. [prajaraNA:] Wielding [nAnA shastra] various weapons, [sarvE] they are all [vishAradA:] skilled [yuddhE] in warfare."               
                },
                {
                    "id" : "P6",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "aparyAptam tadasmAkam balam bhIShmAbhirakShitam |<br>paryAptam tu idam EtEShAm balam bhImAbhirakShitam || 10 ||"
                },
                {
                    "id" : "P6",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[tat balam asmAkam] This force of ours, [bhIShmAbhirakShitam] protected by Bhishma, [aparyAptam] is insufficient. [tu] On the other hand, [idam balam EtEShAm] their force [bhImAbhirakShitam] protected by Bhima [paryAptam] is sufficient."               
                },
                {
                    "id" : "P7",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "AyanEShu cha sarvEShu yathA bhAgam avasthitA: |<br>bhIShmam EvAbhirakShantu bhavanta: sarva Eva hi || 11 ||"
                },
                {
                    "id" : "P7",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[bhavanta: sarva Eva hi] All of you [bhIShmam Eva abhirakShantu] protect Bhishma [sarvEShu AyanEShu] in all movements of our army [yathA bhAgam avasthitA:] in your respective divisions."               
                },
                {
                    "id" : "P8",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-12 to 1-19",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : "tasya saMjayan harSham kuruvr'ddha: pitAmaha: |<br>simhanAdam vinadya uchchai: shankham dadhmau pratApavAn || 12 ||"               
                },
                {
                    "id" : "P8",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-12 to 1-19",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : "[pitAmaha:] Grandfather Bhishma, [kuruvr'ddha:] the eldest among the Kurus, [saMjayan tasya harSham] was the one to lift his spirits [vinadya simhanAdam] by roaring like a lion. [dadhmau shankham] He blew his conch [uchchai:] loudly [pratApavAn] and turned on the heat."               
                }
            ],

    "insights" : [
        {
            "id" : "I1",
            "chapter" : "Chapter 1",
            "shloka" : "1-1 to 1-11",
            "style" : "applnotes",
            "type" : "text",
            "content" : "We often doubt and worry about achieving wealth, success and other outcomes."               
        },
        {
            "id" : "I1",
            "chapter" : "Chapter 1",
            "shloka" : "1-1 to 1-11",
            "style" : "Normal",
            "type" : "text",
            "content" : "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."               
        }
    ]
}

