#!/bin/zsh

cd /var/www/html
git pull
service httpd restart
