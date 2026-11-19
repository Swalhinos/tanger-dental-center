// Clinic identity for Tanger Dental Center — Place Moulay Abdelaziz, Tanger, Maroc.
// Call number (shown on the clinic's own website): +212 694-755988.
// WhatsApp (the clinic's WhatsApp Business number): +212 777-619554 —
// every WhatsApp link/button points to wa.me/212777619554.
// Address (public directories, corroborated): Place Moulay Abdelaziz –
// Mosquée Badr, Résidence Ennasr, 4e étage, Appt 15, 90000 Tanger.
// Hours: Mon–Sat 09:00–20:00 (per the clinic's own website; its WhatsApp
// profile claims "Open 24 hours" — NOT used, discrepancy flagged).
// Testimonials below are generic PLACEHOLDERS to be replaced by the
// clinic's real patient reviews before any real use.

export type Lang = 'fr' | 'ar' | 'en'

export const CLINIC = {
  name: 'Tanger Dental Center',
  doctor: 'Sourire · Santé · Confiance',
  phoneDisplay: '+212 694 75 59 88',
  phone: '212694755988',
  whatsappDisplay: '+212 777 61 95 54',
  whatsapp: 'https://wa.me/212777619554',
  facebook: 'https://www.facebook.com/Tangerdentalcenter',
  address: 'Place Moulay Abdelaziz – Mosquée Badr, Résidence Ennasr, 4e étage, Appt 15, 90000 Tanger, Maroc',
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Tanger+Dental+Center,+Place+Moulay+Abdelaziz,+R%C3%A9sidence+Ennasr,+Tanger+90000',
  mapsEmbed: 'https://www.google.com/maps?q=Tanger+Dental+Center,+Place+Moulay+Abdelaziz,+R%C3%A9sidence+Ennasr,+Tanger+90000&z=15&output=embed',
}

