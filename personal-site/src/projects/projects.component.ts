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
      img: '../../src/assets/img/inspiration.png'
    },
    {
      name: 'Remindr',
      site: 'http://remindr.life',
      img: '../../src/assets/img/remindr.png',
      github: 'https://github.com/SweetJandy/Remindr'
    },
    {
      name: 'Spooklist',
      img: '../../src/assets/img/spooklist.png',
      github: 'https://github.com/brauly/adlister'
    },
    {
      name: 'Phone Book',
      site: '../phone-book.jar',
      img: '../../src/assets/img/phone-book.png',
      github: 'https://github.com/amyyan210/phone-book',
      special: '<p class="text-center" id="run-instructions">*Download and run <code>java -jar phone-book.jar</code> in terminal</p>'
    },
    {
      name: 'Movie Database',
      img: '../../src/assets/img/movies.jpg',
      github: 'https://github.com/movie-api/bramy'
    },
    {
      name: 'Weather Forecast',
      site: '',
      img: '../assets/img/weather.jpg',
      github: 'https://github.com/PairCoding/Amy_Edward/tree/weather-api'
    },
    {
      name: 'Calculator',
      site: '',
      img: '../assets/img/calculator.png',
      github: 'https://github.com/calculator-project/calculator-project'
    },
    {
      name: 'Thesis',
      site: 'https://uh-ir.tdl.org/uh-ir/bitstream/handle/10657/1150/YANAWAY-THESIS-2015.pdf?sequence=1&isAllowed=y',
      img: '../assets/img/thesis.png'
    },
    {
      name: 'Variations',
      site: 'https://youtu.be/VjbkGdkpm4w',
      img: '../assets/img/variations.png'
    },
    {
      name: 'Arrangement',
      site: 'https://youtu.be/9DvNEo_X-7A',
      img: '../assets/img/saudades.png'
    }
  ];

  ngOnInit() {
  }

}
