import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // @Output() select = new EventEmitter();
  select = output<string>();

  get imagePath(): string{
    return "assets/users/" + this.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.id);
  }
}
