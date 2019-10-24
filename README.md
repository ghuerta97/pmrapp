# PMRApp

This proyect is about obtain a hour for attend to medic of a CESFAM 

## Ejecutar el proyecto con docker con el siguiente comando:
docker-compose -f docker-compose.dev.yml up

## Ejecutar en local:

1) Abrir el proyecto en netbeans 11 con java correto 11 

2) Se tiene ir al archivo properties en ./BackendPMRApp/src/main/resources/application.properties y cambiar:
spring.datasource.url=jdbc:mariadb://**mariadb**:3306/pmrdb?autoReconnect=true&useSSL=false 
por 
spring.datasource.url=jdbc:mariadb://**localhost**:3306/pmrdb?autoReconnect=true&useSSL=false

2) Crear la base de datos pmrdb en mariadb local

3) Ejecutar con netbeans o el comando mvn spring-boot:run dentro de la carpeta BackendPMRApp
