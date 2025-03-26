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
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { name: 'HTML5', icon: 'assets/icons/html5.svg' },
    { name: 'CSS3', icon: 'assets/icons/css3.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Linux', icon: 'assets/icons/linux.svg' },
    { name: 'Python', icon: 'assets/icons/python.svg' }
  ];

}
