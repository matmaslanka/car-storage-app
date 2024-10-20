import { Component, Input } from '@angular/core';

interface Part {
  id: string;
  carId: string;
  name: string;
  description: string;
  cost: string;
}

@Component({
  selector: 'app-part',
  standalone: true,
  imports: [],
  templateUrl: './part.component.html',
  styleUrl: './part.component.css'
})
export class PartComponent {
  @Input({required: true}) part!: Part;
}



  