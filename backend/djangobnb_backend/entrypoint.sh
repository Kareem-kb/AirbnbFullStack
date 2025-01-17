#!/bin/sh

if [ "$DATABASE" = "postgres"  ] 
then
    echo "Check if database is runnning.."

    while ! nc -z $SQL_HOST $SQL_PORT; do 
        sleep 0.1
    done

    echo "The database is running"
fi 

python manage.py migrate

exec "$@"