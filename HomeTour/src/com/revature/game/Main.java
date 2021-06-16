package com.revature.game;

import java.util.Scanner;

import com.revature.fixtures.Room;

public class Main {
	private static Scanner scanr = new Scanner(System.in);
	
	public static void main(String[] args) {
		//set-up roooms
		//set-up player
		
		RoomManager rm = new RoomManager();
		Player player = new Player();
		rm.init();
		
		Room currentRoom = rm.startingRoom;
		
		player.
		
		boolean quit = false;
		
		while(!quit) {
			System.out.println("You are in: " + currentRoom);
			
			System.out.println("Where do you want to go?: (Left, Right, North, or South?) "
					+ "\nOr do you want to end this tour?");
			String input = scanr.next();

			System.out.println("Go " + input + "\n");
			
			if (input.trim().toLowerCase().equals("quit")) {
				quit = true;
				continue;
			}
			Room nextRoom = null;
			if(input.equals("Left")) {
				nextRoom = currentRoom.getLeftExit();
			}else if (input.equals("Right")) {
					nextRoom = currentRoom.getRightExit();
			}else if (input.equals("North")) {
						nextRoom = currentRoom.getNorthExit();
			}else if (input.equals("South")) {
							nextRoom = currentRoom.getSouthExit();
				}
			if(nextRoom != null) {
				currentRoom = nextRoom;
			}
			}
			
			
			scanr.close();
		}
		
		
	
}
