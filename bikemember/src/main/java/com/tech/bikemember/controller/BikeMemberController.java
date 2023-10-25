package com.tech.bikemember.controller;

import com.tech.bikemember.exception.ResourceNotFoundException;
import com.tech.bikemember.model.BikeMember;
import com.tech.bikemember.repository.BikeMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

//    @PostMapping("/num")
//    public void createBikeMemberNumber(@RequestBody BikeMember bikeMember){
//        System.out.println("void createBikeMemberNumber 신호가 들어오는지만 확인");
//    }

    @GetMapping("{id}")
    public ResponseEntity<BikeMember> getBikeMemberById(@PathVariable long id){
        System.out.println("ResponseEntity<BikeMember> getBikeMemberById : "+id);
        BikeMember bikeMember=bikeMemberRepository.findById(id).
                orElseThrow(()->new ResourceNotFoundException("BikeMember Not Exist with id : "+id));
        return ResponseEntity.ok(bikeMember);
    }
    @PutMapping("{id}")
    public ResponseEntity<BikeMember> updateBikeMemBer(@PathVariable long id,
                                                       @RequestBody BikeMember bikeMember){
        System.out.println("ResponseEntity<BikeMember> updateBikeMemBer : "+id);
        BikeMember updateBikeMember=bikeMemberRepository.findById(id).
                orElseThrow(()->new ResourceNotFoundException("BikeMember Not Exist with id : "+id));
        updateBikeMember.setFirstName(bikeMember.getFirstName());
        updateBikeMember.setLastName(bikeMember.getLastName());
        updateBikeMember.setEmailId(bikeMember.getEmailId());

        bikeMemberRepository.save(updateBikeMember);
        return ResponseEntity.ok(updateBikeMember);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<BikeMember> deleteBikeMember(@PathVariable long id){
        System.out.println("ResponseEntity<BikeMember> deleteBikeMember : "+id);
        System.out.println(id+"번 글을 삭제합니다.");
        BikeMember bikeMember=bikeMemberRepository.findById(id).
                orElseThrow(()->new ResourceNotFoundException("BikeMember Not Exist with id : "+id));
        bikeMemberRepository.delete(bikeMember);

        return new ResponseEntity <> (HttpStatus.NO_CONTENT);
    }
}