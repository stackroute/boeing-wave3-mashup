package com.stackroute.service;

import com.stackroute.domain.Question;
import com.stackroute.domain.UserProfile;
import com.stackroute.exception.UserProfileAlreadyExistException;
import com.stackroute.exception.UserProfileNotFoundException;

import java.util.List;

public interface UserProfileService {
    public UserProfile saveUserProfile(UserProfile userProfile) throws UserProfileAlreadyExistException;
//            throws UserProfileAlreadyExistException, UserProfileAlreadyExistException;
    public Boolean deleteUser(int id) throws UserProfileNotFoundException;
//            throws UserProfileNotFoundException, UserProfileNotFoundException;
    public UserProfile changePassword(int id, String newPassword) throws UserProfileNotFoundException;
    public List<String> editInterests(int id, List<String> newInterests);
    public List<String> getInterests(int id);
    public UserProfile getUser(int id) throws UserProfileNotFoundException;
    public UserProfile updateQuestionAttempted(int id, Question questionAttempted);
    public UserProfile updateQuestionPosted(int id, Question questionPosted);
}
