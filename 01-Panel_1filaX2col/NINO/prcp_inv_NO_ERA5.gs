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

*INVIERNO ENSO
'define t11o = ( tp(time=01nov1963) + tp(time=01nov1965) + tp(time=01nov1968) + tp(time=01nov1972) + tp(time=01nov1976) + tp(time=01nov1979) + tp(time=01nov1982) + tp(time=01nov1986) + tp(time=01nov1987) + tp(time=01nov1991) + tp(time=01nov1994) + tp(time=01nov1997) + tp(time=01nov2002) + tp(time=01nov2004) + tp(time=01nov2009) + tp(time=01nov2015) + tp(time=01nov2018))/17'
'define t12o = ( tp(time=01dec1963) + tp(time=01dec1965) + tp(time=01dec1968) + tp(time=01dec1972) + tp(time=01dec1976) + tp(time=01dec1979) + tp(time=01dec1982) + tp(time=01dec1986) + tp(time=01dec1987) + tp(time=01dec1991) + tp(time=01dec1994) + tp(time=01dec1997) + tp(time=01dec2002) + tp(time=01dec2004) + tp(time=01dec2009) + tp(time=01dec2015) + tp(time=01dec2018))/17'
'define t01o = ( tp(time=01jan1964) + tp(time=01jan1966) + tp(time=01jan1969) + tp(time=01jan1973) + tp(time=01jan1977) + tp(time=01jan1980) + tp(time=01jan1983) + tp(time=01jan1987) + tp(time=01jan1988) + tp(time=01jan1992) + tp(time=01jan1995) + tp(time=01jan1996) + tp(time=01jan2003) + tp(time=01jan2005) + tp(time=01jan2010) + tp(time=01jan2016) + tp(time=01jan2019))/17'
'define t02o = ( tp(time=01feb1964) + tp(time=01feb1966) + tp(time=01feb1969) + tp(time=01feb1973) + tp(time=01feb1977) + tp(time=01feb1980) + tp(time=01feb1983) + tp(time=01feb1987) + tp(time=01feb1988) + tp(time=01feb1992) + tp(time=01feb1995) + tp(time=01feb1996) + tp(time=01feb2003) + tp(time=01feb2005) + tp(time=01feb2010) + tp(time=01feb2016) + tp(time=01feb2019))/17'
'define t03o = ( tp(time=01mar1964) + tp(time=01mar1966) + tp(time=01mar1969) + tp(time=01mar1973) + tp(time=01mar1977) + tp(time=01mar1980) + tp(time=01mar1983) + tp(time=01mar1987) + tp(time=01mar1988) + tp(time=01mar1992) + tp(time=01mar1995) + tp(time=01mar1996) + tp(time=01mar2003) + tp(time=01mar2005) + tp(time=01mar2010) + tp(time=01mar2016) + tp(time=01mar2019))/17'
'define t04o = ( tp(time=01apr1964) + tp(time=01apr1966) + tp(time=01apr1969) + tp(time=01apr1973) + tp(time=01apr1977) + tp(time=01apr1980) + tp(time=01apr1983) + tp(time=01apr1987) + tp(time=01apr1988) + tp(time=01apr1992) + tp(time=01apr1995) + tp(time=01apr1996) + tp(time=01apr2003) + tp(time=01apr2005) + tp(time=01apr2010) + tp(time=01apr2016) + tp(time=01apr2019))/17'
'define tinvo = (t11o + t12o + t01o + t02o + t03o + t04o)*1000'

*VERANO CLIMA
'define tpM = ave(tp,t=29,t=756,12)'
'define tpJn = ave(tp,t=30,t=756,12)'
'define tpJl = ave(tp,t=31,t=756,12)'
'define tpA = ave(tp,t=32,t=756,12)'
'define tpS = ave(tp,t=33,t=756,12)'
'define tpO = ave(tp,t=34,t=756,12)'
'define tver = (tpM + tpJn + tpJl + tpA + tpS + tpO)*1000'

*VERANO NIÑO
'define t05o = ( tp(time=01may1963) + tp(time=01may1965) + tp(time=01may1972) + tp(time=01may1982) + tp(time=01may1987) + tp(time=01may1991) + tp(time=01may1997) + tp(time=01may2002) + tp(time=01may2004) + tp(time=01may2009) + tp(time=01may2015))/11'  
'define t06o = ( tp(time=01jun1963) + tp(time=01jun1965) + tp(time=01jun1972) + tp(time=01jun1982) + tp(time=01jun1987) + tp(time=01jun1991) + tp(time=01jun1997) + tp(time=01jun2002) + tp(time=01jun2004) + tp(time=01jun2009) + tp(time=01jun2015))/11'  
'define t07o = ( tp(time=01jul1963) + tp(time=01jul1965) + tp(time=01jul1972) + tp(time=01jul1982) + tp(time=01jul1987) + tp(time=01jul1991) + tp(time=01jul1997) + tp(time=01jul2002) + tp(time=01jul2004) + tp(time=01jul2009) + tp(time=01jul2015))/11'  
'define t08o = ( tp(time=01aug1963) + tp(time=01aug1965) + tp(time=01aug1972) + tp(time=01aug1982) + tp(time=01aug1987) + tp(time=01aug1991) + tp(time=01aug1997) + tp(time=01aug2002) + tp(time=01aug2004) + tp(time=01aug2009) + tp(time=01aug2015))/11'  
'define t09o = ( tp(time=01sep1963) + tp(time=01sep1965) + tp(time=01sep1972) + tp(time=01sep1982) + tp(time=01sep1987) + tp(time=01sep1991) + tp(time=01sep1997) + tp(time=01sep2002) + tp(time=01sep2004) + tp(time=01sep2009) + tp(time=01sep2015))/11'  
'define t10o = ( tp(time=01oct1963) + tp(time=01oct1965) + tp(time=01oct1972) + tp(time=01oct1982) + tp(time=01oct1987) + tp(time=01oct1991) + tp(time=01oct1997) + tp(time=01oct2002) + tp(time=01oct2004) + tp(time=01oct2009) + tp(time=01oct2015))/11'  
'define tvero = ((t05o + t06o + t07o + t08o + t09o + t10o))*1000'

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map brn2grn -levels -3 3 0.25'
'd tinvo-tinv'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map brn2grn -levels -3 3 0.25'
'd tvero-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

etiquetas()
'printim ../../../FIGURAS/NINO/ENSO-tp-ANOM-INV_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (mm)'
return
