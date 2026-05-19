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

*VERANOS NIÑA
'define t05a = ( sosstsst(time=01may1964) + sosstsst(time=01may1970) + sosstsst(time=01may1971) + sosstsst(time=01may1973) + sosstsst(time=01may1975) + sosstsst(time=01may1984) + sosstsst(time=01may1988) + sosstsst(time=01may1995) + sosstsst(time=01may1998) + sosstsst(time=01may1999) + sosstsst(time=01may2000) + sosstsst(time=01may2007) + sosstsst(time=01may2010) + sosstsst(time=01may2011))/14'  
'define t06a = ( sosstsst(time=01jun1964) + sosstsst(time=01jun1970) + sosstsst(time=01jun1971) + sosstsst(time=01jun1973) + sosstsst(time=01jun1975) + sosstsst(time=01jun1984) + sosstsst(time=01jun1988) + sosstsst(time=01jun1995) + sosstsst(time=01jun1998) + sosstsst(time=01jun1999) + sosstsst(time=01jun2000) + sosstsst(time=01jun2007) + sosstsst(time=01jun2010) + sosstsst(time=01jun2011))/14'  
'define t07a = ( sosstsst(time=01jul1964) + sosstsst(time=01jul1970) + sosstsst(time=01jul1971) + sosstsst(time=01jul1973) + sosstsst(time=01jul1975) + sosstsst(time=01jul1984) + sosstsst(time=01jul1988) + sosstsst(time=01jul1995) + sosstsst(time=01jul1998) + sosstsst(time=01jul1999) + sosstsst(time=01jul2000) + sosstsst(time=01jul2007) + sosstsst(time=01jul2010) + sosstsst(time=01jul2011))/14'  
'define t08a = ( sosstsst(time=01aug1964) + sosstsst(time=01aug1970) + sosstsst(time=01aug1971) + sosstsst(time=01aug1973) + sosstsst(time=01aug1975) + sosstsst(time=01aug1984) + sosstsst(time=01aug1988) + sosstsst(time=01aug1995) + sosstsst(time=01aug1998) + sosstsst(time=01aug1999) + sosstsst(time=01aug2000) + sosstsst(time=01aug2007) + sosstsst(time=01aug2010) + sosstsst(time=01aug2011))/14'  
'define t09a = ( sosstsst(time=01sep1964) + sosstsst(time=01sep1970) + sosstsst(time=01sep1971) + sosstsst(time=01sep1973) + sosstsst(time=01sep1975) + sosstsst(time=01sep1984) + sosstsst(time=01sep1988) + sosstsst(time=01sep1995) + sosstsst(time=01sep1998) + sosstsst(time=01sep1999) + sosstsst(time=01sep2000) + sosstsst(time=01sep2007) + sosstsst(time=01sep2010) + sosstsst(time=01sep2011))/14'  
'define t10a = ( sosstsst(time=01oct1964) + sosstsst(time=01oct1970) + sosstsst(time=01oct1971) + sosstsst(time=01oct1973) + sosstsst(time=01oct1975) + sosstsst(time=01oct1984) + sosstsst(time=01oct1988) + sosstsst(time=01oct1995) + sosstsst(time=01oct1998) + sosstsst(time=01oct1999) + sosstsst(time=01oct2000) + sosstsst(time=01oct2007) + sosstsst(time=01oct2010) + sosstsst(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINA/ENSO-SST-VER_NA.png x2200 y1700'

