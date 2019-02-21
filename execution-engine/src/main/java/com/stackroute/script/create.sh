#!/usr/bin/env bash
var1 = $gitUrl
echo $var1 >> /home/user/Documents/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/abc.txt
echo "Hello Namita" >> /home/user/Documents/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/abc.txt
sed -i 's/repositoryBP=""/repositoryBP="$var1"/' /home/user/Documents/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/fetchBP.sh
