package com.examly.springapp.service;

import com.examly.springapp.model.RechargeModel;
import com.examly.springapp.model.ReviewModel;
import com.examly.springapp.repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private static ReviewRepo reviewRepo;
    @Autowired
    public ReviewService(ReviewRepo reviewRepo) {
        this.reviewRepo=reviewRepo;
    }

    public static ReviewModel addReview(ReviewModel data){
        return reviewRepo.save(data);
    }
    public static List<ReviewModel> findAllReviewModel(){
        return reviewRepo.findAll();
    }
    public ReviewModel updateReview(ReviewModel m)
    {
        int review_id=m.getReviewId();
        ReviewModel add=reviewRepo.findById(review_id).get();
        add.setFeedback(m.getFeedback());
        add.setName(m.getName());
        add.setRating(m.getRating());
        return reviewRepo.save(add);
    }

    public void deleteReview(int review_id)
    {
        reviewRepo.deleteById(review_id);
    }
}
