import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Without signals
  // selectedUser = DUMMY_USERS[randomIndex];

  // get userAvatar(): string {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser(): void {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  // With signals
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
