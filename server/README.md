# Server Folder

En esta carpeta se encuentra el back-end, el cual es desarrollado en Node.js. Para la base de datos estamos usando Atlas MongoDB junto Mongoose.
El archivo index.js es el archivo main del back-end, donde se crean las instancias de los componentes utilizados para conectarse a la base de datos, para crear rutas, etc.
Tenemos un archivo .env, el cual definimos las variables de ambiente, tales como puerto o url´s.

En esta carpeta podemos encontrar subcarpetas las cuales estan organizadas de la siguiente manera:
- Controllers, estan todos los controladores de las diversas acciones a realizar por los request.
- Middleware, en el cual estan todos los procesos de middleware para login (hasta el momento).
- Model, estan los modelos de mongoose, para poder modelar los datos de la base de datos.
- Node_Modules, donde estan todo lo descargado cuando descragamos ciertos paquetes de node.
- Routes, estan las distintas rutas de los request.
- Storage, se encuentran los archivos almacenados en la base de datos.

Los otros archivos son configuraciones.
