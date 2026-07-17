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
      name: 'HeRMeS: The Health Evaluation & Monitoring System',
      img:'assets/img/hermes-logo.png',
      desc: "The Health Evaluation & Monitoring System (HeRMeS) is an automated, defensive clinical data processing and semantic reporting pipeline. HeRMeS transforms unstructured or loosely structured machine-friendly data formats (.csv) into comprehensive, context-enriched clinical pre-visit reports designed for healthcare professionals.\nRather than acting as a naive prompt wrapper, HeRMeS safely ingests patient vitals, verifies semantic domain boundaries at system's edge, aligns fragmented hospital schemas with standardized medical ontologies, and injects validated clinical guidelines through a specialized Retrieval-Augmented Generation (RAG) architecture.",
      link: 'https://github.com/MiguelPadillaR/hermes'
    },
    { 
      name: 'AgrIA: The Agricultural Imaging Assitant',
      img:'assets/img/hermes-logo.png',
      desc: "Developed as part of a project from KHAOS Research Group, the Agricultural Imaging Assistant is an integrated image analysis and intelligent chat tool that specializes in agricultural satellite image classification. Designed to assist farmers and landowners, AgrIA facilitates crop valuation and provides a report that helps them qualify for various European Union eco-scheme aids within the framework of the Common Agricultural Policy (CAP). It is currently only applicalbe to Spain's national territory and fields, but allows modification to adapt to other EU member states.\nIt leverages an Angular-based frontend and a FastAPI Python server logic along with access to a fine-tuned locally deployed LLM and a Super-Resolution module for improved image visualization.",
      link: 'https://khaos.uma.es/'
    },
    { 
      name: 'PINETool: Picasso Integrated-Network Expression Tool',
      img:'assets/img/PINETool-logo.png',
      desc: "The Picasso Integrated-Network Expression Tool is the author's final degree project commissioned by the Molecular Biology and Biotechnology (BIO-114) research group) research group at Universidad de Málaga. It serves as a tool to explore customized genomic databases with ease to retieve data. It uses the NCBI CLI and the most valuable resource of the Super Computation and Bio-Innovation center: Picasso.",
      link: 'https://github.com/MiguelPadillaR/PINETool'
    },
    { 
      name: 'C-PRX: Centers in Proximity',
      img:'assets/img/CPRX-logo.png',
      desc: "Started during and internship and unfinished because of time constraints, the Center in Proximity tool (C-PRX) was designed to relieve medical personnel's workload by automatically assigning a patient to the nearest, most suitable and available healthcare center for their medical imaging needs.",
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

  public experiences = [
    { 
      name: 'Volunteering', 
      img:'',
      desc:"",
      link: ''
    },
    { 
      name: 'Volunteering', 
      img:'',
      desc:"",
      link: ''
    },
  ]

}
