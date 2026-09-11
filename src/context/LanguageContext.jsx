import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header & Navigation
    navHome: "Home",
    navWishes: "Wishes",
    navHowItWorks: "How It Works",
    navAbout: "About Us",
    navRules: "Rules",
    navRewards: "Rewards",
    navContact: "Contact",
    registerNow: "Register Now",
    language: "Language",
    english: "English",
    tamil: "தமிழ் (Tamil)",

    // Home Hero Section
    heroBadge: "TN Happy Kids • State Level Competition 2026",
    heroTitlePart1: "Vinayagar Chaturthi",
    heroTitlePart2: "Kids Drawing Contest",
    heroSubtitle: "Celebrate Vinayagar Chaturthi with creativity! Register today & win a pure Silver Vinayagar Idol + Exclusive Gift Hampers!",
    enterCompetition: "Enter Competition",
    viewRules: "View Rules & Guidelines",

    // Features Bar
    feature1Title: "State Level Contest",
    feature1Desc: "Across 9+ Tamil Nadu Branches",
    feature2Title: "Exclusive Gifts",
    feature2Desc: "Silver Vinayagar Idol for Winners",
    feature3Title: "Ages 3 to 5",
    feature3Desc: "Tailored for Preschool Kids",
    feature4Title: "Digital Certificates",
    feature4Desc: "For All Registered Participants",

    // Festive Section & Mandapam
    festiveTitle: "TN Happy Kids Wishes",
    festiveWishesTitle: "TN Happy Kids Wishes You A Happy Vinayagar Chaturthi!",
    festiveWishesText: "TN Happy Kids warmly wishes all our wonderful children, parents & families a blessed Vinayagar Chaturthi filled with joy, wisdom, prosperity & creative success!",
    registerForContest: "Register For Contest",

    // Contest Details Card
    contestRulesHeading: "Competition Guidelines & Eligibility",
    rule1Title: "Age Limit (3 to 5 Years)",
    rule1Desc: "Strictly designed for children aged 3 to 5 years old.",
    rule2Title: "Drawing Topic",
    rule2Desc: "Draw Lord Vinayagar in your own creative art style.",
    rule3Title: "Activity Video",
    rule3Desc: "Upload a short 10-second video of your child drawing.",
    rule4Title: "Free Entry",
    rule4Desc: "No registration fee. Participation is 100% Free!",

    // Grand Silver Idol Reward Card & Lucky Draw
    rewardCardBadge: "Grand Festival Reward",
    rewardCardTitle: "Silver Vinayagar Idol Gift!",
    rewardCardDesc: "Share your child's completed drawing & activity on WhatsApp to 95149 00070 to claim Silver Ganesha Idol!",
    whatsappShare: "Share via WhatsApp",
    luckyDrawBadge: "🎉 10 Lucky Winner Children",
    luckyDrawTitle: "Special Festival Lucky Draw Contest!",
    luckyDrawSubtitle: "10 Lucky children selected via random draw will receive Exclusive Special Gift Hampers!",
    luckyDrawDesc: "Every registered participant gets a chance to enter the bumper Lucky Draw!",

    // Registration Form
    regStep1: "Step 01 • Kid's Registration",
    regTitle: "Register Your Child",
    regSubtitle: "Fill out the registration details to enter the Vinayagar Chaturthi contest.",
    parentName: "Parent / Guardian Name",
    parentNamePlaceholder: "Enter parent full name",
    childName: "Child's Name",
    childNamePlaceholder: "Enter child full name",
    childAge: "Child's Age (Years)",
    childAgePlaceholder: "Age (Must be 3 to 5 years)",
    whatsappNumber: "WhatsApp Phone Number",
    whatsappNumberPlaceholder: "10-digit WhatsApp number",
    branchLocation: "Nearest Branch Location",
    selectBranch: "Select Branch",
    continueToUpload: "Continue to Upload Drawing",

    // Age Notice Modal
    ageModalTitle: "Eligible Age Notice",
    ageModalMessage: "This competition is exclusively designed for children aged 3 to 5 years. Children below 3 years or above 5 years are not eligible for this competition.",
    closeModal: "Understand & Close",

    // Upload Page
    uploadStep2: "Step 02 • Artwork Submission",
    uploadTitle: "Show Us Your Little Artist's Creativity",
    uploadSubtitle: "Please upload your child's Vinayagar drawing image and a short activity video clip.",
    drawingTitle: "Vinayagar Drawing",
    drawingSubtitle: "Upload photo of your child's artwork",
    videoTitle: "Activity Video",
    videoSubtitle: "Upload short video of your child drawing",
    continueToActivity: "Continue to Activity",
    drawingRequiredTitle: "Drawing Image Required 🎨",
    drawingRequiredMsg: "Please select and upload your child's Vinayagar drawing image to proceed.",
    videoRequiredTitle: "Activity Video Required 🎥",
    videoRequiredMsg: "Please select and upload a short activity video clip to proceed.",

    // Dot Activity Page
    activityStep3: "Step 03 • Interactive Game",
    activityTitle: "Complete Lord Vinayagar",
    activitySubtitle: "Join the dots from 1 to 50 to reveal Vinayagar.",
    connectAllDots: "Connect All Dots",
    reset: "Reset",
    continueToRewards: "Continue to Rewards",

    // Complete / Success Page
    completeTitle: "Registration Complete!",
    completeSubtitle: "Thank you for participating in TN Happy Kids Vinayagar Chaturthi Drawing Competition!",
    participantId: "Participant ID",
    downloadCertificate: "Download Certificate",
    shareWhatsAppGift: "Share on WhatsApp to Get Gift",

    // Footer & Enquiry
    footerTitle: "TN Happy Kids Preschool & Activity Center",
    footerDesc: "Tamil Nadu's premier playschool, preschool and creative activity center nurturing young minds through quality education, arts, and festival celebrations.",
    footerQuickLinks: "Quick Navigation",
    footerPrograms: "Programs & Branches",
    footerContactTitle: "Connect & Enquiry",
    footerEnquiryBtn: "Admission & Branch Enquiry 📝",
    linkAdmission: "Admission Enquiry",
    linkPreschool: "Preschool & Playschool",
    linkDaycare: "Daycare & Activity Classes",
    linkArts: "Drawing & Art Academy",
    linkTambaram: "Tambaram Main Branch",
    linkBranches: "Tamil Nadu Branches",
    addressVal: "TN Happy Kids Preschool & Activity Center, Tamil Nadu",
    phoneVal: "+91 89251 05109",
    emailVal: "admission@tnhappykids.in",
    timingVal: "Mon - Sat: 9:00 AM - 6:00 PM",
    enquiryModalTitle: "TN Happy Kids - Admission & Quick Enquiry",
    enquiryModalSubtitle: "Fill out the form below and our team will get back to you shortly!",
    inquiryTypeLabel: "Enquiry Type",
    optAdmission: "Preschool / Playschool Admission",
    optCompetition: "Drawing Competition Query",
    optActivities: "After-school Activity Classes",
    optFranchise: "Branch / Franchise Enquiry",
    submitEnquiry: "Submit Enquiry",
    enquirySuccessTitle: "Enquiry Submitted Successfully! 🎉",
    enquirySuccessMsg: "Thank you for reaching out to TN Happy Kids! Our admissions representative will contact you via WhatsApp/Phone shortly.",
    copyright: "© 2026 TN Happy Kids Preschool. All Rights Reserved.",
  },
  ta: {
    // Header & Navigation
    navHome: "முகப்பு",
    navWishes: "வாழ்த்துகள்",
    navHowItWorks: "செயல்படும் முறை",
    navAbout: "எங்களைப் பற்றி",
    navRules: "விதிகள்",
    navRewards: "பரிசுகள்",
    navContact: "தொடர்புகொள்ள",
    registerNow: "பதிவு செய்க",
    language: "மொழி",
    english: "English",
    tamil: "தமிழ் (Tamil)",

    // Home Hero Section
    heroBadge: "TN Happy Kids • மாநில அளவிலான போட்டி 2026",
    heroTitlePart1: "விநாயகர் சதுர்த்தி",
    heroTitlePart2: "குழந்தைகள் ஓவியப் போட்டி",
    heroSubtitle: "விநாயகர் சதுர்த்தியைக் கொண்டாடும் வண்ணம் உங்களின் செல்லக் குழந்தைகளின் வரையும் திறமையை வெளிப்படுத்துங்கள்! 3 முதல் 5 வயதுக் குழந்தைகளுக்கு மட்டும். இப்போதே பதிவு செய்து வெள்ளி விநாயகர் சிலை மற்றும் சிறப்புப் பரிசுகளை வெல்லுங்கள்!",
    enterCompetition: "போட்டியில் பங்கேற்க",
    viewRules: "விதிமுறைகளைக் காண",

    // Features Bar
    feature1Title: "மாநில அளவிலான போட்டி",
    feature1Desc: "தமிழ்நாட்டின் 9+ கிளைகளில்",
    feature2Title: "சிறப்பு பரிசுகள்",
    feature2Desc: "வெற்றியாளர்களுக்கு வெள்ளி விநாயகர் சிலை",
    feature3Title: "வயது 3 முதல் 5 வரை",
    feature3Desc: "முன்பள்ளி குழந்தைகளுக்கு மட்டும்",
    feature4Title: "டிஜிட்டல் சான்றிதழ்",
    feature4Desc: "பதிவுசெய்த அனைத்து பங்கேற்பாளர்களுக்கும்",

    // Festive Section & Mandapam
    festiveTitle: "TN Happy Kids வாழ்த்துகள்",
    festiveWishesTitle: "TN Happy Kids வழங்கும் இனிய விநாயகர் சதுர்த்தி நல்வாழ்த்துகள்!",
    festiveWishesText: "TN Happy Kids குடும்பத்தின் சார்பில் எங்கள் அன்பு குழந்தைகள் மற்றும் பெற்றோர் அனைவருக்கும் மகிழ்ச்சியும், ஞானமும், கலை அறிவும் நிறைந்த விநாயகர் சதுர்த்தி நல்வாழ்த்துகள்!",
    registerForContest: "போட்டிக்கு பதிவு செய்ய",

    // Contest Details Card
    contestRulesHeading: "போட்டி விதிமுறைகள் & தகுதிகள்",
    rule1Title: "வயது வரம்பு (3 முதல் 5 வயது)",
    rule1Desc: "3 முதல் 5 வயது வரையிலான குழந்தைகளுக்கு மட்டுமே வடிவமைக்கப்பட்டுள்ளது.",
    rule2Title: "ஓவிய தலைப்பு",
    rule2Desc: "உங்களின் சொந்த படைப்பாற்றலில் ஸ்ரீ விநாயகரை வரையவும்.",
    rule3Title: "செயல்பாட்டு வீடியோ",
    rule3Desc: "குழந்தை படம் வரையும் 10 வினாடி சிறு வீடியோவை அப்லோட் செய்யவும்.",
    rule4Title: "இலவச பதிவு",
    rule4Desc: "எந்தவித கட்டணமும் இல்லை. 100% இலவச பங்கேற்பு!",

    // Grand Silver Idol Reward Card & Lucky Draw
    rewardCardBadge: "சிறப்பு பண்டிகை பரிசு",
    rewardCardTitle: "வெள்ளி விநாயகர் சிலை பரிசு!",
    rewardCardDesc: "குழந்தையின் ஓவியம் மற்றும் வீடியோவை 95149 00070 என்ற எண்ணிற்கு வாட்ஸ்அப்பில் பகிர்ந்து வெள்ளி விநாயகர் சிலையை வெல்லுங்கள்!",
    whatsappShare: "வாட்ஸ்அப்பில் பகிர்க",
    luckyDrawBadge: "🎉 10 அதிர்ஷ்டசாலி குழந்தைகள்",
    luckyDrawTitle: "சிறப்புத் திருவிழா லக்கி டிரா போட்டி!",
    luckyDrawSubtitle: "லக்கி டிரா மூலம் தேர்வு செய்யப்படும் 10 அதிர்ஷ்டசாலி குழந்தைகளுக்கு பிரத்யேக சிறப்புப் பரிசுகள் வழங்கப்பெறும்!",
    luckyDrawDesc: "பதிவுசெய்யும் அனைத்துக் குழந்தைகளுக்கும் லக்கி டிராவில் பங்கேற்கும் அரிய வாய்ப்பு!",

    // Registration Form
    regStep1: "படி 01 • குழந்தை பதிவு",
    regTitle: "குழந்தையின் தகவல்கள் பதிவு",
    regSubtitle: "விநாயகர் சதுர்த்தி போட்டியில் பங்கேற்க கீழ்க்கண்ட படிவத்தைப் பூர்த்தி செய்யவும்.",
    parentName: "பெற்றோர் / காப்பாளர் பெயர்",
    parentNamePlaceholder: "பெற்றோரின் முழு பெயர் உள்ளிடவும்",
    childName: "குழந்தையின் பெயர்",
    childNamePlaceholder: "குழந்தையின் முழு பெயர் உள்ளிடவும்",
    childAge: "குழந்தையின் வயது",
    childAgePlaceholder: "வயது (3 முதல் 5 மட்டுமே)",
    whatsappNumber: "வாட்ஸ்அப் தொலைபேசி எண்",
    whatsappNumberPlaceholder: "10-இலக்க வாட்ஸ்அப் எண்",
    branchLocation: "அருகிலுள்ள கிளை மையம்",
    selectBranch: "கிளையைத் தேர்ந்தெடுக்கவும்",
    continueToUpload: "ஓவியம் அப்லோட் செய்ய தொடரவும்",

    // Age Notice Modal
    ageModalTitle: "வயது தகுதி அறிவிப்பு",
    ageModalMessage: "இப்போட்டி 3 முதல் 5 வயது வரையிலான குழந்தைகளுக்கு மட்டுமே பிரத்யேகமாக வடிவமைக்கப்பட்டுள்ளது. 3 வயதிற்கு உட்பட்டோர் அல்லது 5 வயதிற்கு மேற்பட்ட குழந்தைகள் இப்போட்டியில் பங்கேற்க முடியாது.",
    closeModal: "புரிந்துகொண்டேன்",

    // Upload Page
    uploadStep2: "படி 02 • ஓவியம் சமர்ப்பித்தல்",
    uploadTitle: "உங்கள் செல்லக் குழந்தையின் படைப்பாற்றலைக் காட்டுங்கள்",
    uploadSubtitle: "குழந்தை வரைந்த விநாயகர் ஓவியப் படம் மற்றும் சிறு வீடியோவை பதிவேற்றம் செய்யவும்.",
    drawingTitle: "விநாயகர் ஓவியம்",
    drawingSubtitle: "குழந்தை வரைந்த படத்தைப் பதிவேற்றவும்",
    videoTitle: "செயல்பாட்டு வீடியோ",
    videoSubtitle: "குழந்தை வரைவதை வீடியோவாகப் பதிவேற்றவும்",
    continueToActivity: "செயல்பாட்டுக்குச் செல்லவும்",
    drawingRequiredTitle: "ஓவியப் படம் தேவை 🎨",
    drawingRequiredMsg: "தொடர உங்கள் குழந்தையின் விநாயகர் ஓவியப் படத்தைத் தேர்ந்தெடுத்து அப்லோட் செய்யவும்.",
    videoRequiredTitle: "செயல்பாட்டு வீடியோ தேவை 🎥",
    videoRequiredMsg: "தொடர குழந்தைக் படம் வரையும் சிறு வீடியோவைப் பதிவேற்றம் செய்யவும்.",

    // Dot Activity Page
    activityStep3: "படி 03 • புள்ளி விளையாட்டு",
    activityTitle: "ஸ்ரீ விநாயகரை இணைப்போம்",
    activitySubtitle: "1 முதல் 50 வரையிலான புள்ளிகளை இணைத்து விநாயகரை வெளிப்படுத்துங்கள்.",
    connectAllDots: "அனைத்துப் புள்ளிகளையும் இணைக்க",
    reset: "மீட்டமைக்க",
    continueToRewards: "பரிசுகளுக்குத் தொடரவும்",

    // Complete / Success Page
    completeTitle: "பதிவு வெற்றிகரமாக முடிந்தது!",
    completeSubtitle: "TN Happy Kids விநாயகர் சதுர்த்தி ஓவியப் போட்டியில் பங்கேற்றமைக்கு நன்றி!",
    participantId: "பங்கேற்பாளர் எண்",
    downloadCertificate: "சான்றிதழை பதிவிறக்குக",
    shareWhatsAppGift: "பரிசு பெற வாட்ஸ்அப்பில் பகிரவும்",

    // Footer & Enquiry
    footerTitle: "TN Happy Kids முன்பள்ளி & பயிற்சி மையம்",
    footerDesc: "தமிழ்நாட்டின் முன்னணி முன்பள்ளி, பிளேஸ்கூல் மற்றும் கலைப் பயிற்சி மையம். குழந்தைகளின் திறமை, கல்வி மற்றும் பண்பாட்டை வளர்க்கும் தளம்.",
    footerQuickLinks: "முக்கிய இணைப்புகள்",
    footerPrograms: "பயிற்சிகள் & கிளைகள்",
    footerContactTitle: "தொடர்பு & சேர்க்கை விவரங்கள்",
    footerEnquiryBtn: "சேர்க்கை & கிளைகள் சேர்க்கை படிவம் 📝",
    linkAdmission: "சேர்க்கை வினா படிவம்",
    linkPreschool: "முன்பள்ளி & பிளேஸ்கூல்",
    linkDaycare: "டேகேர் & மாலைப் பயிற்சிகள்",
    linkArts: "ஓவியம் & கலைக் கூடம்",
    linkTambaram: "தாம்பரம் தலைமை மையம்",
    linkBranches: "தமிழ்நாடு கிளைகள்",
    addressVal: "TN Happy Kids முன்பள்ளி & பயிற்சி மையம், தமிழ்நாடு",
    phoneVal: "+91 89251 05109",
    emailVal: "admission@tnhappykids.in",
    timingVal: "திங்கள் - சனி: காலை 9:00 - மாலை 6:00",
    enquiryModalTitle: "TN Happy Kids - விரைவு சேர்க்கை விவரப் படிவம்",
    enquiryModalSubtitle: "கீழ்க்கண்ட படிவத்தைப் பூர்த்தி செய்யவும, எங்கள் குழு உங்களை விரைவில் தொடர்பு கொள்ளும்!",
    inquiryTypeLabel: "கேள்வி வகை",
    optAdmission: "முன்பள்ளி / பிளேஸ்கூல் சேர்க்கை",
    optCompetition: "ஓவியப் போட்டி சந்தேகங்கள்",
    optActivities: "மாலைப் பயிற்சிகள் (Activity Classes)",
    optFranchise: "கிளை மையம் / பிராஞ்சைசி விவரங்கள்",
    submitEnquiry: "படிவத்தை அனுப்புக",
    enquirySuccessTitle: "படிவம் வெற்றிகரமாக அனுப்பப்பட்டது! 🎉",
    enquirySuccessMsg: "TN Happy Kids மையத்தைத் தொடர்பு கொண்டமைக்கு நன்றி! எங்கள் சேர்க்கைக் குழு உங்களை வாட்ஸ்அப்/போனில் விரைவில் தொடர்பு கொள்ளும்.",
    copyright: "© 2026 TN Happy Kids. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('tn_app_language') || 'en';
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('tn_app_language', lang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
