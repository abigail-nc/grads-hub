* SCRIPT PARA
* Crear mapa de precipitación
* Datos de entrada: model.ctl
*--------------------------------------------

* LECTURA DE ARCHIVO
* --------------------
'reinit'
'open SampleDatasets/model.ctl'

*** Para saber las dimensiones de la malla debe ejecutarse `q file`

* AJUSTES DE LA MALLA
*----------------------------
* Cortar área de mapa a México
'set lon 240 280'
'set lat 14 35'

*Configurar despliegue del mapa
'set display color white'
'c'
'set mproj scaled'
'set mpdset _Recursos/hires'
'set grads off'
'set gxout shaded'

* DESPLIEGUE DE LA VARIABLE
*----------------------------------
'set parea 0.5 9.5 0.5 7.25'
'./_Recursos/colormaps_v2.gs -map ncl_topo -levels 0 1.8 0.2 -flipped on'

'd pr'

'./_Recursos/xcbar2.gs 10 10.35 1 7 -edge triangle -dir v -line on -fs 2'
etiquetas()
'printim ./z_EjemplosFiguras/00-model_prcp_1x1.png x2200 y1700'

function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.2'
'draw string 0.55 7.5 Pres. en superficie (kg/m`0`a2`ns) Mx - 00Z01JAN1987'

'set string 1 l 5 90'
'set strsiz 0.15'
'draw string 9.75 3.8 (kg/m`0`a2`ns)'

return



