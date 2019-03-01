package com.stackroute;
import com.stackroute.domain.Score;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;
import java.util.HashMap;
import java.util.Map;


@RunWith(SpringRunner.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ScoreBadgeServiceApplicationTests {

    @Autowired
    private WebTestClient webClient;

    private static Map<String, Score> scoreMap = new HashMap<>();


    @BeforeClass
    public static void setUp() throws Exception {
        scoreMap.put("Raj1234", new Score("Raj1234",0.0));
    }

    @Test
    public void save() {
        webClient.post().uri("/api/v1/saveScore")
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromObject(scoreMap.get("Raj1234")))
                .exchange()
                .expectStatus().isOk()
                .expectBody(String.class)
                .isEqualTo("Successfully saved");
    }

    @Test
    public void update(){
        webClient.put().uri("/api/v1/updateScore")
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromObject(scoreMap.get("Raj1234")))
                .exchange()
                .expectStatus().isOk()
                .expectBody(String.class)
                .isEqualTo("Successfully updated");
    }

    @Test
    public void get(){
        webClient.get().uri("/api/v1/getTotalScore/Raj1234")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .json("{\"userName\":\"Raj1234\",\"totalScore\" : 0.0}");
    }
}
