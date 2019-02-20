#!/usr/bin/env bash
repository=$1
echo "......................................."
echo $repository
localFolder="/home/user/Documents/newlyCreated"
git clone "$repository" "$localFolder"