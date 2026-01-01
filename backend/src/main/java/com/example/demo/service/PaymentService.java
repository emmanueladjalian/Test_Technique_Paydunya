package com.example.demo.service;

import com.example.demo.dto.PaymentRequest;
import com.paydunya.neptune.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${paydunya.master-key}")
    private String masterKey;
    @Value("${paydunya.private-key}")
    private String privateKey;
    @Value("${paydunya.token}")
    private String token;

    public String createInvoice(PaymentRequest request) {
        // 1. Setup
        PaydunyaSetup setup = new PaydunyaSetup();
        setup.setMasterKey(masterKey);
        setup.setPrivateKey(privateKey);
        setup.setToken(token);
        setup.setMode("test");

        PaydunyaCheckoutStore store = new PaydunyaCheckoutStore();
        store.setName("PayDunya Tech Test Store");

        // 2. Création de la facture
        PaydunyaCheckoutInvoice invoice = new PaydunyaCheckoutInvoice(setup, store);

        // 3. Ajout du produit
        invoice.addItem(request.getProductName(), 1, request.getPrice(), request.getPrice(), "Description du produit");
        invoice.setTotalAmount(request.getPrice());

        // 4. POINT CRUCIAL : Custom Data (Nom et Référence)
        invoice.addCustomData("product_name", request.getProductName());
        invoice.addCustomData("product_ref", request.getProductRef());

        // 5. Configuration Webhook (URL webhook.site)
        invoice.setCallbackUrl("https://webhook.site/263573cf-6ecc-4971-9fdf-a67fa797d2d5");

        // 6. Tentative de création
        if (invoice.create()) {
            return invoice.getInvoiceUrl();
        } else {
            System.err.println("Erreur PayDunya: " + invoice.getResponseText());
            return null;
        }
    }
}