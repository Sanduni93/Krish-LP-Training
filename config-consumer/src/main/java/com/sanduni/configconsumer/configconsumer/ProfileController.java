package com.sanduni.configconsumer.configconsumer;

import com.sanduni.configconsumer.configconsumer.model.MemberProfileConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class ProfileController {

    @Autowired
    MemberProfileConfiguration memberProfileConfiguration;

    @RequestMapping("/profile")

    public String getMemberProfileConfiguration(Model model){
        model.addAttribute("model", memberProfileConfiguration.getDefaultModel());
        model.addAttribute("min", memberProfileConfiguration.getMinRentPeriod());
        return "mprofile";
    }
}
