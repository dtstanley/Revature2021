package com.revature.fixtures;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/*
 * A Room in the house. It will extend fixtures.Fixture, and so will inherit the descriptive properties.
 */
public class Room extends Fixture{
	
	//Exits for each specified
	//public Room[] exits = new Room[4];
	private Map<String, Room> exits = new HashMap<String, Room>();
	
//	Arrays[] Room;
	
	public Room(){
		super("name", "shortDescription", "longDescription");
	}
	
	public Room(String name) {
		this.name = name;
	}

	public Room(String name, String shortDescription, String longDescription){
		super(name, shortDescription, longDescription);
	//	this.exits = new Room[4]; //size is your choice
		
	}
	
	//getters
	
	public Map<String, Room> getExits(){
	return exits;	
	}
	
	public String getName() {
		return this.name;
	}
	
//	public Room getLeftExit() {
	public Room getRmExit(String direction) {
//		return exits[3];
		return exits.get(direction);
	}
	
/*	public Room getRightExit() {
		return exits[1];
	}
	
	public Room getNorthExit() {
		return exits[0];
	}
	
	public Room getSouthExit() {
		return exits[2];
	}								*/
	
	//setters
	
	public void setRmExit(String key, Room exit) {
		exits.put(key, exit);
	}
/*	public void setLeftExit(Room exit) {
		exits[3] = exit;
	}
	
	public void setRightExit(Room exit) {
		exits[1] = exit;
	}
	
	public void setNorthExit(Room exit) {
		exits[0] = exit;
	}
	
	public void setSouthExit(Room exit) {
		exits[2] = exit;
	}											*/
	
	public Room getExit(String direction) {
		return null;
	}

//	@Override
//	public String toString() {
//		return "Room [exits=" + Arrays.toString(exits) + ", Room=" + Arrays.toString(Room) + "]";
//	}
	
	@Override
	public String toString() {
		return "Room [name = the " + name + "]";
	}
	
	public void printExits() {
		System.out.println("Exits: \n");
		for(String key: exits.keySet()) {
			Room value=exits.get(key);
			System.out.println(key + ":" + value.getName());
		}
	}
	
}
