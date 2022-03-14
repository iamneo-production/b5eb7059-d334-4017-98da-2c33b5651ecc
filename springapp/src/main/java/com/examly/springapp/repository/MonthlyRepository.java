package  com.examly.springapp.repository;

import  com.examly.springapp.entity.Monthly;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthlyRepository extends JpaRepository<Monthly,Integer> {

}
