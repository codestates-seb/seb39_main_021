package mainproject.nosleep.image.entity;

import lombok.*;
import mainproject.nosleep.audit.Auditable;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.shop.entity.Shop;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Image extends Auditable {


    // Columns
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Type type;

    @Column
    private String url;


    // Mappings

    @ManyToOne
    private Review review;

    @ManyToOne
    private Shop shop;





    // ENUM 정의
    public enum Type {
        REVIEW("이용후기"),
        SHOP("사업장");
        @Getter
        private String type;

        Type(String type) { this.type = type; }
    }
}
