package ec_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class EcApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcApiApplication.class, args);
	}

}
