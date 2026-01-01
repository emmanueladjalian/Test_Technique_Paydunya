package com.example.demo.dto;

import lombok.Data;

@Data
public class PaymentRequest {
    private String productName;
    private String productRef;
    private Double price;
    private Integer quantity;
    private String customerEmail;
}