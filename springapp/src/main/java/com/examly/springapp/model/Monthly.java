package  com.examly.springapp.entity;

import javax.persistence.*;

@Entity
@Table(name="monthly")
public class Monthly {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="PlanId")
    private int PlanId;
    @Column(name="PlanType")
    private String PlanType;
    @Column(name="PlanName")
    private String PlanName;
    @Column(name="PlanValidity")
    private int PlanValidity;
    @Column(name="PlanDetails")
    private String PlanDetails;
    @Column(name="PlanPrice")
    private int PlanPrice;

    public Monthly()
    {
        super();
    }

    public Monthly(String planType, String planName, int planValidity, String planDetails, int planPrice) {
        super();
        PlanType = planType;
        PlanName = planName;
        PlanValidity = planValidity;
        PlanDetails = planDetails;
        PlanPrice = planPrice;
    }

    public int getPlanId() {
        return PlanId;
    }

    public void setPlanId(int planId) {
        PlanId = planId;
    }

    public String getPlanType() {
        return PlanType;
    }

    public void setPlanType(String planType) {
        PlanType = planType;
    }

    public String getPlanName() {
        return PlanName;
    }

    public void setPlanName(String planName) {
        PlanName = planName;
    }

    public int getPlanValidity() {
        return PlanValidity;
    }

    public void setPlanValidity(int planValidity) {
        PlanValidity = planValidity;
    }

    public String getPlanDetails() {
        return PlanDetails;
    }

    public void setPlanDetails(String planDetails) {
        PlanDetails = planDetails;
    }

    public int getPlanPrice() {
        return PlanPrice;
    }

    public void setPlanPrice(int planPrice) {
        PlanPrice = planPrice;
    }
}
