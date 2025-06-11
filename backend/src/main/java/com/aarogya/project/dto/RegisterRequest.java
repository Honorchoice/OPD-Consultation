package com.aarogya.project.dto;

import com.aarogya.project.entity.UserRole;
import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String phone;
    private UserRole role;
} 