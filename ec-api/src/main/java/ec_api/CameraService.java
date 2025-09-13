package ec_api;

import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class CameraService {

    public List<List<Camera>> parseListFromCSV() {
        Map<Integer, List<Camera>> rangesMap = new HashMap<>();

        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(new ClassPathResource("cameras-defb.csv").getInputStream()));
            String line;
            reader.readLine();
            while ((line = reader.readLine()) != null) {
                String[] fields = line.split(";");
                if (fields.length > 1) {
                    Camera newCamera = buildCameraObject(line);
                    if (newCamera != null) {
                        Integer rangeKey = getRangeKey(newCamera.getCameraNr());
                        rangesMap.computeIfAbsent(rangeKey, k -> new ArrayList<>()).add(newCamera);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new ArrayList<>(rangesMap.values());
    }

    private static Camera buildCameraObject(String line) {
        String[] fields = line.split(";");

        if (fields.length <= 1) {
            return null;
        }

        String[] nameParts = separateName(fields[0]);
        Float latitude = Float.parseFloat(fields[1]);
        Float longitude = Float.parseFloat(fields[2]);

        return new Camera(nameParts[0], nameParts[1], latitude, longitude);
    }

    private static String[] separateName(String fullName) {
        String regex = "([A-Z]{3}-[A-Z]{2}-\\d{3})[-\\s]+(.*)";
        Pattern pattern = java.util.regex.Pattern.compile(regex);
        Matcher matcher = pattern.matcher(fullName);

        if (matcher.matches()) {
            String cameraNr = matcher.group(1);
            String name = matcher.group(2);
            return new String[]{cameraNr, name};
        } else {
            return new String[]{"", fullName};
        }
    }

    private static Integer getRangeKey(String cameraNr) {
        if (cameraNr == null || cameraNr.length() < 3) {
            return -1;
        }
        String nrString = cameraNr.substring(cameraNr.length() - 3);
        String rangeStr = nrString.charAt(0) + "00";
        try {
            return Integer.parseInt(rangeStr);
        } catch (NumberFormatException e) {
            return -1;
        }
    }
}