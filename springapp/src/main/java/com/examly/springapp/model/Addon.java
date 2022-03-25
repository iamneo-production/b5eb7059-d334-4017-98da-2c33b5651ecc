package  com.examly.springapp.entity;

import javax.persistence.*;


@Entity
@Table(name="addons")
public class Addon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int addonId;
    @Column(name="AddonName")
    private String addonName;
    @Column(name="AddonType")
    private String addonType;
    @Column(name="AddonPrice")
    private int addonPrice;

    @Column(name="AddonDetails")
    private String AddonDetails;

    @Column(name="Addonvalidity")
    private int AddonValidity;

    public Addon()
    {
        super();
    }
    public Addon(String addonName, String addonType, int addonPrice, String addonDetails, int addonValidity) {
        this.addonName = addonName;
        this.addonType = addonType;
        this.addonPrice = addonPrice;
        AddonDetails = addonDetails;
        AddonValidity = addonValidity;
    }

    public int getAddonId() {
        return addonId;
    }

    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }

    public String getAddonName() {
        return addonName;
    }

    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }

    public String getAddonType() {
        return addonType;
    }

    public void setAddonType(String addonType) {
        this.addonType = addonType;
    }

    public int getAddonPrice() {
        return addonPrice;
    }

    public void setAddonPrice(int addonPrice) {
        this.addonPrice = addonPrice;
    }

    public String getAddonDetails() {
        return AddonDetails;
    }

    public void setAddonDetails(String addonDetails) {
        AddonDetails = addonDetails;
    }

    public int getAddonValidity() {
        return AddonValidity;
    }

    public void setAddonValidity(int addonValidity) {
        AddonValidity = addonValidity;
    }
}
