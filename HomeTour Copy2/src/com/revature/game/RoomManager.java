package com.revature.game;

import com.revature.fixtures.Room;

public class RoomManager {
	Room startingRoom; //the room a player should start in
	Room[] allRooms = new Room[4]; //all the rooms in the house
	//RoomManager rm = new RoomManager();
	
	
	public void init() { //instantiates all our room objects, link them together as exits, and designate a starting Room.
				
		Room lvRoom = new Room("living room", "lounge area, entry room into the home", "an open living room entered from the south. large leaather couch set, large flat screen tv, 4 large pictures on each wall, a coffee table. " + 
		"The living room is connected to the kitchen in the western direction. The Bedroom is to the north of the living room. " + "\n");
		Room bthRoom = new Room("bath room", "Rest-room: contains the shower, toilet, sink and tub", "Arguably the second most important room in the house. The kitchen is in the southern direction. The bedroom is in the eastern direction.");
		Room kitRoom = new Room("kitchen ", "Room for food preparation, storage, and consumption.", "The life essential room, food and water is found here. the living room is in the eastern direction, the bathroom is in the northern direction and the second entry to/exit from the home is in the western direction.");
		Room bedRoom = new Room("bed room", "Room of solitude, rest and relaxation.", "A secluded,corner room in the house. The living room and home entry point is to the south. The bathroom is in the western direction.");
		
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
	bedRoom.setLeftExit(bthRoom);
	bedRoom.setSouthExit(lvRoom); 
	
	}


	public Room getStartingRoom() {
		return startingRoom;
	}


	public void setStartingRoom(Room startingRoom) {
		this.startingRoom = startingRoom;
	}
	
	
	
}
