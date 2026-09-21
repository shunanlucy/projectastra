/**
 * ASTRA - 12 Rashi Transits & Astrologer Audio Advice
 * Real-time daily planetary focus meters and satvik habits
 */
const rashiData = [
  {
    id: 'aries', symbol: '\u2648\uFE0E', en: 'Aries', hi: 'मेष',
    peace: 84, peaceNoteEn: 'Ideal for strategic planning and structured thinking.', peaceNoteHi: 'रणनीतिक योजना और व्यवस्थित चिंतन के लिए अनुकूल।',
    karma: 94, karmaNoteEn: 'Peak execution window: 10:30 AM – 2:00 PM.', karmaNoteHi: 'महत्वपूर्ण कार्यों के लिए मुख्य समय: सुबह 10:30 से दोपहर 2:00 बजे।',
    caution: 22, cautionNoteEn: 'Low volatility. Practice steady pacing in communications.', cautionNoteHi: 'बातचीत में संयम और स्थिरता बनाए रखें।',
    remedyTimeEn: 'Evening Routine', remedyTimeHi: 'सायंकालीन विश्राम',
    remedyTitleEn: 'Warm Water Foot Soak & Evening Cool-Down', remedyTitleHi: 'गुनगुने जल का प्रयोग व सायंकालीन विश्रांति',
    remedyDescEn: 'A 5-minute warm water foot soak before sleep balances fire energy, releasing mental fatigue and supporting deep restorative rest.', remedyDescHi: 'सोने से पूर्व 5 मिनट गुनगुने पानी में पैर रखने से अतिरिक्त तनाव दूर होता है और मानसिक शांति मिलती है।',
    bullet1En: 'Cools restless nervous tension', bullet1Hi: 'मानसिक तनाव और बेचैनी में शांति',
    bullet2En: 'Prepares mind for restorative sleep', bullet2Hi: 'गहरी विश्रांति और बेहतर नींद'
  },
  {
    id: 'taurus', symbol: '\u2649\uFE0E', en: 'Taurus', hi: 'वृषभ',
    peace: 91, peaceNoteEn: 'Harmonious inner state. Favorable for artistic and reflective tasks.', peaceNoteHi: 'आंतरिक संतुलन सुदृढ़। रचनात्मक व विचारशील कार्यों के लिए शुभ।',
    karma: 88, karmaNoteEn: 'Stable progress window: 11:00 AM – 4:00 PM.', karmaNoteHi: 'कार्य निष्पादन के लिए अनुकूल समय: 11:00 AM – 4:00 PM।',
    caution: 18, cautionNoteEn: 'Grounded temperament. Hold steady on existing commitments.', cautionNoteHi: 'स्थिर मनोभाव। वर्तमान प्राथमिकताओं पर ध्यान केंद्रित रखें।',
    remedyTimeEn: 'Morning Routine', remedyTimeHi: 'प्रातःकालीन अभ्यास',
    remedyTitleEn: 'Green Cardamom Water & Morning Barefoot Grounding', remedyTitleHi: 'इलायची जल व प्रातःकालीन नंगे पैर टहलना',
    remedyDescEn: 'A glass of warm water infused with green cardamom, followed by 5 minutes barefoot on natural grass, centers earth and sensory balance.', remedyDescHi: 'सुबह हरी इलायची युक्त गुनगुना जल पिएं और कुछ समय हरी घास पर टहलें। यह पृथ्वी तत्व में स्थिरता लाता है।',
    bullet1En: 'Digestive & sensory harmony', bullet1Hi: 'इंद्रिय संतुलन व मानसिक ताजगी',
    bullet2En: 'Natural morning grounding', bullet2Hi: 'प्राकृतिक रूप से शांत मन'
  },
  {
    id: 'gemini', symbol: '\u264A\uFE0E', en: 'Gemini', hi: 'मिथुन',
    peace: 80, peaceNoteEn: 'Active intellect. Organize tasks in small focused batches.', peaceNoteHi: 'सक्रिय बौद्धिक ऊर्जा। कार्यों को छोटे चरणों में व्यवस्थित करें।',
    karma: 91, karmaNoteEn: 'Optimal creative window: 9:30 AM – 1:30 PM.', karmaNoteHi: 'रचनात्मक व संवाद का मुख्य समय: सुबह 9:30 से 1:30 बजे।',
    caution: 34, cautionNoteEn: 'Avoid multitasking late in the evening.', cautionNoteHi: 'देर शाम एक साथ कई कामों में उलझने से बचें।',
    remedyTimeEn: 'Bedtime Practice', remedyTimeHi: 'सोने से पूर्व',
    remedyTitleEn: 'Mindful Journaling & Evening Digital Sabbatical', remedyTitleHi: 'डायरी लेखन व स्क्रीन विश्रांति',
    remedyDescEn: 'Write down 3 accomplished priorities on paper before disconnecting screens 45 minutes prior to sleep, discharging cognitive loops.', remedyDescHi: 'सोने से 45 मिनट पहले स्क्रीन बंद कर दिन की 3 मुख्य बातें कागज पर लिखें। इससे मन के विचार शांत होते हैं।',
    bullet1En: 'Clears cognitive mental clutter', bullet1Hi: 'अनावश्यक विचारों से मुक्ति',
    bullet2En: 'Prepares brain for calm focus', bullet2Hi: 'एकाग्रता और मानसिक ताजगी'
  },
  {
    id: 'cancer', symbol: '\u264B\uFE0E', en: 'Cancer', hi: 'कर्क',
    peace: 89, peaceNoteEn: 'Intuitive clarity elevated. Excellent for mentorship and empathy.', peaceNoteHi: 'सहज अंतर्ज्ञान उच्च। परामर्श व आत्मीय चर्चा के लिए उपयुक्त।',
    karma: 84, karmaNoteEn: 'Deliberate progress window: 12:00 PM – 3:30 PM.', karmaNoteHi: 'महत्वपूर्ण निर्णय लेने का समय: दोपहर 12:00 से 3:30 बजे।',
    caution: 20, cautionNoteEn: 'Keep emotional boundaries clean in high-stakes discussions.', cautionNoteHi: 'महत्वपूर्ण बातचीत में व्यावहारिक संतुलन बनाए रखें।',
    remedyTimeEn: 'Hydration Routine', remedyTimeHi: 'दैनिक जल अभ्यास',
    remedyTitleEn: 'Earthen Vessel Hydration & Sunset Breathing', remedyTitleHi: 'मिट्टी के पात्र से जल व गोधूलि श्वास',
    remedyDescEn: 'Drinking water kept in an earthen vessel calms emotional fluctuations and harmonizes the lunar rhythm within.', remedyDescHi: 'मिट्टी के बर्तन से जल पीना चंद्रमा के शांत प्रभाव को बढ़ाता है और मन की संवेदनशीलता को संतुलित रखता है।',
    bullet1En: 'Balances lunar emotional rhythm', bullet1Hi: 'चंद्र तत्व का शांत संतुलन',
    bullet2En: 'Natural hydration cooling', bullet2Hi: 'शीतलता व मानसिक धैर्य'
  },
  {
    id: 'leo', symbol: '\u264C\uFE0E', en: 'Leo', hi: 'सिंह',
    peace: 86, peaceNoteEn: 'Clear leadership vitality. Lead through calm reassurance.', peaceNoteHi: 'स्पष्ट नेतृत्व ऊर्जा। धैर्य और विनम्रता से मार्ग प्रशस्त करें।',
    karma: 95, karmaNoteEn: 'Peak visibility window: 10:00 AM – 2:30 PM.', karmaNoteHi: 'प्रभावशाली निर्णयों का मुख्य समय: सुबह 10:00 से दोपहर 2:30 बजे।',
    caution: 19, cautionNoteEn: 'Stable temperament. Practice active listening with peers.', cautionNoteHi: 'सहकर्मियों के विचारों को पूरा समय देकर सुनें।',
    remedyTimeEn: 'Morning Routine', remedyTimeHi: 'प्रातःकालीन अभ्यास',
    remedyTitleEn: 'Surya Arghya & Mindful Daylight Connection', remedyTitleHi: 'प्रातःकालीन सूर्य अर्घ्य व सौर ऊर्जा तालमेल',
    remedyDescEn: '10 minutes of direct morning sunlight facing East resets circadian rhythm, clearing brain fog and fostering dignified vitality.', remedyDescHi: 'प्रातः पूर्व दिशा में खड़े होकर ताजे जल से सूर्य को अर्घ्य दें। यह आत्मबल व शारीरिक ऊर्जा को संतुलित करता है।',
    bullet1En: 'Boosts natural solar vitality', bullet1Hi: 'प्राकृतिक आत्मबल की वृद्धि',
    bullet2En: 'Clears morning brain fog', bullet2Hi: 'मानसिक स्पष्टता व तेज'
  },
  {
    id: 'virgo', symbol: '\u264D\uFE0E', en: 'Virgo', hi: 'कन्या',
    peace: 88, peaceNoteEn: 'Detail-oriented precision. Favorable for deep analytical work.', peaceNoteHi: 'सटीक विश्लेषणात्मक क्षमता। योजना और विश्लेषण के लिए उपयुक्त।',
    karma: 92, karmaNoteEn: 'Focused execution window: 11:30 AM – 4:00 PM.', karmaNoteHi: 'गहन कार्य का समय: सुबह 11:30 से शाम 4:00 बजे।',
    caution: 16, cautionNoteEn: 'Avoid over-analyzing minor, inconsequential details.', cautionNoteHi: 'छोटी-मोटी बातों में अधिक उलझने से बचें।',
    remedyTimeEn: 'Midday Practice', remedyTimeHi: 'मध्याह्न अभ्यास',
    remedyTitleEn: 'Workspace Decluttering & Bird Water Offering', remedyTitleHi: 'कार्यस्थल व्यवस्था व पक्षियों के लिए जल',
    remedyDescEn: 'Keep an organized desk and offer fresh water to balcony birds. Dissolves micro-stress and brings sharp mental clarity.', remedyDescHi: 'अपनी वर्क-डेस्क को सुव्यवस्थित रखें और छत पर पक्षियों के लिए जल रखें। इससे मानसिक शांति और एकाग्रता बढ़ती है।',
    bullet1En: 'Reduces micro-cognitive load', bullet1Hi: 'मानसिक दबाव में कमी',
    bullet2En: 'Harmonizes Mercury equilibrium', bullet2Hi: 'बुध ग्रह का संतुलित प्रभाव'
  },
  {
    id: 'libra', symbol: '\u264E\uFE0E', en: 'Libra', hi: 'तुला',
    peace: 85, peaceNoteEn: 'Balanced diplomatic perspective. Great for negotiations.', peaceNoteHi: 'संतुलित दृष्टिकोण। समझौतों और आपसी तालमेल के लिए शुभ।',
    karma: 89, karmaNoteEn: 'Partnership dialogue window: 1:00 PM – 4:30 PM.', karmaNoteHi: 'सहयोग व संवाद का समय: दोपहर 1:00 से शाम 4:30 बजे।',
    caution: 26, cautionNoteEn: 'Take adequate time before committing to long agreements.', cautionNoteHi: 'किसी भी दीर्घकालिक वादे से पहले पूरा विचार करें।',
    remedyTimeEn: 'Pre-Meeting Ritual', remedyTimeHi: 'महत्वपूर्ण कार्य पूर्व',
    remedyTitleEn: 'Sandalwood Pulse Touch & Deep Equanimity Breath', remedyTitleHi: 'चंदन का स्पर्श व 3 गहरी संतुलित सांसें',
    remedyDescEn: 'A light touch of pure sandalwood or rose water on wrist pulses before important decisions anchors steady, centered discernment.', remedyDescHi: 'निर्णय लेने से पहले कलाई पर शुद्ध चंदन या गुलाब जल का हल्का स्पर्श मन को शांत व स्थिर रखता है।',
    bullet1En: 'Steadies decision equilibrium', bullet1Hi: 'निर्णय लेने में संतुलन',
    bullet2En: 'Harmonizes Venusian grace', bullet2Hi: 'शालीन और सकारात्मक मनोभाव'
  },
  {
    id: 'scorpio', symbol: '\u264F\uFE0E', en: 'Scorpio', hi: 'वृश्चिक',
    peace: 88, peaceNoteEn: 'Deep focus and discernment. Strong strategic insight.', peaceNoteHi: 'गहन एकाग्रता और दूरदर्शिता। रणनीतिक फैसलों के लिए उत्कृष्ट।',
    karma: 93, karmaNoteEn: 'High-leverage window: 11:00 AM – 3:30 PM.', karmaNoteHi: 'महत्वपूर्ण पहलों के लिए अनुकूल समय: 11:00 AM – 3:30 PM।',
    caution: 24, cautionNoteEn: 'Measured patience yields optimal strategic results.', cautionNoteHi: 'धैर्य और शांति से किए गए कार्य श्रेष्ठ परिणाम देंगे।',
    remedyTimeEn: 'Morning Routine', remedyTimeHi: 'प्रातःकालीन अभ्यास',
    remedyTitleEn: 'Morning Sunlight & Mindful Breath Alignment', remedyTitleHi: 'प्रातःकालीन सूर्य अर्घ्य व शांत श्वास',
    remedyDescEn: 'Spend 10 minutes facing the early morning sun, followed by warm water. Centers the nervous system and brings calm focus to your day.', remedyDescHi: 'सुबह 10 मिनट सूर्य की धूप में बैठें और गुनगुना पानी पिएं। यह दैनिक जैविक चक्र को रीसेट कर मानसिक स्पष्टता लाता है।',
    bullet1En: 'Circadian rhythm reset', bullet1Hi: 'दैनिक जैविक चक्र का संतुलन',
    bullet2En: 'Centers solar vitality & clarity', bullet2Hi: 'आत्मिक ऊर्जा व ध्यान में स्थिरता'
  },
  {
    id: 'sagittarius', symbol: '\u2650\uFE0E', en: 'Sagittarius', hi: 'धनु',
    peace: 93, peaceNoteEn: 'Expansive vision and clarity. Excellent for learning.', peaceNoteHi: 'व्यापक दृष्टिकोण और स्पष्टता। नई सीख व अध्ययन के लिए उत्तम।',
    karma: 90, karmaNoteEn: 'Visionary planning window: 10:00 AM – 3:00 PM.', karmaNoteHi: 'योजना निर्माण का समय: सुबह 10:00 से दोपहर 3:00 बजे।',
    caution: 15, cautionNoteEn: 'Keep commitments realistic and clearly defined.', cautionNoteHi: 'योजनाओं को व्यावहारिक और सुस्पष्ट रखें।',
    remedyTimeEn: 'Evening Routine', remedyTimeHi: 'सायंकालीन अभ्यास',
    remedyTitleEn: 'Warm Turmeric Milk & Harmonic Resonance', remedyTitleHi: 'हल्दी युक्त गुनगुना दूध व शांत नाद',
    remedyDescEn: 'A warm cup of milk with a pinch of turmeric and 5 minutes of listening to gentle 432Hz ambient sound promotes serene relaxation.', remedyDescHi: 'रात में एक चुटकी हल्दी युक्त गुनगुना दूध और शांत संगीत का श्रवण गुरु ग्रह की सात्विक ऊर्जा को बढ़ाता है।',
    bullet1En: 'Deep restorative cellular rest', bullet1Hi: 'गहन शारीरिक व मानसिक विश्राम',
    bullet2En: 'Strengthens Jupiter harmony', bullet2Hi: 'बृहस्पति तत्व का सकारात्मक प्रभाव'
  },
  {
    id: 'capricorn', symbol: '\u2651\uFE0E', en: 'Capricorn', hi: 'मकर',
    peace: 83, peaceNoteEn: 'Methodical perseverance. Build steadily without haste.', peaceNoteHi: 'व्यवस्थित कार्यशैली। बिना हड़बड़ाहट के निरंतर प्रगति करें।',
    karma: 95, karmaNoteEn: 'High productivity window: 9:00 AM – 2:00 PM.', karmaNoteHi: 'उच्च कार्यक्षमता का समय: सुबह 9:00 से दोपहर 2:00 बजे।',
    caution: 22, cautionNoteEn: 'Take short physical posture breaks during long work sessions.', cautionNoteHi: 'लगातार काम के बीच 5 मिनट का शारीरिक विश्राम लें।',
    remedyTimeEn: 'Dusk Practice', remedyTimeHi: 'संध्याकालीन अभ्यास',
    remedyTitleEn: 'Sesame Diya Lighting & Silent Gratitude', remedyTitleHi: 'तिल तेल का दीपक व कृतज्ञता भाव',
    remedyDescEn: 'Light an earthen sesame oil lamp at twilight. A quiet 3-minute reflection honors discipline and grounds physical stamina.', remedyDescHi: 'संध्या समय तिल के तेल का दीपक जलाकर कुछ क्षण मौन बैठें। यह कर्म व अनुशासन में संतुलन स्थापित करता है।',
    bullet1En: 'Grounds discipline and endurance', bullet1Hi: 'धैर्य व कार्यक्षमता में स्थिरता',
    bullet2En: 'Harmonizes Saturnian focus', bullet2Hi: 'शनि की सौम्य व अनुशासित ऊर्जा'
  },
  {
    id: 'aquarius', symbol: '\u2652\uFE0E', en: 'Aquarius', hi: 'कुंभ',
    peace: 87, peaceNoteEn: 'Innovative perspective. Collaborative dialogue will thrive.', peaceNoteHi: 'नवीन विचार व दृष्टिकोण। सामूहिक चर्चा के लिए अनुकूल दिन।',
    karma: 91, karmaNoteEn: 'Creative brainstorm window: 11:00 AM – 3:30 PM.', karmaNoteHi: 'विचार मंथन का समय: 11:00 AM – 3:30 PM।',
    caution: 25, cautionNoteEn: 'Ground abstract ideas into step-by-step milestones.', cautionNoteHi: 'बड़े विचारों को व्यावहारिक चरणों में विभाजित करें।',
    remedyTimeEn: 'Morning Routine', remedyTimeHi: 'प्रातःकालीन अभ्यास',
    remedyTitleEn: 'Terrace Bird Water Bowl & Breath Pause', remedyTitleHi: 'पक्षियों के लिए जल व सजग श्वास',
    remedyDescEn: 'Place an earthen water bowl for birds and take 5 slow deep breaths outdoors. Restores natural perspective and quietens racing thoughts.', remedyDescHi: 'खुली हवा में पक्षियों के लिए जल रखें और 5 गहरी सांसें लें। यह विचारों के प्रवाह को शांत व केंद्रित करता है।',
    bullet1En: 'Clears cognitive restlessness', bullet1Hi: 'मानसिक बेचैनी से मुक्ति',
    bullet2En: 'Harmonizes collective service', bullet2Hi: 'सकारात्मक और परोपकारी ऊर्जा'
  },
  {
    id: 'pisces', symbol: '\u2653\uFE0E', en: 'Pisces', hi: 'मीन',
    peace: 94, peaceNoteEn: 'Serene intuition and emotional ease. Deep creative capacity.', peaceNoteHi: 'शांत अंतर्दृष्टि और भावनात्मक सहजता। रचनात्मक कार्यों के लिए उत्तम।',
    karma: 86, karmaNoteEn: 'Reflective focus window: 12:30 PM – 4:30 PM.', karmaNoteHi: 'एकाग्र चिंतन का समय: दोपहर 12:30 से शाम 4:30 बजे।',
    caution: 14, cautionNoteEn: 'Maintain practical structure around daily task lists.', cautionNoteHi: 'दैनिक कार्यों की सूची बनाकर व्यवस्थित आगे बढ़ें।',
    remedyTimeEn: 'Twilight Routine', remedyTimeHi: 'गोधूलि वेला अभ्यास',
    remedyTitleEn: 'Sunset Silence & Mindful Digital Sabbatical', remedyTitleHi: 'सूर्यास्त के समय मौन व स्क्रीन विराम',
    remedyDescEn: 'Sit in silence for 10 minutes at sunset without screens. Replenishes subtle mental energy and anchors restorative clarity.', remedyDescHi: 'सूर्यास्त के समय 10 मिनट बिना किसी फोन या स्क्रीन के मौन बैठें। इससे आंतरिक शांति व अंतर्ज्ञान रिचार्ज होता है।',
    bullet1En: 'Replenishes intuitive energy', bullet1Hi: 'सहज अंतर्ज्ञान का पोषण',
    bullet2En: 'Restores nervous system ease', bullet2Hi: 'मानसिक सुकून और गहरी शांति'
  }
];

