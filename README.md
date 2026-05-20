# Repositorio de scripts en GrADS para generar mapas

# Instalación de GrADS

## En Windows

Para instalar GrADS en Windows, se usa un "sustituto" llamado OpenGrADS y que puede descargarse desde este enlace en [SourceForge](https://sourceforge.net/projects/opengrads/files/grads2/2.2.1.oga.1/Windows/grads-2.2.1.oga.1-win32_superpack.exe/download).

Después debe instalarse el archivo descargado (solo dando doble click). Esto creará en nuestro dico local (regularmente Unidad C://) un directorio llamado **OpenGrADS-2.2**. Este directorio será el "corazón" de todo lo que podamos hacer en GrADS.

Este directorio `OpenGrADS-2.2` contiene a su vez varios archivos, que pueden verse desde cualquier navegador o editor de texto según sea el caso. Asimismo, contiene dos carpetas: *Classic* y *Contents*.


De estos directorios, el que principalmente utilizaremos será **Contents**, pues dentro contiene la ruta `C:\OpenGrADS-2.2\Contents\Resources\SampleDatasets`, que es donde OpenGrads incluye una malla de datos de muestra para que aprendamos a usar esta herramienta.

Asimismo, podemos crear dentro de este directorio otro directorio de trabajo para cada proyecto que elaboremos. **Nota importante:** *se recoemienda colocar en este directorio los archivos contenidos en la carpeta [_Recursos](./_Recursos/) [] de este repositorio*, exlusivamente los archivos:
 
- ![colormaps_v2.gs](./_Recursos/colormaps_v2.gs) - 🎨 Contiene rampas de colores para los mapas
- ![xcbar2.gs](./_Recursos/xcbar2.gs) - Barra de colores para la simbología/graduación de los  mapas
- ![estados](./_Recursos/estados) - Para el caso exclusivo de México, a división estatal

## En Linux

Para Linux la instalación y en general el manejo de este paquete es más flexible, pues podemos instalarlo y posteriormente utilizarlo desde cualquier directorio.

Para instalarlo en distribuciones basadas en Debian como Ubuntu o Linux Mint, se debe ejecutar desde la terminal:

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install grads
```

Para verificar que se hizo correctamente la instalación use:

```bash
grads --version

# o abra directamente grads con
grads -l
```

# Hub de Scripts - Índice

| SCRIPT | PRODUCTO QUE GENERA | MUESTRA
|----|-------|--------|
|![Este script](./00-Mapas_individuales/Model-temp.gs) | Crea un mapa de temperatura para México en 00Z01JAN1987 con datos de entrada de model | ![Mapa temp model](./z_EjemplosFiguras/00-model_temp_1x1.png) |
w



