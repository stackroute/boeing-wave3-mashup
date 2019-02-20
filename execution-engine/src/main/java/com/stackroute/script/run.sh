#!/usr/bin/env bash
cd /home/user/Documents/product/executionengine
alias mvn='mvn  --quiet'
mvn test -l compile.log
