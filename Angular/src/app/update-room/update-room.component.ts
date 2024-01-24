import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { error } from 'node:console';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
  selector: 'app-update-room',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-room.component.html',
  styleUrl: './update-room.component.css'
})
export class UpdateRoomComponent implements OnInit {
  roomlist!: RoomListComponent;
  
  declare id:number;
  declare room:Room;
  submitted=false;
  
  constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService) {}
  ngOnInit(): void 
  {
    this.room=new Room();
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
    .subscribe({
      next: (data) => {console.log(data);},
      error: (error) => {console.log(error)},
      complete: () => {}});
  }

  updateRoom()
  {
    this.roomlist = new RoomListComponent(this.roomService, this.router);
    this.roomlist.reloadData();
    this.roomService.updateRoom(this.id, this.room).subscribe({
      next: (data) => {console.log(data);},
      error: (error) => {console.log(error)},
      complete: () => {}});
    this.room= new Room();
    this.goToList();
  }

  async onSubmit()
  {
    await window.location.reload();
    this.updateRoom();
  }

  goToList()
  {
    this.router.navigate(['/rooms'])
  }
}
