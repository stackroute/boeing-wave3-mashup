//package com.stackroute.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.io.RandomAccessFile;
//@Service
//public class FileWriterServiceImpl implements FileWriterService{
//    @Autowired
//    public QuestionService questionService;
//
//    public void randomAcessFile() throws IOException {
//        String giturl=questionService.getGitUrl();
//        System.out.println("In fileWriter"+giturl);
////        writeData(filepath,)
////
////    }
//
//
////        public static void main(String[] args) {
////            try {
//        // file content is "ABCDEFGH"
//        String filePath="/home/user/Desktop/FinalMashupProduct/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/fetch.sh";
//
//        System.out.println(new String(readCharsFromFile(filePath, 1, 5)));
//
//        writeData(filePath, "this.giturl", 5);
//        //now file content is "ABCDEData"
//
//        appendData(filePath, giturl);
//        //now file content is "ABCDEDatapankaj"
////            }
////            catch (IOException e) {
////                e.printStackTrace();
////            }
//    }
//
//    private static void appendData(String filePath, String data) throws IOException {
//        RandomAccessFile raFile = new RandomAccessFile(filePath, "rw");
//        raFile.seek(raFile.length());
//        System.out.println("current pointer = "+raFile.getFilePointer());
//        raFile.write(data.getBytes());
//        raFile.close();
//
//    }
//
//    private static void writeData(String filePath, String data, int seek) throws IOException {
//        RandomAccessFile file = new RandomAccessFile(filePath, "rw");
//        file.seek(seek);
//        file.write(data.getBytes());
//        file.close();
//    }
//
//    private static byte[] readCharsFromFile(String filePath, int seek, int chars) throws IOException {
//        RandomAccessFile file = new RandomAccessFile(filePath, "r");
//        file.seek(seek);
//        byte[] bytes = new byte[chars];
//        file.read(bytes);
//        file.close();
//        return bytes;
//    }
//}
