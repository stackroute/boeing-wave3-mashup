#!/usr/bin/env bash
echo $1
repository=$1
username=$2
mkdir ./execution-engine/src/$2
cd  ./execution-engine/src/$2
cd ../


echo "printging in the fetch.sh file ...."
a= `$pwd`
echo $a
#localFolder="/home/user/Music/boeing-wave3-mashup/execution-engine/src/newlyCreated"
git clone "$repository"  $2

echo "running fetch.sh finished successfully"