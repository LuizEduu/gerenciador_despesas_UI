import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars = [
    {
      marca: 'Honda',
      modelo: 'Civic',
      ano: '2008',
      motor: '2.0'
    },
    {
      marca: 'Wolksvagen',
      modelo: 'Gol',
      ano: '2006',
      motor: '1.0'
    },
    {
      marca: 'Wolksvagen',
      modelo: 'Fox',
      ano: '2010',
      motor: '1.6'
    },
    {
      marca: 'Ford',
      modelo: 'Uno',
      ano: '2015',
      motor: '1.4'
    }
  ];

}
