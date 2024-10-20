import { Component, Input } from '@angular/core';
import { PartComponent } from "./part/part.component";
import { CARS_PARTS } from './cars-parts';

@Component({
  selector: 'app-parts',
  standalone: true,
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css',
  imports: [PartComponent]
})
export class PartsComponent {
  @Input({required: true}) carId!: string;
  @Input({required: true}) name!: string;
  parts = CARS_PARTS

  get selectedCarParts() {
    return this.parts.filter((part) => part.carId === this.carId);
  }

}
