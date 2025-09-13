package ec_api;

public class Camera {

    private String cameraNr;
    private String name;
    private Float latitude;
    private Float longitude;

    public Camera(String cameraNr, String name, Float latitude, Float longitude) {
        this.cameraNr = cameraNr;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Getters and Setters
    public String getCameraNr() {
        return cameraNr;
    }

    public void setCameraNr(String cameraNr) {
        this.cameraNr = cameraNr;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

}
