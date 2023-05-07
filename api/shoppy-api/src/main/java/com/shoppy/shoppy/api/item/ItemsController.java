package com.shoppy.shoppy.api.item;

//https://dzone.com/articles/spring-boot-2-restful-api-documentation-with-swagg

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
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
	
	@PreAuthorize("hasAuthority('SCOPE_TEST')")
	@RequestMapping(value="{id}", method = RequestMethod.GET)
	Item getById(@PathVariable("id") Item item) {
		return item;
	}
	
	@PreAuthorize("hasAuthority('SCOPE_TEST')")
	@RequestMapping(value="{id}/price", method = RequestMethod.GET)
	float getPrice(@PathVariable("id") Item item) {
		return item.getPrice();
	}
	
	@PreAuthorize("hasAuthority('SCOPE_TEST')")
	@RequestMapping(value="{id}", method = RequestMethod.DELETE)
	void delete(@PathVariable("id") Item item) {
		itemRepository.delete(item);
	}
	
	@PreAuthorize("hasAuthority('SCOPE_TEST')")
	@RequestMapping(method = RequestMethod.POST, headers = {"Content-type=application/json"})
	void create(@RequestBody Item item) {
		itemRepository.save(item);
	}
}
