import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  id: number = 0;
  nombre: string = '';
  cantidad: string = '';
  compraRealizada: boolean = false;
}
