export const CV:any = {
  person: {
    lastname:"Noverraz",
    firstname:"Bastien",
    title:"Ingénieur Informaticien",
    subtitle:"Développeur",
    birthday:new Date(1989,8,8),
    disponibility: "now"
  },
  diploma: {
    title:"Bachelor in Computer Science",
    icon:"",
    school:"EIG"
  },
  abilities: [
    {
      name:"Web Frontend",
      description:"Interfaces graphiques en HTML/CSS/JS.",
      icon: "",
      context:["web", "GUI"]
    },
    {
      name:"Angular",
      description:"Framework Angular (1 et 2) pour la construction d'application web",
      icon:"",
      context:["web","GUI"]
    },
    {
      name:"Webix",
      description:"Framework pour la création d'application web rapide.",
      icon:"",
      context:["web","GUI"]
    },
    {
      name:"Qt",
      description:"Librairie généraliste en C++ orientée GUI.",
      icon:"",
      context:["backend", "GUI"]
    },
    {
      name:"Ada",
      description:"Language de prommation généraliste pour des applications robustes.",
      icon:"",
      context:["backend","embedded"]
    },
    {
      name:"Bash",
      description:"Language de script utilisé pour l'automatisation des OS",
      icon:"",
      context:["backend","admin","embedded"]
    },
    {
      name:"C++",
      description:"Language généraliste orienté objet largement utilisé.",
      icon:"",
      context:["backend"]
    },
    {
      name:"SQL",
      description:"Language pour communiquer avec une base de donnée raltionnelle.",
      icon:"",
      context:["backend"]
    },
    {
      name:"Java",
      description:"Language de programmation semi-interprété orienté objet.",
      icon:"",
      context:["backend","GUI"]
    },
    {
      name:"Drupal",
      description:"Plateforme pour la création de site web",
      icon:"",
      context:["admin","web"]
    },
    {
      name:"Archlinux",
      description:"",
      icon:"",
      context:["admin","embedded"]
    },
    {
      name:"OpenSuse",
      description:"",
      icon:"",
      context:["admin","embedded"]
    },
    {
      name:"Debian",
      description:"",
      icon:"",
      context:["admin","embedded"]
    },
    {
      name:"Proxmox",
      description:"",
      icon:"",
      context:["admin","virtualization"]
    },
    {
      name:"Docker",
      description:"",
      icon:"",
      context:["backend","admin","virtualization"]
    },
    {
      name:"Zabbix",
      description:"",
      icon:"",
      context:["admin"]
    },
    {
      name:"Gestion de projet",
      description:"",
      icon:"",
      context:["human"]
    },
    {
      name:"Autonome",
      description:"",
      icon:"",
      context:["human"]
    },
    {
      name:"Proactif",
      description:"",
      icon:"",
      context:["human"]
    }
  ],
  languages:[
    {
      title:"Français",
      level:"Langue native"
    },
    {
      title:"Anglais",
      level:"C1"
    },
    {
      title:"Espagnol",
      level:"A1"
    }
  ],
  experiences:[
    {
      from:new Date(2016,6),
      to:"now",
      title:"Voyage",
      description:"Voyage autour du monde, en vélo, backpack, bus et voiture.",
      abilities:["Autonomie","Débrouillardise","Espagnol","Anglais"]
    },
    {
      from:new Date(2014,4),
      to:new Date(2016,5),
      title:"Transports publics de la région lausannoise SA / Développeur",
      description:"Travail au sein de l'équipe informatique pour la partie information voyageur. Logiciel open-source spécialisé dans la gestion d'horaire en C++/SQL pour le backend et travail avec des intervenants externes pour le développement du site web, des paneaux d'affichage aux arrêts, dans les bus et sur l'application mobile. Au cours de ce mandat la plateforme embarquée dans les bus a été refaite afin d'être plus maintenable et flexible.",
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
      title:"Policlinique Médicale Universitaire / Civiliste",
      description:"Travail varié, création et administration d'un système de serveurs Web virtuels pour les besoins du service informatique. Travail sur le CMS Allegro pour les RH. Création d'un site web mobile en Drupal.",
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
      title:"Compassion Suisse / Civiliste",
      description:"Dans une petite équipe qu'est la branche Suisse de Compassion International. Le travail consiste aussi bien au développement en Windev de l'application principale utilisée dans l'entreprise que la mise en place et gestion de serveurs physiques et virtuels.",
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
      title:"HEIG-VD / Ingénieur assistant",
      description:"Création d'un logiciel médical en Qt/C++, de l'écriture de la spécification avec les membres du corps médical impliqués jusqu'à une implémentation en version alpha utilisable. Ce projet continue sous le nom d'Ezechiel.",
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
      icon:""
    },
    {
      name:"Cyclisme",
      icon:""
    },
    {
      name:"Taekwondo",
      icon:""
    },
    {
      name:"Informatique",
      icon:""
    }
  ]
};
