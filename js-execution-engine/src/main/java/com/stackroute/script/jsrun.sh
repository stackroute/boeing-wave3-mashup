#!/usr/bin/env bash
cd /DB/js-boilerplate
alias mvn='mvn  --quiet'
mvn clean package -DskipTests -l compile.log