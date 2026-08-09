export const personal = {
  name: 'Bhaskar Deb',
  firstName: 'Bhaskar',
  lastName: 'Deb',
  email: 'bhaskardeb120@gmail.com',
  phone: '+358 45 238 3277',
  location: 'Helsinki, Finland',
  locationShort: 'Helsinki, FI',
  github: 'https://github.com/BhaskarDeb2000',
  linkedin: 'https://www.linkedin.com/in/bhaskardeb1/',
  cvEn: '/cv/Bhaskar_Deb.pdf',
  image: '/profile.jpg',
};

export const content = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      roles: [
        'Software Developer',
        'Full-Stack Engineer',
        'React & TypeScript',
        'API Integrator',
      ],
      tagline:
        'I build scalable web applications with React, TypeScript, and Node.js — from payment flows and third-party APIs to maintainable full-stack products.',
      cta: 'View Projects',
      cv: 'Download CV',
      hire: 'Hire Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Practical builder with a Business IT foundation',
      paragraphs: [
        'Software developer with practical experience building scalable web applications using React, TypeScript, and Node.js. I combine a solid academic foundation in Business Information Technology with hands-on full-stack work — including payment flows and third-party API integrations.',
        'At StepTask I lead architecture and delivery for a three-sided EU service marketplace on React, TypeScript, and Supabase. Previously at Hobiver I shipped features, modernized legacy modules, and improved performance across the product lifecycle.',
        'I focus on maintainable code, performance, and practical solutions for users — and I am open to full-stack and any development roles in Helsinki and remote.',
      ],
      highlights: [
        { label: 'Experience', value: '1+ years' },
        { label: 'Projects', value: '20+' },
        { label: 'Marketplace', value: 'EU SaaS' },
        { label: 'Based in', value: 'Helsinki' },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'Where I have applied my skills',
      showOther: 'Other experience',
      hideOther: 'Hide other experience',
      items: [
        {
          role: 'Software Developer Lead',
          company: 'StepTask',
          period: 'May 2025 – Present',
          type: 'Full-time',
          description:
            'Lead architecture and delivery of StepTask, a three-sided EU service marketplace (React/TypeScript + Supabase). Own product surfaces for customers, providers, and admins — tasks, matching, messaging, milestones, payments, and disputes. Build payment and webhook integrations (Mollie/Stripe), realtime chat/progress updates, and a full admin ops console. Manage CI/CD, RLS/security hardening, and performance/testing across 140+ DB migrations and Edge Functions.',
          tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'CI/CD'],
        },
        {
          role: 'Software Developer',
          company: 'Hobiver',
          period: 'Mar 2025 – Sep 2025',
          type: 'Part-time',
          description:
            'Built and maintained full-stack web applications with React, TypeScript, and Node.js — delivering features and fixing production issues. Designed RESTful APIs and integrated third-party services for authentication, payments, and external data. Migrated legacy modules to modern frameworks and improved performance through profiling, query optimization, and frontend/backend efficiency work.',
          tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
        },
      ],
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'Technologies I work with',
      categories: [
        {
          name: 'Languages',
          items: ['JavaScript', 'TypeScript', 'SQL'],
        },
        {
          name: 'Frameworks',
          items: ['React', 'Node.js', 'Express.js'],
        },
        {
          name: 'Tools & Cloud',
          items: ['AWS', 'Docker', 'Supabase', 'Vercel', 'GitHub', 'GitLab'],
        },
        {
          name: 'Platforms',
          items: ['Windows', 'Linux', 'macOS'],
        },
        {
          name: 'Practices',
          items: ['REST APIs', 'CI/CD', 'RLS / Security', 'Payments (Stripe/Mollie)', 'Performance'],
        },
      ],
    },
    projects: {
      title: 'Selected Work',
      subtitle: 'Products and applications I have designed and shipped.',
      viewLive: 'Live',
      viewCode: 'Code',
      showMore: 'Show more projects',
      showLess: 'Show fewer',
    },
    moreProjects: {
      title: 'More Projects',
      subtitle: 'Additional builds and experiments',
    },
    education: {
      title: 'Education',
      subtitle: 'Formal training behind the work.',
      showCerts: 'View certifications',
      hideCerts: 'Hide certifications',
      items: [
        {
          degree: 'Bachelor in Business Information Technology',
          school: 'Haaga-Helia University of Applied Sciences',
          period: '2025 – 2027',
          location: 'Helsinki, Finland',
        },
        {
          degree: 'Full-Stack Web Development Program (Graduated)',
          school: 'Helsinki Business College',
          period: '2024 – 2026',
          location: 'Helsinki, Finland',
        },
      ],
      certs: [
        {
          name: 'Full-Stack Web Development Diploma — Helsinki Business College',
          file: '/certs/Tutkintotodistus_Bhaskar_Deb.pdf',
        },
        {
          name: 'Getting Started With AWS',
          file: '/certs/AWS_Getting_Started.pdf',
        },
        {
          name: 'AWS EC2 Basics',
          file: '/certs/AWS_EC2_Basics.pdf',
        },
        {
          name: 'AWS IAM Certificate',
          file: '/certs/AWS_IAM.pdf',
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Open to full-stack or any development roles in Helsinki or remote',
      description:
        'Whether you need React/TypeScript frontends, Node.js APIs, or payment and marketplace integrations — reach out directly.',
      cta: "Let's build something —",
    },
    footer: {
      built: 'Built with React, Vite & Framer Motion',
      rights: 'All rights reserved.',
    },
  },
  sv: {
    nav: {
      about: 'Om mig',
      experience: 'Erfarenhet',
      skills: 'Kompetens',
      projects: 'Projekt',
      education: 'Utbildning',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hej, jag är',
      roles: [
        'Mjukvaruutvecklare',
        'Fullstackutvecklare',
        'React & TypeScript',
        'API-integratör',
      ],
      tagline:
        'Jag bygger skalbara webbapplikationer med React, TypeScript och Node.js — från betalningsflöden och tredjeparts-API:er till underhållbara fullstackprodukter.',
      cta: 'Se projekt',
      cv: 'Ladda ner CV',
      hire: 'Anställ mig',
    },
    about: {
      title: 'Om mig',
      subtitle: 'Praktisk byggare med Business IT-grund',
      paragraphs: [
        'Mjukvaruutvecklare med praktisk erfarenhet av att bygga skalbara webbapplikationer med React, TypeScript och Node.js. Jag kombinerar en solid akademisk grund i Business Information Technology med hands-on fullstackarbete — inklusive betalningsflöden och integrationer mot tredjeparts-API:er.',
        'På StepTask leder jag arkitektur och leverans av en tresidig EU-tjänstmarknadsplats på React, TypeScript och Supabase. Tidigare på Hobiver levererade jag funktioner, moderniserade legacy-moduler och förbättrade prestanda genom hela produktlivscykeln.',
        'Jag fokuserar på underhållbar kod, prestanda och praktiska lösningar för användare — och är öppen för fullstack- och frontendroller i Helsingfors och på distans.',
      ],
      highlights: [
        { label: 'Erfarenhet', value: '1+ år' },
        { label: 'Projekt', value: '20+' },
        { label: 'Marknadsplats', value: 'EU SaaS' },
        { label: 'Baserad i', value: 'Helsingfors' },
      ],
    },
    experience: {
      title: 'Erfarenhet',
      subtitle: 'Var jag har tillämpat mina färdigheter',
      showOther: 'Övrig erfarenhet',
      hideOther: 'Dölj övrig erfarenhet',
      items: [
        {
          role: 'Software Developer Lead',
          company: 'StepTask',
          period: 'Maj 2025 – Nu',
          type: 'Heltid',
          description:
            'Leder arkitektur och leverans av StepTask, en tresidig EU-tjänstmarknadsplats (React/TypeScript + Supabase). Äger produktytor för kunder, leverantörer och administratörer — uppgifter, matchning, meddelanden, milstolpar, betalningar och tvister. Bygger betalnings- och webhook-integrationer (Mollie/Stripe), realtidschatt/framstegsuppdateringar och en full admin-konsol. Hanterar CI/CD, RLS/säkerhetshärdning och prestanda/testning över 140+ DB-migrationer och Edge Functions.',
          tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'CI/CD'],
        },
        {
          role: 'Mjukvaruutvecklare',
          company: 'Hobiver',
          period: 'Mar 2025 – Sep 2025',
          type: 'Deltid',
          description:
            'Byggde och underhöll fullstack-webbapplikationer med React, TypeScript och Node.js — levererade funktioner och åtgärdade produktionsproblem. Designade REST-API:er och integrerade tredjepartstjänster för autentisering, betalningar och externa dataflöden. Migrerade legacy-moduler till moderna ramverk och förbättrade prestanda genom profilering, frågeoptimering och effektivisering.',
          tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
        },
      ],
    },
    skills: {
      title: 'Kompetens & Verktyg',
      subtitle: 'Teknologier jag arbetar med',
      categories: [
        {
          name: 'Språk',
          items: ['JavaScript', 'TypeScript', 'SQL'],
        },
        {
          name: 'Ramverk',
          items: ['React', 'Node.js', 'Express.js'],
        },
        {
          name: 'Verktyg & Moln',
          items: ['AWS', 'Docker', 'Supabase', 'Vercel', 'GitHub', 'GitLab'],
        },
        {
          name: 'Plattformar',
          items: ['Windows', 'Linux', 'macOS'],
        },
        {
          name: 'Metoder',
          items: ['REST API:er', 'CI/CD', 'RLS / Säkerhet', 'Betalningar (Stripe/Mollie)', 'Prestanda'],
        },
      ],
    },
    projects: {
      title: 'Utvalt arbete',
      subtitle: 'Produkter och applikationer jag designat och levererat.',
      viewLive: 'Live',
      viewCode: 'Kod',
      showMore: 'Visa fler projekt',
      showLess: 'Visa färre',
    },
    moreProjects: {
      title: 'Fler projekt',
      subtitle: 'Ytterligare byggen och experiment',
    },
    education: {
      title: 'Utbildning',
      subtitle: 'Formell utbildning bakom arbetet.',
      showCerts: 'Visa certifieringar',
      hideCerts: 'Dölj certifieringar',
      items: [
        {
          degree: 'Kandidatexamen i Business Information Technology',
          school: 'Haaga-Helia University of Applied Sciences',
          period: '2025 – 2027',
          location: 'Helsingfors, Finland',
        },
        {
          degree: 'Fullstack webbutvecklingsprogram (Examen)',
          school: 'Helsinki Business College',
          period: '2024 – 2026',
          location: 'Helsingfors, Finland',
        },
      ],
      certs: [
        {
          name: 'Examensbevis — Fullstack webbutveckling, Helsinki Business College',
          file: '/certs/Tutkintotodistus_Bhaskar_Deb.pdf',
        },
        {
          name: 'Kom igång med AWS',
          file: '/certs/AWS_Getting_Started.pdf',
        },
        {
          name: 'AWS EC2 Basics',
          file: '/certs/AWS_EC2_Basics.pdf',
        },
        {
          name: 'AWS IAM-certifikat',
          file: '/certs/AWS_IAM.pdf',
        },
      ],
    },
    contact: {
      title: 'Kontakta mig',
      subtitle: 'Öppen för fullstack- och frontendroller i Helsingfors eller på distans',
      description:
        'Oavsett om du behöver React/TypeScript-frontends, Node.js-API:er eller betalnings- och marknadsplatsintegrationer — hör av dig direkt.',
      cta: 'Låt oss bygga något —',
    },
    footer: {
      built: 'Byggd med React, Vite & Framer Motion',
      rights: 'Alla rättigheter förbehållna.',
    },
  },
  fi: {
    nav: {
      about: 'Tietoja',
      experience: 'Kokemus',
      skills: 'Taidot',
      projects: 'Projektit',
      education: 'Koulutus',
      contact: 'Yhteystiedot',
    },
    hero: {
      greeting: 'Hei, olen',
      roles: [
        'Ohjelmistokehittäjä',
        'Full-stack-insinööri',
        'React & TypeScript',
        'API-integraattori',
      ],
      tagline:
        'Rakennan skaalautuvia web-sovelluksia Reactilla, TypeScriptillä ja Node.js:llä — maksuvirroista ja kolmannen osapuolen API:ista ylläpidettäviin full-stack-tuotteisiin.',
      cta: 'Katso projektit',
      cv: 'Lataa CV',
      hire: 'Palkkaa minut',
    },
    about: {
      title: 'Tietoja minusta',
      subtitle: 'Käytännön tekijä Business IT -pohjalla',
      paragraphs: [
        'Ohjelmistokehittäjä, jolla on käytännön kokemusta skaalautuvien web-sovellusten rakentamisesta Reactilla, TypeScriptillä ja Node.js:llä. Yhdistän vahvan akateemisen pohjan Business Information Technologysta hands-on full-stack-työhön — mukaan lukien maksuvirrat ja kolmannen osapuolen API-integraatiot.',
        'StepTaskissa johdan arkkitehtuuria ja toimitusta kolmipuoliselle EU-palvelumarkkinapaikalle Reactilla, TypeScriptillä ja Supabasella. Aiemmin Hobiverilla toimitin ominaisuuksia, modernisoin legacy-moduuleja ja paransin suorituskykyä tuotteen elinkaaren aikana.',
        'Keskityn ylläpidettävään koodiin, suorituskykyyn ja käytännöllisiin ratkaisuihin käyttäjille — ja olen avoin full-stack- ja frontend-rooleille Helsingissä sekä etänä.',
      ],
      highlights: [
        { label: 'Kokemus', value: '1+ vuotta' },
        { label: 'Projektit', value: '20+' },
        { label: 'Markkinapaikka', value: 'EU SaaS' },
        { label: 'Sijainti', value: 'Helsinki' },
      ],
    },
    experience: {
      title: 'Kokemus',
      subtitle: 'Missä olen hyödyntänyt osaamistani',
      showOther: 'Muu kokemus',
      hideOther: 'Piilota muu kokemus',
      items: [
        {
          role: 'Software Developer Lead',
          company: 'StepTask',
          period: 'Touko 2025 – Nykyinen',
          type: 'Kokoaikainen',
          description:
            'Johdan StepTaskin arkkitehtuuria ja toimitusta — kolmipuolinen EU-palvelumarkkinapaikka (React/TypeScript + Supabase). Omistan tuotealueet asiakkaille, palveluntarjoajille ja ylläpitäjille — tehtävät, matchaus, viestintä, virstanpylväät, maksut ja riidat. Rakennan maksu- ja webhook-integraatioita (Mollie/Stripe), reaaliaikaisen chatin/edistymispäivitykset sekä täyden admin-konsolin. Hallitsen CI/CD:tä, RLS-/turvallisuuskovennetta sekä suorituskykyä/testausta yli 140 DB-migraation ja Edge Functionin yli.',
          tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'CI/CD'],
        },
        {
          role: 'Ohjelmistokehittäjä',
          company: 'Hobiver',
          period: 'Maalis 2025 – Syys 2025',
          type: 'Osa-aikainen',
          description:
            'Rakensin ja ylläpidin full-stack-web-sovelluksia Reactilla, TypeScriptillä ja Node.js:llä — toimitin ominaisuuksia ja korjasin tuotanto-ongelmia. Suunnittelin REST-API:ita ja integroin kolmannen osapuolen palveluita autentikointiin, maksuihin ja ulkoiseen dataan. Migroin legacy-moduuleja moderneihin kehyksiin ja paransin suorituskykyä profiloinnilla, kyselyoptimoinnilla sekä frontend-/backend-tehokkuustyöllä.',
          tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
        },
      ],
    },
    skills: {
      title: 'Taidot & työkalut',
      subtitle: 'Teknologiat, joiden kanssa työskentelen',
      categories: [
        {
          name: 'Kielet',
          items: ['JavaScript', 'TypeScript', 'SQL'],
        },
        {
          name: 'Kehykset',
          items: ['React', 'Node.js', 'Express.js'],
        },
        {
          name: 'Työkalut & pilvi',
          items: ['AWS', 'Docker', 'Supabase', 'Vercel', 'GitHub', 'GitLab'],
        },
        {
          name: 'Alustat',
          items: ['Windows', 'Linux', 'macOS'],
        },
        {
          name: 'Käytännöt',
          items: ['REST API:t', 'CI/CD', 'RLS / turvallisuus', 'Maksut (Stripe/Mollie)', 'Suorituskyky'],
        },
      ],
    },
    projects: {
      title: 'Valitut työt',
      subtitle: 'Tuotteita ja sovelluksia, joita olen suunnitellut ja toimittanut.',
      viewLive: 'Live',
      viewCode: 'Koodi',
      showMore: 'Näytä lisää projekteja',
      showLess: 'Näytä vähemmän',
    },
    moreProjects: {
      title: 'Lisää projekteja',
      subtitle: 'Lisärakennuksia ja kokeiluja',
    },
    education: {
      title: 'Koulutus',
      subtitle: 'Muodollinen koulutus työn taustalla.',
      showCerts: 'Näytä sertifikaatit',
      hideCerts: 'Piilota sertifikaatit',
      items: [
        {
          degree: 'Tradenomi, Business Information Technology',
          school: 'Haaga-Helia ammattikorkeakoulu',
          period: '2025 – 2027',
          location: 'Helsinki, Suomi',
        },
        {
          degree: 'Full-stack-web-kehitysohjelma (Valmistunut)',
          school: 'Helsinki Business College',
          period: '2024 – 2026',
          location: 'Helsinki, Suomi',
        },
      ],
      certs: [
        {
          name: 'Tutkintotodistus — Full-stack-web-kehitys, Helsinki Business College',
          file: '/certs/Tutkintotodistus_Bhaskar_Deb.pdf',
        },
        {
          name: 'Getting Started With AWS',
          file: '/certs/AWS_Getting_Started.pdf',
        },
        {
          name: 'AWS EC2 Basics',
          file: '/certs/AWS_EC2_Basics.pdf',
        },
        {
          name: 'AWS IAM Certificate',
          file: '/certs/AWS_IAM.pdf',
        },
      ],
    },
    contact: {
      title: 'Ota yhteyttä',
      subtitle: 'Avoin full-stack- ja frontend-rooleille Helsingissä tai etänä',
      description:
        'Tarvitsetpa React/TypeScript-frontendin, Node.js-API:ita tai maksu- ja markkinapaikkaintegraatioita — ota yhteyttä suoraan.',
      cta: 'Rakennetaan jotain —',
    },
    footer: {
      built: 'Rakennettu Reactilla, Vitellä & Framer Motionilla',
      rights: 'Kaikki oikeudet pidätetään.',
    },
  },
};

