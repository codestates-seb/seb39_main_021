package mainproject.nosleep.image.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.dto.ImageRequestDto;
import mainproject.nosleep.image.dto.ImageResponseDto;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.image.mapper.ImageMapper;
import mainproject.nosleep.image.service.ImageService;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.service.ReviewService;
import org.apache.coyote.Response;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    private final ReviewService reviewService;
    private final ImageMapper mapper;

//    @PostMapping("")
//    public ResponseEntity<?> postImages(@RequestBody ImageRequestDto.Post requestBody) {
//
//
//        List<Image> imageList = mapper.imagePostToImageList(requestBody);
//        List<Image> postedImageList = imageService.createImageEntities(imageList);
//
//
//        //
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImages (@RequestParam("type") String requestType, @RequestPart(value = "file") List<MultipartFile> multipartFileList) {

        for (Image.Type imageType : Image.Type.values()) {
            System.out.println(imageType.toString());
            if (imageType.toString().equals(requestType.toUpperCase())) {
                List<String> urlList = imageService.uploadImages(imageType, multipartFileList);
                ImageResponseDto.Post response = mapper.urlListToImageResponsePost(urlList);


                return new ResponseEntity<>(response, HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteImages (@RequestBody ImageRequestDto.Delete requestBody) {

        System.out.println(requestBody.getUrlList().get(0));
        imageService.deleteImage1(requestBody.getUrlList());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/test")
    public ResponseEntity<?> deleteImages2 (@RequestBody ImageRequestDto.Delete requestBody) {


        Review review = reviewService.findReview(1L);
        imageService.updateImage(requestBody.getUrlList(), review);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


//    @GetMapping("/download")
//    public ResponseEntity<ByteArrayResource> downloadImage(@RequestParam("url") String url) {     // 다운로드 API가 필요?
//        byte[] image = imageService.downloadImage(url);
//        ByteArrayResource resource = new ByteArrayResource(image);
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentLength(image.length);
//        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//
//        return ResponseEntity.ok().headers(headers).body(resource);
//    }

    //@DeleteMapping("")


}
