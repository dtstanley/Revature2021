package com.revature.fixtures;

import java.util.Arrays;

/*
 * A Room in the house. It will extend fixtures.Fixture, and so will inherit the descriptive properties.
 */
public class Room extends Fixture{
	
	//Exits for each specified
	public Room[] exits = new Room[4];
	
	Arrays[] Room;
	
	public Room(){}
	
	public Room(String name) {
		this.name = name;
	}

	public Room(String name, String shortDescription, String longDescription){
		super(name, shortDescription, longDescription);
		this.exits = new Room[4]; //size is your choice
		
	}
	
	public Room[] getLeftExit() {
		return exits[3];
	}
	
	public Room[] getRightExit() {
		return exits[1];
	}
	
	public Room[] getNorthExit() {
		return exits[0];
	}
	
	public Room[] getSouthExit() {
		return exits[2];
	}
	
	public void setLeftExit(Room exit) {
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
	}
	
	public Room getExit(String direction) {
		
	}
	
	@Override
	public String toString() {
		return "Room [name= " + name + "]";
	}
}
