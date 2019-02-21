#!/usr/bin/env bash
repository=$1
echo "......................................."
echo $repository
localFolder="/home/user/Downloads/BoilerplateMashup/src/main/test/com/stackroute"
git clone "$repository" "$localFolder"