let selectedRashi = 'scorpio';

function initCosmicExplorer() {
  const grid = document.getElementById('rashi-grid');
  if (!grid) return;

  grid.innerHTML = '';
  rashiData.forEach(rashi => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `rashi-btn ${rashi.id === selectedRashi ? 'active' : ''}`;
    btn.dataset.rashi = rashi.id;
    btn.innerHTML = `
      <span class="rashi-symbol">${rashi.symbol}</span>
      <span class="rashi-name">${currentLang === 'hi' ? rashi.hi : rashi.en}</span>
      <span class="rashi-sub">${currentLang === 'hi' ? rashi.en : rashi.hi}</span>
    `;

    btn.addEventListener('click', () => {
      selectRashi(rashi.id);
    });

    grid.appendChild(btn);
  });

  updateCosmicDisplay();
}

function selectRashi(rashiId) {
  selectedRashi = rashiId;
  const allBtns = document.querySelectorAll('.rashi-btn');
  allBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.rashi === rashiId);
  });

  // Play subtle calming chime
  if (heavenlySynth) {
    heavenlySynth.playGentleChime();
  }

  updateCosmicDisplay();
}

function updateCosmicDisplay() {
  const data = rashiData.find(r => r.id === selectedRashi) || rashiData[7];

  const peaceVal = document.getElementById('meter-peace-val');
  const peaceFill = document.getElementById('meter-peace-fill');
  const peaceNote = document.getElementById('meter-peace-note');

  const karmaVal = document.getElementById('meter-karma-val');
  const karmaFill = document.getElementById('meter-karma-fill');
  const karmaNote = document.getElementById('meter-karma-note');

  const cautionVal = document.getElementById('meter-caution-val');
  const cautionFill = document.getElementById('meter-caution-fill');
  const cautionNote = document.getElementById('meter-caution-note');

  const remedyTime = document.getElementById('remedy-time');
  const title = document.getElementById('remedy-title');
  const desc = document.getElementById('remedy-desc');
  const bullet1 = document.getElementById('remedy-bullet-1');
  const bullet2 = document.getElementById('remedy-bullet-2');

  const isHi = currentLang === 'hi';

  if (peaceVal && peaceFill) {
    peaceVal.textContent = isHi ? `संतुलित (${data.peace}%)` : `Harmonious (${data.peace}%)`;
    peaceFill.style.width = `${data.peace}%`;
  }
  if (peaceNote) {
    peaceNote.textContent = isHi ? data.peaceNoteHi : data.peaceNoteEn;
  }

  if (karmaVal && karmaFill) {
    karmaVal.textContent = isHi ? `अनुकूल समय (${data.karma}%)` : `Optimal Window (${data.karma}%)`;
    karmaFill.style.width = `${data.karma}%`;
  }
  if (karmaNote) {
    karmaNote.textContent = isHi ? data.karmaNoteHi : data.karmaNoteEn;
  }

  if (cautionVal && cautionFill) {
    cautionVal.textContent = isHi ? `स्थिर व सौम्य` : `Steady & Grounded`;
    cautionFill.style.width = `${data.caution}%`;
  }
  if (cautionNote) {
    cautionNote.textContent = isHi ? data.cautionNoteHi : data.cautionNoteEn;
  }

  if (remedyTime) {
    remedyTime.textContent = isHi ? data.remedyTimeHi : data.remedyTimeEn;
  }
  if (title) {
    title.textContent = isHi ? data.remedyTitleHi : data.remedyTitleEn;
  }
  if (desc) {
    desc.textContent = isHi ? data.remedyDescHi : data.remedyDescEn;
  }
  if (bullet1) {
    bullet1.textContent = isHi ? data.bullet1Hi : data.bullet1En;
  }
  if (bullet2) {
    bullet2.textContent = isHi ? data.bullet2Hi : data.bullet2En;
  }
}

