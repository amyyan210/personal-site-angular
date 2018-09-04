import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../app/app.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  const projects = [
    {
      name: 'Inspiration Camps',
      site: 'https://www.inspirationcamps.org',
      img: '../../src/assets/img/inspiration.png',
      type: 'Tech'
    },
    {
      name: 'Remindr',
      site: 'http://remindr.life',
      img: '../../src/assets/img/remindr.png',
      github: 'https://github.com/SweetJandy/Remindr',
      type: 'Tech'
    },
    {
      name: 'Spooklist',
      img: '../../src/assets/img/spooklist.png',
      github: 'https://github.com/brauly/adlister',
      type: 'Tech'
    },
    {
      name: 'Phone Book',
      site: '../phone-book.jar',
      img: '../../src/assets/img/phone-book.png',
      github: 'https://github.com/amyyan210/phone-book',
      special: true,
      type: 'Tech'
    },
    {
      name: 'Movie Database',
      img: '../../src/assets/img/movies.jpg',
      github: 'https://github.com/movie-api/bramy',
      type: 'Tech'
    },
    {
      name: 'Weather Forecast',
      site: '',
      img: '../assets/img/weather.jpg',
      github: 'https://github.com/PairCoding/Amy_Edward/tree/weather-api',
      type: 'Tech'
    },
    {
      name: 'Calculator',
      site: '',
      img: '../assets/img/calculator.png',
      github: 'https://github.com/calculator-project/calculator-project',
      type: 'Tech'
    },
    {
      name: 'Thesis',
      site: 'https://uh-ir.tdl.org/uh-ir/bitstream/handle/10657/1150/YANAWAY-THESIS-2015.pdf?sequence=1&isAllowed=y',
      img: '../assets/img/thesis.png',
      type: 'Other'
    },
    {
      name: 'Variations',
      site: 'https://youtu.be/VjbkGdkpm4w',
      img: '../assets/img/variations.png',
      type: 'Other'
    },
    {
      name: 'Arrangement',
      site: 'https://youtu.be/9DvNEo_X-7A',
      img: '../assets/img/saudades.png',
      type: 'Other'
    }
  ];

  ngOnInit() {
  }

}
