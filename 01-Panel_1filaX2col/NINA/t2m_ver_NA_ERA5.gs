*compuesto t2m_ver_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-t2m-59_21.nc'
'set display color white'
'c'
'set lon 240 280'
'set lat 14 35'
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

*VERANO CLIMA
'define t2mM = ave(t2m,t=29,t=756,12)'
'define t2mJn = ave(t2m,t=30,t=756,12)'
'define t2mJl = ave(t2m,t=31,t=756,12)'
'define t2mA = ave(t2m,t=32,t=756,12)'
'define t2mS = ave(t2m,t=33,t=756,12)'
'define t2mO = ave(t2m,t=34,t=756,12)'
'define tver = (t2mM + t2mJn + t2mJl + t2mA + t2mS + t2mO)/6'

*VERANOS NIÑA
'define t05a = ( t2m(time=01may1964) + t2m(time=01may1970) + t2m(time=01may1971) + t2m(time=01may1973) + t2m(time=01may1975) + t2m(time=01may1984) + t2m(time=01may1988) + t2m(time=01may1995) + t2m(time=01may1998) + t2m(time=01may1999) + t2m(time=01may2000) + t2m(time=01may2007) + t2m(time=01may2010) + t2m(time=01may2011))/14'  
'define t06a = ( t2m(time=01jun1964) + t2m(time=01jun1970) + t2m(time=01jun1971) + t2m(time=01jun1973) + t2m(time=01jun1975) + t2m(time=01jun1984) + t2m(time=01jun1988) + t2m(time=01jun1995) + t2m(time=01jun1998) + t2m(time=01jun1999) + t2m(time=01jun2000) + t2m(time=01jun2007) + t2m(time=01jun2010) + t2m(time=01jun2011))/14'  
'define t07a = ( t2m(time=01jul1964) + t2m(time=01jul1970) + t2m(time=01jul1971) + t2m(time=01jul1973) + t2m(time=01jul1975) + t2m(time=01jul1984) + t2m(time=01jul1988) + t2m(time=01jul1995) + t2m(time=01jul1998) + t2m(time=01jul1999) + t2m(time=01jul2000) + t2m(time=01jul2007) + t2m(time=01jul2010) + t2m(time=01jul2011))/14'  
'define t08a = ( t2m(time=01aug1964) + t2m(time=01aug1970) + t2m(time=01aug1971) + t2m(time=01aug1973) + t2m(time=01aug1975) + t2m(time=01aug1984) + t2m(time=01aug1988) + t2m(time=01aug1995) + t2m(time=01aug1998) + t2m(time=01aug1999) + t2m(time=01aug2000) + t2m(time=01aug2007) + t2m(time=01aug2010) + t2m(time=01aug2011))/14'  
'define t09a = ( t2m(time=01sep1964) + t2m(time=01sep1970) + t2m(time=01sep1971) + t2m(time=01sep1973) + t2m(time=01sep1975) + t2m(time=01sep1984) + t2m(time=01sep1988) + t2m(time=01sep1995) + t2m(time=01sep1998) + t2m(time=01sep1999) + t2m(time=01sep2000) + t2m(time=01sep2007) + t2m(time=01sep2010) + t2m(time=01sep2011))/14'  
'define t10a = ( t2m(time=01oct1964) + t2m(time=01oct1970) + t2m(time=01oct1971) + t2m(time=01oct1973) + t2m(time=01oct1975) + t2m(time=01oct1984) + t2m(time=01oct1988) + t2m(time=01oct1995) + t2m(time=01oct1998) + t2m(time=01oct1999) + t2m(time=01oct2000) + t2m(time=01oct2007) + t2m(time=01oct2010) + t2m(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINA/ENSO-t2m-VER_NA.png x2200 y1700'
