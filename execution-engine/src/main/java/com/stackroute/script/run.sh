#!/usr/bin/env bash
touch sdf
cd /home/user/IdeaProjects/executionengine
alias mvn='mvn  --quiet'
mvn test -l compile.log
