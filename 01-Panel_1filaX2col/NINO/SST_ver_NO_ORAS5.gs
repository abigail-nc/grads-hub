*compuesto t2m_ver_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ORAS5-SST-59_21.nc'
'set display color white'
'c'
'set lon -120 -80'
'set lat 14 35'
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

*VERANO CLIMA
'define sosstsstM = ave(sosstsst,t=29,t=756,12)'
'define sosstsstJn = ave(sosstsst,t=30,t=756,12)'
'define sosstsstJl = ave(sosstsst,t=31,t=756,12)'
'define sosstsstA = ave(sosstsst,t=32,t=756,12)'
'define sosstsstS = ave(sosstsst,t=33,t=756,12)'
'define sosstsstO = ave(sosstsst,t=34,t=756,12)'
'define tver = (sosstsstM + sosstsstJn + sosstsstJl + sosstsstA + sosstsstS + sosstsstO)/6'

*VERANO ENSO
'define t05o = ( sosstsst(time=01may1963) + sosstsst(time=01may1965) + sosstsst(time=01may1972) + sosstsst(time=01may1982) + sosstsst(time=01may1987) + sosstsst(time=01may1991) + sosstsst(time=01may1997) + sosstsst(time=01may2002) + sosstsst(time=01may2004) + sosstsst(time=01may2009) + sosstsst(time=01may2015))/11'  
'define t06o = ( sosstsst(time=01jun1963) + sosstsst(time=01jun1965) + sosstsst(time=01jun1972) + sosstsst(time=01jun1982) + sosstsst(time=01jun1987) + sosstsst(time=01jun1991) + sosstsst(time=01jun1997) + sosstsst(time=01jun2002) + sosstsst(time=01jun2004) + sosstsst(time=01jun2009) + sosstsst(time=01jun2015))/11'  
'define t07o = ( sosstsst(time=01jul1963) + sosstsst(time=01jul1965) + sosstsst(time=01jul1972) + sosstsst(time=01jul1982) + sosstsst(time=01jul1987) + sosstsst(time=01jul1991) + sosstsst(time=01jul1997) + sosstsst(time=01jul2002) + sosstsst(time=01jul2004) + sosstsst(time=01jul2009) + sosstsst(time=01jul2015))/11'  
'define t08o = ( sosstsst(time=01aug1963) + sosstsst(time=01aug1965) + sosstsst(time=01aug1972) + sosstsst(time=01aug1982) + sosstsst(time=01aug1987) + sosstsst(time=01aug1991) + sosstsst(time=01aug1997) + sosstsst(time=01aug2002) + sosstsst(time=01aug2004) + sosstsst(time=01aug2009) + sosstsst(time=01aug2015))/11'  
'define t09o = ( sosstsst(time=01sep1963) + sosstsst(time=01sep1965) + sosstsst(time=01sep1972) + sosstsst(time=01sep1982) + sosstsst(time=01sep1987) + sosstsst(time=01sep1991) + sosstsst(time=01sep1997) + sosstsst(time=01sep2002) + sosstsst(time=01sep2004) + sosstsst(time=01sep2009) + sosstsst(time=01sep2015))/11'  
'define t10o = ( sosstsst(time=01oct1963) + sosstsst(time=01oct1965) + sosstsst(time=01oct1972) + sosstsst(time=01oct1982) + sosstsst(time=01oct1987) + sosstsst(time=01oct1991) + sosstsst(time=01oct1997) + sosstsst(time=01oct2002) + sosstsst(time=01oct2004) + sosstsst(time=01oct2009) + sosstsst(time=01oct2015))/11'  
'define tvero = (t05o + t06o + t07o + t08o + t09o + t10o)/6'

*'set parea 0.5 7.5 0.35 3.85'
'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tvero-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINO/ENSO-SST-VER_NO.png x2200 y1700'

