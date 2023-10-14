#!/bin/bash
for i in  "$@"
do
	mkdir ex$i;
	i=$((i + 1));
done
