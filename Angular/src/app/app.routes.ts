import { RoomDetailsComponent } from './room-details/room-details.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'rooms', pathMatch: 'full' },
	{ path: 'rooms', component: RoomListComponent },
	{ path: 'add', component: CreateRoomComponent },
	{ path: 'update/:id', component: UpdateRoomComponent },
	{ path: 'details/:id', component: RoomDetailsComponent },
];
