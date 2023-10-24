package com.tech.bikemember.controller;

import com.tech.bikemember.model.BikeMember;
import com.tech.bikemember.repository.BikeMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/bikemembers")
public class BikeMemberController {
    @Autowired
    private BikeMemberRepository bikeMemberRepository;
    // 디비와 연결시켜서 사용하겠다는 의미

    // GetMapping 이 있는 곳으로 들어온다.
    //해당 메서드가 HTTP GET 요청을 처리하는 엔드포인트로 동작함을 나타냄
    @GetMapping
    public List<BikeMember> getAllBikeMembers(){
        System.out.println("List<BikeMember> getAllBikeMembers");
        // resultset 과 동일하게 생각하면 된다.
        return bikeMemberRepository.findAll();
    }

    @PostMapping
    public BikeMember createBikeMember(@RequestBody BikeMember bikeMember){
        System.out.println("BikeMember createBikeMemberad");
        return bikeMemberRepository.save(bikeMember);
    }
}