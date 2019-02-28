#!/usr/bin/env bash
echo "inside the run.sh script "
cd ./src/$2
echo "printing the current directory"
pwd
echo "running maven package life cycle"
alias mvn='mvn  --quiet'
mvn test -l compile.log
