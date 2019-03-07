package com.stackroute.service;

import com.stackroute.domain.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class FetchServiceImpl implements FetchService  {


    private String giturl1;
    private String username;
    @Autowired
    private FetchServiceImpl fetchService1;



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

    public File[] finder( String dirName){
        File dir = new File(dirName);

        return dir.listFiles(new FilenameFilter() {
            public boolean accept(File dir, String filename)
            { return filename.endsWith(".java"); }
        } );

    }

    public String fetchFilesAndSave() throws IOException, InterruptedException {


        System.out.println("inside fetchFilesAndSave() ");
//        System.out.println("bhaakbc"+System.getProperty("user.dir"));
        File file3=new File("/DB/script/fetch.sh");
        if(file3.exists()){
            System.out.println("fetch file exist");
        }
        else{
            System.out.println("fetch file doesnot exist");
        }
        file3=new File("/DB/script/run.sh");
        if(file3.exists()){
            System.out.println("run file exist");
        }
        else{
            System.out.println("run file doesnot exist");
        }
        file3=new File("/DB/script/question.sh");
        if(file3.exists()){
            System.out.println("run file exist");
        }
        else{
            System.out.println("run file doesnot exist");
        }
        String[] cmdScript = new String[]{"sh", "/DB/script/fetch.sh","https://github.com/Ujjawala/execution-boilerplate.git",fetchService1.getUsername(),"/DB/users"};
        Process procScript = Runtime.getRuntime().exec(cmdScript);
        procScript.waitFor();
//        System.out.println("checking the user directory "+System.getProperty("user.dir"));

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
        //System.out.println(System.getProperty("user.dir"));
    System.out.println("its here to call question.sh"+fetchService1.getGiturl1()+fetchService1.getUsername());
        String[] cmdScript1 = new String[]{"sh","/DB/script/question.sh",fetchService1.getGiturl1(),fetchService1.getUsername(),"/DB/users"};
         Process procScript1 = Runtime.getRuntime().exec(cmdScript1);
        procScript1.waitFor();

     reader = new BufferedReader(new InputStreamReader(procScript1.getInputStream()));
       errorReader = new BufferedReader(new InputStreamReader(procScript1.getErrorStream()));

       line = "";
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }

        line = "";
        while ((line = errorReader.readLine()) != null) {
            System.out.println(line);
        }

         File file;
        BufferedReader fr;

       file=  finder("/DB/users/"+username+"/src/main/java/com/stackroute")[0];


        BufferedReader br=new BufferedReader(new FileReader(file));
        String d;
        String k="";
        while((d=br.readLine())!=null)
            k+="\n"+d;


          return k;


    }
}

