*Script para plotear promedios mensuales de temperatura a 2m de enero a diciembre en el periodo 61-20 <60 años>
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/PROMEDIOS/ERA5-t2m-61_20-CLM.nc'
'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'

'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

'define t2m1 = t2m(t=01)'
'define t2m2 = t2m(t=02)'
'define t2m3 = t2m(t=03)'
'define t2m4 = t2m(t=04)'
'define t2m11 = t2m(t=11)'
'define t2m12 = t2m(t=12)'
'define tinv = (t2m1+t2m2+t2m3+t2m4+t2m11+t2m12)/6'
*Meses de verano: Mayo - octubre
'define t2m5 = t2m(t=05)'
'define t2m6 = t2m(t=06)'
'define t2m7 = t2m(t=07)'
'define t2m8 = t2m(t=08)'
'define t2m9 = t2m(t=09)'
'define t2m10 = t2m(t=10)'
'define tver = (t2m5+t2m6+t2m7+t2m8+t2m9+t2m10)/6'

'set parea 0.5 5.25 2 5.5'
'colormaps_jM.gs -map jet -levels 0 35 1'
'd tinv'
'set parea 5.75 10.5 2 5.5'
'colormaps_jM.gs -map jet -levels 0 35 1'
'd tver'

'xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 5'
etiquetas()
'printim ../../../FIGURAS/Clima-estacional/t2m-estac.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string  5.1 1.7 (`0`a0`nC)'
return
