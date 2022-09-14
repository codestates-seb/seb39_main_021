package mainproject.nosleep.store.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/store")
public class StoreController {

    @PostMapping
    public ResponseEntity<?> postStore(){
        return null;
    }

    @PatchMapping
    public ResponseEntity<?> patchStore(){
        return null;
    }

    @GetMapping("/{StoreId}")
    public ResponseEntity<?> getDetailStore(){
        return null;
    }

    //현재 위치 기반으로 근처 Store pagination 응답
    @GetMapping()
    public List<?> getListStore(){
        return null;
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteStore(){
        return null;
    }
}
