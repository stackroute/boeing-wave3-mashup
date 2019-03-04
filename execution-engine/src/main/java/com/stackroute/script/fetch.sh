#!/usr/bin/env bash
echo $1
repository=$1
username=$2
mkdir ./src/$2
cd  ./src/$2
cd ../

echo "printging in the fetch.sh file ...."
echo $repository
#localFolder="/home/user/Music/boeing-wave3-mashup/execution-engine/src/newlyCreated"
git clone "$repository"  $2

echo "running fetch.sh finished successfully"