import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
	selector: 'app-create-room',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './create-room.component.html',
	styleUrl: './create-room.component.css'
})
export class CreateRoomComponent implements OnInit {
	roomlist!: RoomListComponent;
	room: Room = new Room();
	submitted = false;

	constructor(
		private roomService: RoomService, private router: Router
	) { }

	ngOnInit() { }

	newRoom(): void {
		this.roomlist = new RoomListComponent(this.roomService, this.router);
        this.roomlist.reloadData();
		window.location.assign("/rooms")
		this.submitted = false;
		this.room = new Room()
	}

	save() {
		this.roomService.createRoom(this.room)
			.subscribe({
				next: (data) => { console.log(data); },
				error: (error) => { console.log(error) },
				complete: () => { }
			});
		this.room = new Room();
		this.gotoList();
	}

	onSubmit() {
		this.submitted = true;
		this.save();
	}

	gotoList() {
		this.router.navigate(['/rooms']);
	}

}
