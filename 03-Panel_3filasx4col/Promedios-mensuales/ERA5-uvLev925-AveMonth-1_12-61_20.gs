*Script para plotear promedios mensuales de viento en 5 niveles mandatorios
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/PROMEDIOS/ERA5-uvLev-61_20-CLM.nc'
'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'
'set map 1 2 2'
'set lev 925'
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
* u *
*******
'define u1 = u(t=01)'
'define u2 = u(t=02)'
'define u3 = u(t=03)'
'define u4 = u(t=04)'
'define u5 = u(t=05)'
'define u6 = u(t=06)'
'define u7 = u(t=07)'
'define u8 = u(t=08)'
'define u9 = u(t=09)'
'define u10 = u(t=10)'
'define u11 = u(t=11)'
'define u12 = u(t=12)'

*******
* v *
*******
'define v1 = v(t=01)'
'define v2 = v(t=02)'
'define v3 = v(t=03)'
'define v4 = v(t=04)'
'define v5 = v(t=05)'
'define v6 = v(t=06)'
'define v7 = v(t=07)'
'define v8 = v(t=08)'
'define v9 = v(t=09)'
'define v10 = v(t=10)'
'define v11 = v(t=11)'
'define v12 = v(t=12)'

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
'd mag(u1,v1)'
'set ccolor 1'
*Comando para cambiar de color cada vector antes de desplegarlo
'd skip(u1,7);v1'
'set arrlab off'
'draw map'

*FEBRERO
'set parea 2.905 5.405 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u2,v2)'
'set ccolor 1'
'd skip(u2,7);v2'
'set arrlab off'
'draw map'
*MARZO
'set parea 5.53 8.03 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u3,v3)'
'set ccolor 1'
'd skip(u3,7);v3'
'set arrlab off'
'draw map'
*ABRIL
'set parea 8.155 10.655 6 7.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u4,v4)'
'set ccolor 1'
'd skip(u4,7);v4'
'set arrlab off'
'draw map'
***********************************************************
*MAYO
'set parea 0.28 2.78 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u5,v5)'
'set ccolor 1'
'd skip(u5,7);v5'
'set arrlab off'
'draw map'
*JUNIO
'set parea 2.905 5.405 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u6,v6)'
'set ccolor 1'
'd skip(u6,7);v6'
'set arrlab off'
'draw map'
*JULIO
'set parea 5.53 8.03 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u7,v7)'
'set ccolor 1'
'd skip(u7,7);v7'
'set arrlab off'
'draw map'
*AGOSTO
'set parea 8.155 10.655 4 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u8,v8)'
'set ccolor 1'
'd skip(u8,7);v8'
'set arrlab off'
'draw map'
*************************************************************
*SEPTIEMBRE
'set parea 0.28 2.78 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u9,v9)'
'set ccolor 1'
'd skip(u9,7);v9'
'set arrlab off'
'draw map'
*OCTUBRE
'set parea 2.905 5.405 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u10,v10)'
'set ccolor 1'
'd skip(u,7);v10'
'set arrlab off'
'draw map'
*NOVIEMBRE
'set parea 5.53 8.03 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u11,v11)'
'set ccolor 1'
'd skip(u11,7);v11'
'set arrlab off'
'draw map'
*DICIEMBRE
'set parea 8.155 10.655 2 3.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(u12,v12)'
'set ccolor 1'
'd skip(u12,7);v12'
'set arrlab off'
'draw map'
**********************************************************************
'xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/Clima-Anual/clim-uvLev-61_20-925mb.png x2200 y1700'

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
