package com.shoppy.shoppy.api.item;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long>{

}