export const featuredProjects = [
  {
    id: 'steptask',
    title: 'StepTask',
    subtitle: {
      en: 'EU Service Marketplace',
      sv: 'EU-tjänstmarknadsplats',
      fi: 'EU-palvelumarkkinapaikka',
    },
    description: {
      en: 'Three-sided marketplace for customers, providers, and admins — tasks, matching, messaging, milestones, payments, and disputes. Built with React, TypeScript, and Supabase.',
      sv: 'Tresidig marknadsplats för kunder, leverantörer och administratörer — uppgifter, matchning, meddelanden, milstolpar, betalningar och tvister. Byggd med React, TypeScript och Supabase.',
      fi: 'Kolmipuolinen markkinapaikka asiakkaille, palveluntarjoajille ja ylläpitäjille — tehtävät, matchaus, viestintä, virstanpylväät, maksut ja riidat. Rakennettu Reactilla, TypeScriptillä ja Supabasella.',
    },
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Mollie'],
    live: 'https://steptask.fi/',
  },
  {
    id: 'moviehub',
    title: 'MovieHub',
    subtitle: {
      en: 'Movie Discovery',
      sv: 'Filmsökning',
      fi: 'Elokuvien löytäminen',
    },
    description: {
      en: 'Movie discovery web app for browsing and exploring titles with a responsive UI.',
      sv: 'Webbapp för filmsökning med responsivt gränssnitt för att bläddra och utforska titlar.',
      fi: 'Elokuvien löytämiseen tarkoitettu web-sovellus responsiivisella käyttöliittymällä.',
    },
    tags: ['JavaScript', 'React', 'API'],
    live: 'https://movie-hub-wheat.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/MovieHub',
  },
  {
    id: 'nasa-pic',
    title: 'NASA Best Pic',
    subtitle: {
      en: 'Full-Stack Astronomy',
      sv: 'Fullstack astronomi',
      fi: 'Full-stack-astronomia',
    },
    description: {
      en: 'Full-stack app showcasing NASA imagery with a modern frontend and API-backed data flow.',
      sv: 'Fullstack-app som visar NASA-bilder med modern frontend och API-driven data.',
      fi: 'Full-stack-sovellus NASA-kuville modernilla frontendillä ja API-pohjaisella datavirralla.',
    },
    tags: ['TypeScript', 'Full-Stack', 'API'],
    live: 'https://full-stack-nasa-best-pic.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/fullStack_nasaBestPic',
  },
  {
    id: 'hr-app',
    title: 'HR App',
    subtitle: {
      en: 'Employee Directory',
      sv: 'Medarbetarregister',
      fi: 'Henkilöstöhakemisto',
    },
    description: {
      en: 'HR tool with employee directory, role management, routing, and API integration.',
      sv: 'HR-verktyg med medarbetarregister, rollhantering, routing och API-integration.',
      fi: 'HR-työkalu henkilöstöhakemistolla, roolinhallinnalla, reitityksellä ja API-integraatiolla.',
    },
    tags: ['TypeScript', 'React', 'Routing'],
    live: 'https://hr-app-three.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/hr-app',
  },
  {
    id: 'country-app',
    title: 'Country App',
    subtitle: {
      en: 'Country Explorer',
      sv: 'Länderutforskare',
      fi: 'Maatutkija',
    },
    description: {
      en: 'TypeScript country explorer with searchable listings and detail views.',
      sv: 'TypeScript-app för att utforska länder med sökbara listor och detaljvyer.',
      fi: 'TypeScript-sovellus maiden tutkimiseen hakulistoilla ja yksityiskohtanäkymillä.',
    },
    tags: ['TypeScript', 'React', 'API'],
    live: 'https://country-app-kohl.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/country-app',
  },
  {
    id: 'pokemon',
    title: 'Pokémon Full-Stack',
    subtitle: {
      en: 'Full-Stack Deployment',
      sv: 'Fullstack-deploy',
      fi: 'Full-stack-julkaisu',
    },
    description: {
      en: 'Full-stack Pokémon app with frontend and backend deployed together on Vercel.',
      sv: 'Fullstack Pokémon-app med frontend och backend deployade tillsammans på Vercel.',
      fi: 'Full-stack Pokémon-sovellus, jossa frontend ja backend on julkaistu yhdessä Vercelissä.',
    },
    tags: ['JavaScript', 'Full-Stack', 'Vercel'],
    live: 'https://pokemonfullstack.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/pokemonfullStackDeployment',
  },
  {
    id: 'currency',
    title: 'Currency Exchange',
    subtitle: {
      en: 'FX Converter',
      sv: 'Valutaväxling',
      fi: 'Valuuttamuunnin',
    },
    description: {
      en: 'Currency exchange calculator with live conversion rates and a simple, clear UI.',
      sv: 'Valutaväxlare med aktuella kurser och ett enkelt, tydligt gränssnitt.',
      fi: 'Valuuttamuunnin ajantasaisilla kursseilla ja selkeällä käyttöliittymällä.',
    },
    tags: ['JavaScript', 'API', 'CSS'],
    live: 'https://currency-exchange-app-viio.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/currency-exchange-app',
  },
  {
    id: 'news',
    title: 'Project News',
    subtitle: {
      en: 'Team News Site',
      sv: 'Teamnyhetssajt',
      fi: 'Tiimin uutissivusto',
    },
    description: {
      en: 'Team project for building a news website with collaborative frontend development.',
      sv: 'Teamprojekt för att bygga en nyhetssajt med gemensam frontendutveckling.',
      fi: 'Tiimiprojekti uutissivuston rakentamiseen yhteisellä frontend-kehityksellä.',
    },
    tags: ['JavaScript', 'Team', 'Web'],
    live: null,
    github: 'https://github.com/BhaskarDeb2000/Project_News',
  },
  {
    id: 'posts-show',
    title: 'Posts Show',
    subtitle: {
      en: 'Posts Feed UI',
      sv: 'Inläggsflöde',
      fi: 'Julkaisuvirta',
    },
    description: {
      en: 'Lightweight posts feed interface for browsing and displaying content cards.',
      sv: 'Lättviktigt inläggsflöde för att bläddra och visa innehållskort.',
      fi: 'Kevyt julkaisuvirta sisällön selaamiseen ja korttien näyttämiseen.',
    },
    tags: ['JavaScript', 'React'],
    live: 'https://posts-show.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/postsShow',
  },
];

