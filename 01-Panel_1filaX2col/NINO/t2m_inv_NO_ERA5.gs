*compuesto t2m_inv_NO
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

*INVIERNOS CLIMA
'define t11 = ave(t2m,t=35,t=756,12)'
'define t12 = ave(t2m,t=36,t=756,12)'
'define t01 = ave(t2m,t=25,t=756,12)'
'define t02 = ave(t2m,t=26,t=756,12)'
'define t03 = ave(t2m,t=27,t=756,12)'
'define t04 = ave(t2m,t=28,t=756,12)'
'define tinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑO
'define t11o = ( t2m(time=01nov1963) + t2m(time=01nov1965) + t2m(time=01nov1968) + t2m(time=01nov1972) + t2m(time=01nov1976) + t2m(time=01nov1979) + t2m(time=01nov1982) + t2m(time=01nov1986) + t2m(time=01nov1987) + t2m(time=01nov1991) + t2m(time=01nov1994) + t2m(time=01nov1997) + t2m(time=01nov2002) + t2m(time=01nov2004) + t2m(time=01nov2009) + t2m(time=01nov2015) + t2m(time=01nov2018))/17'
'define t12o = ( t2m(time=01dec1963) + t2m(time=01dec1965) + t2m(time=01dec1968) + t2m(time=01dec1972) + t2m(time=01dec1976) + t2m(time=01dec1979) + t2m(time=01dec1982) + t2m(time=01dec1986) + t2m(time=01dec1987) + t2m(time=01dec1991) + t2m(time=01dec1994) + t2m(time=01dec1997) + t2m(time=01dec2002) + t2m(time=01dec2004) + t2m(time=01dec2009) + t2m(time=01dec2015) + t2m(time=01dec2018))/17'
'define t01o = ( t2m(time=01jan1964) + t2m(time=01jan1966) + t2m(time=01jan1969) + t2m(time=01jan1973) + t2m(time=01jan1977) + t2m(time=01jan1980) + t2m(time=01jan1983) + t2m(time=01jan1987) + t2m(time=01jan1988) + t2m(time=01jan1992) + t2m(time=01jan1995) + t2m(time=01jan1996) + t2m(time=01jan2003) + t2m(time=01jan2005) + t2m(time=01jan2010) + t2m(time=01jan2016) + t2m(time=01jan2019))/17'
'define t02o = ( t2m(time=01feb1964) + t2m(time=01feb1966) + t2m(time=01feb1969) + t2m(time=01feb1973) + t2m(time=01feb1977) + t2m(time=01feb1980) + t2m(time=01feb1983) + t2m(time=01feb1987) + t2m(time=01feb1988) + t2m(time=01feb1992) + t2m(time=01feb1995) + t2m(time=01feb1996) + t2m(time=01feb2003) + t2m(time=01feb2005) + t2m(time=01feb2010) + t2m(time=01feb2016) + t2m(time=01feb2019))/17'
'define t03o = ( t2m(time=01mar1964) + t2m(time=01mar1966) + t2m(time=01mar1969) + t2m(time=01mar1973) + t2m(time=01mar1977) + t2m(time=01mar1980) + t2m(time=01mar1983) + t2m(time=01mar1987) + t2m(time=01mar1988) + t2m(time=01mar1992) + t2m(time=01mar1995) + t2m(time=01mar1996) + t2m(time=01mar2003) + t2m(time=01mar2005) + t2m(time=01mar2010) + t2m(time=01mar2016) + t2m(time=01mar2019))/17'
'define t04o = ( t2m(time=01apr1964) + t2m(time=01apr1966) + t2m(time=01apr1969) + t2m(time=01apr1973) + t2m(time=01apr1977) + t2m(time=01apr1980) + t2m(time=01apr1983) + t2m(time=01apr1987) + t2m(time=01apr1988) + t2m(time=01apr1992) + t2m(time=01apr1995) + t2m(time=01apr1996) + t2m(time=01apr2003) + t2m(time=01apr2005) + t2m(time=01apr2010) + t2m(time=01apr2016) + t2m(time=01apr2019))/17'
'define tinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

*VERANO CLIMA
'define t2mM = ave(t2m,t=29,t=756,12)'
'define t2mJn = ave(t2m,t=30,t=756,12)'
'define t2mJl = ave(t2m,t=31,t=756,12)'
'define t2mA = ave(t2m,t=32,t=756,12)'
'define t2mS = ave(t2m,t=33,t=756,12)'
'define t2mO = ave(t2m,t=34,t=756,12)'
'define tver = (t2mM + t2mJn + t2mJl + t2mA + t2mS + t2mO)/6'

*VERANO ENSO
'define t05o = ( t2m(time=01may1963) + t2m(time=01may1965) + t2m(time=01may1972) + t2m(time=01may1982) + t2m(time=01may1987) + t2m(time=01may1991) + t2m(time=01may1997) + t2m(time=01may2002) + t2m(time=01may2004) + t2m(time=01may2009) + t2m(time=01may2015))/11'  
'define t06o = ( t2m(time=01jun1963) + t2m(time=01jun1965) + t2m(time=01jun1972) + t2m(time=01jun1982) + t2m(time=01jun1987) + t2m(time=01jun1991) + t2m(time=01jun1997) + t2m(time=01jun2002) + t2m(time=01jun2004) + t2m(time=01jun2009) + t2m(time=01jun2015))/11'  
'define t07o = ( t2m(time=01jul1963) + t2m(time=01jul1965) + t2m(time=01jul1972) + t2m(time=01jul1982) + t2m(time=01jul1987) + t2m(time=01jul1991) + t2m(time=01jul1997) + t2m(time=01jul2002) + t2m(time=01jul2004) + t2m(time=01jul2009) + t2m(time=01jul2015))/11'  
'define t08o = ( t2m(time=01aug1963) + t2m(time=01aug1965) + t2m(time=01aug1972) + t2m(time=01aug1982) + t2m(time=01aug1987) + t2m(time=01aug1991) + t2m(time=01aug1997) + t2m(time=01aug2002) + t2m(time=01aug2004) + t2m(time=01aug2009) + t2m(time=01aug2015))/11'  
'define t09o = ( t2m(time=01sep1963) + t2m(time=01sep1965) + t2m(time=01sep1972) + t2m(time=01sep1982) + t2m(time=01sep1987) + t2m(time=01sep1991) + t2m(time=01sep1997) + t2m(time=01sep2002) + t2m(time=01sep2004) + t2m(time=01sep2009) + t2m(time=01sep2015))/11'  
'define t10o = ( t2m(time=01oct1963) + t2m(time=01oct1965) + t2m(time=01oct1972) + t2m(time=01oct1982) + t2m(time=01oct1987) + t2m(time=01oct1991) + t2m(time=01oct1997) + t2m(time=01oct2002) + t2m(time=01oct2004) + t2m(time=01oct2009) + t2m(time=01oct2015))/11'  
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
'printim ../../../FIGURAS/NINO/ENSO-t2m-ANOM_INV_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (`0`a0`nC)'
return
