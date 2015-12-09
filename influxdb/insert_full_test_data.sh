#!/bin/bash

sudo docker exec influx_influxdb_1 influx -compressed -import -path=/test_data.txt.gz -precision=s -database=demo
