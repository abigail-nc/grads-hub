*compuesto tp_inv_NO
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

*INVIERNO CLIMA
'define t11 = ave(tp,t=35,t=756,12)'
'define t12 = ave(tp,t=36,t=756,12)'
'define t01 = ave(tp,t=25,t=756,12)'
'define t02 = ave(tp,t=26,t=756,12)'
'define t03 = ave(tp,t=27,t=756,12)'
'define t04 = ave(tp,t=28,t=756,12)'
'define tinv = (t11 + t12 + t01 + t02 + t03 + t04)*1000'

*INVIERNOS NIÑA
'define t11a = ( tp(time=01nov1970) + tp(time=01nov1973) + tp(time=01nov1974) + tp(time=01nov1975) + tp(time=01nov1984) + tp(time=01nov1988) + tp(time=01nov1995) + tp(time=01nov1998) + tp(time=01nov2000) + tp(time=01nov2005) + tp(time=01nov2007) + tp(time=01nov2008) + tp(time=01nov2010) + tp(time=01nov2011) + tp(time=01nov2017) + tp(time=01nov2020) )/16'
'define t12a = ( tp(time=01dec1970) + tp(time=01dec1973) + tp(time=01dec1974) + tp(time=01dec1975) + tp(time=01dec1984) + tp(time=01dec1988) + tp(time=01dec1995) + tp(time=01dec1998) + tp(time=01dec2000) + tp(time=01dec2005) + tp(time=01dec2007) + tp(time=01dec2008) + tp(time=01dec2010) + tp(time=01dec2011) + tp(time=01dec2017) + tp(time=01dec2020) )/16'
'define t01a = ( tp(time=01jan1971) + tp(time=01jan1974) + tp(time=01jan1975) + tp(time=01jan1976) + tp(time=01jan1985) + tp(time=01jan1989) + tp(time=01jan1996) + tp(time=01jan1999) + tp(time=01jan2001) + tp(time=01jan2006) + tp(time=01jan2008) + tp(time=01jan2009) + tp(time=01jan2011) + tp(time=01jan2012) + tp(time=01jan2018) + tp(time=01jan2021) )/16'
'define t02a = ( tp(time=01feb1971) + tp(time=01feb1974) + tp(time=01feb1975) + tp(time=01feb1976) + tp(time=01feb1985) + tp(time=01feb1989) + tp(time=01feb1996) + tp(time=01feb1999) + tp(time=01feb2001) + tp(time=01feb2006) + tp(time=01feb2008) + tp(time=01feb2009) + tp(time=01feb2011) + tp(time=01feb2012) + tp(time=01feb2018) + tp(time=01feb2021) )/16'
'define t03a = ( tp(time=01mar1971) + tp(time=01mar1974) + tp(time=01mar1975) + tp(time=01mar1976) + tp(time=01mar1985) + tp(time=01mar1989) + tp(time=01mar1996) + tp(time=01mar1999) + tp(time=01mar2001) + tp(time=01mar2006) + tp(time=01mar2008) + tp(time=01mar2009) + tp(time=01mar2011) + tp(time=01mar2012) + tp(time=01mar2018) + tp(time=01mar2021) )/16'
'define t04a = ( tp(time=01apr1971) + tp(time=01apr1974) + tp(time=01apr1975) + tp(time=01apr1976) + tp(time=01apr1985) + tp(time=01apr1989) + tp(time=01apr1996) + tp(time=01apr1999) + tp(time=01apr2001) + tp(time=01apr2006) + tp(time=01apr2008) + tp(time=01apr2009) + tp(time=01apr2011) + tp(time=01apr2012) + tp(time=01apr2018) + tp(time=01apr2021) )/16'
'define tinva = (t11a + t12a + t01a + t02a + t03a + t04a)*1000'

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

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map brn2grn -levels -3 3 0.25'
'd tinva-tinv'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map brn2grn -levels -3 3 0.25'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-tp-INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (mm)'
return