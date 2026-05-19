*compuesto t2m_ver_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ORAS5-SAL-58_20.nc'
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
'define sosalineM = ave(sosaline,t=29,t=756,12)'
'define sosalineJn = ave(sosaline,t=30,t=756,12)'
'define sosalineJl = ave(sosaline,t=31,t=756,12)'
'define sosalineA = ave(sosaline,t=32,t=756,12)'
'define sosalineS = ave(sosaline,t=33,t=756,12)'
'define sosalineO = ave(sosaline,t=34,t=756,12)'
'define tver = (sosalineM + sosalineJn + sosalineJl + sosalineA + sosalineS + sosalineO)/6'

*VERANO ENSO
'define t05o = ( sosaline(time=01may1963) + sosaline(time=01may1965) + sosaline(time=01may1972) + sosaline(time=01may1982) + sosaline(time=01may1987) + sosaline(time=01may1991) + sosaline(time=01may1997) + sosaline(time=01may2002) + sosaline(time=01may2004) + sosaline(time=01may2009) + sosaline(time=01may2015))/11'  
'define t06o = ( sosaline(time=01jun1963) + sosaline(time=01jun1965) + sosaline(time=01jun1972) + sosaline(time=01jun1982) + sosaline(time=01jun1987) + sosaline(time=01jun1991) + sosaline(time=01jun1997) + sosaline(time=01jun2002) + sosaline(time=01jun2004) + sosaline(time=01jun2009) + sosaline(time=01jun2015))/11'  
'define t07o = ( sosaline(time=01jul1963) + sosaline(time=01jul1965) + sosaline(time=01jul1972) + sosaline(time=01jul1982) + sosaline(time=01jul1987) + sosaline(time=01jul1991) + sosaline(time=01jul1997) + sosaline(time=01jul2002) + sosaline(time=01jul2004) + sosaline(time=01jul2009) + sosaline(time=01jul2015))/11'  
'define t08o = ( sosaline(time=01aug1963) + sosaline(time=01aug1965) + sosaline(time=01aug1972) + sosaline(time=01aug1982) + sosaline(time=01aug1987) + sosaline(time=01aug1991) + sosaline(time=01aug1997) + sosaline(time=01aug2002) + sosaline(time=01aug2004) + sosaline(time=01aug2009) + sosaline(time=01aug2015))/11'  
'define t09o = ( sosaline(time=01sep1963) + sosaline(time=01sep1965) + sosaline(time=01sep1972) + sosaline(time=01sep1982) + sosaline(time=01sep1987) + sosaline(time=01sep1991) + sosaline(time=01sep1997) + sosaline(time=01sep2002) + sosaline(time=01sep2004) + sosaline(time=01sep2009) + sosaline(time=01sep2015))/11'  
'define t10o = ( sosaline(time=01oct1963) + sosaline(time=01oct1965) + sosaline(time=01oct1972) + sosaline(time=01oct1982) + sosaline(time=01oct1987) + sosaline(time=01oct1991) + sosaline(time=01oct1997) + sosaline(time=01oct2002) + sosaline(time=01oct2004) + sosaline(time=01oct2009) + sosaline(time=01oct2015))/11'  
'define tvero = (t05o + t06o + t07o + t08o + t09o + t10o)/6'

'set parea 0.3 10.5 2 8.2'
'../colormaps_jM.gs -map b2r -levels -0.5 0.5 0.05'
'd tvero-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINO/ENSO-SAL-ANOM-VER_NO.png x2200 y1700'

