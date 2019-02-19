package com.stackroute.service;

import org.springframework.stereotype.Service;

import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class QuestionServiceImpl implements QuestionService {
    public String giturl;
    public String getfilename(String code)
    {
        return code.substring(code.indexOf("class")+6,code.indexOf("{")).trim()+".java";
    }
    public String finderror() throws Exception
    {
        Matcher matcher;
        File file;
        BufferedReader fr;

        String m="";
        String fileName="/home/user/Documents/product/executionengine/compile.log";
        file=new File(fileName);
        BufferedReader br=new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String d;
        String k="";
        while((d=br.readLine())!=null)
            k+=d;

        String r[]=k.split("\\[ERROR\\]");

        int mm=0;
           if(k.isEmpty()){
               return "Tests passed";
           }
               else
        if(k.contains("COMPILATION ERROR")){
            for(String queryString:r){
                if(mm==0){
                    mm=1;
                    continue;
                }
                if(queryString.indexOf(':')!=-1){
                    if(queryString.contains("Compilation failure"))
                        break;
                    if(queryString.contains("location")){
                        m+=queryString.substring(1+queryString.indexOf(':'),queryString.indexOf("location"))+"\n";
                    }
                    else
                        m+=queryString.substring(1+queryString.indexOf(':'))+"\n";
                }
                else{
                    break;
                }
            }  }
        else{

            String queryString=r[1];

            Pattern pattern = Pattern.compile("Failures");
            matcher = pattern.matcher(queryString);
            matcher.find();
            String  p = queryString.substring(matcher.start() + 10, matcher.start() + 11);

            int a=Integer.parseInt(p);

            pattern = Pattern.compile("Errors");
            matcher = pattern.matcher(queryString);
            matcher.find();
            p = queryString.substring(matcher.start() + 8, matcher.start() + 9);

            a+=Integer.parseInt(p);
            Matcher matcher2;
            for(int i=2;i<2+a;i++) {

                if(r[i].contains("FAILURE")){
                    int g;
                    if(r[i].contains("ComparisonFailure:")){
                        pattern = Pattern.compile("ComparisonFailure:");
                        matcher2 = pattern.matcher(r[i]);
                        g=18;
                        matcher2.find();
                    }
                    else{
                        pattern = Pattern.compile("AssertionError:");
                        matcher2 = pattern.matcher(r[i]);
                        g=15;
                        matcher2.find();
                    }

                    pattern = Pattern.compile("expected.*but");
                    matcher = pattern.matcher(r[i]);
                    matcher.find();
                    p=r[i].substring(matcher2.start() + g,matcher.start());
                    m+=p+"\n";
                    p = r[i].substring(matcher.start() + 10,matcher.end()-5);

                    m+="expected: "+p+"\n";
                    pattern = Pattern.compile("but was:.*>");
                    matcher = pattern.matcher(r[i]);
                    matcher.find();
                    p = r[i].substring(matcher.start() + 9,matcher.end()-1);


                    m+="actual: "+p+"\n";
                }
                else{
                    pattern = Pattern.compile("ERROR.*at");
                    matcher = pattern.matcher(r[i]);
                    matcher.find();
                    p = r[i].substring(matcher.start() +6,matcher.end()-2);

                    m+=p+"\n";
                }

            }




        }
        System.out.println("THis is log file\n"+m);
        return m;
//
//        Matcher matcher;
//        File file;
//        BufferedReader fr;
//
//        String m="";
//        String fileName="/home/user/Documents/product/executionengine/compile.log";
//        file=new File(fileName);
//        BufferedReader br=new BufferedReader(new FileReader(file));
//        StringBuilder sb = new StringBuilder();
//        String d;
//        String k="";
//        while((d=br.readLine())!=null)
//            k+=d;
//
//        String r[]=k.split("\\[ERROR\\]");
//
//        int mm=0;
//
//        if(k.contains("COMPILATION ERROR")){
//            for(String queryString:r){
//                if(mm==0){
//                    mm=1;
//                    continue;
//                }
//                if(queryString.indexOf(':')!=-1){
//                    if(queryString.contains("Compilation failure"))
//                        break;
//
//                    m+=queryString.substring(1+queryString.indexOf(':'))+"\n";
//                }
//                else{
//                    break;
//                }
//            }  }
//        else{
//
//            String queryString=r[1];
//
//            Pattern pattern = Pattern.compile("Failures");
//            matcher = pattern.matcher(queryString);
//            matcher.find();
//            String  p = queryString.substring(matcher.start() + 10, matcher.start() + 11);
//
//            int a=Integer.parseInt(p);
//
//            pattern = Pattern.compile("Errors");
//            matcher = pattern.matcher(queryString);
//            matcher.find();
//            p = queryString.substring(matcher.start() + 8, matcher.start() + 9);
//
//            a+=Integer.parseInt(p);
//            Matcher matcher2;
//            for(int i=2;i<2+a;i++) {
//
//                if(r[i].contains("FAILURE")){
//                    pattern = Pattern.compile("ComparisonFailure:");
//                    matcher2 = pattern.matcher(r[i]);
//                    matcher2.find();
//
//
//                    pattern = Pattern.compile("expected.*but");
//                    matcher = pattern.matcher(r[i]);
//                    matcher.find();
//                    p=r[i].substring(matcher2.start() + 18,matcher.start());
//                    m+=p+"\n";
//                    p = r[i].substring(matcher.start() + 10,matcher.end()-5);
//
//                    m+="expected: "+p+"\n";
//                    pattern = Pattern.compile("but was:.*>");
//                    matcher = pattern.matcher(r[i]);
//                    matcher.find();
//                    p = r[i].substring(matcher.start() + 9,matcher.end()-1);
//
//
//                    m+="actual: "+p+"\n";
//                }
//                else{
//                    pattern = Pattern.compile("ERROR.*at");
//                    matcher = pattern.matcher(r[i]);
//                    matcher.find();
//                    p = r[i].substring(matcher.start() +6,matcher.end()-2);
//
//                    m+=p+"\n";
//                }
//
//            }
//
//
//
//
//        }
//        return m;
    }
    public  String  run(String code)  {

        String filename=getfilename(code);
        try{
            FileWriter fw=new FileWriter("/home/user/Documents/product/executionengine/src/main/java/com/stackroute/"+filename);

            fw.write("package com.stackroute;"+"\n"+code);
            fw.close();
        }catch(Exception e){System.out.println(e);}
        System.out.println("Success...");


        Process p;
        try {
            String[] cmd = {"sh", "/home/user/Documents/product/editor/execution-engine/src/main/java/com/stackroute/script/run.sh"};
            p = Runtime.getRuntime().exec(cmd);
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
            File file1=new File("/home/user/Documents/product/executionengine/src/main/java/com/stackroute/"+filename);
            if(file1.delete()){
                System.out.println("file is deleted");
            }
            else{
                System.out.println("not done your task");
            }

     try {
         String errorlogs = finderror();
          return errorlogs;

     }
     catch (Exception e){

     }
       return  null;

    }
    @Override
    public String setGitURL(String giturl){
    this.giturl=giturl;
    return giturl;
    }
    @Override
    public String getGitUrl(){
        return this.giturl;

    }
}
