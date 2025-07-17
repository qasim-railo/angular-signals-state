import { computed, Injectable, signal } from '@angular/core';


//  state interface
interface AppState {
  name: string;
  counter: number;
  todos: { id: string; text: string; completed: boolean }[];
  darkMode: boolean;
}
// Initial state
const initialState: AppState = {
  name: "Action",
  counter: 0,
  todos: [],
  darkMode: false
};


@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  private state = signal<AppState>(initialState);

  // Public computed signals (read-only)

  name = computed(() => this.state().name);
  counter = computed(() => this.state().counter);
  todos = computed(() => this.state().todos);
  darkMode = computed(() => this.state().darkMode);
  completedTodos = computed(() =>
    this.state().todos.filter(todo => todo.completed)
  );

  // State update methods
  increment() {
    this.state.update(state => ({
      ...state,
      counter: state.counter + 1,
      name: "Actions Plus"
    }));
  }

  decrement() {
    this.state.update(state => ({
      ...state,
      counter: state.counter - 1,
      name: "Actions Minus"
    }));
  }


  addTodo(text: string) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false
    };
    this.state.update(state => ({
      ...state,
      todos: [...state.todos, newTodo]
    }));
  }

  toggleTodo(id: string) {
    this.state.update(state => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  }

  toggleDarkMode() {
    this.state.update(state => ({
      ...state,
      darkMode: !state.darkMode
    }));
  }

  reset() {
    this.state.set(initialState);
  }
}