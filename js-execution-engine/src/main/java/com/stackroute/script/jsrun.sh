#!/usr/bin/env bash
userpath=$1
cd $1/js-boilerplate
alias mvn='mvn  --quiet'
mvn test -l compile.log