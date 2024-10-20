import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Car {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-cars',
  standalone: true,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  @Input({required: true}) car!: Car;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/cars/' + this.car.avatar;
  }

  onSelectCar() {
    this.select.emit(this.car.id);
  }
}
