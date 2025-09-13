package ec_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private CameraService cameraService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/camera-list")
    public List<List<Camera>> getCameraList() {
        return cameraService.parseListFromCSV();
    }
}
