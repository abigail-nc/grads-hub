*Script para plotear promedios mensuales de viento en superficie de enero a diciembre en el periodo 61-20 <60 años>
'reinit'

*Abrir archivo
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/PROMEDIOS/ERA5-uv10m-61_20-CLM.nc'

'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'
*Ajusta caracteristicas del mapa
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'
******************************
*Se definen las variables    *
******************************
*******
* U10 *
*******
'define u101 = u10(t=01)'
'define u102 = u10(t=02)'
'define u103 = u10(t=03)'
'define u104 = u10(t=04)'
'define u105 = u10(t=05)'
'define u106 = u10(t=06)'
'define u107 = u10(t=07)'
'define u108 = u10(t=08)'
'define u109 = u10(t=09)'
'define u1010 = u10(t=10)'
'define u1011 = u10(t=11)'
'define u1012 = u10(t=12)'

*******
* V10 *
*******
'define v101 = v10(t=01)'
'define v102 = v10(t=02)'
'define v103 = v10(t=03)'
'define v104 = v10(t=04)'
'define v105 = v10(t=05)'
'define v106 = v10(t=06)'
'define v107 = v10(t=07)'
'define v108 = v10(t=08)'
'define v109 = v10(t=09)'
'define v1010 = v10(t=10)'
'define v1011 = v10(t=11)'
'define v1012 = v10(t=12)'

********
*VECTOR*
********
*Con estas instrucciones le decimos a GrADS que le quite a cada mapa el vector que 
**muestra la escala usada y que en su lugar ponga un solo vector para todo el compuesto
'set gxout vector'
len = 0.3
scale = 10
xrit = 10.7
ybot = 1.5
'set arrscl 'len' 'scale
'set arrlab off'
*'d u;v'
rc = arrow(xrit-0.25,ybot+0.2,len,scale)

function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.1'
'draw string 'x' 'y-0.1' 'scale

******************************
*Comienza ploteo de los meses*
******************************
*ENERO
'set parea 0.28 2.78 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u101,v101)'
'set ccolor 1'
'd skip(u101,8);v101'
'set arrlab off'
'draw map'

*FEBRERO
'set parea 2.905 5.405 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u102,v102)'
'set ccolor 1'
'd skip(u102,8);v102'
'set arrlab off'
'draw map'

*MARZO
'set parea 5.53 8.03 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u103,v103)'
'set ccolor 1'
'd skip(u103,8);v103'
'set arrlab off'
'draw map'

*ABRIL
'set parea 8.155 10.655 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u104,v104)'
'set ccolor 1'
'd skip(u104,8);v104'
'set arrlab off'
'draw map'
***********************************************************
*MAYO
'set parea 0.28 2.78 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u105,v105)'
'set ccolor 1'
'd skip(u105,8);v105'
'set arrlab off'
'draw map'

*JUNIO
'set parea 2.905 5.405 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u106,v106)'
'set ccolor 1'
'd skip(u106,8);v106'
'set arrlab off'
'draw map'

*JULIO
'set parea 5.53 8.03 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u107,v107)'
'set ccolor 1'
'd skip(u107,8);v107'
'set arrlab off'
'draw map'

*AGOSTO
'set parea 8.155 10.655 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u108,v108)'
'set ccolor 1'
'd skip(u108,8);v108'
'set arrlab off'
'draw map'
*************************************************************
*SEPTIEMBRE
'set parea 0.28 2.78 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u109,v109)'
'set ccolor 1'
'd skip(u109,8);v109'
'set arrlab off'
'draw map'

*OCTUBRE
'set parea 2.905 5.405 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u1010,v1010)'
'set ccolor 1'
'd skip(u1010,8);v1010'
'set arrlab off'
'draw map'

*NOVIEMBRE
'set parea 5.53 8.03 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u1011,v1011)'
'set ccolor 1'
'd skip(u1011,8);v1011'
'set arrlab off'
'draw map'

*DICIEMBRE
'set parea 8.155 10.655 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u1012,v1012)'
'set ccolor 1'
'd skip(u1012,8);v1012'
'set arrlab off'
'draw map'
'xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 2'
**********************************************************************

etiquetas()
'printim ../../../FIGURAS/Clima-Anual/clim-uv10m-61_20.png x2200 y1700'

function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'

'draw string 0.35 5.91304 enero'
'draw string 3.11 5.91304 febrero'
'draw string 5.87 5.91304 marzo'
'draw string 8.63 5.91304 abril'

'draw string 0.35 3.89 mayo'
'draw string 3.11 3.89 junio'
'draw string 5.87 3.89 julio'
'draw string 8.63 3.89 agosto'

'draw string 0.35 1.8 septiembre'
'draw string 3.11 1.8 octubre'
'draw string 5.87 1.8 noviembre'
'draw string 8.63 1.8 diciembre'
'draw string 5.1 1.7 (m/s)'
return

