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
    public ResponseEntity<?> postImages(@RequestBody ImageRequestDto.Post requestBody) {     // Image파일이 어떤식으로 서버로 전달되는가?
                                                                                             // 일단은 별도의 요청으로 업로드해서 S3에 업로드된 후에, 글작성 클릭시에는 DB에 등록만 한다고 가정

        List<Image> imageList = mapper.imagePostToImageList(requestBody);
        List<Image> postedImageList = imageService.createImages(imageList);


        //
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //@DeleteMapping("")


}
