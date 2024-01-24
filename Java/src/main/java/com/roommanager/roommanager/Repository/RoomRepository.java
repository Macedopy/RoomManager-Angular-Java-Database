package com.roommanager.roommanager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.roommanager.roommanager.Model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {
    
}
