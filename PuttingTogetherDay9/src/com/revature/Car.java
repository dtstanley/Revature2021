package com.revature;

public class Car implements Comparable<Car>{

	String make;
	String model;
	int year;
	
	
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub

	//}
	
	public Car (String make, String model, int year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	 
	public int compareTo(Car other) {
		return this.year - other.year;
	}

	

	public interface Comparable<T>{
		int comparareTo (T other);
	}
	
	
	@Override
	public String toString() {
		return "Car [make=" + make + ", model=" + model + ", year=" + year + "]";
	}
	
	
	
	//getters
	public String getMake() {
		return make;
	}

	public String getModel() {
		return model;
	}
	
	public int getYear() {
		return year;
	}
	
	//setters
	public void setMake(String make) {
		this.make = make;
	}


	public void setModel(String model) {
		this.model = model;
	}

	public void setYear(int year) {
		this.year = year;
	}
}
