'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/PROMEDIOS/ERA5-press-61_20-CLM.nc'
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

*Meses de invierno: Noviembre - Abril
'define sp1 = sp(t=01)'
'define sp2 = sp(t=02)'
'define sp3 = sp(t=03)'
'define sp4 = sp(t=04)'
'define sp11 = sp(t=11)'
'define sp12 = sp(t=12)'
'define tinv = (sp1+sp2+sp3+sp4+sp11+sp12)/6'
*Meses de verano: Mayo - Octubre
'define sp5 = sp(t=05)'
'define sp6 = sp(t=06)'
'define sp7 = sp(t=07)'
'define sp8 = sp(t=08)'
'define sp9 = sp(t=09)'
'define sp10 = sp(t=10)'
'define tver = (sp5+sp6+sp7+sp8+sp9+sp10)/6'

'set parea 0.5 5.25 2 5.5'
'colormaps_jM.gs -map Terrain2 -levels 750 1020 10'
'd tver'

'set parea 5.75 10.5 2 5.5'
'colormaps_jM.gs -map Terrain2 -levels 750 1020 10'
'd tver'
**********************************************************************
'xcbar2.gs 0.28 10.655 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/Clima-estacional/PRESS-estac.png x2200 y1700'

function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (hPa)'
return
