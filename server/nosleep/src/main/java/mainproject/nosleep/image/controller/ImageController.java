package mainproject.nosleep.image.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.dto.ImageRequestDto;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.image.mapper.ImageMapper;
import mainproject.nosleep.image.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/temp/image")
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;
    private final ImageMapper mapper;

    @PostMapping("")
    public ResponseEntity<?> postImages(@RequestBody ImageRequestDto.Post requestBody) {


        List<Image> imageList = mapper.imagePostToImageList(requestBody);
        List<Image> postedImageList = imageService.createImages(imageList);


        //
        return new ResponseEntity<>(HttpStatus.OK);
    }



    //@DeleteMapping("")


}
