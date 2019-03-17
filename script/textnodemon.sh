#!/usr/bin/env bash
a='echo "hello"'
nodemon -L --watch /DB/script/demotext.txt --exec "$a"
