import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { PartsComponent } from './parts/parts.component';
import { USER_CARS } from './user-cars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CarsComponent, PartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'car-storage-app';
  cars = USER_CARS;
  selectedCarId!: string;

  get selectedCar() {
    return this.cars.find((car) => car.id === this.selectedCarId)!;
  }

  onSelectCar(id: string) {
    console.log('Selected car with id '+ id);
    this.selectedCarId = id;
  }
}
