package com.example.demo.config;

import com.paydunya.neptune.PaydunyaSetup;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PayDunyaConfig {

    @Value("${paydunya.master-key}")
    private String masterKey;

    @Value("${paydunya.private-key}")
    private String privateKey;

    @Value("${paydunya.token}")
    private String token;

    @Value("${paydunya.mode}")
    private String mode;

    @PostConstruct
    public void init() {
        PaydunyaSetup setup = new PaydunyaSetup();
        setup.setMasterKey(masterKey);
        setup.setPrivateKey(privateKey);
        setup.setToken(token);
        setup.setMode(mode);

    }
}