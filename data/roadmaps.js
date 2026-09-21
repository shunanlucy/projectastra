/**
 * ASTRA - Sample 3-Point Kundli Roadmaps
 * Practical guidance for Career, Love/Marriage, Money, Abroad
 */
const sampleRoadmaps = {
  career: {
    en: {
      sign: "Leo Ascendant • Jupiter 10th House Transit",
      point1: {
        label: "POINT 1 • THE CURRENT TRANSIT SEASON",
        title: "Expansion Window (Nov 2026 - Mar 2027)",
        desc: "A period of calm recognition and organic promotion. Decisions made with patience and calm planning carry tremendous upside without stressful burnout.",
        tag: "High Momentum Season",
        tagClass: "point-tag"
      },
      point2: {
        label: "POINT 2 • THE MINDFUL GUARDRAIL",
        title: "Avoid Impatience & Restless Reactions",
        desc: "When meetings feel frustrating, pause for 3 deep breaths before responding. Grounded composure will naturally win leadership respect.",
        tag: "Guardrail: Respond with Calm",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "POINT 3 • SIMPLE DAILY RITUAL",
        title: "10-Minute Morning Sun & Workspace Order",
        desc: "Begin your morning with 10 minutes facing the sunrise with a glass of water, and keep your physical workspace decluttered to ground focus and discipline.",
        tag: "Daily 10m Action",
        tagClass: "point-tag remedy-tag"
      }
    },
    hi: {
      sign: "सिंह लग्न • दशम भाव में गुरु का शुभ गोचर",
      point1: {
        label: "पहला बिंदु • वर्तमान उन्नति काल",
        title: "सहज तरक्की व सम्मान का समय (नवंबर 2026 - मार्च 2027)",
        desc: "यह समय बिना किसी तनाव के आपके काम को पहचान दिलाने वाला है। धैर्य और शांत योजना के साथ उठाए गए कदम बड़ी सफलता देंगे।",
        tag: "सकारात्मक उन्नति काल",
        tagClass: "point-tag"
      },
      point2: {
        label: "दूसरा बिंदु • वो चूक जिससे बचना है",
        title: "अधीरता और तुरंत प्रतिक्रिया देने से बचें",
        desc: "ऑफिस या व्यापार में यदि कोई बात पसंद न आए, तो तुरंत गुस्सा करने के बजाय 3 गहरी सांसें लें और शांति से बात रखें।",
        tag: "सलाह: शांत मन से निर्णय लें",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "तीसरा बिंदु • दैनिक सात्विक दिनचर्या",
        title: "सुबह 10 मिनट सूर्य दर्शन व व्यवस्थित डेस्क",
        desc: "प्रतिदिन सुबह 10 मिनट सूर्य की धूप में बैठें, एक गिलास जल ग्रहण करें और कार्यस्थल को व्यवस्थित रखें।",
        tag: "प्रतिदिन 10 मिनट",
        tagClass: "point-tag remedy-tag"
      }
    }
  },
  relationship: {
    en: {
      sign: "Libra Ascendant • Venus Harmonic Trine",
      point1: {
        label: "POINT 1 • THE CURRENT TRANSIT SEASON",
        title: "Heart-Centered Harmony (Dec 2026 - Feb 2027)",
        desc: "Gentle understanding replaces old friction. Unresolved misunderstandings naturally dissolve through open, non-judgmental listening.",
        tag: "Deep Heart Alignment",
        tagClass: "point-tag"
      },
      point2: {
        label: "POINT 2 • THE MINDFUL GUARDRAIL",
        title: "Avoid Overthinking Text Messages",
        desc: "Do not assume tone in digital messages. If a conversation feels tense, step away from screens and connect in person over a warm cup of tea.",
        tag: "Guardrail: Connect in Person",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "POINT 3 • SIMPLE DAILY RITUAL",
        title: "Fragrant White Flowers & Mindful Presence",
        desc: "Keep fresh white flowers or natural fragrance in your room on Fridays. Practice 10 minutes of listening without interrupting.",
        tag: "Zero Cost Peace Ritual",
        tagClass: "point-tag remedy-tag"
      }
    },
    hi: {
      sign: "तुला लग्न • शुक्र का शुभ प्रभाव",
      point1: {
        label: "पहला बिंदु • संबंधों में मधुरता का समय",
        title: "दिल से जुड़ाव और समझदारी (दिसंबर 2026 - फरवरी 2027)",
        desc: "पुरानी गलतफहमियां दूर होंगी। खुले मन से की गई बातचीत रिश्तों में मिठास और विश्वास को दोबारा स्थापित करेगी।",
        tag: "मधुर सामंजस्य का योग",
        tagClass: "point-tag"
      },
      point2: {
        label: "दूसरा बिंदु • वो चूक जिससे बचना है",
        title: "मैसेज पर ज्यादा सोच-विचार करने से बचें",
        desc: "चैटिंग में बातों का गलत मतलब न निकालें। अगर कोई उलझन हो तो फोन रखकर आमने-सामने बैठकर चाय के साथ बात करें।",
        tag: "सलाह: आमने-सामने बात करें",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "तीसरा बिंदु • मुफ़्त और असरदार आदत",
        title: "कमरे में ताजे सफेद फूल व शांत भोजन",
        desc: "शुक्रवार को कमरे में ताजे सफेद फूल रखें। खाना खाते समय मोबाइल दूर रखें और अपनों के साथ सुकून से समय बिताएं।",
        tag: "सरल नियम: 0 रुपये खर्च",
        tagClass: "point-tag remedy-tag"
      }
    }
  },
  wealth: {
    en: {
      sign: "Taurus Ascendant • Stable Earth Alignment",
      point1: {
        label: "POINT 1 • THE CURRENT TRANSIT SEASON",
        title: "Grounded Financial Stability (Dec 2026 - May 2027)",
        desc: "Focus on steady accumulation rather than volatile speculation. Your chart supports compounding, debt freedom, and lasting peace of mind.",
        tag: "Steady Growth Season",
        tagClass: "point-tag"
      },
      point2: {
        label: "POINT 2 • THE MINDFUL GUARDRAIL",
        title: "Avoid Lending Without Thoughtful Boundaries",
        desc: "Politely decline risky joint investments or informal loans that might create emotional strain over the next 90 days.",
        tag: "Guardrail: Protect Your Peace",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "POINT 3 • SIMPLE DAILY RITUAL",
        title: "Clean Wallet Practice & Saturday Kindness",
        desc: "Remove old crumpled slips from your wallet. Share a warm meal or tea with someone in need every Saturday evening.",
        tag: "Saturday Evening Habit",
        tagClass: "point-tag remedy-tag"
      }
    },
    hi: {
      sign: "वृषभ लग्न • स्थिर धन व सुरक्षा योग",
      point1: {
        label: "पहला बिंदु • वित्तीय स्थिरता का समय",
        title: "सुरक्षित बचत और सुकून (दिसंबर 2026 - मई 2027)",
        desc: "सट्टेबाजी के बजाय सुरक्षित बचत और पुराने कर्जों को निपटाने का यह सबसे अच्छा समय है। इससे मन को गहरी शांति मिलेगी।",
        tag: "स्थिर बचत का समय",
        tagClass: "point-tag"
      },
      point2: {
        label: "दूसरा बिंदु • वो चूक जिससे बचना है",
        title: "रिश्तों में बिना सोचे उधार देने से बचें",
        desc: "अगले 90 दिनों तक भावनात्मक दबाव में आकर किसी को बड़ा उधार न दें ताकि आपकी खुद की मानसिक शांति प्रभावित न हो।",
        tag: "सलाह: सीमाएं तय रखें",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "तीसरा बिंदु • मुफ़्त और असरदार आदत",
        title: "बटुए की स्वच्छता व शनिवार को दान",
        desc: "अपने पर्स से पुराने रसीद-कागजात हटाकर उसे साफ रखें। शनिवार शाम किसी जरूरतमंद व्यक्ति को चाय या भोजन कराएं।",
        tag: "शनिवार का नियम",
        tagClass: "point-tag remedy-tag"
      }
    }
  },
  relocation: {
    en: {
      sign: "Gemini Ascendant • Expansive Horizon Window",
      point1: {
        label: "POINT 1 • THE CURRENT TRANSIT SEASON",
        title: "Peaceful Horizon Shift (Jan 2027 - June 2027)",
        desc: "Supportive planetary cycles for moving to a fresh, inspiring location, foreign travel, or a peaceful new home environment.",
        tag: "New Beginning Season",
        tagClass: "point-tag"
      },
      point2: {
        label: "POINT 2 • THE MINDFUL GUARDRAIL",
        title: "Calm Verification of Formal Documents",
        desc: "Do not rush visa or lease paperwork. Review dates and agreements twice with a clear, calm morning mind.",
        tag: "Guardrail: Review with Calm",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "POINT 3 • SIMPLE DAILY RITUAL",
        title: "Clean North-West Corner of Your Living Space",
        desc: "Keep the travel / airflow corner of your room light, clean, and free of unnecessary clutter to encourage harmonious transitions.",
        tag: "Simple Harmony Action",
        tagClass: "point-tag remedy-tag"
      }
    },
    hi: {
      sign: "मिथुन लग्न • नए स्थान व सुखद यात्रा योग",
      point1: {
        label: "पहला बिंदु • नई शुरुआत और स्थान परिवर्तन",
        title: "सुखद यात्रा व नई जगह बसने का समय (जनवरी 2027 - जून 2027)",
        desc: "किसी नए शांत शहर, विदेश यात्रा या नए घर में जाने के लिए ग्रह स्थिति बहुत अनुकूल है। यह बदलाव आपके जीवन में ताज़गी लाएगा।",
        tag: "नई शुरुआत का योग",
        tagClass: "point-tag"
      },
      point2: {
        label: "दूसरा बिंदु • वो चूक जिससे बचना है",
        title: "कागजात की जांच में जल्दबाजी न करें",
        desc: "वीज़ा या किराए के समझौतों पर हस्ताक्षर करने से पहले सुबह शांत मन से सभी कागजात को दो बार पढ़ लें।",
        tag: "सलाह: शांत मन से जांचें",
        tagClass: "point-tag alert-tag"
      },
      point3: {
        label: "तीसरा बिंदु • मुफ़्त और असरदार आदत",
        title: "कमरे के उत्तर-पश्चिम कोने को खुला रखें",
        desc: "अपने कमरे के उत्तर-पश्चिम हिस्से को साफ-सुथरा और हवादार रखें ताकि नई ऊर्जा का प्रवाह बना रहे।",
        tag: "सरल उपाय: 0 रुपये खर्च",
        tagClass: "point-tag remedy-tag"
      }
    }
  }
};