const fr = {
  nav: {
    about: 'À propos',
    services: 'Services',
    implants: 'Implants',
    whyUs: 'Pourquoi nous',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Prendre rendez-vous',
  },
  hero: {
    badge: 'Centre dentaire pluridisciplinaire — Tanger, Maroc',
    title: 'Votre sourire, notre signature — Tanger Dental Center',
    subtitle:
      'Au cœur de Tanger, place Moulay Abdelaziz, notre centre pluridisciplinaire réunit toutes les spécialités dentaires : implantologie, chirurgie, orthodontie, esthétique du sourire et soins pour toute la famille.',
    cta: 'Prendre rendez-vous',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    directions: 'Itinéraire',
    stats: [
      { value: '10', label: 'Spécialités dentaires réunies au centre' },
      { value: '3', label: 'Langues : français, arabe, anglais' },
      { value: '6j/7', label: 'Ouvert du lundi au samedi, 09:00 – 20:00' },
    ],
  },
  about: {
    badge: 'À propos du centre',
    title: 'Tanger Dental Center',
    role: 'Centre dentaire pluridisciplinaire — Place Moulay Abdelaziz, Tanger',
    p1: 'Tanger Dental Center est un centre dentaire pluridisciplinaire situé place Moulay Abdelaziz, à côté de la mosquée Badr, à la résidence Ennasr à Tanger. Nous réunissons en un seul lieu l’ensemble des spécialités dentaires, de la prévention aux traitements les plus complets, avec des équipements modernes et des protocoles de stérilisation rigoureux.',
    p2: 'Implantologie, chirurgie orale, parodontologie, orthodontie ou esthétique du sourire : chaque traitement est expliqué avant chaque étape, pour que vous décidiez en toute confiance — pour les adultes comme pour les enfants.',
    points: [
      'Toutes les spécialités réunies en un seul centre',
      'Équipements modernes et stérilisation rigoureuse',
      'Traitements expliqués avant chaque étape',
      'Rendez-vous simple et rapide par WhatsApp',
    ],
    imageAlt: 'Médecin-dentiste du Tanger Dental Center dans la salle de soins',
    doctorCaption: 'Une prise en charge professionnelle, en toute confiance',
  },
  services: {
    badge: 'Nos services',
    title: 'Toutes les spécialités, un seul centre',
    subtitle: 'De la prévention à la chirurgie, l’ensemble des soins dentaires est réuni place Moulay Abdelaziz.',
    items: [
      {
        title: 'Implantologie',
        desc: 'Des implants fixes et naturels pour remplacer les dents manquantes et retrouver un sourire complet et durable.',
      },
      {
        title: 'Chirurgie orale',
        desc: 'Extractions, dents de sagesse et chirurgie buccale réalisées avec précision et en douceur.',
      },
      {
        title: 'Parodontologie',
        desc: 'Traitement des gencives : saignements, inflammation et déchaussement, pour des fondations saines.',
      },
      {
        title: 'Soins conservateurs',
        desc: 'Traitement des caries, obturations et traitement de racine pour conserver vos dents naturelles.',
      },
      {
        title: 'Prothèses & couronnes',
        desc: 'Couronnes, bridges et prothèses sur mesure pour restaurer la forme, la fonction et l’esthétique.',
      },
      {
        title: 'Blanchiment & facettes',
        desc: 'Blanchiment professionnel et facettes pour un sourire visiblement plus éclatant et harmonieux.',
      },
      {
        title: 'Orthodontie & aligneurs',
        desc: 'Appareils et aligneurs transparents pour aligner les dents des enfants et des adultes, à tout âge.',
      },
      {
        title: 'Dentisterie pédiatrique',
        desc: 'Des soins doux et adaptés aux plus jeunes, pour des premières visites sans peur.',
      },
      {
        title: 'Détartrage & prévention',
        desc: 'Examen complet, détartrage et conseils de prévention pour garder des dents saines toute la vie.',
      },
      {
        title: 'Bruxisme & gouttières',
        desc: 'Évaluation du grincement nocturne et gouttières de protection sur mesure pour préserver vos dents.',
      },
    ],
  },
  implants: {
    badge: 'Implantologie',
    title: 'Retrouvez un sourire complet et naturel',
    subtitle: 'L’implant dentaire remplace la racine de la dent manquante par une solution fixe, stable et durable — sans toucher aux dents voisines.',
    benefits: [
      'Aspect et sensation naturels, comme vos propres dents',
      'Stabilité totale pour manger et parler en confiance',
      'Préserve l’os de la mâchoire et la structure du visage',
      'Solution durable, conçue pour durer de nombreuses années',
    ],
    cta: 'Discuter de mon implant sur WhatsApp',
  },
  results: {
    badge: 'Résultats',
    title: 'Résultats avant / après',
    subtitle: 'Blanchiment, facettes, implants : découvrez l’effet de nos traitements sur le sourire.',
    before: 'Avant',
    after: 'Après',
    note: 'Photos d’illustration issues de banques d’images libres de droits — les résultats varient selon chaque cas.',
    items: [
      {
        title: 'Blanchiment dentaire',
        desc: 'Des dents visiblement plus blanches et un sourire éclatant après une séance de blanchiment professionnel.',
        altBefore: 'Sourire d’homme aux dents jaunies avant blanchiment',
        altAfter: 'Sourire d’homme aux dents blanches et éclatantes après blanchiment',
      },
      {
        title: 'Facettes dentaires',
        desc: 'Correction des espaces et des irrégularités pour un sourire aligné, régulier et naturel.',
        altBefore: 'Sourire d’homme avec un espace entre les dents avant facettes',
        altAfter: 'Sourire d’homme aligné et uniforme après facettes',
      },
      {
        title: 'Implants dentaires',
        desc: 'Remplacement des dents manquantes par des implants fixes, pour un sourire complet et durable.',
        altBefore: 'Sourire d’homme avec des dents manquantes avant implants',
        altAfter: 'Sourire d’homme complet et naturel après implants',
      },
    ],
  },
  why: {
    badge: 'Pourquoi nous choisir',
    title: 'La différence que l’on ressent',
    items: [
      {
        title: 'Centre pluridisciplinaire',
        desc: 'Implantologie, chirurgie, parodontologie, orthodontie : toutes les spécialités sous un même toit.',
      },
      {
        title: 'Transparence totale',
        desc: 'Chaque traitement est expliqué avant chaque étape, sans surprise, avant toute décision.',
      },
      {
        title: 'Toute la famille',
        desc: 'Des soins adaptés aux adultes, aux enfants et aux seniors, dans une ambiance bienveillante.',
      },
      {
        title: 'Emplacement central',
        desc: 'Place Moulay Abdelaziz, près de la mosquée Badr, à la résidence Ennasr — au cœur de Tanger.',
      },
    ],
  },
  testimonials: {
    badge: 'Témoignages',
    title: 'Ce que disent nos patients',
    items: [
      {
        name: 'Youssef B.',
        text: 'Accueil très professionnel et explications claires dès la première visite. Le nettoyage s’est fait en douceur et sans douleur. Je recommande ce centre à Tanger.',
      },
      {
        name: 'Omar E.',
        text: 'J’ai fait poser une couronne et le résultat est impeccable, on ne voit aucune différence avec mes dents naturelles. Suivi sérieux après le soin.',
      },
      {
        name: 'Karim T.',
        text: 'Mon fils avait peur du dentiste, mais l’équipe a su le mettre en confiance dès la première séance. Il y retourne désormais sans aucune crainte.',
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        q: 'Comment prendre rendez-vous ?',
        a: 'Vous pouvez réserver via le formulaire de cette page, nous appeler au +212 694 75 59 88 ou nous envoyer un message WhatsApp au +212 777 61 95 54. Nous répondons rapidement pendant les heures d’ouverture.',
      },
      {
        q: 'Quelles spécialités propose le centre ?',
        a: 'Le centre est pluridisciplinaire : implantologie, chirurgie orale, parodontologie, soins conservateurs, prothèses et couronnes, blanchiment et facettes, orthodontie et aligneurs, dentisterie pédiatrique, détartrage et prévention, bruxisme et gouttières.',
      },
      {
        q: 'Proposez-vous des implants dentaires ?',
        a: 'Oui. Le centre remplace les dents manquantes par des implants fixes et naturels. Contactez-nous sur WhatsApp pour une première évaluation de votre cas.',
      },
      {
        q: 'Le blanchiment dentaire est-il sûr ?',
        a: 'Oui. Le blanchiment professionnel, réalisé au centre sous supervision dentaire, est sûr et offre des résultats supérieurs et plus durables que les kits à domicile.',
      },
      {
        q: 'Où se situe le centre ?',
        a: 'Place Moulay Abdelaziz – Mosquée Badr, Résidence Ennasr, 4e étage, Appt 15, 90000 Tanger. Utilisez le bouton « Itinéraire » ci-dessous pour nous trouver facilement sur Google Maps.',
      },
      {
        q: 'Quels sont les horaires d’ouverture ?',
        a: 'Le centre est ouvert du lundi au samedi de 09:00 à 20:00. Pour réserver, écrivez-nous sur WhatsApp au +212 777 61 95 54.',
      },
      {
        q: 'Gérez-vous les urgences dentaires ?',
        a: 'Oui, nous faisons de notre mieux pour recevoir les urgences le jour même. Appelez-nous ou envoyez-nous un message WhatsApp immédiatement si vous avez mal.',
      },
    ],
  },
  appointment: {
    badge: 'Réservez votre visite',
    title: 'Prendre rendez-vous',
    subtitle: 'Remplissez le formulaire et nous confirmerons votre rendez-vous par téléphone ou WhatsApp.',
    name: 'Nom complet',
    namePh: 'Votre nom complet',
    phone: 'Téléphone',
    phonePh: '+212 6 XX XX XX XX',
    service: 'Service',
    servicePh: 'Choisir un service',
    date: 'Date souhaitée',
    message: 'Message (optionnel)',
    messagePh: 'Parlez-nous de vos besoins…',
    submit: 'Envoyer via WhatsApp',
    note: 'Votre demande s’ouvre dans WhatsApp — nous confirmons pendant les heures d’ouverture.',
  },
  contact: {
    badge: 'Contact et accès',
    title: 'Visitez notre centre',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    hoursLabel: 'Horaires d’ouverture',
    hours: ['Lundi – Samedi : 09:00 – 20:00'],
    directions: 'Itinéraire',
  },
  footer: {
    tagline: 'Sourire · Santé · Confiance — des soins dentaires complets au cœur de Tanger.',
    quickLinks: 'Liens rapides',
    contactTitle: 'Contact',
    rights: 'Tous droits réservés.',
  },
}

