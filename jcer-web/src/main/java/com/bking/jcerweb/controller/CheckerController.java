package com.bking.jcerweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller()
@RequestMapping("/chker")
public class CheckerController {
    @GetMapping("")
    public String checker(){
        return "checker/index";
    }

    @PostMapping("/test")
    @ResponseBody
    public String test(@RequestParam String allRequestParams){


        return "hello";
    }
}
