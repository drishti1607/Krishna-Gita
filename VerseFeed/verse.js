//insights are stored as an 2D array where each array holds theinsight and its explanation as there are few shlokas which have many insights

const Gita = {
    "Verses" : [
                {
                    "id" : "P1",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "धृतराष्ट्र उवाच —<br>धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।<br>मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥",
                        "shloka" : "dhr'tarAShTra uvAcha<br>dharmakShEtrE kurukShEtrE samavEtA yuyutsava: |<br>mAmakA: pAMDavA: chaiva kimakurvata sanjaya || 1 ||",
                        "translation" : "<span class='transliteration'>[dhr'tarAShTra uvAcha]</span> Dhrtarashtra said - <span class='transliteration'>[sanjaya]</span> Sanjaya, <span class='transliteration'>[mAmakA:]</span> my people <span class='transliteration'>[cha]</span> and <span class='transliteration'>[pAMDavA:]</span> the sons of Pandu <span class='transliteration'>[samavEtA:]</span> have assembled <span class='transliteration'>[kurukShEtrE]</span> in Kurukshetra, <span class='transliteration'>[dharmakShEtrE]</span> the place of righteousness. <span class='transliteration'>[kim akurvata]</span> What are they doing?",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P2",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "explnofshloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "सञ्जय उवाच —<br>दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।<br>आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥ २ ॥",
                        "shloka" : "sanjaya uvAcha<br>dr'ShTvA tu pAMDavAnIkam vyUDham duryOdhana: tadA |<br>AchAryam upasaMgamya rAjA vachanam abravIt || 2 ||",
                        "translation" : "<span class='transliteration'><span class='transliteration'>[sanjaya uvAcha]</span> Sanjaya said - <span class='transliteration'>[rAjA]</span> my king, <span class='transliteration'>[dr'ShTvA tu tadA]</span> upon seeing <span class='transliteration'>[pAMDavAnIkam vyUDham]</span> the armies of the Pandava in formation, <span class='transliteration'>[duryOdhana:]</span> Duryodhana <span class='transliteration'>[upasaMgamya]</span> approached <span class='transliteration'>[AchAryam]</span> his Guru <span class='transliteration'>[abravIt vachanam]</span> and said this -",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P3",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् ।<br>व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥ ३ ॥",
                        "shloka" : "paShyaitAn pAMDuputrANAm AchArya mahatIm chamUm |<br>vyUDhAm drupada putrENa tava shiShyENa dhImatA || 3 ||",
                        "translation" : "<span class='transliteration'>[AchArya]</span> O my guru Drona, <span class='transliteration'>[paShyaitAn]</span> see these <span class='transliteration'>[mahatIm chamUm]</span> great armies <span class='transliteration'>[pAMDuputrANAm]</span> of the Pandava. <span class='transliteration'>[vyUDham]</span> They have been placed in formation <span class='transliteration'>[tava dhImatA shiShyENa]</span> by your bright student, <span class='transliteration'>[drupada putrENa]</span> the Son of Drupada.",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P4",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि ।<br>युयुधानो विराटश्च द्रुपदश्च महारथः ॥ ४ ॥<br>धृष्टकेतुश्चेकितानः काशीराजश्च वीर्यवान् ।<br>पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ॥ ५ ॥<br>युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् ।<br>सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ॥ ६ ॥",
                        "shloka" : "atra shUrA mahEShvAsA bhImArjuna samA yudhi |<br>yuyudhAnO virATashcha drupada: cha mahAratha: || 4 ||<br>dhr'ShTakEtu: chEkitAna: kAshI rAjashcha vIryavAn |<br>purujit kuntibhOja: cha shaibya: cha narapuMgava: || 5 ||<br>yudhAmanyu: cha vikrAnta: uttamauja: cha vIryavAn |<br>saubhadrO draupadEyA: cha sarva Eva mahArathA: || 6 ||",
                        "translation" : "<span class='transliteration'>[atra]</span> In that army, <span class='transliteration'>[shUrA:]</span> the daring warriors <span class='transliteration'>[mahEShvAsA:]</span> carrying great bows, <span class='transliteration'>[bhImArjuna samA:]</span> equal to Bhima and Arjuna <span class='transliteration'>[yudhi]</span> in war are - <span class='transliteration'>[yuyudhana:]</span> Satyaki, <span class='transliteration'>[virATa:]</span> Virata, <span class='transliteration'>[drupada: mahAratha:]</span> Drupada the great chariot-warrior, <span class='transliteration'>[dhr'ShTakEtu: chEkitAna: cha vIryavAn kAshI rAja:]</span> Dhrshtaketu, Chekitana along with the brave king of Kashi, <span class='transliteration'>[purujit kuntibhOja: cha shaibya: narapuMgava:]</span> Purujit, Kuntibhoja and Shaibya, who are heroes among men; <span class='transliteration'>[yudhAmanyu: cha vikrAnta:]</span> Yudhamanyu, who is proficient in war, <span class='transliteration'>[cha uttamauja: vIryavAn]</span> along with Uttamauja the brave; <span class='transliteration'>[saubhadra: draupadEyA:]</span> the son of Saubhadra and the sons of Draupadi - <span class='transliteration'>[sarva Eva mahArathA:]</span> they are all great chariot-warriors themselves.",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P5",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम ।<br>नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ॥ ७ ॥<br>भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः ।<br>अश्वत्थामा विकर्णश्च सौमदत्तिर्जयद्रथः ॥ ८ ॥<br>अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः ।<br>नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ॥ ९ ॥",
                        "shloka" : "asmAkam tu vishiShTA yE tAnnibOdha dvijottama |<br>nAyakA mama sainyasya saMjnArtham tAn bravImi tE || 7 ||<br>bhavan bhIShma: cha karNa: cha kr'pa: cha samitinjaya: |<br>ashwatthAmA vikarNa: cha sOmadatta: tathaiva cha || 8 ||<br>anyE cha bahava: shUrA: madarthO tyakta jIvitA: |<br>nAnA shastra praharaNA: sarvE yuddha vishAradA: || 9 ||",
                        "translation" : "<span class='transliteration'>[dvijottama]</span> O best of Brahmins, <span class='transliteration'>[tu]</span> on the other hand, <span class='transliteration'>[nibOdha]</span> consider <span class='transliteration'>[yE]</span> those <span class='transliteration'>[vishiShTA:]</span> who are distinguished <span class='transliteration'>[asmAkam]</span> among us. <span class='transliteration'>[bravImi tE]</span> I will tell you <span class='transliteration'>[nAyakA: mama sainyasya]</span> about the leaders in my army <span class='transliteration'>[saMjnArtham]</span> for your recognition. <span class='transliteration'>[bhavAn]</span> Your illustrious self, <span class='transliteration'>[cha]</span> along with <span class='transliteration'>[bhIShma:]</span> Bhishma, <span class='transliteration'>[karNa:]</span> Karna <span class='transliteration'>[cha kr'pa: samitinjaya:]</span> and the victorious Kripacharya; <span class='transliteration'>[ashwatthAmA vikarNa: cha sOmadatta:]</span> Ashwatthama along with Vikarna and Somadatta; <span class='transliteration'>[bahava: anyE]</span> many other <span class='transliteration'>[shUrA:]</span> brave warriors <span class='transliteration'>[tyakta jIvitA:]</span> have left their livelihoods <span class='transliteration'>[madartha:]</span> for my sake. <span class='transliteration'>[prajaraNA:]</span> Wielding <span class='transliteration'>[nAnA shastra]</span> various weapons, <span class='transliteration'>[sarvE]</span> they are all <span class='transliteration'>[vishAradA:]</span> skilled <span class='transliteration'>[yuddhE]</span> in warfare.",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P6",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् ।<br>पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ॥ १० ॥",
                        "shloka" : "aparyAptam tadasmAkam balam bhIShmAbhirakShitam |<br>paryAptam tu idam EtEShAm balam bhImAbhirakShitam || 10 ||",
                        "translation" : "<span class='transliteration'>[tat balam asmAkam]</span> This force of ours, <span class='transliteration'>[bhIShmAbhirakShitam]</span> protected by Bhishma, <span class='transliteration'>[aparyAptam]</span> is insufficient. <span class='transliteration'>[tu]</span> On the other hand, <span class='transliteration'>[idam balam EtEShAm]</span> their force <span class='transliteration'>[bhImAbhirakShitam]</span> protected by Bhima <span class='transliteration'>[paryAptam]</span> is sufficient.",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P7",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-1 to 1-11",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : { 
                        "devanagri" : "अयनेषु च सर्वेषु यथाभागमवस्थिताः ।<br>भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ॥ ११ ॥",
                        "shloka" : "AyanEShu cha sarvEShu yathA bhAgam avasthitA: |<br>bhIShmam EvAbhirakShantu bhavanta: sarva Eva hi || 11 ||",
                        "translation" : "<span class='transliteration'>[bhavanta: sarva Eva hi]</span> All of you <span class='transliteration'>[bhIShmam Eva abhirakShantu]</span> protect Bhishma <span class='transliteration'>[sarvEShu AyanEShu]</span> in all movements of our army <span class='transliteration'>[yathA bhAgam avasthitA:]</span> in your respective divisions.",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }
                },
                {
                    "id" : "P8",
                    "chapter" : "Chapter 1",
                    "shloka" : "1-12 to 1-19",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः ।<br>सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ॥ १२ ॥",
                        "shloka" : "tasya saMjayan harSham kuruvr'ddha: pitAmaha: |<br>simhanAdam vinadya uchchai: shankham dadhmau pratApavAn || 12 ||",
                        "translation" : "<span class='transliteration'>[pitAmaha:]</span> Grandfather Bhishma, <span class='transliteration'>[kuruvr'ddha:]</span> the eldest among the Kurus, <span class='transliteration'>[saMjayan tasya harSham]</span> was the one to lift his spirits <span class='transliteration'>[vinadya simhanAdam]</span> by roaring like a lion. <span class='transliteration'>[dadhmau shankham]</span> He blew his conch <span class='transliteration'>[uchchai:]</span> loudly <span class='transliteration'>[pratApavAn]</span> and turned on the heat.",
                        "insights" : [["We often doubt and worry about achieving wealth, success and other outcomes.", "Duryodhana saw the armies of his enemies protected by Bhima, and his own army protected by Bhishma. He expressed his anxiety that the enemy army is sufficient to defeat his own, and that his own army is unequal to the task."]]
                    }  
                },
                {
                    "id" : "P9", //P9 only for now
                    "chapter" : "Chapter 2",
                    "shloka" : "2-1 to 2-3",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "सञ्जय उवाच —<br>तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् ।<br>विषीदन्तमिदं वाक्यमुवाच मधुसूदनः ॥ १ ॥<br>श्रीभगवानुवाच —<br>कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् ।<br>अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन ॥ २ ॥<br>क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।<br>क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥ ३ ॥",
                        "shloka" : "tam tathA kr`payAviShTam ashrupUrNAkulEkShaNam |<br>viShIdantamidam vAkyam uvAcha madhusUdhana: || 1 ||<br>kutastvA kashmalamidam viShamE samupasthitam |<br>anAryajuShTam asvargyam akIrtikaram arjuna || 2 ||<br>klaibyam mA sma gama: pArtha naitatvayi upapadyatE |<br>kShudram hr`daya daurbalyam tyaktvA uttiShTha parantapa || 3 ||",
                        "translation" : "<span class='transliteration'>[ththA]</span> Then, <span class='transliteration'>[madhusUdhana:]</span> Krishna <span class='transliteration'>[idam vAkyam uvAcha]</span> said this sentence <span class='transliteration'>[tam]</span> to Arjuna, <span class='transliteration'>[kr`payAviShTam]</span> who was overcome with pity, <span class='transliteration'>[ashrupUrNAkulEkShaNam]</span> whose eyes were full of tears: <br><span class='transliteration'>[Arjuna]</span> Arjuna, <span class='transliteration'>[kuta: idam kashmalam samupasthitam]</span> why has this confusion come to you <span class='transliteration'>[viShamE]</span> at an inappropriate time? <span class='transliteration'>[anAryajuShTam]</span> This confusion is not fit for noble people. <span class='transliteration'>[asvargyam]</span> It is discomforting <span class='transliteration'>[akIrtikaram]</span> and disgraceful.<br><span class='transliteration'>[pArtha]</span> Arjuna, <span class='transliteration'>[mA sma gama:]</span> don’t entertain <span class='transliteration'>[klaibyam]</span> such cowardice. <span class='transliteration'>[Etat]</span> It <span class='transliteration'>[tvayi na upapadyatE]</span> does not befit you. <span class='transliteration'>[parantapa]</span> You are the one who destroys enemies. <span class='transliteration'>[tyaktvA]</span> Give up <span class='transliteration'>[hr`daya daurbalyam]</span> this weakness in your heart <span class='transliteration'>[uttiShTha]</span> and rise.",
                        "insights" : [["", "When Arjuna sat down this way, Lord Krishna considered - ‘Why did this sorrow come at such an inappropriate time?’ and said ‘Abandon this weakness, which is the property of people without wisdom. It results in disgrace and does not help you in any place or situation. Get up to fight’."]]
                        //insights empty when only explanation is present
                    }  
                },
                {
                    "id" : "P10", //only for now
                    "chapter" : "Chapter 2",
                    "shloka" : "2-12",
                    "style" : "shloka",
                    "type" : "text",
                    "content" : {
                        "devanagri" : "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः ।<br>न चैव न भविष्यामः सर्वे वयमतः परम् ॥ १२ ॥",
                        "shloka" : "na tvEvAham jAtu nAsam na tvam nEmE janAdhipA: |<br>na chaiva na bhaviShyAma: sarvE vayamata:param || 12 ||",
                        "translation" : "<span class='transliteration'>[jAtu]</span> At any point in time, <span class='transliteration'>[na]</span> it has never been that <span class='transliteration'>[aham]</span> I <span class='transliteration'>[nAsam]</span> did not exist. <span class='transliteration'>[tvam na]</span> It has never been that you did not exist. <span class='transliteration'>[imE janAdhipA: na]</span> It has never been that all these kings did not exist. <span class='transliteration'>[ata: param chaiva]</span> Even in future, <span class='transliteration'>[na]</span> there will never be a time when <span class='transliteration'>[sarvEvayam]</span> any one of us <span class='transliteration'>[na bhaviShyAma:]</span> do not exist.",
                        "insights" : [["The Self is separate from the environment and your body. The Self is ever-lasting. So is the Lord.", "The Lord continues- There has been no time in the past in which I, the controller of everything, have not existed. I was always in existence. You and all the people you see before you-who are knowledgeable and skilled in their own fields, are similar. There has been no point in time when you did not exist. You always existed.<br>There will be no point of time in the future as well, in which we will not exist. We will always exist.<br>There is no doubt that I, the Lord of everything, am ever-existing. In the same way, there is no doubt that all of you are ever-existing as well."],
                                        ["Is there anything other than the observable universe?", "In this Shloka, Krishna is explicit that all of us exist distinctly. He also makes it clear that there is something to us, other than our body. <br>This is not as obvious as it sounds, when we ask ourselves who we are. Our body is put together from atoms that are part of the universe. In time, every atom in our body would be exchanged. So, everything just seems to be a part of the physical universe, where distinctions like 'you' and 'me' are not real and purely made for convenience. Within such a belief, our consciousness seems to be an imaginary concept in the physical universe. "],
                                        ["Is the universe only an effect of the law governing it? ", "It is improbable that the organized complexity of the universe came into being on its own. There must be a supreme law that keeps the order in the universe – a law from which all other laws are derived. This law would be knowledge and everything else would be its manifestation. <br>As an example, the law of gravitation deals with the attraction between two masses. It is just knowledge. The earth's revolution or something falling on the ground are its manifestations, they aren't really different forces. <br>Likewise, the supreme law that governs the whole universe would be knowledge and the rest of the universe - including us - would just be its manifestations. Again, distinctions like 'you' and 'me' wouldn't be real. Our observation of the physical universe is insufficient to determine this reality - the supreme law must allow us to find it, since it governs everything in the universe."]]
                    }  
                }
            ]
};

