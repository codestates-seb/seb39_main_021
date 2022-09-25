package mainproject.nosleep.image.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.dto.ImageRequestDto;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.image.mapper.ImageMapper;
import mainproject.nosleep.image.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;
    private final ImageMapper mapper;

    @PostMapping("")
    public ResponseEntity<?> postImages(@RequestBody ImageRequestDto.Post requestBody) {


        List<Image> imageList = mapper.imagePostToImageList(requestBody);
        List<Image> postedImageList = imageService.createImageEntities(imageList);


        //
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles (@RequestParam("type") String type, @RequestPart(value = "file") List<MultipartFile> multipartFileList) {
        System.out.println("Entered ImageController");
        return new ResponseEntity<>(imageService.uploadImages(type, multipartFileList), HttpStatus.OK);
    }


    //@DeleteMapping("")


}
