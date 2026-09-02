// 1. الإعدادات العامة وقاموس الترجمة الموحد (i18n)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfq4eVTCahrQdzc5VEmZozSNYMyxRgBOtj4-4uejGYR5yv082RSpsycqWrShkFjc_q/exec";

const translations = {
  ar: {
    pageTitle: "أكاديمية إتقان | المنصة التعليمية",
    logoText: "أكاديمية إتقان",
    navAbout: "التعريف",
    navCourses: "الدورات",
    courseQuran: "قسم القرآن الكريم",
    courseIslamic: "قسم الثقافة الإسلامية",
    courseArabic: "قسم اللغة العربية",
    courseSkills: "قسم مهارات التواصل",
    navContact: "اتصل بنا",
    navReviews: "آراء المشتركين",
    navLogin: "دخول المسجلين",
    loginStudent: "دخول الطلاب",
    loginTeacher: "دخول الأساتذة",
    loginAdmin: "دخول المشرفين",
    navRegister: "التسجيل",
    langToggle: "Français",
    
    // صفحة من نحن
    aboutHeading: "من نحن؟",
    aboutDescription: "أكاديمية إتقان هي مؤسسة تعليمية متخصصة تسعى إلى تقديم محتوى تعليمي متميز في شتى العلوم. نحن نؤمن بأن الإتقان هو أساس النجاح، ولذلك نعمل على توفير بيئة تعليمية تفاعلية تجمع بين الجودة الأكاديمية والسهولة التقنية لتصل المعلومة إلى كل طالب علم أينما كان.",
    visionTitle: "رؤيتنا",
    visionText: "أن نكون المنصة الأولى والرائدة في العالم العربي للتعليم المتقن والمؤصل.",
    missionTitle: "رسالتنا",
    missionText: "تيسير سبل طلب العلم ونشره باستخدام أحدث الوسائل التكنولوجية المتاحة.",

    // صفحة القرآن
    quranTitle: "قسم القرآن الكريم",
    quranSub: "نعتني بكتاب الله حفظاً وتجويداً وترتيلاً",
    availableTracks: "المسارات المتاحة",
    quranTrack1: "• حفظ القرآن الكريم للكبار والصغار.",
    quranTrack2: "• تصحيح التلاوة وإتقان مخارج الحروف.",
    quranTrack3: "• دراسة أحكام التجويد (نظري وتطبيقي).",
    quranTrack4: "• الإجازة بالسند المتصل إلى النبي ﷺ.",
    studySystem: "نظام الدراسة",
    quranSystemText: "نوفر حصصاً مرنة تناسب جميع الأوقات (صباحية ومسائية) عبر قاعات افتراضية تفاعلية، مع متابعة فردية لكل طالب.",
    registerSectionBtn: "سجل الآن في هذا القسم",

    // صفحة العربية
    arabicTitle: "قسم اللغة العربية",
    arabicSub: "لغة الضاد.. هوية، ثقافة، وإتقان",
    arabicTrack1Title: "العربية للصغار",
    arabicTrack1Text: "تعليم الحروف والقراءة والكتابة بأساليب ترفيهية وقصصية محببة للأطفال.",
    arabicTrack2Title: "لغير الناطقين بها",
    arabicTrack2Text: "منهج عالمي لتمكين الأجانب والراغبين في تعلم العربية من التواصل والفهم السليم.",
    arabicTrack3Title: "النحو والآداب",
    arabicTrack3Text: "شرح قواعد النحو والصرف، وتذوق النصوص الأدبية والبلاغة العربية.",
    arabicFeaturesTitle: "ما يميز منهجنا في العربية:",
    arabicFeature1: "• التفاعل المباشر: دروس حية تعتمد على الحوار وليس التلقين فقط.",
    arabicFeature2: "• الوسائل البصرية: استخدام فيديوهات وعروض تقديمية لتسهيل القواعد الجامدة.",
    arabicFeature3: "• التقويم المستمر: اختبارات قصيرة لمتابعة تطور مستوى الطالب في القراءة والاستماع.",
    arabicRegisterBtn: "انضم إلينا في قسم العربية",

    // الثقافة الإسلامية
    islamicTitle: "قسم الثقافة الإسلامية",
    islamicSub: "وعيٌ بالماضي، وفهمٌ للحاضر، وبناءٌ للمستقبل",
    islamicHub1Title: "التاريخ والحضارة",
    islamicHub1Text: "رحلة في أعماق التاريخ الإسلامي، من العهد النبوي وصولاً إلى إسهامات العلماء المسلمين في بناء الحضارة الإنسانية في الطب والفلك والعمارة.",
    islamicHub2Title: "العبادات والشعائر",
    islamicHub2Text: "فقه العبادات بأسلوب ميسر (الصلاة، الزكاة، الصيام، والحج)، مع التركيز على المقاصد الروحية والأخلاقية لكل شعيرة دينية.",
    islamicHub3Title: "السيرة والأخلاق",
    islamicHub3Text: "دراسة شخصية النبي ﷺ ومنهجه في التعامل، واستخلاص القيم الأخلاقية التي تبني الفرد والمجتمع في العصر الحديث.",
    whyStudyIslamic: "لماذا تدرس الثقافة الإسلامية في إتقان؟",
    islamicReason1: "منهج وسطي معتدل",
    islamicReason2: "ربط العلم بالواقع",
    islamicReason3: "أساتذة متخصصون",
    islamicRegisterBtn: "سجل الآن في دوراتنا الثقافية",

    // المهارات
    skillsTitle: "قسم المهارات والتطوير",
    skillsSub: "تمكين الكفاءات وتطوير القدرات لمواكبة العصر",
    skill1Title: "تأهيل مدرسي العربية",
    skill1Text: "دورات في طرق التدريس الحديثة وكيفية إدارة الفصول الافتراضية بفعالية.",
    skill2Title: "التقنية والذكاء الاصطناعي",
    skill2Text: "إتقان التعامل مع الحاسوب واستثمار أدوات الذكاء الاصطناعي في البحث والتعليم.",
    skill3Title: "الخطابة والإلقاء",
    skill3Text: "فن مواجهة الجمهور والتحدث بطلاقة وتأثير، وبناء الكاريزما الصوتية.",
    skill4Title: "مهارات التجويد الفني",
    skill4Text: "دورة متقدمة في جماليات القراءة، المقامات الصوتية، وضبط الأداء القرآني.",
    skillsNotice: "جميع دوراتنا في هذا القسم تشمل ورش عمل تطبيقية وشهادات إتمام معتمدة من الأكاديمية.",
    skillsRegisterBtn: "احجز مقعدك الآن",

    // اتصل بنا
    contactTitle: "اتصل بنا",
    contactSub: "يسعدنا استقبال استفساراتكم واقتراحاتكم",
    contactLabelName: "الاسم الكامل",
    contactLabelEmail: "البريد الإلكتروني",
    contactLabelMsg: "موضوع الرسالة",
    contactSendBtn: "إرسال الرسالة الآن",

    // الآراء
    reviewsTitle: "قالوا عن أكاديمية إتقان",
    review1Text: `"تجربتي في قسم القرآن كانت استثنائية، المدرسون صبورون جداً والمنصة سهلة الاستخدام."`,
    review1Author: "- الطالب أحمد من المغرب",
    review2Text: `"دورة الذكاء الاصطناعي غيرت نظرتي للتعليم تماماً. شكراً لأكاديمية إتقان."`,
    review2Author: "- الأستاذة فاطمة",
    reviewCallTitle: "رأيك يهمنا في تطوير الأكاديمية",
    reviewCallSub: "هل جربت الدراسة معنا؟ شاركنا تجربتك بكل صراحة",
    reviewCallBtn: "اضغط هنا لترك رأيك",

    // الرئيسية
    heroTitle: "مرحباً بك في صرح \"إتقان\" العلمي",
    heroSub: "تعليم شرعي وأكاديمي بأساليب تقنية حديثة تجمع بين الأصالة والمعاصرة.",
    heroRegisterBtn: "سجل الآن",
    heroAboutBtn: "التعريف",
    feature1Title: "نخبة المعلمين",
    feature1Text: "خريجو كبار الجامعات الإسلامية.",
    feature2Title: "بيئة تفاعلية",
    feature2Text: "دروس مباشرة وحلقات نقاش.",
    feature3Title: "شهادات معتمدة",
    feature3Text: "توثيق رسمي لمسيرتك العلمية.",

    // صفحة التسجيل
    regHeader: "طلب تسجيل طالب جديد",
    regLabelName: "الاسم الكامل",
    regLabelPhone: "رقم الهاتف",
    regLabelCourse: "اختر الدورة المطلوبة",
    regSubmitBtn: "إرسال الطلب عبر واتساب",
    regPlaceholderName: "الاسم الثلاثي",
    regPlaceholderPhone: "06XXXXXXXX",

    // بوابة الطلاب والنتائج
    portalHeader: "بوابة استعلام النتائج",
    portalLabelName: "اسم الطالب الثلاثي",
    portalPlaceholderName: "أدخل الاسم كما هو مسجل...",
    portalSubmitBtn: "عرض النتيجة",
    studentCard: "بطاقة الطالب:",

    // بوابة الأساتذة
    teacherLoginHeader: "دخول المعلمين",
    teacherLoginLabelPass: "كلمة المرور",
    teacherLoginBtn: "دخول",
    dashHeader: "لوحة رصد الدرجات",
    dashSelectStudent: "اختر الطالب",
    dashSaveBtn: "حفظ البيانات",
    footerText: "© 2026 جميع الحقوق محفوظة لأكاديمية إتقان التعليمية",

    // رسائل وتنبيهات برمجية
    enterNameAlert: "يرجى إدخال اسم الطالب",
    noResultAlert: "عذراً، لم نجد نتائج لهذا الاسم.",
    serverErrorAlert: "حدث خطأ أثناء الاتصال بالسيرفر.",
    wrongPassAlert: "كلمة المرور غير صحيحة",
    saveSuccessAlert: "✅ تم حفظ البيانات بنجاح",
    saveErrorAlert: "حدث خطأ أثناء الحفظ",
    savingBtnText: "جاري الحفظ...",
    loadingNamesOption: "جاري تحميل القائمة...",
    loadFailOption: "فشل التحميل",
    redirectingMsg: "✅ تم توجيهك للواتساب لتأكيد الطلب...",

    // حقول الرصد للمعلمين ونتائج الطلاب
    fields: {
      "مراجعة": "مراجعة",
      "استظهار": "استظهار",
      "إعداد": "إعداد",
      "اللغة العربية": "اللغة العربية",
      "التربية": "التربية",
      "الفرض": "الفرض",
      "ملاحظات": "ملاحظات",
      "الدرجة النهائية": "الدرجة النهائية"
    },
    dir: "rtl"
  },
  fr: {
    pageTitle: "Académie ETCAN | Plateforme Éducative",
    logoText: "Académie ETCAN",
    navAbout: "Présentation",
    navCourses: "Cours",
    courseQuran: "Département du Saint Coran",
    courseIslamic: "Culture Islamique",
    courseArabic: "Langue Arabe",
    courseSkills: "Compétences de com.",
    navContact: "Contact",
    navReviews: "Témoignages",
    navLogin: "Accès Membres",
    loginStudent: "Espace Étudiants",
    loginTeacher: "Espace Enseignants",
    loginAdmin: "Espace Admin",
    navRegister: "S'inscrire",
    langToggle: "العربية",
    
    // Qui sommes-nous
    aboutHeading: "Qui sommes-nous ?",
    aboutDescription: "L'Académie ETCAN est une institution éducative spécialisée qui s'efforce d'offrir un contenu académique d'excellence dans divers domaines du savoir. Nous croyons fermement que la rigueur et l'excellence (ETCAN) sont les piliers de la réussite. C'est pourquoi nous créons un environnement d'apprentissage interactif qui allie qualité académique et simplicité technologique afin de transmettre le savoir à chaque étudiant, où qu'il soit dans le monde.",
    visionTitle: "Notre Vision",
    visionText: "Devenir la première plateforme de référence dans le monde pour un enseignement maîtrisé et rigoureux.",
    missionTitle: "Notre Mission",
    missionText: "Faciliter l'accès à la science et sa diffusion par le biais des dernières innovations technologiques.",

    // Département Coran
    quranTitle: "Département du Saint Coran",
    quranSub: "Une attention particulière à la mémorisation, au Tajwid et à la récitation du Livre d'Allah",
    availableTracks: "Filières Disponibles",
    quranTrack1: "• Mémorisation du Saint Coran pour adultes et enfants.",
    quranTrack2: "• Correction de la récitation et perfectionnement de la phonétique.",
    quranTrack3: "• Étude théorique et pratique des règles du Tajwid.",
    quranTrack4: "• Obtention d'une Ijazah avec chaîne de transmission (Sanad) liée au Prophète ﷺ.",
    studySystem: "Système d'Études",
    quranSystemText: "Nous offrons des séances d'apprentissage flexibles adaptées à tous les emplois du temps (matin et soir) via des classes virtuelles interactives, avec un suivi rigoureux et individuel de chaque apprenant.",
    registerSectionBtn: "S'inscrire dans ce département",

    // Département Arabe
    arabicTitle: "Département de Langue Arabe",
    arabicSub: "La langue arabe.. Identité, culture et maîtrise",
    arabicTrack1Title: "L'Arabe pour Enfants",
    arabicTrack1Text: "Enseignement de l'alphabet, de la lecture et de l'écriture grâce à des méthodes ludiques basées sur le conte et le jeu.",
    arabicTrack2Title: "Pour Non-Arabophones",
    arabicTrack2Text: "Un programme international structuré permettant aux non-arabophones de communiquer et de comprendre l'arabe avec aisance.",
    arabicTrack3Title: "Grammaire et Littérature",
    arabicTrack3Text: "Explications simplifiées de la grammaire (Nahw), de la morphologie (Sarf), de la rhétorique et de la littérature arabe.",
    arabicFeaturesTitle: "Les atouts de notre programme d'arabe :",
    arabicFeature1: "• Interaction directe : Cours en direct axés sur le dialogue et l'expression orale.",
    arabicFeature2: "• Supports multimédias : Des présentations visuelles pour simplifier l'assimilation des règles complexes.",
    arabicFeature3: "• Évaluation régulière : Des tests pour évaluer le niveau en lecture, écriture et compréhension orale.",
    arabicRegisterBtn: "Rejoindre le département d'arabe",

    // Culture Islamique
    islamicTitle: "Culture Islamique",
    islamicSub: "Comprendre le passé, appréhender le présent et bâtir l'avenir",
    islamicHub1Title: "Histoire et Civilisation",
    islamicHub1Text: "Un voyage dans l'histoire islamique, de l'époque prophétique aux contributions scientifiques majeures des musulmans en médecine, astronomie et architecture.",
    islamicHub2Title: "Pratiques et Adorations",
    islamicHub2Text: "Explication simplifiée de la jurisprudence (Fiqh) des actes cultuels (Prière, Zakat, Jeûne, Hajj) avec un accent sur les valeurs morales et spirituelles.",
    islamicHub3Title: "Biographie et Éthique",
    islamicHub3Text: "Étude approfondie du modèle comportemental du Prophète ﷺ et de ses enseignements moraux pour l'individu et la société moderne.",
    whyStudyIslamic: "Pourquoi étudier la culture islamique à l'Académie ETCAN ?",
    islamicReason1: "Approche juste et modérée",
    islamicReason2: "Lien concret avec le quotidien",
    islamicReason3: "Enseignants qualifiés et spécialisés",
    islamicRegisterBtn: "S'inscrire à nos cours culturels",

    // Compétences
    skillsTitle: "Développement des Compétences",
    skillsSub: "Valoriser les talents et renforcer les aptitudes pour relever les défis de notre époque",
    skill1Title: "Formation de Profs d'Arabe",
    skill1Text: "Formations spécialisées aux méthodologies d'enseignement modernes et à la gestion interactive des classes en ligne.",
    skill2Title: "Outils de l'IA et Technologie",
    skill2Text: "Maîtrise de l'outil informatique et exploitation des opportunités offertes par l'IA dans l'éducation et la recherche.",
    skill3Title: "Art Oratoire et Éloquence",
    skill3Text: "Maîtriser la prise de parole en public, s'exprimer avec assurance et cultiver son charisme vocal.",
    skill4Title: "Esthétique de la Récitation",
    skill4Text: "Cours approfondi sur la pose de voix, les mélodies de récitation (Maqamats) et l'excellence de l'interprétation coranique.",
    skillsNotice: "Tous nos cursus intègrent des ateliers pratiques et sont sanctionnés par des attestations de réussite agréées par l'Académie.",
    skillsRegisterBtn: "Réserver ma place dès maintenant",

    // Contact
    contactTitle: "Contactez-nous",
    contactSub: "Nous serons ravis de recevoir vos questions et suggestions",
    contactLabelName: "Nom complet",
    contactLabelEmail: "Adresse e-mail",
    contactLabelMsg: "Votre message",
    contactSendBtn: "Envoyer le message maintenant",

    // Témoignages
    reviewsTitle: "Ce qu'ils disent de l'Académie ETCAN",
    review1Text: `"Mon expérience dans le département du Coran a été exceptionnelle, les professeurs font preuve d'une grande patience et la plateforme est très intuitive."`,
    review1Author: "- Ahmed, étudiant du Maroc",
    review2Text: `"La formation sur l'Intelligence Artificielle a totalement transformé ma manière d'enseigner. Un grand merci à l'Académie ETCAN."`,
    review2Author: "- Professeure Fatima",
    reviewCallTitle: "Votre avis nous est précieux",
    reviewCallSub: "Avez-vous étudié avec nous ? Partagez votre expérience en toute franchise",
    reviewCallBtn: "Laisser mon avis ici",

    // Accueil
    heroTitle: "Bienvenue au sein de l'Académie \"ETCAN\"",
    heroSub: "Enseignement authentique et académique par des méthodes numériques modernes alliant tradition et modernité.",
    heroRegisterBtn: "S'inscrire",
    heroAboutBtn: "Présentation",
    feature1Title: "Professeurs d'Élite",
    feature1Text: "Diplômés des plus prestigieuses universités islamiques.",
    feature2Title: "Classes Interactives",
    feature2Text: "Séances en direct et groupes de discussion dynamiques.",
    feature3Title: "Diplômes Reconnus",
    feature3Text: "Validation officielle de votre parcours et de vos acquis.",

    // Formulaire inscription
    regHeader: "Inscription Nouvel Étudiant",
    regLabelName: "Nom complet",
    regLabelPhone: "Numéro de téléphone",
    regLabelCourse: "Sélectionnez le cours souhaité",
    regSubmitBtn: "Envoyer l'inscription par WhatsApp",
    regPlaceholderName: "Nom et Prénom",
    regPlaceholderPhone: "06XXXXXXXX",

    // Portail résultats
    portalHeader: "Consultation des Résultats",
    portalLabelName: "Nom complet de l'étudiant",
    portalPlaceholderName: "Entrez le nom tel qu'il a été enregistré...",
    portalSubmitBtn: "Rechercher",
    studentCard: "Fiche d'étudiant :",

    // Portail Enseignants
    teacherLoginHeader: "Portail Enseignants",
    teacherLoginLabelPass: "Mot de passe",
    teacherLoginBtn: "Se connecter",
    dashHeader: "Saisie des Notes & Évaluations",
    dashSelectStudent: "Sélectionner un étudiant",
    dashSaveBtn: "Enregistrer les évaluations",
    footerText: "© 2026 Tous droits réservés à l'Académie Éducative ETCAN",

    // Alertes
    enterNameAlert: "Veuillez entrer le nom de l'étudiant.",
    noResultAlert: "Désolé, aucun résultat trouvé pour ce nom.",
    serverErrorAlert: "Une erreur est survenue lors de la connexion au serveur.",
    wrongPassAlert: "Mot de passe incorrect.",
    saveSuccessAlert: "✅ Évaluations enregistrées avec succès.",
    saveErrorAlert: "Une erreur est survenue lors de l'enregistrement.",
    savingBtnText: "Enregistrement...",
    loadingNamesOption: "Chargement de la liste...",
    loadFailOption: "Échec du chargement de la liste",
    redirectingMsg: "✅ Redirection vers WhatsApp en cours...",

    // حقول الرصد المعلمين ونتائج الطلاب
    fields: {
      "مراجعة": "Révision",
      "استظهار": "Récitation",
      "إعداد": "Préparation",
      "اللغة العربية": "Langue Arabe",
      "التربية": "Éducation",
      "الفرض": "Évaluation",
      "ملاحظات": "Notes/Remarques",
      "الدرجة النهائية": "Note Finale"
    },
    dir: "ltr"
  }
};

