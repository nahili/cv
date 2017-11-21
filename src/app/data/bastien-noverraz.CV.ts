export const CV:any = {
  person: {
    lastname:"Noverraz",
    firstname:"Bastien",
    title:"Ingénieur Informaticien",
    subtitle:"Développeur",
    birthday:new Date(1989,8,8),
    disponibility: Date.now(),
    picture: "/assets/bastien-noverraz.jpg"
  },
  diploma: {
    title:"Bachelor in Computer Science",
    /*icon:"/assets/hepia.jpg",*/
    school:"HEPIA",
    link:"http://hepia.hesge.ch/",
    pdf:"https://github.com/nahili/cv/blob/master/cv.pdf"
  },
  contact: {
    email:"bastien.noverraz@gmail.com",
    phone:"076 418 37 23",
    linkedin:"bastien-noverraz-8a13ba26",
    address:"21 Rue de la Filature, 1224 Carouge"
  },
  abilities: [
    {
      name:"Web",
      description:"Interfaces graphiques en HTML/CSS/JS.",
      icon: "",
      context:["web", "GUI"],
      style: "lang",
      level: 3,
      projects: [{
        where:"RH/Givaudan",
        what:"Interface web interne pour Givaudan avec Webix."
      },{
        where:"TL",
        what:"Interfaces des bornes et des affichages dans les bus, avec Angular."
      },{
        where:"Autres",
        what:"Dans quasiment tous les projets les interfaces web intervienent."
      }]
    },
    {
      name:"Angular",
      description:"Framework Angular (1 et 2) pour la construction d'application web.",
      icon:"",
      context:["web","GUI"],
      style: "framework",
      level: 2,
      projects: [{
        where:"TL",
        what:"Modifications et adaptations des interfaces des bornes aux arrêts et dans les bus."
      },
      {
        where:"Personnel",
        what:"Ce CV est fait en Angular 2 et Angular Material."
      }]
    },
    {
      name:"Webix",
      description:"Framework pour la création d'application web rapide.",
      icon:"",
      context:["web","GUI"],
      style: "framework",
      level: 1,
      projects: [{
        where:"RH/Givaudan",
        what:"Interface web interne pour Givaudan."
      }]
    },
    {
      name:"Qt",
      description:"Librairie généraliste en C++ orientée GUI et multi-plateforme.",
      icon:"",
      context:["backend", "GUI"],
      style: "framework",
      level: 3,
      projects: [{
        where:"HEIG-VD",
        what:"Logiciel Ezechiel à but médical, avec interface graphique, base de donnée, XML."
      },{
        where:"Diplôme",
        what:"Affichage en temps réel des informations de capteurs à travers le réseau."
      }]
    },
    {
      name:"Ada",
      description:"Language de programmation généraliste pour des applications robustes.",
      icon:"",
      context:["backend","embedded"],
      style: "lang",
      level: 2,
      projects: [{
        where:"HEPIA",
        what:"Apprentissage du language et utilisation dans de multiple projets."
      },{
        where:"Note",
        what:"Ce language me plait particulièrement et je serais heureux de pouvoir m'investir dedans."
      }]
    },
    {
      name:"Bash",
      description:"Language de script utilisé pour l'automatisation des OS",
      icon:"",
      context:["backend","admin","embedded"],
      style: "lang",
      level: 4,
      projects: [{
        where:"TL",
        what:"Largement utilisé pour automatiser des tâches dans les plateformes embarquées (bus, bornes aux arrêts)."
      },{
        where:"Autres",
        what:"Dans toutes les expériences d'administration serveur."
      }]
    },
    {
      name:"C++",
      description:"Language généraliste orienté objet largement utilisé de part le monde.",
      icon:"",
      context:["backend"],
      style: "lang",
      level: 4,
      projects: [{
        where:"TL",
        what:"Déboguage, maintenance et développement sur le logiciel métier Synthese."
      },{
        where:"HEIG-VD",
        what: "Développement complet du logiciel médical Ezechiel avec la librairie Qt."
      }]
    },
    {
      name:"SQL",
      description:"Language pour communiquer avec une base de donnée relationnelle.",
      icon:"",
      context:["backend"],
      style: "lang",
      level: 3,
      projects: [{
        where:"PMU",
        what:"Backend du site web mobile, backend de l'outil des RH."
      },{
        where:"TL",
        what:"Backend du logiciel Synthese en MySQL : déboguage et administration."
      },{
        where:"HEIG-VD",
        what:"Backend du logiciel Ezechiel en SQL (MySql, sqlite)."
      }]
    },
    {
      name:"Java",
      description:"Language de programmation semi-interprété orienté objet.",
      icon:"",
      context:["backend","GUI"],
      style: "lang",
      level: 1,
      projects: [{
        where:"Apprentissage",
        what:"Utilisé lors des cours de Bachelor"
      }]
    },
    {
      name:"Drupal",
      description:"Plateforme pour la création de site web",
      icon:"",
      context:["admin","web"],
      style: "framework",
      level: 2,
      projects: [{
        where:"PMU",
        what:"Création du site web mobile."
      }]
    },
    {
      name:"Archlinux",
      description:"OS toujours à la pointe et très modulaire. Parfait comme plateforme de développement ou OS embarqué.",
      icon:"",
      context:["admin","embedded"],
      style: "os",
      level: 4,
      projects: [{
        where:"Personnel",
        what:"Utilisé dans la vie de tous les jours et pour les plateformes de développement."
      }]
    },
    {
      name:"OpenSuse",
      description:"OS de choix aux TL, avec support professionel possible.",
      icon:"",
      context:["admin","embedded"],
      style: "os",
      level: 3,
      projects: [{
        where:"TL",
        what:"Utilisé pour les serveurs de Synthese et comme OS embarqué dans les bus et bornes."
      }]
    },
    {
      name:"Debian",
      description:"OS parfait pour un serveur en production de part sa stabilité et sa gestion.",
      icon:"",
      context:["admin","embedded"],
      style: "os",
      level: 3,
      projects: [{
        where:"PMU",
        what:"Tous les serveurs web, DNS et IMAP"
      },{
        where:"Compassion",
        what:"Serveurs de virtualisation."
      }]
    },
    {
      name:"Proxmox",
      description:"Interface pour la gestion de machine virtuelles légères sous GNU/Linux.",
      icon:"",
      context:["admin","virtualization"],
      style: "tool",
      level: 2,
      projects: [{
        where:"PMU",
        what:"Gestion des machines virtuelles."
      }]
    },
    {
      name:"Docker",
      description:`
        Plateforme de virtualisation parfaite pour le développement d'OS ou
        l'utilisation de machine virtuelles ephemere.
      `,
      icon:"",
      context:["backend","admin","virtualization"],
      style: "tool",
      level: 2,
      projects: [{
        where:"TL",
        what:"Utilisé pour le développement de l'OS embarqué."
      }]
    },
    {
      name:"Zabbix",
      description:"Outil de monitoring flexible et facile d'utilisation.",
      icon:"",
      context:["admin"],
      style: "tool",
      level: 3,
      projects: [{
        where:"TL",
        what:"Monitoring des services de Synthese et de la performance du site web."
      },{
        where:"PMU",
        what:"Monitoring de toute l'infrastucture spécifique à la PMU."
      }]
    },
    {
      name:"Projets",
      description:`
        Au cours de mes différent poste j'ai eu l'occasion de participer ou de
        gérer différent projets. Soit de manière complète comme avec le projet
        Ezechiel (HEIG), ou en intégrant un projet en cours. Bien que la gestion
        de projet ne sois pas mon objectif principal, j'ai eu la chance de pouvoir
        en vivre plusieurs étapes avec différents projets.
      `,
      icon:"",
      context:["human"],
      style: "human",
      level: 3,
      projects: [{
        where:"TL",
        what:"Travail avec une équipe de développeurs sur l'application Synthese."
      },{
        where:"HEIG",
        what:"Gestion du projet Ezechiel, depuis l'écriture des spécifications jusqu'à l'implémentation."
      },{
        where:"PMU",
        what:"Design et création des serveurs virtuels pour l'application web mobile."
      }]
    },
    {
      name:"Autonome",
      description:`
        Être capable d'agir en autonomie, tout en étant capable de travailler
        en équipe est primordial. Savoir quand demander l'information et ainsi
        profiter des ressources locales tout en étant capable de rechercher
        l'information par sois-même permet un gain de temps et de savoir
        bien souvent nécessaire.
      `,
      icon:"",
      context:["human"],
      style: "human",
      level: 4
    },
    {
      name:"Proactif",
      description: `
        Tous les postes que j'ai occupé jusqu'ici demandent beaucoup de
        proactivité. La capacité de voir les problèmes avant qu'ils arrivent et
        de prévoir les besoins avant qu'ils se fassent ressentir était crucial.
        Prendre des initiatives pour ensuite les faire validé par la hiérarchie
        concernée s'est révélé être efficace.
      `,
      icon:"",
      context:["human"],
      style: "human",
      level: 4
    }
  ],
  languages:[
    {
      title:"Français",
      level:"Langue native",
      icon:"/assets/french.svg"
    },
    {
      title:"Anglais",
      level:"C1",
      icon:"/assets/english.svg"
    },
    {
      title:"Espagnol",
      level:"A1",
      icon:"/assets/spanish.svg"
    }
  ],
  experiences:[
    {
      from:new Date(2016,6),
      to: Date.now(),
      doesNotCount: true,
      title:"Voyage",
      description:"Voyage autour du monde, en vélo, backpack, bus et voiture.",
      abilities:["Autonomie","Débrouillardise","Espagnol","Anglais"]
    },
    {
      from:new Date(2014,4),
      to:new Date(2016,5),
      title:"TL SA",
      description:"Travail au sein de l'équipe informatique des Transports publics de la région lausannoise SA pour la partie information voyageur. Logiciel open-source spécialisé dans la gestion d'horaire en C++/SQL pour le backend et travail avec des intervenants externes pour le développement du site web, des paneaux d'affichage aux arrêts, dans les bus et sur l'application mobile. Au cours de ce mandat la plateforme embarquée dans les bus a été refaite afin d'être plus maintenable et flexible.",
      abilities:["Gestion de projet","C++","Angular","Web","CouchDB","OpenSuse","Docker","GIT","Travail d'équipe","Zabbix"],
      contact:{
        name:"BEAUSSAULT Stéphane",
        email:"beaussault.stephane@t-l.ch",
        phone:"+41 21 621 04 90"
      }
    },
    {
      from:new Date(2014,4),
      to:new Date(2013,8),
      title:"PMU",
      description:"Travail varié au sein de la Policlinique Médicale Universitaire en tant que Civiliste, création et administration d'un système de serveurs Web virtuels pour les besoins du service informatique. Travail sur le CMS Allegro pour les RH. Création d'un site web mobile en Drupal.",
      abilities:["Proxmox","Apache","Allegro","Zabbix","Observium","Drupal","Joomla","Web","MySQL","Debian"],
      contact:{
        name:"THABARD Julien",
        email:"julien.thabard@hospvd.ch",
        phone:"+41213146093"
      }
    },
    {
      from:new Date(2012,9),
      to:new Date(2013,7),
      title:"Compassion",
      description:"Dans une petite équipe qu'est la branche Suisse de Compassion International en tant que Civiliste. Le travail consiste aussi bien au développement en Windev de l'application principale utilisée dans l'entreprise que la mise en place et gestion de serveurs physiques et virtuels.",
      abilities:["Windows 7","Windows Server 2008","Windev","ESXi","Debian","Archlinux"],
      contact: {
        name:"WULLIAMOZ David",
        email:"dwulliamoz@compassion.ch",
        phone:"+41244342126"
      }
    },
    {
      from: new Date(2011,2),
      to: new Date(2012,6),
      title:"HEIG-VD",
      description:"Post Ingénieur assistant à la haute école d'ingénieurie et de gestion de vaud. Création d'un logiciel médical en Qt/C++, de l'écriture de la spécification avec les membres du corps médical impliqués jusqu'à une implémentation en version alpha utilisable. Ce projet continue sous le nom d'Ezechiel.",
      abilities:["Gestion de projet","C++","Qt","XML","SQL"],
      contact:{
        name:"THOMA Yann",
        email:"yann.thoma@heig-vd.ch",
        phone:"+41245576273"
      }
    }
  ],
  hobbies:[
    {
      name:"Escalade",
      icon:"/assets/climbing.svg"
    },
    {
      name:"Cyclisme",
      icon:"/assets/scott.png"
    },
    {
      name:"Taekwondo",
      icon:"/assets/taekwondo.png"
    },
    {
      name:"Informatique",
      icon:"/assets/terminal.svg"
    }
  ]
};
