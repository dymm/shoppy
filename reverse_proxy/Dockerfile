FROM nginx:alpine
COPY proxy_params /etc/nginx/
COPY default.conf /tmp/
COPY index.html /usr/share/nginx/html
COPY nginx_warpper.sh /usr/sbin/
RUN cp /tmp/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
# Entry point
ENTRYPOINT ["sh", "/usr/sbin/nginx_warpper.sh"]