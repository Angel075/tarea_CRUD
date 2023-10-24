import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaboratorioDW';
  listaArray: ListaComponent[] = []; // Inicializa como un arreglo vacío

  selectedLista: ListaComponent = new ListaComponent();
  isEditMode: boolean = false; // Inicialmente no estamos en modo de edición

  openForEdit(item: ListaComponent) {
    if (!item.compraRealizada) {
      this.selectedLista = item;
      this.isEditMode = true; // Activar el modo de edición si no está bloqueado
    }
  }

  saveItem() {
    if (this.isEditMode) {
      // Lógica para editar un elemento
      const index = this.listaArray.findIndex((item) => item.id === this.selectedLista.id);
      if (index !== -1) {
        this.listaArray[index] = { ...this.selectedLista };
      }
      this.selectedLista = new ListaComponent();
      this.isEditMode = false; // Salir del modo de edición
    } else {
      // Lógica para agregar un nuevo elemento
      this.selectedLista.id = this.listaArray.length + 1;
      this.listaArray.push({ ...this.selectedLista });
      this.selectedLista = new ListaComponent(); // Limpiar el formulario después de agregar
    }
  }

  cancelEdit() {
    this.selectedLista = new ListaComponent();
    this.isEditMode = false; // Salir del modo de edición sin guardar cambios
  }

  deleteItem(item: ListaComponent) {
    if (!item.compraRealizada) {
      const index = this.listaArray.findIndex((element) => element === item);
      if (index !== -1) {
        this.listaArray.splice(index, 1);
      }
    }
    this.selectedLista = new ListaComponent();
    this.isEditMode = false; // Salir del modo de edición después de eliminar
  }
}
