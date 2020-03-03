package com.shoppy.shoppy.api.item;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="items")
public class Item {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private float price;
	
	protected Item() {
		
	}
	
	public Item(String name, float price) {
		super();
		this.name = name;
		this.price = price;
	}
	
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public float getPrice() {
		return price;
	}
	
	
}
