
export const CV: any = {
  header: {
    lastname:"Noverraz",
    firstname:"Bastien",
    age:"28",
    diploma:"Bachelor in Computer Science",
    experience:"5 ans",
    disponibility: {
      remote:"right now",
      local:"12 décembre"
    },
  },
  abilities: [
    {
      title:"Développement",
      subsections:[
        {
          title:"WEB",
          elements:["HTML/JS/CSS","Angular","JQuery","Webix"],
        },
        {
          title:"GUI",
          elements:["Qt","Web-based"],
        },
        {
          title:"Backend",
          elements:["C++","Ada","C","BASH","SQL","Java","PHP"],
        }
      ]
    },
    {
      title:"Administration",
      subsections:[
        {
          title:"WEB",
          elements:["Drupal","Joomla"],
        },
        {
          title:"GNU/Linux",
          elements:["Archlinux","OpenSuse","Debian","Proxmox","Docker","Zabbix"],
        },
        {
          title:"Serveurs",
          elements:["Apache","Nginx","PostgresQL","MySql","NodeJS","CouchDB"]
        },
        {
          title:"Gestion de version",
          elements:["GIT","SVN"]
        },
      ]
    },
    {
      title:"Humaines",
      elements:["Gestion de projet","Autonome","Travail d'équipe"]
    }
  ],
  languages:[
    {
      title:"Français",
      level:"Langue maternelle"
    },
    {
      title:"Anglais",
      level:"Bon écrit/parlé"
    },
    {
      title:"Espagnole",
      level:"En cours d'apprentissage"
    }
  ],
  experiences:[
    {
      duration:"1.5 ans",
      from:"2016",
      to:"Présent",
      title:"Voyage",
      description:"Voyage autour du monde, en vélo, backpack, bus et voiture.",
      abilities:["Autonomie","Débrouillardise","Espagnol","Anglais"]
    },
    {
      duration:"2 ans",
      from:"2014",
      to:"2016",
      title:"Transports publics de la région lausannoise SA / Développeur",
      description:"Travail au sein de l'équipe informatique pour la partie information voyageur. Logiciel open-source spécialisé dans la gestion d'horaire en C++/SQL pour le backend, et travail avec des intervenants externes pour le développement du site web, des paneaux d'affichages aux arrêts, dans les bus et sur l'application mobile. Au cours de ce mandat la plateforme embarquée dans les bus a été refaite afin d'être plus maintenable et flexible.",
      abilities:["Gestion de projet","C++","Angular","Web","CouchDB","OpenSuse","Docker","GIT","Travail d'équipe","Zabbix"],
      contact:{
        name:"BEAUSSAULT Stéphane",
        email:"beaussault.stephane@t-l.ch",
        phone:"+41 21 621 04 90"
      }
    },
    {
      duration:"1 an",
      from:"2013",
      to:"2014",
      title:"Policlinique Médicale Universitaire / Civiliste",
      description:"Travail varié, création et administration d'un système de serveurs Web virtuels pour les besoins du service informatique. Travail sur le CMS Allegro pour les RH. Création d'un site web mobile en Drupal.",
      abilities:["Proxmox","Apache","Allegro","Zabbix","Observium","Drupal","Joomla","Web","MySQL","Debian"]
    },
    {
      duration:"7 mois",
      from:"2012",
      to:"2013",
      title:"Compassion Suisse / Civiliste",
      description:"Dans une petite équipe qu'est la branche suisse de Compassion International, le travail consiste aussi bien au développement en Windev de l'application principale utilisée dans l'entreprise que la mise en place et gestion de serveurs physiques et virtuels.",
      abilities:["Windows 7","Windows Server 2008","Windev","ESXi","Debian","Archlinux"]
    },
    {
      duration:"1.5 ans",
      from:"2011",
      to:"2013",
      title:"HEIG-VD / Ingénieur assistant",
      description:"Création d'un logiciel médicale en Qt/C++, de l'écriture de la spécification avec les membres du corps médical impliqué jusqu'à une implémentation en version alpha utilisable. Ce projet continue sous le nom d'Ezechiel.",
      abilities:["Gestion de projet","C++","Qt","XML","SQL"]
    }
  ],
  loisirs:[
    {
      title:"Sports",
      elements:["Escalade","Cyclisme","Taekwondo","Badminton"]
    },
    {
      title:"Projets",
      elements:["Permapp","Blog de voyage"]
    }
  ],
  footer:{
    title:"CV fait en Angular 2",
    links:[
      {
        title:"Source",
        url:"https://github.com/nahili/cv"
      },
      {
        title:"Version HTML",
        url:"https://github.com/nahili/cv/master/cv.html"
      },
      {
        title:"Version PDF",
        url:"https://github.com/nahili/cv/master/cv.pdf"
      }
    ]
  }
};
