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

}