// ==========================================================================
// 11. ASTROLOGER VOICE NOTE PREVIEWS (15s INTRO)
// ==========================================================================
const guideVoiceQuotes = {
  1: {
    en: "Namaste, I'm Dr. Saurabh. In career pivots, never panic — it is all about planetary season and timing. We match your chart's strength with practical strategic moves.",
    hi: "नमस्ते, मैं डॉ. सौरभ। करियर बदलाव में घबराने की ज़रूरत नहीं — यह सिर्फ सही ग्रहीय समय का खेल है। हम बिना डराए आपकी असली स्ट्रेंथ को डिकोड करेंगे।"
  },
  2: {
    en: "Namaste, I'm Ananya. Seeking clarity in marriage or relationships should bring relief, never shame. I decode compatibility with deep compassion and zero judgment.",
    hi: "नमस्ते, मैं अनन्या। रिश्तों और विवाह में स्पष्टता पाना राहत का काम है, किसी अपराध का नहीं। मैं बिना किसी जजमेंट के आपके भावनात्मक तालमेल को समझाऊंगी।"
  },
  3: {
    en: "Namaste, I'm Raghavendra. In investments and wealth cycles, patience beats impulsiveness. We align your transit timing with grounded financial clarity.",
    hi: "नमस्ते, मैं राघवेन्द्र। धन और निवेश के फैसलों में जल्दबाजी से बचें। हम बाजार और गोचर दोनों को सीधी, व्यावहारिक भाषा में आपके सामने रखेंगे।"
  }
};
