
# influxdb & grafana example

This is a small docker based playground for influxdb and grafana.

## Startup & Stop

Install docker and docker-compose.
If your user is not in the group docker, all commands have to run with `sudo`

Start the services with.
```
docker-compose up -d
```

Stop with
```
docker-compose stop
```

## Import test data

```
./insert_full_test_data.sh
./insert_simple_data.sh
```

## Using the influx shell
```
sudo docker exec -it influxdb_influxdb_1 influx
```

## Grafana
Go to the grafana dashboard: <http://127.0.0.1:3000> and login with admin/admin

### Create a new Datasource with

Name: demo
  *Url:* http://influxdb:8086
  *Type:* Influxdb 0.9.x
  *Database:* demo
  *User:* root
  *Password:* root

### Creat a Dashboard

1. Click on Dashboards -> Home -> + New
2. Click on Add Row -> The green bar -> Add Panel -> Graph
3. Click on The title -> Edit -> Selet the databas 'demo'
4. Metrics -> Select a measurement
5. Play around ;-)

