package com.shoppy.shoppy.api.item;

//https://dzone.com/articles/spring-boot-2-restful-api-documentation-with-swagg

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value="/api/items", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class ItemsController {

	@Autowired
	private ItemRepository itemRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	List<Item> getAll() {
		return (List<Item>) itemRepository.findAll();
	}
	
	@RequestMapping(value="{id}", method = RequestMethod.GET)
	Item getById(@PathVariable("id") Item item) {
		return item;
	}
	
	@RequestMapping(value="{id}/price", method = RequestMethod.GET)
	float getPrice(@PathVariable("id") Item item) {
		return item.getPrice();
	}
	
	@RequestMapping(value="{id}", method = RequestMethod.DELETE)
	void delete(@PathVariable("id") Item item) {
		itemRepository.delete(item);
	}
	
	@RequestMapping(method = RequestMethod.POST, headers = {"Content-type=application/json"})
	void create(@RequestBody Item item) {
		itemRepository.save(item);
	}
}
