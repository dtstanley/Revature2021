package com.revature.fixtures;

public class Fixture {
	
	String name; //a short name/title for the fixture
	String shortDescription; //a one-sentence-long description of a fixture, used to briefly mention the fixture
	
	//a paragraph-long description of the thing, displayed when the player investigates the fixture thoroughly (looks at it, or enters a room)
	String longDescription;
	
	public Fixture() {
		
	}
	
	public Fixture(String name, String shortDescription, String longDescription) {
		this.name = name;
		this.shortDescription = shortDescription;
		this.longDescription = longDescription;
		
	}

	//getters
	public String getName() {
		return name;
	}
	
	public String getShortDescription() {
		return shortDescription;
	}
	
	public String getLongDescription() {
		return longDescription;
	}
	
//setters
	public void setName(String name) {
		this.name = name;
	}



	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}


	public void setLongDescription(String longDescription) {
		this.longDescription = longDescription;
	}

}
