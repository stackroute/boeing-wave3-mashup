#!/usr/bin/env bash
repositoryBP=$1
echo $repositoryBP
mkdir localFolderBP
cd localFolderBP
git clone  "$repositoryBP" "$localFolderBP"