const en = {
  nav: {
    about: 'About',
    services: 'Services',
    implants: 'Implants',
    whyUs: 'Why Us',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Book Appointment',
  },
  hero: {
    badge: 'Multidisciplinary dental centre — Tangier, Morocco',
    title: 'Your Smile, Our Signature — Tanger Dental Center',
    subtitle:
      'In the heart of Tangier, at Place Moulay Abdelaziz, our multidisciplinary centre brings every dental specialty together: implantology, surgery, orthodontics, smile aesthetics and care for the whole family.',
    cta: 'Book Appointment',
    call: 'Call Now',
    whatsapp: 'WhatsApp',
    directions: 'Get Directions',
    stats: [
      { value: '10', label: 'Dental specialties under one roof' },
      { value: '3', label: 'Languages: French, Arabic, English' },
      { value: '6/7', label: 'Open Monday to Saturday, 9:00 AM – 8:00 PM' },
    ],
  },
  about: {
    badge: 'About the Centre',
    title: 'Tanger Dental Center',
    role: 'Multidisciplinary dental centre — Place Moulay Abdelaziz, Tangier',
    p1: 'Tanger Dental Center is a multidisciplinary dental centre located at Place Moulay Abdelaziz, next to the Badr Mosque, at Résidence Ennasr in Tangier. We bring all dental specialties together in one place, from prevention to the most complete treatments, with modern equipment and rigorous sterilisation protocols.',
    p2: 'Implantology, oral surgery, periodontology, orthodontics or smile aesthetics: every treatment is explained before each step, so you can decide with full confidence — for adults and children alike.',
    points: [
      'Every specialty together in a single centre',
      'Modern equipment and rigorous sterilisation',
      'Treatments explained before each step',
      'Simple, fast booking via WhatsApp',
    ],
    imageAlt: 'Dentist at Tanger Dental Center in the treatment room',
    doctorCaption: 'Professional care, with complete confidence',
  },
  services: {
    badge: 'Our Services',
    title: 'Every Specialty, One Centre',
    subtitle: 'From prevention to surgery, all dental care is gathered at Place Moulay Abdelaziz.',
    items: [
      {
        title: 'Implantology',
        desc: 'Fixed, natural-looking implants to replace missing teeth and restore a complete, long-lasting smile.',
      },
      {
        title: 'Oral Surgery',
        desc: 'Extractions, wisdom teeth and oral surgery performed with precision and gentleness.',
      },
      {
        title: 'Periodontology',
        desc: 'Gum treatment: bleeding, inflammation and gum recession, for healthy foundations.',
      },
      {
        title: 'Conservative Care',
        desc: 'Cavity treatment, fillings and root canal therapy to preserve your natural teeth.',
      },
      {
        title: 'Prostheses & Crowns',
        desc: 'Custom crowns, bridges and prostheses to restore shape, function and aesthetics.',
      },
      {
        title: 'Whitening & Veneers',
        desc: 'Professional whitening and veneers for a visibly brighter, more harmonious smile.',
      },
      {
        title: 'Orthodontics & Aligners',
        desc: 'Braces and clear aligners to straighten the teeth of children and adults, at any age.',
      },
      {
        title: 'Pediatric Dentistry',
        desc: 'Gentle care adapted to the youngest, for fear-free first visits.',
      },
      {
        title: 'Scaling & Prevention',
        desc: 'Complete examination, scaling and prevention advice to keep your teeth healthy for life.',
      },
      {
        title: 'Bruxism & Mouthguards',
        desc: 'Assessment of night-time grinding and custom protective guards to preserve your teeth.',
      },
    ],
  },
  implants: {
    badge: 'Implantology',
    title: 'A Complete, Natural-Looking Smile Again',
    subtitle: 'A dental implant replaces the root of a missing tooth with a fixed, stable and long-lasting solution — without touching neighbouring teeth.',
    benefits: [
      'Natural look and feel, just like your own teeth',
      'Full stability to eat and speak with confidence',
      'Preserves the jawbone and facial structure',
      'A durable solution built to last for many years',
    ],
    cta: 'Discuss My Implant on WhatsApp',
  },
  results: {
    badge: 'Results',
    title: 'Before / After Results',
    subtitle: 'Whitening, veneers and implants: discover the effect of our treatments on your smile.',
    before: 'Before',
    after: 'After',
    note: 'Illustrative photos from royalty-free image libraries — results vary from one case to another.',
    items: [
      {
        title: 'Teeth Whitening',
        desc: 'Visibly whiter teeth and a radiant smile after one professional whitening session.',
        altBefore: 'Man’s smile with yellowed teeth before whitening',
        altAfter: 'Man’s smile with bright white teeth after whitening',
      },
      {
        title: 'Dental Veneers',
        desc: 'Gaps and irregularities corrected for an aligned, even and natural-looking smile.',
        altBefore: 'Man’s smile with a gap between the teeth before veneers',
        altAfter: 'Man’s aligned and uniform smile after veneers',
      },
      {
        title: 'Dental Implants',
        desc: 'Missing teeth replaced with fixed implants, for a complete and long-lasting smile.',
        altBefore: 'Man’s smile with missing teeth before implants',
        altAfter: 'Man’s complete and natural smile after implants',
      },
    ],
  },
  why: {
    badge: 'Why Choose Us',
    title: 'The Difference You Can Feel',
    items: [
      {
        title: 'Multidisciplinary Centre',
        desc: 'Implantology, surgery, periodontology, orthodontics: every specialty under one roof.',
      },
      {
        title: 'Full Transparency',
        desc: 'Every treatment is explained before each step, with no surprises, before any decision.',
      },
      {
        title: 'The Whole Family',
        desc: 'Care tailored to adults, children and seniors, in a warm atmosphere.',
      },
      {
        title: 'Central Location',
        desc: 'Place Moulay Abdelaziz, near the Badr Mosque, at Résidence Ennasr — in the heart of Tangier.',
      },
    ],
  },
  testimonials: {
    badge: 'Patient Testimonials',
    title: 'What Our Patients Say',
    items: [
      {
        name: 'Youssef B.',
        text: 'Very professional welcome and clear explanations from the first visit. The cleaning was gentle and painless. I recommend this centre in Tangier.',
      },
      {
        name: 'Omar E.',
        text: 'I had a crown fitted and the result is flawless — you cannot tell it apart from my natural teeth. Serious follow-up after the treatment.',
      },
      {
        name: 'Karim T.',
        text: 'My son used to fear the dentist, but the team put him at ease from the very first session. Now he goes back without any fear.',
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book via the form on this page, by calling us at +212 694 75 59 88, or by sending a WhatsApp message to +212 777 61 95 54. We respond quickly during working hours.',
      },
      {
        q: 'What specialties does the centre offer?',
        a: 'The centre is multidisciplinary: implantology, oral surgery, periodontology, conservative care, prostheses and crowns, whitening and veneers, orthodontics and aligners, pediatric dentistry, scaling and prevention, bruxism and mouthguards.',
      },
      {
        q: 'Do you offer dental implants?',
        a: 'Yes. The centre replaces missing teeth with fixed, natural-looking implants. Contact us on WhatsApp for an initial assessment of your case.',
      },
      {
        q: 'Is teeth whitening safe?',
        a: 'Yes. Professional whitening, performed at the centre under dental supervision, is safe and delivers superior, longer-lasting results compared to home kits.',
      },
      {
        q: 'Where is the centre located?',
        a: 'Place Moulay Abdelaziz – Badr Mosque, Résidence Ennasr, 4th floor, Apt 15, 90000 Tangier. Use the Get Directions button below to find us easily on Google Maps.',
      },
      {
        q: 'What are the opening hours?',
        a: 'The centre is open Monday to Saturday from 9:00 AM to 8:00 PM. To book, message us on WhatsApp at +212 777 61 95 54.',
      },
      {
        q: 'Do you handle dental emergencies?',
        a: 'Yes, we do our best to see emergency cases the same day. Call or WhatsApp us immediately if you are in pain.',
      },
    ],
  },
  appointment: {
    badge: 'Book Your Visit',
    title: 'Request an Appointment',
    subtitle: 'Fill in the form and we will confirm your appointment by phone or WhatsApp.',
    name: 'Full Name',
    namePh: 'Your full name',
    phone: 'Phone Number',
    phonePh: '+212 6 XX XX XX XX',
    service: 'Service',
    servicePh: 'Select a service',
    date: 'Preferred Date',
    message: 'Message (optional)',
    messagePh: 'Tell us about your needs…',
    submit: 'Send via WhatsApp',
    note: 'Your request opens in WhatsApp — we confirm within working hours.',
  },
  contact: {
    badge: 'Contact and Location',
    title: 'Visit Our Centre',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Opening Hours',
    hours: ['Monday – Saturday: 9:00 AM – 8:00 PM'],
    directions: 'Get Directions',
  },
  footer: {
    tagline: 'Smile · Health · Confidence — complete dental care in the heart of Tangier.',
    quickLinks: 'Quick Links',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
  },
}

