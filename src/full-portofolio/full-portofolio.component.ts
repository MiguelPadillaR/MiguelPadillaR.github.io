import { Component } from '@angular/core';

@Component({
  selector: 'app-full-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './full-portofolio.component.html',
  styleUrl: './full-portofolio.component.css'
})
export class FullPortofolioComponent {

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
      link: ''
    },
    { 
      name: 'C-PRX',
      img:'assets/img/CPRX-logo.png',
      desc: "Started during and internship and unfinished because of time constraints, the Proximity Center tool (C-PRX from its initials in Spanish) was design to relieve medical personnel's workload by automatically assigning a patient to the nearest, most suitable and available healthcare center for their medical imaging needs.",
      link: ''
    },
    { 
      name: 'Misc#1',
      img:'',
      desc: 'Some desc',
      link: ''
    },
    { 
      name: 'Misc#2',
      img:'',
      desc: 'Some desc',
      link: ''
    },
  ]

}
