#!/bin/bash
RELEASE_BASE="/opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive"
set -e

echo 'Deleting old website'
rm -rf ~/brandondooley.com/*

echo 'Syncing website from release base with website on instance'
rsync -arh --stats --delete $RELEASE_BASE/ ~/brandondooley.com/

cd ~/brandondooley.com
pm2 start app.js --name personal-website
