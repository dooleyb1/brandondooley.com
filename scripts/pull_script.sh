#!/bin/sh

cd /var/www/html
git pull
service httpd restart
