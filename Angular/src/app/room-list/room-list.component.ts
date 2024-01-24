import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Component, Injectable, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './room-list.component.html',
  styleUrl: 'room-list.component.css'
})
@Injectable()
export class RoomListComponent implements OnInit {

  declare rooms: Observable<Room[]>;
  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.rooms=this.roomService.getRoomsList();
  }

  deleteRoom(id:number)
  {
    window.location.reload();
    this.roomService.deleteRoom(id).subscribe({
      next: (data) => {console.log(data);},
      error: (error) => {console.log(error)},
      complete: () => {}});
  }

  roomDetails(id:number)
  {
    this.router.navigate(['details', id]);
  }

  updateRoom(id:number)
  {
    this.router.navigate(['update', id])
    this.reloadData();
  }

}
