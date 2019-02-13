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
        if (userProfileRepository.existsById(userProfile.getId())) {
            throw new UserProfileAlreadyExistException("UserProfile already exist with id" + userProfile.getId());
        }
        return userProfileRepository.save(userProfile);
    }

    @Override
    public UserProfile getUser(int id) throws UserProfileNotFoundException {
        if (!userProfileRepository.existsById(id)) {
            throw new UserProfileNotFoundException("UserProfile with " + id + " doesnot exist");
        }
        Optional<UserProfile> tempUser = userProfileRepository.findById(id);
        if (tempUser.isPresent()) {
            return tempUser.get();
        }
        return null;
    }

    @Override
    public Boolean deleteUser(int id) throws UserProfileNotFoundException {
        if (!userProfileRepository.existsById(id)) {
            throw new UserProfileNotFoundException("UserProfile with " + id + " doesnot exist");
        }
        userProfileRepository.deleteById(id);
        return true;
    }

    @Override
    public UserProfile changePassword(int id, String newPassword) throws UserProfileNotFoundException {
        if (!userProfileRepository.existsById(id)) {
            throw new UserProfileNotFoundException("UserProfile with " + id + " doesnot exist");
        }
        Optional<UserProfile> tempUser = userProfileRepository.findById(id);
        if (tempUser.isPresent()) {
            tempUser.get().setPassword(newPassword);
            return userProfileRepository.save(tempUser.get());
        }
        return null;
    }

    @Override
    public List<String> getInterests(int id) {
        Optional<UserProfile> tempUser = userProfileRepository.findById(id);
        return tempUser.get().getInterests();
    }

    @Override
    public List<String> editInterests(int id, List<String> newInterests) {
        Optional<UserProfile> tempUser = userProfileRepository.findById(id);
        tempUser.get().setInterests(newInterests);
        userProfileRepository.save(tempUser.get());
        return tempUser.get().getInterests();
    }

    @Override
    public UserProfile updateQuestionAttempted(int id, Question questionAttempted) {
        Optional<UserProfile> temp = userProfileRepository.findById(id);
        temp.get().getAttemptedQuestion().add(questionAttempted);
        return userProfileRepository.save(temp.get());
    }

    @Override
    public UserProfile updateQuestionPosted(int id, Question questionPosted) {
        Optional<UserProfile> temp = userProfileRepository.findById(id);
        temp.get().getPostedQuestion().add(questionPosted);
        return userProfileRepository.save(temp.get());
    }
}
