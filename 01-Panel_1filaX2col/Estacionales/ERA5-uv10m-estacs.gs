'reinit'
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

*Meses de invierno: Noviembre - Abril
'define u11 = u10(t=11)'
'define u12 = u10(t=12)'
'define u01 = u10(t=01)'
'define u02 = u10(t=02)'
'define u03 = u10(t=03)'
'define u04 = u10(t=04)'
'define uinv = (u11+u12+u01+u02+u03+u04)/6'

'define v11 = v10(t=11)'
'define v12 = v10(t=12)'
'define v01 = v10(t=01)'
'define v02 = v10(t=02)'
'define v03 = v10(t=03)'
'define v04 = v10(t=04)'
'define vinv = (v11+v12+v01+v02+v03+v04)/6'

*Meses de verano: Mayo - Octubre
'define u105 = u10(t=05)'
'define u106 = u10(t=06)'
'define u107 = u10(t=07)'
'define u108 = u10(t=08)'
'define u109 = u10(t=09)'
'define u1010 = u10(t=10)'
'define uver = (u105+u106+u107+u108+u109+u1010)/6'

'define v105 = v10(t=05)'
'define v106 = v10(t=06)'
'define v107 = v10(t=07)'
'define v108 = v10(t=08)'
'define v109 = v10(t=09)'
'define v1010 = v10(t=10)'
'define vver = (v105+v106+v107+v108+v109+v1010)/6'

'set gxout vector'
len = 0.3
scale = 10
xrit = 6.5
ybot = 1.55
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

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(uinv,vinv)'
'set ccolor 1'
'd skip(uinv,4);vinv'
*'set arrlab off'
'draw map'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(uver,vver)'
'set ccolor 1'
'd skip(uver,4);vver'
*'set arrlab off'
'draw map'
**********************************************************************+
'../xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 5'
etiquetas()
'printim ../../../FIGURAS/Clima-estacional/uv10m-estac.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (m/s)'
return
