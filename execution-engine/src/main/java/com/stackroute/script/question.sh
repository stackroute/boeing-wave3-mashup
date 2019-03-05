#!/usr/bin/env bash

repository=$1
username=$2
mkdir ./execution-engine/src/$2/questionplate
cd ./execution-engine/src/$2/questionplate

git clone "$repository"
echo "i am here"
cd ../
cd ../
cd ../
cd ../
rm ./execution-engine/src/$2/src/main/java/com/stackroute/*.java
rm ./execution-engine/src/$2/src/test/java/com/stackroute/*est.java
cd ./execution-engine/src/$2/questionplate
a=`find  . -name '*.java'`
b=`find  . -name '*est*.java'`
cd ../
cd ../
cd ../
cd ../
echo " "
echo "printing in the question.sh file ..........."
for  i in $a
do
if [ $i != $b ]
then
echo $i

cp ./execution-engine/src/$2/questionplate/$i ./execution-engine/src/$2/src/main/java/com/stackroute
fi
done

cp ./execution-engine/src/$2/questionplate/$b  ./execution-engine/src/$2/src/test/java/com/stackroute
rm -r ./execution-engine/src/$2/questionplate

echo "running question.sh finished successfully"




