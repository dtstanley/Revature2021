package com.revature.game;

import java.util.Scanner;

import com.revature.fixtures.Room;

public class Main {
	protected static Scanner scanr = new Scanner(System.in);
	
	public static void main(String[] args) {
		//set-up roooms
		//set-up player
		
		RoomManager rm = new RoomManager();
		Player player = new Player();
		rm.init();
		
		Room currentRoom = rm.startingRoom;
		
		player.setCurrentRoom(rm.getStartingRoom());
		
		printRoom(player);
		
		boolean quit = false;
		
		while(!quit) {
			System.out.println("You are in: " + currentRoom + "\n");
			
			System.out.println("Where do you want to go?: (Left, Right, North, or South?) "
					+ "\nOr do you want to end this tour?\n");
			String input = scanr.next();

			System.out.println("Go " + input + "\n");
			
			if (input.trim().toLowerCase().equals("quit")) {
				quit = true;
				System.out.println("Main-37: Thank you and goodbye.\n");
				continue;

			}
			System.out.println("Reached line Main-41\n");

			Room nextRoom = null;
			if(input.trim().toLowerCase().equals("left")) {
				nextRoom = currentRoom.getLeftExit();
			}else if (input.trim().toLowerCase().equals("right")) {
					nextRoom = currentRoom.getRightExit();
			}else if (input.trim().toLowerCase().equals("north")) {
						nextRoom = currentRoom.getNorthExit();
			}else if (input.trim().toLowerCase().equals("south")) {
							nextRoom = currentRoom.getSouthExit();
				}
			if(nextRoom != null) {
				currentRoom = nextRoom;
				}else if (nextRoom == null) {
					System.out.println("Oops! There's a wall there. Please, choose another direction.\n");
				}
			}
		
			
			
			scanr.close();
		}

	//prompt for the player's current room
	private static void printRoom(Player player) {
		System.out.println("The player is in the " + player.getCurrentRoom().getName() + "\n");
//		System.out.println("Which room are you in currently (lvRoom, kitRoom, bedRoom, or bathRoom)? ");
//		String playerLoc = scanr.next();
//		System.out.println("The player is in the " + playerLoc + "\n");
		
	}
		
	public String[] collectInput(){
		String[] userInput = scanr.nextLine().split(" ");
		return userInput;
	}
	private static void parse(String[] command, Player player) {
		
	}
	
}
