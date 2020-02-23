package com.bking.jcerweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller()
@RequestMapping("/chker")
public class CheckerController {
    @GetMapping("")
    public String checker(){
        return "checker/index";
    }
}
