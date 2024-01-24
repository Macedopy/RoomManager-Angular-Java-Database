import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        CommonModule,
        CreateRoomComponent,
        UpdateRoomComponent,
        RoomDetailsComponent,
        RoomListComponent,
        RoomListComponent,
        RouterLink, RouterLinkActive
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'client-room';
}
