package org.liko.pigeonracing.controlloer;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/login")
    public String login() {
        return "users/login";
    }

    @GetMapping("register")
    public String register() {
        return "users/register";
    }
}
