*compuesto SST_inv_NO
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

*INVIERNOS CLIMA
'define t11 = ave(sosstsst,t=35,t=756,12)'
'define t12 = ave(sosstsst,t=36,t=756,12)'
'define t01 = ave(sosstsst,t=25,t=756,12)'
'define t02 = ave(sosstsst,t=26,t=756,12)'
'define t03 = ave(sosstsst,t=27,t=756,12)'
'define t04 = ave(sosstsst,t=28,t=756,12)'
'define tinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑO
'define t11o = ( sosstsst(time=01nov1963) + sosstsst(time=01nov1965) + sosstsst(time=01nov1968) + sosstsst(time=01nov1972) + sosstsst(time=01nov1976) + sosstsst(time=01nov1979) + sosstsst(time=01nov1982) + sosstsst(time=01nov1986) + sosstsst(time=01nov1987) + sosstsst(time=01nov1991) + sosstsst(time=01nov1994) + sosstsst(time=01nov1997) + sosstsst(time=01nov2002) + sosstsst(time=01nov2004) + sosstsst(time=01nov2009) + sosstsst(time=01nov2015) + sosstsst(time=01nov2018))/17'
'define t12o = ( sosstsst(time=01dec1963) + sosstsst(time=01dec1965) + sosstsst(time=01dec1968) + sosstsst(time=01dec1972) + sosstsst(time=01dec1976) + sosstsst(time=01dec1979) + sosstsst(time=01dec1982) + sosstsst(time=01dec1986) + sosstsst(time=01dec1987) + sosstsst(time=01dec1991) + sosstsst(time=01dec1994) + sosstsst(time=01dec1997) + sosstsst(time=01dec2002) + sosstsst(time=01dec2004) + sosstsst(time=01dec2009) + sosstsst(time=01dec2015) + sosstsst(time=01dec2018))/17'
'define t01o = ( sosstsst(time=01jan1964) + sosstsst(time=01jan1966) + sosstsst(time=01jan1969) + sosstsst(time=01jan1973) + sosstsst(time=01jan1977) + sosstsst(time=01jan1980) + sosstsst(time=01jan1983) + sosstsst(time=01jan1987) + sosstsst(time=01jan1988) + sosstsst(time=01jan1992) + sosstsst(time=01jan1995) + sosstsst(time=01jan1996) + sosstsst(time=01jan2003) + sosstsst(time=01jan2005) + sosstsst(time=01jan2010) + sosstsst(time=01jan2016) + sosstsst(time=01jan2019))/17'
'define t02o = ( sosstsst(time=01feb1964) + sosstsst(time=01feb1966) + sosstsst(time=01feb1969) + sosstsst(time=01feb1973) + sosstsst(time=01feb1977) + sosstsst(time=01feb1980) + sosstsst(time=01feb1983) + sosstsst(time=01feb1987) + sosstsst(time=01feb1988) + sosstsst(time=01feb1992) + sosstsst(time=01feb1995) + sosstsst(time=01feb1996) + sosstsst(time=01feb2003) + sosstsst(time=01feb2005) + sosstsst(time=01feb2010) + sosstsst(time=01feb2016) + sosstsst(time=01feb2019))/17'
'define t03o = ( sosstsst(time=01mar1964) + sosstsst(time=01mar1966) + sosstsst(time=01mar1969) + sosstsst(time=01mar1973) + sosstsst(time=01mar1977) + sosstsst(time=01mar1980) + sosstsst(time=01mar1983) + sosstsst(time=01mar1987) + sosstsst(time=01mar1988) + sosstsst(time=01mar1992) + sosstsst(time=01mar1995) + sosstsst(time=01mar1996) + sosstsst(time=01mar2003) + sosstsst(time=01mar2005) + sosstsst(time=01mar2010) + sosstsst(time=01mar2016) + sosstsst(time=01mar2019))/17'
'define t04o = ( sosstsst(time=01apr1964) + sosstsst(time=01apr1966) + sosstsst(time=01apr1969) + sosstsst(time=01apr1973) + sosstsst(time=01apr1977) + sosstsst(time=01apr1980) + sosstsst(time=01apr1983) + sosstsst(time=01apr1987) + sosstsst(time=01apr1988) + sosstsst(time=01apr1992) + sosstsst(time=01apr1995) + sosstsst(time=01apr1996) + sosstsst(time=01apr2003) + sosstsst(time=01apr2005) + sosstsst(time=01apr2010) + sosstsst(time=01apr2016) + sosstsst(time=01apr2019))/17'
'define tinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

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

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tinvo-tinv'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tvero-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/NINO/ENSO-SST-INV_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string  5.1 1.7 (`0`a0`nC)'
return
