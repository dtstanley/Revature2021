package com.revature;

import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car car1 = new Car("Ford", "Focus", 2015);
		Car car2 = new Car("Nissan", "Rogue", 2020);
		Car car3 = new Car("Jeep", "Renegade", 2017);
		
		ArrayList<Car> Collection = new ArrayList<Car>();
		
		Collection.add(car1);
		Collection.add(car2);
		Collection.add(car3);
		
	}

}
