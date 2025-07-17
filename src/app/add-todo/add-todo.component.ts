import { Component, inject } from '@angular/core';
import { StateService } from '../state.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
stateService = inject(StateService);
  newTodo = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.stateService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }
}
