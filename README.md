# Backend Exam

## Pasos de instalación de servicios 

### Instalación de node js
- Inicializar proyecto con package.json
`
npm init -y  
`

### Dependencias de desarrollo 
- Typescript como dependencia
`
npm i -D typescript 
`
- Creación del tsconfig.json
`
npx tsc --init  
`
- Instalar ts-node como dependencia
`
npm i -D ts-node 
`
`
npm i express
`
`
npm i @types/express
`
`
npm i @types/node
`
`
npm i nodemon
`
`
npm i cassandra-driver
`
`
npm i dotenv
`

### Instalación Cassandra con Docker

- Instalación imagen Cassandra en Docker
`
docker run --name cassandra -p 9042:9042 cassandra:latest
`

- Ejecución imagen Cassandra 
  `
  docker exec -it 'id_Container' bash
  `

## Actividades asignadas por integrantes 
  ###### Welker
  - [x] Estructura del proyecto
  - [x] Modelo MVC
###### Jean Carlos
  - [x] Conexión servidor y base de datos
###### Simón
  - [x] Modelado base de datos
  - [x] Rutas
###### Mishell 
  - [x] Modelado base de datos
  - [x] Estructuración Readme

## Diagrama de directorios (MVC)

## Diagrama de datos NoSQL


