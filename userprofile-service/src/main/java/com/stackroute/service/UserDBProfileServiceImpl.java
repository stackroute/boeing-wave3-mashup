package com.stackroute.service;

import com.stackroute.domain.Question;
import com.stackroute.domain.UserProfile;
import com.stackroute.exception.UserProfileAlreadyExistException;
import com.stackroute.exception.UserProfileNotFoundException;
import com.stackroute.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDBProfileServiceImpl implements UserProfileService {


    private UserProfileRepository userProfileRepository;

    @Autowired
    public UserDBProfileServiceImpl(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    public void setUserProfileRepository(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    @Override
    public UserProfile saveUserProfile(UserProfile userProfile) throws UserProfileAlreadyExistException {
        if (userProfileRepository.existsById(userProfile.getUserName())) {
            throw new UserProfileAlreadyExistException("UserProfile already exist with id" + userProfile.getUserName());
        }
        return userProfileRepository.save(userProfile);
    }

    @Override
    public UserProfile getUser(String userName) throws UserProfileNotFoundException {
        if (!userProfileRepository.existsById(userName)) {
            throw new UserProfileNotFoundException("UserProfile with " + userName + " doesnot exist");
        }
        Optional<UserProfile> tempUser = userProfileRepository.findById(userName);
        if (tempUser.isPresent()) {
            return tempUser.get();
        }
        return null;
    }

    @Override
    public Boolean deleteUser(String userName) throws UserProfileNotFoundException {
        if (!userProfileRepository.existsById(userName)) {
            throw new UserProfileNotFoundException("UserProfile with " + userName + " doesnot exist");
        }
        userProfileRepository.deleteById(userName);
        return true;
    }

    @Override
    public UserProfile changePassword(String userName, String newPassword) throws UserProfileNotFoundException {
        if (!userProfileRepository.existsById(userName)) {
            throw new UserProfileNotFoundException("UserProfile with " + userName + " doesnot exist");
        }
        Optional<UserProfile> tempUser = userProfileRepository.findById(userName);
        if (tempUser.isPresent()) {
            tempUser.get().setPassword(newPassword);
            return userProfileRepository.save(tempUser.get());
        }
        return null;
    }

    @Override
    public List<String> getInterests(String userName) {
        Optional<UserProfile> tempUser = userProfileRepository.findById(userName);
        return tempUser.get().getInterests();
    }

    @Override
    public List<String> editInterests(String userName, List<String> newInterests) {
        Optional<UserProfile> tempUser = userProfileRepository.findById(userName);
        tempUser.get().setInterests(newInterests);
        userProfileRepository.save(tempUser.get());
        return tempUser.get().getInterests();
    }

    @Override
    public UserProfile updateQuestionAttempted(String userName, Question questionAttempted) {
        Optional<UserProfile> temp = userProfileRepository.findById(userName);
        temp.get().getAttemptedQuestion().add(questionAttempted);
        return userProfileRepository.save(temp.get());
    }

    @Override
    public UserProfile updateQuestionPosted(String userName, Question questionPosted) {
        Optional<UserProfile> temp = userProfileRepository.findById(userName);
        temp.get().getPostedQuestion().add(questionPosted);
        return userProfileRepository.save(temp.get());
    }
}
