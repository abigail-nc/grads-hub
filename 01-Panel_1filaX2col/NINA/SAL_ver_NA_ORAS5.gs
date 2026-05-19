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

*VERANOS NIÑA
'define t05a = ( sosaline(time=01may1964) + sosaline(time=01may1970) + sosaline(time=01may1971) + sosaline(time=01may1973) + sosaline(time=01may1975) + sosaline(time=01may1984) + sosaline(time=01may1988) + sosaline(time=01may1995) + sosaline(time=01may1998) + sosaline(time=01may1999) + sosaline(time=01may2000) + sosaline(time=01may2007) + sosaline(time=01may2010) + sosaline(time=01may2011))/14'  
'define t06a = ( sosaline(time=01jun1964) + sosaline(time=01jun1970) + sosaline(time=01jun1971) + sosaline(time=01jun1973) + sosaline(time=01jun1975) + sosaline(time=01jun1984) + sosaline(time=01jun1988) + sosaline(time=01jun1995) + sosaline(time=01jun1998) + sosaline(time=01jun1999) + sosaline(time=01jun2000) + sosaline(time=01jun2007) + sosaline(time=01jun2010) + sosaline(time=01jun2011))/14'  
'define t07a = ( sosaline(time=01jul1964) + sosaline(time=01jul1970) + sosaline(time=01jul1971) + sosaline(time=01jul1973) + sosaline(time=01jul1975) + sosaline(time=01jul1984) + sosaline(time=01jul1988) + sosaline(time=01jul1995) + sosaline(time=01jul1998) + sosaline(time=01jul1999) + sosaline(time=01jul2000) + sosaline(time=01jul2007) + sosaline(time=01jul2010) + sosaline(time=01jul2011))/14'  
'define t08a = ( sosaline(time=01aug1964) + sosaline(time=01aug1970) + sosaline(time=01aug1971) + sosaline(time=01aug1973) + sosaline(time=01aug1975) + sosaline(time=01aug1984) + sosaline(time=01aug1988) + sosaline(time=01aug1995) + sosaline(time=01aug1998) + sosaline(time=01aug1999) + sosaline(time=01aug2000) + sosaline(time=01aug2007) + sosaline(time=01aug2010) + sosaline(time=01aug2011))/14'  
'define t09a = ( sosaline(time=01sep1964) + sosaline(time=01sep1970) + sosaline(time=01sep1971) + sosaline(time=01sep1973) + sosaline(time=01sep1975) + sosaline(time=01sep1984) + sosaline(time=01sep1988) + sosaline(time=01sep1995) + sosaline(time=01sep1998) + sosaline(time=01sep1999) + sosaline(time=01sep2000) + sosaline(time=01sep2007) + sosaline(time=01sep2010) + sosaline(time=01sep2011))/14'  
'define t10a = ( sosaline(time=01oct1964) + sosaline(time=01oct1970) + sosaline(time=01oct1971) + sosaline(time=01oct1973) + sosaline(time=01oct1975) + sosaline(time=01oct1984) + sosaline(time=01oct1988) + sosaline(time=01oct1995) + sosaline(time=01oct1998) + sosaline(time=01oct1999) + sosaline(time=01oct2000) + sosaline(time=01oct2007) + sosaline(time=01oct2010) + sosaline(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

'set parea 0.3 10.5 2 8.2'
'../colormaps_jM.gs -map b2r -levels -0.5 0.5 0.05'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINA/ENSO-SAL-VER_NA.png x2200 y1700'

