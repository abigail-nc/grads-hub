*compuesto w_inv_NO en 4 niveles
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-Vv-59_21.nc'
'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'
'set lev 500'
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

*INVIERNO CLIMA
'define t11 = ave(w,t=35,t=756,12)'
'define t12 = ave(w,t=36,t=756,12)'
'define t01 = ave(w,t=25,t=756,12)'
'define t02 = ave(w,t=26,t=756,12)'
'define t03 = ave(w,t=27,t=756,12)'
'define t04 = ave(w,t=28,t=756,12)'
'define tinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑO
'define t11o = ( w(time=01nov1963) + w(time=01nov1965) + w(time=01nov1968) + w(time=01nov1972) + w(time=01nov1976) + w(time=01nov1979) + w(time=01nov1982) + w(time=01nov1986) + w(time=01nov1987) + w(time=01nov1991) + w(time=01nov1994) + w(time=01nov1997) + w(time=01nov2002) + w(time=01nov2004) + w(time=01nov2009) + w(time=01nov2015) + w(time=01nov2018))/17'
'define t12o = ( w(time=01dec1963) + w(time=01dec1965) + w(time=01dec1968) + w(time=01dec1972) + w(time=01dec1976) + w(time=01dec1979) + w(time=01dec1982) + w(time=01dec1986) + w(time=01dec1987) + w(time=01dec1991) + w(time=01dec1994) + w(time=01dec1997) + w(time=01dec2002) + w(time=01dec2004) + w(time=01dec2009) + w(time=01dec2015) + w(time=01dec2018))/17'
'define t01o = ( w(time=01jan1964) + w(time=01jan1966) + w(time=01jan1969) + w(time=01jan1973) + w(time=01jan1977) + w(time=01jan1980) + w(time=01jan1983) + w(time=01jan1987) + w(time=01jan1988) + w(time=01jan1992) + w(time=01jan1995) + w(time=01jan1996) + w(time=01jan2003) + w(time=01jan2005) + w(time=01jan2010) + w(time=01jan2016) + w(time=01jan2019))/17'
'define t02o = ( w(time=01feb1964) + w(time=01feb1966) + w(time=01feb1969) + w(time=01feb1973) + w(time=01feb1977) + w(time=01feb1980) + w(time=01feb1983) + w(time=01feb1987) + w(time=01feb1988) + w(time=01feb1992) + w(time=01feb1995) + w(time=01feb1996) + w(time=01feb2003) + w(time=01feb2005) + w(time=01feb2010) + w(time=01feb2016) + w(time=01feb2019))/17'
'define t03o = ( w(time=01mar1964) + w(time=01mar1966) + w(time=01mar1969) + w(time=01mar1973) + w(time=01mar1977) + w(time=01mar1980) + w(time=01mar1983) + w(time=01mar1987) + w(time=01mar1988) + w(time=01mar1992) + w(time=01mar1995) + w(time=01mar1996) + w(time=01mar2003) + w(time=01mar2005) + w(time=01mar2010) + w(time=01mar2016) + w(time=01mar2019))/17'
'define t04o = ( w(time=01apr1964) + w(time=01apr1966) + w(time=01apr1969) + w(time=01apr1973) + w(time=01apr1977) + w(time=01apr1980) + w(time=01apr1983) + w(time=01apr1987) + w(time=01apr1988) + w(time=01apr1992) + w(time=01apr1995) + w(time=01apr1996) + w(time=01apr2003) + w(time=01apr2005) + w(time=01apr2010) + w(time=01apr2016) + w(time=01apr2019))/17'
'define tinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

*VERANO CLIMA
'define wM = ave(w,t=29,t=756,12)'
'define wJn = ave(w,t=30,t=756,12)'
'define wJl = ave(w,t=31,t=756,12)'
'define wA = ave(w,t=32,t=756,12)'
'define wS = ave(w,t=33,t=756,12)'
'define wO = ave(w,t=34,t=756,12)'
'define tver = (wM + wJn + wJl + wA + wS + wO)/6'

*VERANO ENSO
'define t05o = ( w(time=01may1963) + w(time=01may1965) + w(time=01may1972) + w(time=01may1982) + w(time=01may1987) + w(time=01may1991) + w(time=01may1997) + w(time=01may2002) + w(time=01may2004) + w(time=01may2009) + w(time=01may2015))/11'  
'define t06o = ( w(time=01jun1963) + w(time=01jun1965) + w(time=01jun1972) + w(time=01jun1982) + w(time=01jun1987) + w(time=01jun1991) + w(time=01jun1997) + w(time=01jun2002) + w(time=01jun2004) + w(time=01jun2009) + w(time=01jun2015))/11'  
'define t07o = ( w(time=01jul1963) + w(time=01jul1965) + w(time=01jul1972) + w(time=01jul1982) + w(time=01jul1987) + w(time=01jul1991) + w(time=01jul1997) + w(time=01jul2002) + w(time=01jul2004) + w(time=01jul2009) + w(time=01jul2015))/11'  
'define t08o = ( w(time=01aug1963) + w(time=01aug1965) + w(time=01aug1972) + w(time=01aug1982) + w(time=01aug1987) + w(time=01aug1991) + w(time=01aug1997) + w(time=01aug2002) + w(time=01aug2004) + w(time=01aug2009) + w(time=01aug2015))/11'  
'define t09o = ( w(time=01sep1963) + w(time=01sep1965) + w(time=01sep1972) + w(time=01sep1982) + w(time=01sep1987) + w(time=01sep1991) + w(time=01sep1997) + w(time=01sep2002) + w(time=01sep2004) + w(time=01sep2009) + w(time=01sep2015))/11'  
'define t10o = ( w(time=01oct1963) + w(time=01oct1965) + w(time=01oct1972) + w(time=01oct1982) + w(time=01oct1987) + w(time=01oct1991) + w(time=01oct1997) + w(time=01oct2002) + w(time=01oct2004) + w(time=01oct2009) + w(time=01oct2015))/11'  
'define tvero = (t05o + t06o + t07o + t08o + t09o + t10o)/6'

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map oj2p -levels -0.02 0.02 0.0025'
'd smth9(tinvo-tinv)'
*'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs '

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map oj2p -levels -0.02 0.02 0.0025'
'd smth9(tvero-tver)'
'../xcbar2.gs 0.5 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 4'
etiquetas()
'printim ../../../FIGURAS/NINO/ENSO-Vv_500-INV_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (Pa/s)'
return