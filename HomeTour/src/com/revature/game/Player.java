package com.revature.game;

import com.revature.fixtures.Room;

public class Player {
	private Room currentRoom; //the room the player is currently occupying

	
	public Player() {}
	
	public Room getCurrentRoom() {
		return currentRoom;
	}
	
	public void setCurrentRoom(Room currentRoom) {
	this.currentRoom = currentRoom;
	}
}
