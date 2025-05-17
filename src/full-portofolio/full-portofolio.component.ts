import { Component } from '@angular/core';

@Component({
  selector: 'app-full-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './full-portofolio.component.html',
  styleUrl: './full-portofolio.component.css'
})
export class FullPortofolioComponent {
  public skills = {
    soft: ["Public speaking", "Team worker", "Communicative", "Project and team management", "Conflict management and resolution", "Accountability and reporting",],
    tech: ["Agile Methodologies", "Frontend/Backend development", "Data Analysis", "Big Data processing", "AI/ML techiniques", "Collaborative tools"]
  };
  
  public stacks = [
    { name: 'Angular', icon: 'assets/icons/angular.svg', link: 'https://angular.dev' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg', link: 'https://www.typescriptlang.org' },
    { name: 'HTML5', icon: 'assets/icons/html5.png', link: 'https://www.w3schools.com/html/' },
    { name: 'CSS3', icon: 'assets/icons/css3.png', link: 'https://www.w3schools.com/css/' },
    { name: 'Git', icon: 'assets/icons/git.svg', link: 'https://github.com' },
    { name: 'Linux', icon: 'assets/icons/linux.svg', link: 'https://www.linux.org' },
    { name: 'Python', icon: 'assets/icons/python.svg', link: 'https://www.python.org' },
    { name: 'Java', icon: 'assets/icons/java.svg', link: 'https://www.java.com/es/' }
  ];

  public personalProjects = [
    { 
      name: 'PINETool',
      img:'assets/img/PINETool-logo.png',
      desc: "The Picasso Integrated-Network Expression Tool is the author's final degree project commissioned by the Molecular Biology and Biotechnology (BIO-114) research group) research group at Universidad de Málaga. It serves as a tool to explore customized genomic databases with ease to retieve data. It uses the NCBI CLI and the most valuable resource of the Super Computation and Bio-Innovation center: Picasso.",
      link: 'https://github.com/MiguelPadillaR/PINETool'
    },
    { 
      name: 'C-PRX',
      img:'assets/img/CPRX-logo.png',
      desc: "Started during and internship and unfinished because of time constraints, the Center in Proximity tool (C-PRX) was designed to relieve medical personnel's workload by automatically assigning a patient to the nearest, most suitable and available healthcare center for their medical imaging needs.",
      link: ''
    },
  ]

  public volunteering = [
    { 
      name: 'Special Olympics Berlin 2023', 
      img:'',
      desc:"I assited athletes and representatives from all over the world during the week-long Special Olympics",
      link: 'https://www.specialolympics.org/what-we-do/sports-and-competition/world-games/special-olympics-world-games-berlin-2023#:~:text=The%20Special%20Olympics%20World%20Games%202023%20took%20place%20this%20summer,another%20in%2026%20different%20sports.'
    },
    { 
      name: 'FSY summer camps', 
      img:'',
      desc:"I have attended multiple times (2018-2024) to national For Strength of Youth (FSY) summer camps in many diverse roles. ",
      link: 'https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/about/youth?lang=eng'
    },
    { 
      name: 'Missionary service', 
      img:'',
      desc:"I served for two years (2016-2018) in Bolivia as a teaching missionary for the Church of Jesus Christ of Latter-Day Saints.",
      link: 'https://newsroom.churchofjesuschrist.org/topic/missionary-program#:~:text=The%20missionary%20effort%20is%20based,in%20the%20book%20of%20Acts).'
    },
  ]
}