const ar = {
  nav: {
    about: 'من نحن',
    services: 'خدماتنا',
    implants: 'زراعة الأسنان',
    whyUs: 'لماذا نحن',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصل بنا',
    book: 'حجز موعد',
  },
  hero: {
    badge: 'مركز طب أسنان متعدد التخصصات — طنجة، المغرب',
    title: 'ابتسامتك توقيعنا — Tanger Dental Center',
    subtitle: 'في قلب طنجة، بساحة مولاي عبد العزيز، يجمع مركزنا متعدد التخصصات كل تخصصات طب الأسنان: الزراعة، الجراحة، التقويم، تجميل الابتسامة وعلاجات لكل العائلة.',
    cta: 'حجز موعد',
    call: 'اتصل الآن',
    whatsapp: 'واتساب',
    directions: 'الاتجاهات',
    stats: [
      { value: '10', label: 'تخصصات في طب الأسنان مجمّعة في المركز' },
      { value: '3', label: 'لغات: الفرنسية والعربية والإنجليزية' },
      { value: '6/7', label: 'مفتوح من الاثنين إلى السبت، 09:00 – 20:00' },
    ],
  },
  about: {
    badge: 'عن المركز',
    title: 'Tanger Dental Center',
    role: 'مركز طب أسنان متعدد التخصصات — ساحة مولاي عبد العزيز، طنجة',
    p1: 'Tanger Dental Center هو مركز طب أسنان متعدد التخصصات يقع بساحة مولاي عبد العزيز، بجوار مسجد بدر، في إقامة النصر بطنجة. نجمع في مكان واحد كل تخصصات طب الأسنان، من الوقاية إلى العلاجات الأكثر اكتمالًا، بمعدّات حديثة وبروتوكولات تعقيم صارمة.',
    p2: 'الزراعة، جراحة الفم، علاج اللثة، التقويم أو تجميل الابتسامة: كل علاج يُشرح قبل كل خطوة، لتقرّروا بثقة كاملة — للبالغين والأطفال على حدّ سواء.',
    points: [
      'كل التخصصات مجمّعة في مركز واحد',
      'معدّات حديثة وتعقيم صارم',
      'شرح العلاجات قبل كل خطوة',
      'حجز بسيط وسريع عبر واتساب',
    ],
    imageAlt: 'طبيب أسنان مركز Tanger Dental Center في غرفة العلاج',
    doctorCaption: 'رعاية احترافية بكل ثقة',
  },
  services: {
    badge: 'خدماتنا',
    title: 'كل التخصصات في مركز واحد',
    subtitle: 'من الوقاية إلى الجراحة، كل علاجات الأسنان مجمّعة بساحة مولاي عبد العزيز.',
    items: [
      {
        title: 'زراعة الأسنان',
        desc: 'زرعات ثابتة وطبيعية المظهر لتعويض الأسنان المفقودة واستعادة ابتسامة كاملة ودائمة.',
      },
      {
        title: 'جراحة الفم',
        desc: 'الخلع، أضراس العقل وجراحة الفم تُجرى بدقة ولطف.',
      },
      {
        title: 'علاج اللثة',
        desc: 'علاج اللثة: النزيف والالتهاب وانحسار اللثة، من أجل أسس سليمة.',
      },
      {
        title: 'العلاجات التحفظية',
        desc: 'علاج التسوس والحشوات وعلاج الجذور للحفاظ على أسنانكم الطبيعية.',
      },
      {
        title: 'التركيبات والتيجان',
        desc: 'تيجان وجسور وتركيبات مصمّمة خصيصًا لاستعادة الشكل والوظيفة والجمال.',
      },
      {
        title: 'التبييض والفينير',
        desc: 'تبييض احترافي وفينير لابتسامة أكثر إشراقًا وتناسقًا بشكل واضح.',
      },
      {
        title: 'التقويم والمصفّفات',
        desc: 'أجهزة تقويم ومصفّفات شفافة لمحاذاة أسنان الأطفال والبالغين في أي عمر.',
      },
      {
        title: 'طب أسنان الأطفال',
        desc: 'رعاية لطيفة ومكيّفة مع الصغار، لزيارات أولى بلا خوف.',
      },
      {
        title: 'إزالة الجير والوقاية',
        desc: 'فحص كامل وإزالة الجير ونصائح وقائية للحفاظ على أسنان سليمة مدى الحياة.',
      },
      {
        title: 'صرير الأسنان والواقيات',
        desc: 'تقييم صرير الأسنان الليلي وواقيات حماية مصمّمة خصيصًا للحفاظ على أسنانكم.',
      },
    ],
  },
  implants: {
    badge: 'زراعة الأسنان',
    title: 'ابتسامة كاملة وطبيعية من جديد',
    subtitle: 'تُعوّض زرعة الأسنان جذر السنّ المفقودة بحلّ ثابت ومستقرّ وطويل الأمد — دون المساس بالأسنان المجاورة.',
    benefits: [
      'مظهر وإحساس طبيعيان، مثل أسنانك تمامًا',
      'ثبات كامل للأكل والتحدث بثقة',
      'تحافظ على عظم الفك وبنية الوجه',
      'حلّ متين مصمّم ليدوم سنوات عديدة',
    ],
    cta: 'ناقش زرعتك عبر واتساب',
  },
  results: {
    badge: 'النتائج',
    title: 'نتائج قبل / بعد',
    subtitle: 'التبييض والفينير والزراعة: اكتشفوا أثر علاجاتنا على الابتسامة.',
    before: 'قبل',
    after: 'بعد',
    note: 'صور توضيحية من مكتبات صور مجانية — تختلف النتائج من حالة إلى أخرى.',
    items: [
      {
        title: 'تبييض الأسنان',
        desc: 'أسنان أكثر بياضًا بشكل واضح وابتسامة مشرقة بعد جلسة تبييض احترافية واحدة.',
        altBefore: 'ابتسامة رجل بأسنان مصفرّة قبل التبييض',
        altAfter: 'ابتسامة رجل بأسنان بيضاء مشرقة بعد التبييض',
      },
      {
        title: 'فينير الأسنان',
        desc: 'تصحيح الفراغات وعدم الانتظام من أجل ابتسامة متناسقة ومنتظمة وطبيعية.',
        altBefore: 'ابتسامة رجل مع فراغ بين الأسنان قبل الفينير',
        altAfter: 'ابتسامة رجل متناسقة ومنتظمة بعد الفينير',
      },
      {
        title: 'زراعة الأسنان',
        desc: 'تعويض الأسنان المفقودة بزرعات ثابتة من أجل ابتسامة كاملة ودائمة.',
        altBefore: 'ابتسامة رجل بأسنان مفقودة قبل الزراعة',
        altAfter: 'ابتسامة رجل كاملة وطبيعية بعد الزراعة',
      },
    ],
  },
  why: {
    badge: 'لماذا تختارنا',
    title: 'الفرق الذي تشعر به',
    items: [
      {
        title: 'مركز متعدد التخصصات',
        desc: 'الزراعة، الجراحة، علاج اللثة، التقويم: كل التخصصات تحت سقف واحد.',
      },
      {
        title: 'شفافية كاملة',
        desc: 'كل علاج يُشرح قبل كل خطوة، دون مفاجآت، قبل أي قرار.',
      },
      {
        title: 'كل العائلة',
        desc: 'رعاية مصمّمة للبالغين والأطفال وكبار السن في أجواء دافئة.',
      },
      {
        title: 'موقع مركزي',
        desc: 'ساحة مولاي عبد العزيز، قرب مسجد بدر، في إقامة النصر — في قلب طنجة.',
      },
    ],
  },
  testimonials: {
    badge: 'شهادات المرضى',
    title: 'ماذا يقول مرضانا',
    items: [
      {
        name: 'يوسف ب.',
        text: 'استقبال احترافي جدًا وشرح واضح منذ الزيارة الأولى. تم التنظيف بلطف ودون ألم. أنصح بهذا المركز في طنجة.',
      },
      {
        name: 'عمر إ.',
        text: 'ركّبت تاجًا وكانت النتيجة ممتازة، لا يمكن تمييزه عن أسناني الطبيعية. ومتابعة جدّية بعد العلاج.',
      },
      {
        name: 'كريم ت.',
        text: 'كان ابني يخاف من طبيب الأسنان، لكن الفريق جعله يثق منذ الجلسة الأولى. صار يذهب الآن دون أي خوف.',
      },
    ],
  },
  faq: {
    badge: 'الأسئلة الشائعة',
    title: 'الأسئلة الأكثر شيوعًا',
    items: [
      {
        q: 'كيف أحجز موعدًا؟',
        a: 'يمكنكم الحجز عبر نموذج هذه الصفحة، أو بالاتصال بنا على +212 694 75 59 88، أو بإرسال رسالة واتساب إلى +212 777 61 95 54. نردّ بسرعة خلال ساعات العمل.',
      },
      {
        q: 'ما التخصصات التي يقدّمها المركز؟',
        a: 'المركز متعدد التخصصات: زراعة الأسنان، جراحة الفم، علاج اللثة، العلاجات التحفظية، التركيبات والتيجان، التبييض والفينير، التقويم والمصفّفات، طب أسنان الأطفال، إزالة الجير والوقاية، صرير الأسنان والواقيات.',
      },
      {
        q: 'هل تقدّمون زراعة الأسنان؟',
        a: 'نعم. يعوّض المركز الأسنان المفقودة بزرعات ثابتة وطبيعية المظهر. تواصلوا معنا عبر واتساب لتقييم أولي لحالتكم.',
      },
      {
        q: 'هل تبييض الأسنان آمن؟',
        a: 'نعم. التبييض الاحترافي الذي يُجرى في المركز تحت إشراف طبيب الأسنان آمن ويعطي نتائج أفضل وتدوم أطول مقارنة بالمنتجات المنزلية.',
      },
      {
        q: 'أين يقع المركز؟',
        a: 'ساحة مولاي عبد العزيز – مسجد بدر، إقامة النصر، الطابق الرابع، شقة 15، 90000 طنجة. استخدموا زر الاتجاهات أسفله لتجدونا بسهولة على خرائط غوغل.',
      },
      {
        q: 'ما هي ساعات العمل؟',
        a: 'المركز مفتوح من الاثنين إلى السبت من 09:00 إلى 20:00. للحجز، راسلونا عبر واتساب على +212 777 61 95 54.',
      },
      {
        q: 'هل تعالجون طوارئ الأسنان؟',
        a: 'نعم، نبذل قصارى جهدنا لاستقبال حالات الطوارئ في اليوم نفسه. اتصلوا بنا أو راسلونا عبر واتساب فورًا إذا كنتم تشعرون بالألم.',
      },
    ],
  },
  appointment: {
    badge: 'احجز زيارتك',
    title: 'طلب موعد',
    subtitle: 'املأ النموذج وسنؤكد موعدك عبر الهاتف أو واتساب.',
    name: 'الاسم الكامل',
    namePh: 'اسمك الكامل',
    phone: 'رقم الهاتف',
    phonePh: '+212 6 XX XX XX XX',
    service: 'الخدمة',
    servicePh: 'اختر خدمة',
    date: 'التاريخ المفضّل',
    message: 'رسالة (اختياري)',
    messagePh: 'أخبرنا عن احتياجاتك…',
    submit: 'إرسال عبر واتساب',
    note: 'يُفتح طلبك في واتساب — نؤكد خلال ساعات العمل.',
  },
  contact: {
    badge: 'اتصل بنا والموقع',
    title: 'زوروا مركزنا',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    hoursLabel: 'ساعات العمل',
    hours: ['الاثنين – السبت: 09:00 – 20:00'],
    directions: 'الاتجاهات',
  },
  footer: {
    tagline: 'ابتسامة · صحة · ثقة — رعاية أسنان متكاملة في قلب طنجة.',
    quickLinks: 'روابط سريعة',
    contactTitle: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
  },
}

export const translations = { fr, ar, en }

export type Translation = typeof translations.fr
