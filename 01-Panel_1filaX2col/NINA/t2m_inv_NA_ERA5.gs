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

*INVIERNOS NIÑA
'define t11a = ( t2m(time=01nov1970) + t2m(time=01nov1973) + t2m(time=01nov1974) + t2m(time=01nov1975) + t2m(time=01nov1984) + t2m(time=01nov1988) + t2m(time=01nov1995) + t2m(time=01nov1998) + t2m(time=01nov2000) + t2m(time=01nov2005) + t2m(time=01nov2007) + t2m(time=01nov2008) + t2m(time=01nov2010) + t2m(time=01nov2011) + t2m(time=01nov2017) + t2m(time=01nov2020) )/16'
'define t12a = ( t2m(time=01dec1970) + t2m(time=01dec1973) + t2m(time=01dec1974) + t2m(time=01dec1975) + t2m(time=01dec1984) + t2m(time=01dec1988) + t2m(time=01dec1995) + t2m(time=01dec1998) + t2m(time=01dec2000) + t2m(time=01dec2005) + t2m(time=01dec2007) + t2m(time=01dec2008) + t2m(time=01dec2010) + t2m(time=01dec2011) + t2m(time=01dec2017) + t2m(time=01dec2020) )/16'
'define t01a = ( t2m(time=01jan1971) + t2m(time=01jan1974) + t2m(time=01jan1975) + t2m(time=01jan1976) + t2m(time=01jan1985) + t2m(time=01jan1989) + t2m(time=01jan1996) + t2m(time=01jan1999) + t2m(time=01jan2001) + t2m(time=01jan2006) + t2m(time=01jan2008) + t2m(time=01jan2009) + t2m(time=01jan2011) + t2m(time=01jan2012) + t2m(time=01jan2018) + t2m(time=01jan2021) )/16'
'define t02a = ( t2m(time=01feb1971) + t2m(time=01feb1974) + t2m(time=01feb1975) + t2m(time=01feb1976) + t2m(time=01feb1985) + t2m(time=01feb1989) + t2m(time=01feb1996) + t2m(time=01feb1999) + t2m(time=01feb2001) + t2m(time=01feb2006) + t2m(time=01feb2008) + t2m(time=01feb2009) + t2m(time=01feb2011) + t2m(time=01feb2012) + t2m(time=01feb2018) + t2m(time=01feb2021) )/16'
'define t03a = ( t2m(time=01mar1971) + t2m(time=01mar1974) + t2m(time=01mar1975) + t2m(time=01mar1976) + t2m(time=01mar1985) + t2m(time=01mar1989) + t2m(time=01mar1996) + t2m(time=01mar1999) + t2m(time=01mar2001) + t2m(time=01mar2006) + t2m(time=01mar2008) + t2m(time=01mar2009) + t2m(time=01mar2011) + t2m(time=01mar2012) + t2m(time=01mar2018) + t2m(time=01mar2021) )/16'
'define t04a = ( t2m(time=01apr1971) + t2m(time=01apr1974) + t2m(time=01apr1975) + t2m(time=01apr1976) + t2m(time=01apr1985) + t2m(time=01apr1989) + t2m(time=01apr1996) + t2m(time=01apr1999) + t2m(time=01apr2001) + t2m(time=01apr2006) + t2m(time=01apr2008) + t2m(time=01apr2009) + t2m(time=01apr2011) + t2m(time=01apr2012) + t2m(time=01apr2018) + t2m(time=01apr2021) )/16'
'define tinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

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

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tinva-tinv'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-t2m_INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string  5.1 1.7 (`0`a0`nC)'
return