export const moreProjects = [
  {
    title: 'Name Variation App',
    description: {
      en: 'Utility app that generates name variations with a focused, simple interface.',
      sv: 'Verktygsapp som genererar namnvariationer med ett enkelt gränssnitt.',
      fi: 'Apuohjelma, joka generoi nimivariaatioita selkeällä käyttöliittymällä.',
    },
    tags: ['CSS', 'JavaScript'],
    live: 'https://name-variation-app.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/name-variation-app',
  },
  {
    title: 'TypeScript Calculator',
    description: {
      en: 'Calculator built with TypeScript and a clean browser UI.',
      sv: 'Kalkylator byggd med TypeScript och ett rent webbläsargränssnitt.',
      fi: 'Laskin rakennettu TypeScriptillä ja selkeällä selainkäyttöliittymällä.',
    },
    tags: ['TypeScript'],
    live: 'https://typescript-calculator-seven.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/typescript-calculator',
  },
  {
    title: 'BCH Persons Project',
    description: {
      en: 'School project for managing and displaying person records in the browser.',
      sv: 'Skolprojekt för att hantera och visa personposter i webbläsaren.',
      fi: 'Kouluprojekti henkilörekisterien hallintaan ja näyttämiseen selaimessa.',
    },
    tags: ['JavaScript'],
    live: 'https://bch-persons-project.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/BCHPersonsProject',
  },
  {
    title: 'Random Dog Image Generator',
    description: {
      en: 'Fun API-driven app that fetches and displays random dog images.',
      sv: 'API-driven app som hämtar och visar slumpmässiga hundbilder.',
      fi: 'Hauska API-pohjainen sovellus, joka hakee ja näyttää satunnaisia koirakuvia.',
    },
    tags: ['JavaScript', 'API'],
    live: 'https://random-dog-image-generator-one.vercel.app/',
    github: 'https://github.com/BhaskarDeb2000/random-dog-image-generator',
  },
];

export const navLinks = [
  { id: 'about', href: '#about' },
  { id: 'experience', href: '#experience' },
  { id: 'skills', href: '#skills' },
  { id: 'projects', href: '#projects' },
  { id: 'education', href: '#education' },
  { id: 'contact', href: '#contact' },
];
