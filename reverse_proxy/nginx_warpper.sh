#!/bin/sh

knownError=false
until [[ $knownError == true ]]; do
    results=$(nginx -g 'daemon off;' 2>&1 >/dev/null)
    flag=`echo $results|awk '{print match($0,"host not found in upstream")}'`;
    if [ $flag -gt 0 ]; then
        echo "Results contained the expected error. Going to cycle the process and try again"
        sleep 5s
    else
        knownError=true
    fi
done

echo "=========================================="
echo "An unknown error occurred. See output below:"
echo $results
echo "=========================================="