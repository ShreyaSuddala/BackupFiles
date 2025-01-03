package com.merge.model;

import java.io.Serializable;
import java.util.Set;

public class JwtRequest implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;

    private String username;
    private String password;
    private Set<String> roles;


    public JwtRequest() {}

    public JwtRequest(String username, String password, Set<String> roles) {
        this.setUsername(username);
        this.setPassword(password);
        this.setRoles(roles);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}

