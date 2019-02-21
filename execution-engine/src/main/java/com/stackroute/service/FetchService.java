package com.stackroute.service;

import org.springframework.stereotype.Service;

import java.io.IOException;

public interface FetchService {

    public void fetchFilesAndSave() throws IOException, InterruptedException;
//    public String sendTemplate();
}
