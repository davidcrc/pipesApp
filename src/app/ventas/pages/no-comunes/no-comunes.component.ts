import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Pedro';
  genero: string = 'femenino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Pepe'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  constructor() {}
}
