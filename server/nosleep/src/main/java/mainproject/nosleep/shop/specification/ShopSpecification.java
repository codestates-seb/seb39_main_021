package mainproject.nosleep.shop.specification;

import mainproject.nosleep.shop.entity.Category;
import mainproject.nosleep.shop.entity.Shop;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ShopSpecification {


    public static Specification<Shop> search(Map<String, Object> filter){
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            filter.forEach((key, value) ->{

                switch (key){
                    case "category":
                        Category category = (Category) value;
                        Predicate categoryPredicate = cb.equal(root.get(key), category);
                        predicates.add(categoryPredicate);
                        break;
                    case "cityId":
                        String cityValue = (String)value;
                        Predicate cityPredicate = cb.equal(root.get(key), cityValue);
                        predicates.add(cityPredicate);
                        break;
                    case "areaId":
                        String areaValue = (String)value;
                        Predicate areaPredicate = cb.equal(root.get(key), areaValue);
                        predicates.add(areaPredicate);
                        break;
                }
            });
            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }



}
