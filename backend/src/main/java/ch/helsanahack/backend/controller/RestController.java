package ch.helsanahack.backend.controller;

import ch.helsanahack.backend.domain.UserData;
import ch.helsanahack.backend.repositories.UserRepository;
import ch.helsanahack.backend.services.UserDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@org.springframework.web.bind.annotation.RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class RestController {

    private final UserRepository userRepository;
    private final UserDataService userDataService;

    @GetMapping("/userdata")
    public UserData getUserData(@RequestParam String uuid) {
        if (userRepository.existsByUserId(uuid)) {
            return userDataService.buildUserData(uuid);
        } else {
            return null;
        }
    }
}
