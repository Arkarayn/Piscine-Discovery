#!/bin/bash
if (($# < 1))
then
	echo "No arguments supplied"
elif (($# > 3))
then
	echo $1 $2 $3
else
	echo $@
fi
