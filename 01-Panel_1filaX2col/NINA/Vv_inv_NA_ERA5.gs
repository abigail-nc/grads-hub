*compuesto w_inv_NO en 4 niveles
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-Vv-59_21.nc'
'set display color white'
'c'
'set lon -120 -80'
'set lat 15 35'
'set lev 925'
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

*INVIERNOS NIÑA
'define t11a = ( w(time=01nov1970) + w(time=01nov1973) + w(time=01nov1974) + w(time=01nov1975) + w(time=01nov1984) + w(time=01nov1988) + w(time=01nov1995) + w(time=01nov1998) + w(time=01nov2000) + w(time=01nov2005) + w(time=01nov2007) + w(time=01nov2008) + w(time=01nov2010) + w(time=01nov2011) + w(time=01nov2017) + w(time=01nov2020) )/16'
'define t12a = ( w(time=01dec1970) + w(time=01dec1973) + w(time=01dec1974) + w(time=01dec1975) + w(time=01dec1984) + w(time=01dec1988) + w(time=01dec1995) + w(time=01dec1998) + w(time=01dec2000) + w(time=01dec2005) + w(time=01dec2007) + w(time=01dec2008) + w(time=01dec2010) + w(time=01dec2011) + w(time=01dec2017) + w(time=01dec2020) )/16'
'define t01a = ( w(time=01jan1971) + w(time=01jan1974) + w(time=01jan1975) + w(time=01jan1976) + w(time=01jan1985) + w(time=01jan1989) + w(time=01jan1996) + w(time=01jan1999) + w(time=01jan2001) + w(time=01jan2006) + w(time=01jan2008) + w(time=01jan2009) + w(time=01jan2011) + w(time=01jan2012) + w(time=01jan2018) + w(time=01jan2021) )/16'
'define t02a = ( w(time=01feb1971) + w(time=01feb1974) + w(time=01feb1975) + w(time=01feb1976) + w(time=01feb1985) + w(time=01feb1989) + w(time=01feb1996) + w(time=01feb1999) + w(time=01feb2001) + w(time=01feb2006) + w(time=01feb2008) + w(time=01feb2009) + w(time=01feb2011) + w(time=01feb2012) + w(time=01feb2018) + w(time=01feb2021) )/16'
'define t03a = ( w(time=01mar1971) + w(time=01mar1974) + w(time=01mar1975) + w(time=01mar1976) + w(time=01mar1985) + w(time=01mar1989) + w(time=01mar1996) + w(time=01mar1999) + w(time=01mar2001) + w(time=01mar2006) + w(time=01mar2008) + w(time=01mar2009) + w(time=01mar2011) + w(time=01mar2012) + w(time=01mar2018) + w(time=01mar2021) )/16'
'define t04a = ( w(time=01apr1971) + w(time=01apr1974) + w(time=01apr1975) + w(time=01apr1976) + w(time=01apr1985) + w(time=01apr1989) + w(time=01apr1996) + w(time=01apr1999) + w(time=01apr2001) + w(time=01apr2006) + w(time=01apr2008) + w(time=01apr2009) + w(time=01apr2011) + w(time=01apr2012) + w(time=01apr2018) + w(time=01apr2021) )/16'
'define tinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

*VERANO CLIMA
'define wM = ave(w,t=29,t=756,12)'
'define wJn = ave(w,t=30,t=756,12)'
'define wJl = ave(w,t=31,t=756,12)'
'define wA = ave(w,t=32,t=756,12)'
'define wS = ave(w,t=33,t=756,12)'
'define wO = ave(w,t=34,t=756,12)'
'define tver = (wM + wJn + wJl + wA + wS + wO)/6'

*VERANOS NIÑA
'define t05a = ( w(time=01may1964) + w(time=01may1970) + w(time=01may1971) + w(time=01may1973) + w(time=01may1975) + w(time=01may1984) + w(time=01may1988) + w(time=01may1995) + w(time=01may1998) + w(time=01may1999) + w(time=01may2000) + w(time=01may2007) + w(time=01may2010) + w(time=01may2011))/14'  
'define t06a = ( w(time=01jun1964) + w(time=01jun1970) + w(time=01jun1971) + w(time=01jun1973) + w(time=01jun1975) + w(time=01jun1984) + w(time=01jun1988) + w(time=01jun1995) + w(time=01jun1998) + w(time=01jun1999) + w(time=01jun2000) + w(time=01jun2007) + w(time=01jun2010) + w(time=01jun2011))/14'  
'define t07a = ( w(time=01jul1964) + w(time=01jul1970) + w(time=01jul1971) + w(time=01jul1973) + w(time=01jul1975) + w(time=01jul1984) + w(time=01jul1988) + w(time=01jul1995) + w(time=01jul1998) + w(time=01jul1999) + w(time=01jul2000) + w(time=01jul2007) + w(time=01jul2010) + w(time=01jul2011))/14'  
'define t08a = ( w(time=01aug1964) + w(time=01aug1970) + w(time=01aug1971) + w(time=01aug1973) + w(time=01aug1975) + w(time=01aug1984) + w(time=01aug1988) + w(time=01aug1995) + w(time=01aug1998) + w(time=01aug1999) + w(time=01aug2000) + w(time=01aug2007) + w(time=01aug2010) + w(time=01aug2011))/14'  
'define t09a = ( w(time=01sep1964) + w(time=01sep1970) + w(time=01sep1971) + w(time=01sep1973) + w(time=01sep1975) + w(time=01sep1984) + w(time=01sep1988) + w(time=01sep1995) + w(time=01sep1998) + w(time=01sep1999) + w(time=01sep2000) + w(time=01sep2007) + w(time=01sep2010) + w(time=01sep2011))/14'  
'define t10a = ( w(time=01oct1964) + w(time=01oct1970) + w(time=01oct1971) + w(time=01oct1973) + w(time=01oct1975) + w(time=01oct1984) + w(time=01oct1988) + w(time=01oct1995) + w(time=01oct1998) + w(time=01oct1999) + w(time=01oct2000) + w(time=01oct2007) + w(time=01oct2010) + w(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map oj2p -levels -0.02 0.02 0.0025'
'd smth9(tinva-tinv)'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map oj2p -levels -0.02 0.02 0.0025'
'd smth9(tvera-tver)'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-Vv_925-INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (Pa/s)'
return