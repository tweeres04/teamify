yarn clean && \
yarn build && \
ssh root@tweeres.ca 'rm -r /var/www/teamify' && \
scp -r build root@tweeres.ca:/var/www/teamify
scp etc/teamify root@tweeres.ca:/etc/nginx/sites-available