// إدارة اللغة الحالية وحفظها في المتصفح
let currentLang = localStorage.getItem('selectedLang') || 'ar';

function applyTranslations(lang) {
  // 1. تحديث النصوص التي تحتوي على الرمز المخصص data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // 2. تحديث النصوص التوضيحية داخل حقول الإدخال Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // 3. تغيير اتجاه وثيقة الـ HTML ليتناسب مع اللغة الحالية
  document.documentElement.dir = translations[lang]['dir'];
  document.documentElement.lang = lang;

  // 4. تحديث نص زر التبديل ليظهر لغة الزر البديلة المتاحة
  const langBtn = document.getElementById('lang-toggle');
  if(langBtn) {
    langBtn.textContent = translations[lang]['langToggle'];
  }

  // 5. إذا كانت لوحة المعلم مفتوحة وجاري استخدامها، نحدث الواجهة الخاصة بها
  const grid = document.getElementById('ratingGrid');
  if (grid && grid.innerHTML !== "") {
    // إعادة إنشاء اللوحة باللغة الجديدة مع الحفاظ على البيانات التي كتبها المعلم سابقاً إن أمكن
    const currentInputs = Array.from(document.querySelectorAll('.rating-input')).map(i => i.value);
    initTeacherDashboard();
    const newInputs = document.querySelectorAll('.rating-input');
    currentInputs.forEach((val, index) => {
      if(newInputs[index]) newInputs[index].value = val;
    });
  }
}

