#Backend deploy script
ssh ubuntu@ec2-18-206-168-172.compute-1.amazonaws.com <<EOF
 cd AyD1
 cd AyD_Proyecto_G5
 cd BackEnd
 git checkout develop
 git pull
 npm install
 tsc
 echo 'PM2 starting restart'
 pm2 restart all
 echo 'PM2 succesfully restarted'
 exit
EOF