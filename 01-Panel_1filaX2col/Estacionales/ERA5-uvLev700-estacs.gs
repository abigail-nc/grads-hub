'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/PROMEDIOS/ERA5-uvLev-61_20-CLM.nc'
'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'
'set map 1 2 2'
'set lev 700'
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

'define u1 = u(t=01)'
'define u2 = u(t=02)'
'define u3 = u(t=03)'
'define u4 = u(t=04)'
'define u11 = u(t=11)'
'define u12 = u(t=12)'
'define uinv = (u1+u2+u3+u4+u11+u12)/6'

'define v1 = v(t=01)'
'define v2 = v(t=02)'
'define v3 = v(t=03)'
'define v4 = v(t=04)'
'define v11 = v(t=11)'
'define v12 = v(t=12)'
'define vinv = (v1+v2+v3+v4+v11+v12)/6'

*Meses de verano: Mayo - Octubre
'define u5 = u(t=05)'
'define u6 = u(t=06)'
'define u7 = u(t=07)'
'define u8 = u(t=08)'
'define u9 = u(t=09)'
'define u10 = u(t=10)'
'define uver = (u5+u6+u7+u8+u9+u10)/6'

'define v5 = v(t=05)'
'define v6 = v(t=06)'
'define v7 = v(t=07)'
'define v8 = v(t=08)'
'define v9 = v(t=09)'
'define v10 = v(t=10)'
'define vver = (v5+v6+v7+v8+v9+v10)/6'

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
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(uinv,vinv)'
'set ccolor 1'
'd skip(uinv,4);vinv'
*'set arrlab off'
'draw map'

'set parea 5.75 10.5 2 5.5'
'colormaps_v2.gs -map Dark -flipped -levels 0 10 0.5'
'd mag(uver,vver)'
'set ccolor 1'
'd skip(uver,4);vver'
*'set arrlab off'
'draw map'
**********************************************************************+
'xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 5'
etiquetas()
'printim ../../../FIGURAS/Clima-estacional/uvLev-700mb-estac.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (m/s)'
return
