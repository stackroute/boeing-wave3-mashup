package com.stackroute.service;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class FetchServiceImpl implements FetchService {
    public void fetchFilesAndSave() throws IOException {

//            String[] cmdScript = new String[]{"/bin/bash", "path/to/myScript.sh"};
//
//            Process procScript = Runtime.getRuntime().exec(cmdScript);


        Process p;
        try {
            String[] cmd = {"sh", "/home/user/code-executor-engine/src/main/java/com/stackroute/codeexecutorengine/script/fetch.sh"};
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
