*compuesto t2m_ver_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-tp-59_21.nc'
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
'define tpM = ave(tp,t=29,t=756,12)'
'define tpJn = ave(tp,t=30,t=756,12)'
'define tpJl = ave(tp,t=31,t=756,12)'
'define tpA = ave(tp,t=32,t=756,12)'
'define tpS = ave(tp,t=33,t=756,12)'
'define tpO = ave(tp,t=34,t=756,12)'
'define tver = (tpM + tpJn + tpJl + tpA + tpS + tpO)*1000'

*VERANOS NIÑA
'define t05a = ( tp(time=01may1964) + tp(time=01may1970) + tp(time=01may1971) + tp(time=01may1973) + tp(time=01may1975) + tp(time=01may1984) + tp(time=01may1988) + tp(time=01may1995) + tp(time=01may1998) + tp(time=01may1999) + tp(time=01may2000) + tp(time=01may2007) + tp(time=01may2010) + tp(time=01may2011))/14'  
'define t06a = ( tp(time=01jun1964) + tp(time=01jun1970) + tp(time=01jun1971) + tp(time=01jun1973) + tp(time=01jun1975) + tp(time=01jun1984) + tp(time=01jun1988) + tp(time=01jun1995) + tp(time=01jun1998) + tp(time=01jun1999) + tp(time=01jun2000) + tp(time=01jun2007) + tp(time=01jun2010) + tp(time=01jun2011))/14'  
'define t07a = ( tp(time=01jul1964) + tp(time=01jul1970) + tp(time=01jul1971) + tp(time=01jul1973) + tp(time=01jul1975) + tp(time=01jul1984) + tp(time=01jul1988) + tp(time=01jul1995) + tp(time=01jul1998) + tp(time=01jul1999) + tp(time=01jul2000) + tp(time=01jul2007) + tp(time=01jul2010) + tp(time=01jul2011))/14'  
'define t08a = ( tp(time=01aug1964) + tp(time=01aug1970) + tp(time=01aug1971) + tp(time=01aug1973) + tp(time=01aug1975) + tp(time=01aug1984) + tp(time=01aug1988) + tp(time=01aug1995) + tp(time=01aug1998) + tp(time=01aug1999) + tp(time=01aug2000) + tp(time=01aug2007) + tp(time=01aug2010) + tp(time=01aug2011))/14'  
'define t09a = ( tp(time=01sep1964) + tp(time=01sep1970) + tp(time=01sep1971) + tp(time=01sep1973) + tp(time=01sep1975) + tp(time=01sep1984) + tp(time=01sep1988) + tp(time=01sep1995) + tp(time=01sep1998) + tp(time=01sep1999) + tp(time=01sep2000) + tp(time=01sep2007) + tp(time=01sep2010) + tp(time=01sep2011))/14'  
'define t10a = ( tp(time=01oct1964) + tp(time=01oct1970) + tp(time=01oct1971) + tp(time=01oct1973) + tp(time=01oct1975) + tp(time=01oct1984) + tp(time=01oct1988) + tp(time=01oct1995) + tp(time=01oct1998) + tp(time=01oct1999) + tp(time=01oct2000) + tp(time=01oct2007) + tp(time=01oct2010) + tp(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a))*1000'

*'set parea 0.5 7.5 7.45 10.95'
*'./../colormaps_v2.gs -map ncl_topo -flipped -levels 0 30 0.2'
*'d smth9(tver)'

*'set parea 0.5 7.5 3.90 7.40'
*'./../colormaps_v2.gs -map ncl_topo -flipped -levels 0 30 0.2'
*'d smth9(tvera)'
*'../xcbar2 7.75 8.0 4.25 10.6 -dir v -line off -fs 10'

*'set parea 0.5 7.5 0.35 3.85'
'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map brn2grn -levels -3 3 0.25'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINA/ENSO-tp-VER_NA.png x2200 y1700'