function switchLanguage() {
  currentLang = (currentLang === 'ar') ? 'fr' : 'ar';
  localStorage.setItem('selectedLang', currentLang);
  applyTranslations(currentLang);
  
  // تحديث: الانتقال التلقائي للصفحة الأولى عند تبديل اللغة
  navigateTo('home-page');
}

// 2. وظائف التحكم في الواجهة (Navigation & UI)
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('page-active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        setTimeout(() => {
            targetPage.classList.add('page-active');
        }, 10);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log("Navigation success to: " + pageId);
    } else {
        console.error("Error: ID not found: " + pageId);
    }
}

// تحديث: منع انتقال الحدث (stopPropagation) لضمان عدم إغلاق القائمة فور فتحها
function toggleMenu(e) {
    if (e) e.stopPropagation();
    const nav = document.getElementById('nav-list');
    nav.classList.toggle('active');
}

function closeMenu(pageId) {
    const navList = document.getElementById('nav-list');
    if (navList) navList.classList.remove('active');
    
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    navigateTo(pageId);
}

// 3. وظيفة تسجيل طالب جديد وإرسال الطلب (WhatsApp & Sheet)
document.getElementById('registrationForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value;
    const course = document.getElementById('regCourse').value;

    // 1. إرسال البيانات إلى جوجل شيت للتسجيل الصامت والخلفي
    try {
        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                type: "register",
                name: name,
                phone: phone,
                course: course
            })
        });
    } catch (err) { 
        console.log("Sheet registration error", err); 
    }

    // 2. بناء رسالة واتساب ملائمة بناءً على لغة تصفح المستخدم الحالية
    let message = "";
    if (currentLang === 'fr') {
        message = `Bonjour Académie ETCAN,%0A%0A` +
                  `Je souhaite inscrire un nouvel étudiant :%0A` +
                  `*Nom complet :* ${name}%0A` +
                  `*Téléphone :* ${phone}%0A` +
                  `*Formation demandée :* ${course}%0A%0A` +
                  `Merci de bien vouloir confirmer mon inscription.`;
    } else {
        message = `السلام عليكم أكاديمية إتقان،%0A%0A` +
                  `أرغب في التسجيل بطلب جديد:%0A` +
                  `*الاسم:* ${name}%0A` +
                  `*الهاتف:* ${phone}%0A` +
                  `*الدورة:* ${course}%0A%0A` +
                  `يرجى تأكيد تسجيل طلبي.`;
    }

    // 3. فتح الواتساب برقم الإدارة المباشر المخصص للخدمة
    const whatsappUrl = `https://wa.me/212633661441?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // 4. إظهار رسالة النجاح للمستخدم بلغته الحالية
    document.getElementById('regStatus').innerHTML = translations[currentLang]['redirectingMsg'];
    this.reset();
});

// 5. وظائف جلب نتائج الطلاب والاستعلام
async function fetchStudentResult() {
    const name = document.getElementById('searchName').value.trim();
    const btn = document.getElementById('searchBtn');
    const loader = document.getElementById('searchLoader');
    const resArea = document.getElementById('resultArea');

    if(!name) { 
        alert(translations[currentLang]['enterNameAlert']); 
        return; 
    }

    btn.disabled = true;
    loader.style.display = "inline-block";
    resArea.style.display = "none";

    try {
        const resp = await fetch(`${SCRIPT_URL}?action=getResult&name=${encodeURIComponent(name)}`);
        const data = await resp.json();

        if (data.status === "success") {
            const headingText = translations[currentLang]['studentCard'];
            document.getElementById('studentDisplayName').innerText = `${headingText} ${name}`;
            
            // ترجمة ديناميكية لأسماء الحقول القادمة من قاعدة البيانات لتتوافق مع الفرنسية
            document.getElementById('resultDetails').innerHTML = data.results.map(r => {
                const translatedLabel = translations[currentLang]['fields'][r.label] || r.label;
                return `
                    <div style="display:flex; justify-content:space-between; padding:12px; border-bottom:1px solid #f1f5f9;">
                        <span style="font-weight:bold; color:#64748b;">${translatedLabel}</span>
                        <span style="font-weight:700;">${r.value || '---'}</span>
                    </div>
                `;
            }).join('');
            resArea.style.display = "block";
        } else {
            alert(translations[currentLang]['noResultAlert']);
        }
    } catch (e) {
        alert(translations[currentLang]['serverErrorAlert']);
    } finally {
        btn.disabled = false;
        loader.style.display = "none";
    }
}

// 6. وظائف المعلمين ورصد الدرجات والتقييم
function checkTeacherPass() {
    const pass = document.getElementById('teacherPass').value;
    if(pass === "1234") {
        document.getElementById('login-box').style.display = "none";
        document.getElementById('teacher-dashboard').style.display = "block";
        initTeacherDashboard();
    } else {
        alert(translations[currentLang]['wrongPassAlert']);
    }
}

function initTeacherDashboard() {
    const fields = ["مراجعة", "استظهار", "إعداد", "اللغة العربية", "التربية", "الفرض", "ملاحظات", "الدرجة النهائية"];
    const grid = document.getElementById('ratingGrid');
    if (grid) {
        grid.innerHTML = fields.map(f => {
            const translatedFieldLabel = translations[currentLang]['fields'][f] || f;
            return `
                <div class="form-group">
                    <label>${translatedFieldLabel}</label>
                    <input type="text" class="rating-input" data-field-origin="${f}" placeholder="--">
                </div>
            `;
        }).join('');
        loadStudentNames();
    }
}

async function loadStudentNames() {
    const select = document.getElementById('studentSelect');
    if (!select) return;
    select.innerHTML = `<option>${translations[currentLang]['loadingNamesOption']}</option>`;
    try {
        const resp = await fetch(SCRIPT_URL + "?action=getNames");
        const names = await resp.json();
        select.innerHTML = names.map(n => `<option value="${n}">${n}</option>`).join('');
    } catch (e) {
        select.innerHTML = `<option>${translations[currentLang]['loadFailOption']}</option>`;
    }
}

async function saveFromWeb() {
    const name = document.getElementById('studentSelect').value;
    const ratings = Array.from(document.querySelectorAll('.rating-input')).map(i => i.value);
    const btn = document.getElementById('saveBtnWeb');

    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translations[currentLang]['savingBtnText']}`;

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ name, ratings })
        });
        alert(translations[currentLang]['saveSuccessAlert']);
        document.querySelectorAll('.rating-input').forEach(i => i.value = "");
    } catch (e) {
        alert(translations[currentLang]['saveErrorAlert']);
    } finally {
        btn.disabled = false;
        btn.innerHTML = `<i class="fas fa-save"></i> <span>${translations[currentLang]['dashSaveBtn']}</span>`;
    }
}

// 7. نظام القوائم المنسدلة المطور والمنسجم بالكامل مع التبديل
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); 

        const currentContent = this.nextElementSibling;
        const parent = this.parentElement; 

        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== currentContent) {
                content.classList.remove('show');
            }
        });
        
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== parent) d.classList.remove('active');
        });

        currentContent.classList.toggle('show');
        parent.classList.toggle('active'); 
    });
});

// إغلاق كافة النوافذ المفتوحة عند الضغط بالخارج
window.addEventListener('click', function(event) {
    if (event.target.matches('.dropdown-btn') || event.target.matches('.menu-toggle') || event.target.closest('.menu-toggle')) {
        return;
    }

    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show');
    });
    document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('active');
    });
    
    const navList = document.getElementById('nav-list');
    if (navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
});

// تشغيل نظام الترجمة فور فتح الموقع بناءً على تفضيل الزائر أو المتصفح
window.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
});