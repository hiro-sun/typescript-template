#!/bin/bash

print() {
    echo "Need three arguments.
arg1: file or directory
arg2: command
arg3: interval(sec)
example) ./watch.sh './src/*.ts' 'make' 1"
}

if [ $# -ne 3 ];
then
    print
    exit 1
fi

FILES=($(ls -1 $1))
FILES_HASH=()
BEFORE_FILES_HASH=()
COMMAND=$2
INTERVAL=$3

echo "TARGET FILES:"
for item in ${FILES[@]}; do
    echo $item
done

get_hash() {
    echo `openssl md5 -r $1 | awk '{print $1}'`
}

init() {
    i=0
    for item in ${FILES[@]}; do
        FILES_HASH[i]=`get_hash $item`
        BEFORE_FILES_HASH[i]=${FILES_HASH[i]}
        i=$(($i + 1))
    done
}

process() {
    i=0
    is_update=0
    for item in ${FILES[@]}; do
        BEFORE_FILES_HASH[i]=${FILES_HASH[i]}
        FILES_HASH[i]=`get_hash $item`
        if [ ${BEFORE_FILES_HASH[i]} != ${FILES_HASH[i]} ];
        then
            echo "update $item"
            is_update=1
        fi
        i=$(($i + 1))
    done

    if [ $is_update -eq 0 ]; then
        return 0
    else
        return 1;
    fi
}

init
while true;
do
    sleep $INTERVAL
    process
    if [ $? == 1 ];
    then
        eval $COMMAND
    fi
done

