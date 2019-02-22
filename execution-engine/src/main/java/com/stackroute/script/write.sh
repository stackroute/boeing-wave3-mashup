#!/usr/bin/env bash
var1 = $gitUrl
sed -i 's/repository=""/repository="$var1"/' /home/user/Documents/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/script/fetch.sh
