FROM java:8-jre
MAINTAINER Dimitri Brancotte <dimitri.brancotte@diebold.com>
RUN mkdir -p /usr/local/app/
WORKDIR /usr/local/app/
ENV PATH /usr/local/app:$PATH

#Copie l'application
ADD target/shoppy-api-0.0.1-SNAPSHOT.jar /usr/local/app/app.jar

#Configure la timezone 
RUN ln -sf /usr/share/zoneinfo/Europe/Paris /etc/localtime && echo "Europe/Paris" >  /etc/timezone

EXPOSE 9000

ENTRYPOINT ["java", "-Xms128M", "-Xmx256M", "-jar", "/usr/local/app/app.jar"]
