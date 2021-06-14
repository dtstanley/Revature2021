package com.revature.main;

import java.util.Scanner;

public class Converter {

	//Place a "static" scanner outside of main method
		static Scanner convScanner = new Scanner(System.in); 
		
	public static void main(String[] args) {
		
		int iValue = 0;
		Double tsps = 0.0;
		Double teaspns = 0.0;
		Double kilmi = 0.0;
		Double mi = 0.0;
		Double usgal = 0.0;
		Double impgal = 0.0;
		
	while(iValue != 4){
		System.out.println("Please select an option:");
		System.out.println("1. Cups to Teaspoons");
		System.out.println("2. Miles to kilometers");
		System.out.println("3. US Gallons to Imperial Gallons");
		System.out.println("4.Quit");
		System.out.println("");
		System.out.println("What is your selection?");
		
		 iValue = convScanner.nextInt();


		switch(iValue) {
		
		//If iValue = 1 perform cups conversion and print result
		case 1: 
			System.out.println("Converting cups to teaspons.\n");
			System.out.println("How many cups of a substance do you wish to convert to teaspoons? \n");
			
			tsps = convScanner.nextDouble();
			
			teaspns = 48.0 * tsps;
			
			System.out.println("Thank you.\n");
			System.out.println(tsps + " cups is equal to " + teaspns + " teaspoons.\n");
		
			
		break;
		
		//If iValue = 2 perform miles conversion and print result
		case 2: 
			System.out.println("Converting miles to kilometers.\n");
			
			System.out.println("How many miles of distance do you wish to convert to kilometers? \n");
			
			mi = convScanner.nextDouble();
			
			kilmi = 1.6 * mi;
			
			System.out.println("Thank you.\n");
			System.out.println(mi + " miles is equal to " + kilmi + " kilometers.\n");
		
			break;
			
		//If iValue = 3 perform gallons conversion and print result
		case 3: 
			System.out.println("Converting US gallons to Imperial gallons. \n");
			System.out.println("How many gallons (U.S.) of a substance do you wish to convert to Imperial gallons? \n");
			
			usgal = convScanner.nextDouble();
			
			impgal = 1.20095 * usgal;
			
			System.out.println("Thank you.\n");
			System.out.println(usgal + " US gallons is equal to " + impgal + " Imperial gallons.\n");
		
			
			break;
			
		default: 
			System.out.println("You've decided to end this activity. The default case ran. " + "\n" );
			break;
			
//		String convLine = convScanner.nextLine();

		}
		}

	System.out.println("Conversions are complete. Thank you and goodbye. ");

	
		convScanner.close();//close scanner before closing main method
	}

	
}
