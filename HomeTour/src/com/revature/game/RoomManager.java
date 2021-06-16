package com.revature.game;

import com.revature.fixtures.Room;

public class RoomManager {
	Room startingRoom; //the room a player should start in
	Room[] allRooms = new Room[4]; //all the rooms in the house
	
	
	public void init() {
		
		Room lvRoom = new Room("living room", "entry room into the home", "an open living room entered from the south. large leaather cuch set, large flat screen tv, 4 large pictures on each wall, a coffee table. " + "\n");
		Room bthRoom = new Room("bath room", "shortDesc", "longDescr");
		Room kitRoom = new Room("kitchen ", "shortDesc", "longDescr");
		Room bedRoom = new Room("bed room", "shortDesc", "longDescr");
		
		startingRoom = lvRoom;
		
		Room[] allRooms = new Room[4];
		allRooms[0] = lvRoom;
		allRooms[1] = kitRoom;
		allRooms[2] = bthRoom;
		allRooms[3] = bedRoom;
	
	lvRoom.setNorthExit(bedRoom);
	lvRoom.setRightExit(null);
	lvRoom.setLeftExit(kitRoom);
	lvRoom.setSouthExit(null); //could make this the front door if I add room called front-door
	
	kitRoom.setNorthExit(bthRoom);
	kitRoom.setRightExit(lvRoom);
	kitRoom.setLeftExit(null);
	kitRoom.setSouthExit(null); 
	
	bthRoom.setNorthExit(null);
	bthRoom.setRightExit(bedRoom);
	bthRoom.setLeftExit(null);
	bthRoom.setSouthExit(kitRoom); 
	
	bedRoom.setNorthExit(null);
	bedRoom.setRightExit(null);
	bedRoom.setLeftExit(kitRoom);
	bedRoom.setSouthExit(null); 
	
	}
	
	
	
}
