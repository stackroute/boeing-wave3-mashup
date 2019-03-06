#!/usr/bin/env bash

repository=$1
username=$2
mkdir $3/execution-engine/src/$2/questionplate
cd $3/execution-engine/src/$2/questionplate

git clone "$repository"
echo  $1


rm $3/execution-engine/src/$2/src/main/java/com/stackroute/*.java
rm $3/execution-engine/src/$2/src/test/java/com/stackroute/*est.java
cd $3/execution-engine/src/$2/questionplate
a=`find  . -name '*.java'`
b=`find  . -name '*est*.java'`

echo " "
echo "printing in the question.sh file ..........."
for  i in $a
do
if [ $i != $b ]
then
echo $i

cp $3/execution-engine/src/$2/questionplate/$i $3/execution-engine/src/$2/src/main/java/com/stackroute
fi
done

cp $3/execution-engine/src/$2/questionplate/$b  $3/execution-engine/src/$2/src/test/java/com/stackroute
rm -r $3/execution-engine/src/$2/questionplate

echo "running question.sh finished successfully"




