package com.stackroute.service;

import com.stackroute.domain.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class FetchServiceImpl implements FetchService  {

    private QuestionService questionService;
    private String giturl1;
    private String username;
    @Autowired
    private FetchServiceImpl fetchService1;

    @Autowired
    public FetchServiceImpl(QuestionService questionService) {
        this.questionService=questionService;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getGiturl1() {
        return giturl1;
    }

    public void setGiturl1(String giturl1) {
        this.giturl1 = giturl1;
    }

    public String fetchFilesAndSave() throws IOException, InterruptedException {


        System.out.println("inside fetchFilesAndSave() ");
        String[] cmdScript = new String[]{"sh", "./src/main/java/com/stackroute/script/fetch.sh", "https://github.com/umamahesh1603/instanceNew.git",fetchService1.getUsername()};
        System.out.println("fetching the boilerplate code ");
        Process procScript = Runtime.getRuntime().exec(cmdScript);
        procScript.waitFor();
        System.out.println("checking the user directory "+System.getProperty("user.dir"));
        File tmpDir = new File("/var/tmp");
        boolean exists = tmpDir.exists();
        BufferedReader reader = new BufferedReader(new InputStreamReader(procScript.getInputStream()));
        BufferedReader errorReader = new BufferedReader(new InputStreamReader(procScript.getErrorStream()));

        String line = "";
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }

        line = "";
        while ((line = errorReader.readLine()) != null) {
            System.out.println(line);
        }

        //isko mat change karna namita
//        questionService.setGitURL("https://github.com/aroranamita09/Check-Palindrome-and-reverse-it");
//        String gitUrl=questionService.getGitUrl();
//        System.out.println("printing the gitUrl "+gitUrl);
//        String gitUrl1="https://github.com/aroranamita09/Check-Palindrome-and-reverse-it.git";
        String[] cmdScript1 = new String[]{"sh", "./src/main/java/com/stackroute/script/question.sh",fetchService1.getGiturl1(),fetchService1.getUsername()};
        System.out.println("fetching the question code along with test and copying to boilerplate");
        Process procScript1 = Runtime.getRuntime().exec(cmdScript1);
        procScript1.waitFor();
        BufferedReader reader1 = new BufferedReader(new InputStreamReader(procScript1.getInputStream()));
        BufferedReader errorReader1 = new BufferedReader(new InputStreamReader(procScript1.getErrorStream()));

       // FileReader fdr=new FileReader("./src/"+fetchService1.getUsername()+"src/Pratima/src/main/java/com/stackroute/*.java");
        File file;
        BufferedReader fr;


        String fileName="./src/"+fetchService1.getUsername()+"/src/main/java/com/stackroute/*.java";
        file=new File(fileName);
        BufferedReader br=new BufferedReader(new FileReader(file));
        String d;
        String k="";
        while((d=br.readLine())!=null)
            k+=d;
          return k;

//
//        String line1 = "";
//        while ((line1 = reader1.readLine()) != null) {
//            System.out.println("printing the line1 "+line1);
//        }
//
//        line1 = "";
//        while ((line1 = errorReader1.readLine()) != null) {
//            System.out.println("printing again the line 1 "+line1);
//        }


        // to run the run.sh script
//        String[] cmdScript5 = new String[]{"sh", "./src/main/java/com/stackroute/script/run.sh",gitUrl,fetchService1.getUsername()};
//        System.out.println("runing the main code now ");
//        Process procScript5 = Runtime.getRuntime().exec(cmdScript5);
//        procScript5.waitFor();
//        System.out.println("running the scripts done ");
//        BufferedReader reader5 = new BufferedReader(new InputStreamReader(procScript5.getInputStream()));
//        BufferedReader errorReader5 = new BufferedReader(new InputStreamReader(procScript5.getErrorStream()));
//
//
//        String line5 = "";
//        while ((line5 = reader5.readLine()) != null) {
//            System.out.println("printing the line5 /n" +line5);
//        }
//
//        line5 = "";
//        while ((line5 = errorReader5.readLine()) != null) {
//            System.out.println("printing again the line 5 "+line5);
//        }

//        String[] cmd3 = new String[]{"sh", "./src/main/java/com/stackroute/script/instance.sh","Pratima"};
//        Process process = Runtime.getRuntime().exec(cmd3);
//        process.waitFor();
//        BufferedReader reader3 = new BufferedReader(new InputStreamReader(process.getInputStream()));
//        BufferedReader errorReader3 = new BufferedReader(new InputStreamReader(process.getErrorStream()));
//
//        String line3 = "";
//        while ((line3 = reader3.readLine()) != null) {
//            System.out.println("printing the line 3 "+line3);
//        }
//
//        line3 = "";
//        while ((line3 = errorReader3.readLine()) != null) {
//            System.out.println("printing the line 3 "+line3);
//        }

    }
}

