import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  nombeLower: string = 'david';
  nombreUpper: string = 'DaViD';
  nombreCompleto: string = 'David renZO';

  fecha: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
