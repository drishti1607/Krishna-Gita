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
                        "translation" : "[dhr'tarAShTra uvAcha] Dhrtarashtra said - [sanjaya] Sanjaya, [mAmakA:] my people [cha] and [pAMDavA:] the sons of Pandu [samavEtA:] have assembled [kurukShEtrE] in Kurukshetra, [dharmakShEtrE] the place of righteousness. [kim akurvata] What are they doing?",
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
                        "translation" : "[sanjaya uvAcha] Sanjaya said - [rAjA] my king, [dr'ShTvA tu tadA] upon seeing [pAMDavAnIkam vyUDham] the armies of the Pandava in formation, [duryOdhana:] Duryodhana [upasaMgamya] approached [AchAryam] his Guru [abravIt vachanam] and said this -",
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
                        "translation" : "[AchArya] O my guru Drona, [paShyaitAn] see these [mahatIm chamUm] great armies [pAMDuputrANAm] of the Pandava. [vyUDham] They have been placed in formation [tava dhImatA shiShyENa] by your bright student, [drupada putrENa] the Son of Drupada.",
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
                        "translation" : "[atra] In that army, [shUrA:] the daring warriors [mahEShvAsA:] carrying great bows, [bhImArjuna samA:] equal to Bhima and Arjuna [yudhi] in war are - [yuyudhana:] Satyaki, [virATa:] Virata, [drupada: mahAratha:] Drupada the great chariot-warrior, [dhr'ShTakEtu: chEkitAna: cha vIryavAn kAshI rAja:] Dhrshtaketu, Chekitana along with the brave king of Kashi, [purujit kuntibhOja: cha shaibya: narapuMgava:] Purujit, Kuntibhoja and Shaibya, who are heroes among men; [yudhAmanyu: cha vikrAnta:] Yudhamanyu, who is proficient in war, [cha uttamauja: vIryavAn] along with Uttamauja the brave; [saubhadra: draupadEyA:] the son of Saubhadra and the sons of Draupadi - [sarva Eva mahArathA:] they are all great chariot-warriors themselves.",
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
                        "translation" : "[dvijottama] O best of Brahmins, [tu] on the other hand, [nibOdha] consider [yE] those [vishiShTA:] who are distinguished [asmAkam] among us. [bravImi tE] I will tell you [nAyakA: mama sainyasya] about the leaders in my army [saMjnArtham] for your recognition. [bhavAn] Your illustrious self, [cha] along with [bhIShma:] Bhishma, [karNa:] Karna [cha kr'pa: samitinjaya:] and the victorious Kripacharya; [ashwatthAmA vikarNa: cha sOmadatta:] Ashwatthama along with Vikarna and Somadatta; [bahava: anyE] many other [shUrA:] brave warriors [tyakta jIvitA:] have left their livelihoods [madartha:] for my sake. [prajaraNA:] Wielding [nAnA shastra] various weapons, [sarvE] they are all [vishAradA:] skilled [yuddhE] in warfare.",
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
                        "translation" : "[tat balam asmAkam] This force of ours, [bhIShmAbhirakShitam] protected by Bhishma, [aparyAptam] is insufficient. [tu] On the other hand, [idam balam EtEShAm] their force [bhImAbhirakShitam] protected by Bhima [paryAptam] is sufficient.",
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
                        "translation" : "[bhavanta: sarva Eva hi] All of you [bhIShmam Eva abhirakShantu] protect Bhishma [sarvEShu AyanEShu] in all movements of our army [yathA bhAgam avasthitA:] in your respective divisions.",
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
                        "translation" : "[pitAmaha:] Grandfather Bhishma, [kuruvr'ddha:] the eldest among the Kurus, [saMjayan tasya harSham] was the one to lift his spirits [vinadya simhanAdam] by roaring like a lion. [dadhmau shankham] He blew his conch [uchchai:] loudly [pratApavAn] and turned on the heat.",
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
                        "translation" : "[ththA] Then, [madhusUdhana:] Krishna [idam vAkyam uvAcha] said this sentence [tam] to Arjuna, [kr`payAviShTam] who was overcome with pity, [ashrupUrNAkulEkShaNam] whose eyes were full of tears: <br>[Arjuna] Arjuna, [kuta: idam kashmalam samupasthitam] why has this confusion come to you [viShamE] at an inappropriate time? [anAryajuShTam] This confusion is not fit for noble people. [asvargyam] It is discomforting [akIrtikaram] and disgraceful.<br>[pArtha] Arjuna, [mA sma gama:] don’t entertain [klaibyam] such cowardice. [Etat] It [tvayi na upapadyatE] does not befit you. [parantapa] You are the one who destroys enemies. [tyaktvA] Give up [hr`daya daurbalyam] this weakness in your heart [uttiShTha] and rise.",
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
                        "translation" : "[jAtu] At any point in time, [na] it has never been that [aham] I [nAsam] did not exist. [tvam na] It has never been that you did not exist. [imE janAdhipA: na] It has never been that all these kings did not exist. [ata: param chaiva] Even in future, [na] there will never be a time when [sarvEvayam] any one of us [na bhaviShyAma:] do not exist.",
                        "insights" : [["The Self is separate from the environment and your body. The Self is ever-lasting. So is the Lord.", "The Lord continues- There has been no time in the past in which I, the controller of everything, have not existed. I was always in existence. You and all the people you see before you-who are knowledgeable and skilled in their own fields, are similar. There has been no point in time when you did not exist. You always existed.<br>There will be no point of time in the future as well, in which we will not exist. We will always exist.<br>There is no doubt that I, the Lord of everything, am ever-existing. In the same way, there is no doubt that all of you are ever-existing as well."],
                                        ["Is there anything other than the observable universe?", "In this Shloka, Krishna is explicit that all of us exist distinctly. He also makes it clear that there is something to us, other than our body. <br>This is not as obvious as it sounds, when we ask ourselves who we are. Our body is put together from atoms that are part of the universe. In time, every atom in our body would be exchanged. So, everything just seems to be a part of the physical universe, where distinctions like 'you' and 'me' are not real and purely made for convenience. Within such a belief, our consciousness seems to be an imaginary concept in the physical universe. "],
                                        ["Is the universe only an effect of the law governing it? ", "It is improbable that the organized complexity of the universe came into being on its own. There must be a supreme law that keeps the order in the universe – a law from which all other laws are derived. This law would be knowledge and everything else would be its manifestation. <br>As an example, the law of gravitation deals with the attraction between two masses. It is just knowledge. The earth's revolution or something falling on the ground are its manifestations, they aren't really different forces. <br>Likewise, the supreme law that governs the whole universe would be knowledge and the rest of the universe - including us - would just be its manifestations. Again, distinctions like 'you' and 'me' wouldn't be real. Our observation of the physical universe is insufficient to determine this reality - the supreme law must allow us to find it, since it governs everything in the universe."]]
                    }  
                }
            ]
};

