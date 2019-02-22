#!/usr/bin/env bash
mkdir namita
cd namita
repositoryBP="https://github.com/aroranamita09/mashupBoilerplate.git"
git clone "$repositoryBP"
cd mashupBoilerplate
cd src
cd main
repository=$1
echo "......................................."
echo $repository
git clone "$repository"
