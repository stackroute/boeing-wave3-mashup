#!/usr/bin/env bash
echo "inside the run.sh script "
echo $1
pwd
cd ./src/$1
echo "printing the current directory"
pwd
echo "running maven package life cycle"
alias mvn='mvn  --quiet'
mvn test -l   compile.log
sed '2,5d' compile.log > compile2.log