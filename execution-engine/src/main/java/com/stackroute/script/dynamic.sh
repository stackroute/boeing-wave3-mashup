#!/usr/bin/env bash
logfile="$logDir/$(timestamp) $name.log"
echo "something" >> "$logfile"
params=
#params="-aAXz --stats -h --delete --exclude-from $exclude --log-file=$logfile $src $dest"
#if [ "$silent" = "" ]; then
#    params="-v $params --info=progress2"
#fi
rsync $params
