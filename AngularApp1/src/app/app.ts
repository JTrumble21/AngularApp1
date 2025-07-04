import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationList } from './reservationList';
import { ReservationItem } from './reservationItem';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterOutlet, FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule
  ]
})
export class App {
  protected title = 'reservationsmanager';

  private list = new ReservationList("Conservation Area", [
    new ReservationItem("Maple View - 9:00 AM to 12:00 PM"),
    new ReservationItem("Maple View - 12:00 PM to 3:00 PM"),
    new ReservationItem("Maple View - 3:00 PM to 6:00 PM"),

    new ReservationItem("Sunnyside Trail - 9:00 AM to 12:00 PM"),
    new ReservationItem("Sunnyside Trail - 12:00 PM to 3:00 PM"),
    new ReservationItem("Sunnyside Trail - 3:00 PM to 6:00 PM"),

    new ReservationItem("Whispering Pines Reserve - 9:00 AM to 12:00 PM"),
    new ReservationItem("Whispering Pines Reserve - 12:00 PM to 3:00 PM"),
    new ReservationItem("Whispering Pines Reserve- 3:00 PM to 6:00 PM"),

    new ReservationItem("Mikinaak Hollow - 9:00 AM to 12:00 PM"),
    new ReservationItem("Mikinaak Hollow - 12:00 PM to 3:00 PM"),
    new ReservationItem("Mikinaak Hollow - 3:00 PM to 6:00 PM"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => item.book).length;
  }

  get items(): readonly ReservationItem[] {
        return this.list.items.filter(item => this.showComplete || !item.book);
  }

  addItem(newItem: string) {
    if (newItem != "") {
    this.list.addItem(newItem);
   }
  }
  showComplete: boolean = false;
}