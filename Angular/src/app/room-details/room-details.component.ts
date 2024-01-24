import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit {
  id!:number
  room!:Room

  constructor(private roomService:RoomService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe({
      next: (data) => {console.log(data);
      this.room = data},
      complete: () => {}});
  }
  list(){
    this.router.navigate(['/rooms']);
  }
}
