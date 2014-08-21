

----- Estructura del site -----

Mediante js se comprueba el dispositivo desde el que se está accediendo, si se accede desde iphone, ipad o android redirecciona a su versión (archivo mobile.html)

Para la versión WEB se incluyen los siguientes archivos específicos JS y CSS:

site.js
siteFunctions.js
data.js (datos de miembros de FF)
files.json (definición de archivos para el loader)
style.css (estilos)

Para la versión TABLET/MOBILE los siguientes archivos específicos JS y CSS:

siteMobile.js
siteFunctionsMobile.js 
dataMobile.js (datos de miembros de FF)
filesMobile.json (definición de archivos para el loader)
styleMobile.js (estilos version mobile)

El resto de archivos son comunes.
Los textos están tanto en los html como en los archivos de funciones js, para cambiar los textos de las imágenes se facilitarán los psds.
Para cargar los datos de los miembros de FF de forma dinámica desde el json se ha de utilizar la función printVideoGrid() definida en site.js y siteMobile.js. 

----- .htaccess -----

Contiene una regla para la redirección a mobile.html, que elimina la extensión del archivo.

----- Analytics -----

Está añadido al final de los documentos html principales:

index.html
mobile.html

Para reemplazar el código de seguimiento solo hay que sustituir el existente (UA-40089434-1) por el que se desee poner.

----- Videos e imágenes de cada video -----

En la carpeta videos y videos/img






