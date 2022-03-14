package com.examly.springapp.controller;

import com.examly.springapp.model.ReviewModel;
import com.examly.springapp.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/addReview")
    public ResponseEntity<ReviewModel> addReview(@RequestBody ReviewModel data){
        ReviewModel newReviewModel=reviewService.addReview(data);
        return new ResponseEntity(newReviewModel, HttpStatus.CREATED);
    }
    @GetMapping("/getReview")
    public ResponseEntity<List<ReviewModel>> getReview(){
        List<ReviewModel> reviewModels= ReviewService.findAllReviewModel();
        return new ResponseEntity<>(reviewModels, HttpStatus.OK);
    }

    @PutMapping("/updateReview")
    public ReviewModel updateReview(@RequestBody ReviewModel add)
    {

        return reviewService.updateReview(add);
    }

    @DeleteMapping("/deleteReview/{review_id}")
    public void deleteReview(@PathVariable("review_id") int review_id)
    {
        reviewService.deleteReview(review_id);
    }
}
