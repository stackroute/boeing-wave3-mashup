#!/usr/bin/env bash
repository=$1
username=$2
mkdir ./src/$2/questionplate
cd ./src/$2/questionplate

git clone "$repository"

cd ../
cd ../
cd ../
rm ./src/$2/src/main/java/com/stackroute/*.java
rm ./src/$2/src/test/java/com/stackroute/*est.java
cd ./src/$2/questionplate
a=`find  . -name '*.java'`
b=`find  . -name '*est*.java'`
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

cp ./src/$2/questionplate/$i ./src/$2/src/main/java/com/stackroute
fi
done

cp ./src/$2/questionplate/$b  ./src/$2/src/test/java/com/stackroute
rm -r ./src/$2/questionplate

echo "running question.sh finished successfully"




