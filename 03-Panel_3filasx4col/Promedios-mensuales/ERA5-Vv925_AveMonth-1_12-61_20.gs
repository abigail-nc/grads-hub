*Script para plotear promedios mensuales de velocidad vertical W de enero a diciembre en el periodo 61-20 <60 años>
'reinit'

*Abrir archivo
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/PROMEDIOS/ERA5-Vv-61_20-CLM.nc'

'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'
'set lev 925'
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

******************************
*Comienza ploteo de los meses*
******************************
*ENERO
'set parea 0.28 2.78 6 7.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=01))'
*FEBRERO
'set parea 2.905 5.405 6 7.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=02))'
*MARZO
'set parea 5.53 8.03 6 7.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=03))'
*ABRIL
'set parea 8.155 10.655 6 7.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=04))'
***********************************************************
*MAYO
'set parea 0.28 2.78 4 5.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=05))'
*JUNIO
'set parea 2.905 5.405 4 5.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=06))'
*JULIO
'set parea 5.53 8.03 4 5.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=07))'
*AGOSTO
'set parea 8.155 10.655 4 5.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=08))'
*************************************************************
*SEPTIEMBRE
'set parea 0.28 2.78 2 3.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=09))'
*OCTUBRE
'set parea 2.905 5.405 2 3.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=10))'
*NOVIEMBRE
'set parea 5.53 8.03 2 3.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=11))'
*DICIEMBRE
'set parea 8.155 10.655 2 3.5'
'colormaps_v2.gs -map oj2p -levels -0.1 0.1 0.005'
'd smth9(w(t=12))'
**********************************************************************+
'xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 5'
etiquetas()
'printim ../../../FIGURAS/Clima-Anual/clim-Vv-61_20_925mb.png x2200 y1700'

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
'draw string 5.1 1.7 (Pa/s)'
return

