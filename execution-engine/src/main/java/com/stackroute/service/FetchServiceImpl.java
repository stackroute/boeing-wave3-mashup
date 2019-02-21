package com.stackroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class FetchServiceImpl implements FetchService {
    @Autowired
    public QuestionService questionService;
    public String params;
    public void fetchFilesAndSave() throws IOException {

//            String[] cmdScript = new String[]{"/bin/bash", "path/to/myScript.sh"};
//
//            Process procScript = Runtime.getRuntime().exec(cmdScript);

//        Process procBuildScript = new ProcessBuilder("path/to/myScript.sh", "myArg1 myArg2").start();
        Process p;
        try {
            String[] cmdScript=new String[] {"sed -i 's/repository=\"\"/repository="+questionService.getGitUrl()+"/' /home/user/Documents/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/fetch.sh"};
            Process procScript=Runtime.getRuntime().exec(cmdScript);
            System.out.println("procScript"+procScript);
            procScript.waitFor();
            BufferedReader read=new BufferedReader(new InputStreamReader(procScript.getInputStream()));
            String[] cmd = {"sh","/home/user/Desktop/FinalMashupProduct/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/fetch.sh"};
            p = Runtime.getRuntime().exec(cmd);
            System.out.println("Process is:"+p);
            p.waitFor();
            BufferedReader reader = new BufferedReader(new InputStreamReader(
                    p.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

}

