*compuesto SST_inv_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ORAS5-SAL-58_20.nc'
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
'define t11 = ave(sosaline,t=35,t=756,12)'
'define t12 = ave(sosaline,t=36,t=756,12)'
'define t01 = ave(sosaline,t=25,t=756,12)'
'define t02 = ave(sosaline,t=26,t=756,12)'
'define t03 = ave(sosaline,t=27,t=756,12)'
'define t04 = ave(sosaline,t=28,t=756,12)'
'define tinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑA
'define t11a = ( sosaline(time=01nov1970) + sosaline(time=01nov1973) + sosaline(time=01nov1974) + sosaline(time=01nov1975) + sosaline(time=01nov1984) + sosaline(time=01nov1988) + sosaline(time=01nov1995) + sosaline(time=01nov1998) + sosaline(time=01nov2000) + sosaline(time=01nov2005) + sosaline(time=01nov2007) + sosaline(time=01nov2008) + sosaline(time=01nov2010) + sosaline(time=01nov2011) + sosaline(time=01nov2017) + sosaline(time=01nov2020) )/16'
'define t12a = ( sosaline(time=01dec1970) + sosaline(time=01dec1973) + sosaline(time=01dec1974) + sosaline(time=01dec1975) + sosaline(time=01dec1984) + sosaline(time=01dec1988) + sosaline(time=01dec1995) + sosaline(time=01dec1998) + sosaline(time=01dec2000) + sosaline(time=01dec2005) + sosaline(time=01dec2007) + sosaline(time=01dec2008) + sosaline(time=01dec2010) + sosaline(time=01dec2011) + sosaline(time=01dec2017) + sosaline(time=01dec2020) )/16'
'define t01a = ( sosaline(time=01jan1971) + sosaline(time=01jan1974) + sosaline(time=01jan1975) + sosaline(time=01jan1976) + sosaline(time=01jan1985) + sosaline(time=01jan1989) + sosaline(time=01jan1996) + sosaline(time=01jan1999) + sosaline(time=01jan2001) + sosaline(time=01jan2006) + sosaline(time=01jan2008) + sosaline(time=01jan2009) + sosaline(time=01jan2011) + sosaline(time=01jan2012) + sosaline(time=01jan2018))/15'
'define t02a = ( sosaline(time=01feb1971) + sosaline(time=01feb1974) + sosaline(time=01feb1975) + sosaline(time=01feb1976) + sosaline(time=01feb1985) + sosaline(time=01feb1989) + sosaline(time=01feb1996) + sosaline(time=01feb1999) + sosaline(time=01feb2001) + sosaline(time=01feb2006) + sosaline(time=01feb2008) + sosaline(time=01feb2009) + sosaline(time=01feb2011) + sosaline(time=01feb2012) + sosaline(time=01feb2018))/15'
'define t03a = ( sosaline(time=01mar1971) + sosaline(time=01mar1974) + sosaline(time=01mar1975) + sosaline(time=01mar1976) + sosaline(time=01mar1985) + sosaline(time=01mar1989) + sosaline(time=01mar1996) + sosaline(time=01mar1999) + sosaline(time=01mar2001) + sosaline(time=01mar2006) + sosaline(time=01mar2008) + sosaline(time=01mar2009) + sosaline(time=01mar2011) + sosaline(time=01mar2012) + sosaline(time=01mar2018))/15'
'define t04a = ( sosaline(time=01apr1971) + sosaline(time=01apr1974) + sosaline(time=01apr1975) + sosaline(time=01apr1976) + sosaline(time=01apr1985) + sosaline(time=01apr1989) + sosaline(time=01apr1996) + sosaline(time=01apr1999) + sosaline(time=01apr2001) + sosaline(time=01apr2006) + sosaline(time=01apr2008) + sosaline(time=01apr2009) + sosaline(time=01apr2011) + sosaline(time=01apr2012) + sosaline(time=01apr2018))/15'
'define tinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

*VERANO CLIMA
'define sosalineM = ave(sosaline,t=29,t=756,12)'
'define sosalineJn = ave(sosaline,t=30,t=756,12)'
'define sosalineJl = ave(sosaline,t=31,t=756,12)'
'define sosalineA = ave(sosaline,t=32,t=756,12)'
'define sosalineS = ave(sosaline,t=33,t=756,12)'
'define sosalineO = ave(sosaline,t=34,t=756,12)'
'define tver = (sosalineM + sosalineJn + sosalineJl + sosalineA + sosalineS + sosalineO)/6'

*VERANOS NIÑA
'define t05a = ( sosaline(time=01may1964) + sosaline(time=01may1970) + sosaline(time=01may1971) + sosaline(time=01may1973) + sosaline(time=01may1975) + sosaline(time=01may1984) + sosaline(time=01may1988) + sosaline(time=01may1995) + sosaline(time=01may1998) + sosaline(time=01may1999) + sosaline(time=01may2000) + sosaline(time=01may2007) + sosaline(time=01may2010) + sosaline(time=01may2011))/14'  
'define t06a = ( sosaline(time=01jun1964) + sosaline(time=01jun1970) + sosaline(time=01jun1971) + sosaline(time=01jun1973) + sosaline(time=01jun1975) + sosaline(time=01jun1984) + sosaline(time=01jun1988) + sosaline(time=01jun1995) + sosaline(time=01jun1998) + sosaline(time=01jun1999) + sosaline(time=01jun2000) + sosaline(time=01jun2007) + sosaline(time=01jun2010) + sosaline(time=01jun2011))/14'  
'define t07a = ( sosaline(time=01jul1964) + sosaline(time=01jul1970) + sosaline(time=01jul1971) + sosaline(time=01jul1973) + sosaline(time=01jul1975) + sosaline(time=01jul1984) + sosaline(time=01jul1988) + sosaline(time=01jul1995) + sosaline(time=01jul1998) + sosaline(time=01jul1999) + sosaline(time=01jul2000) + sosaline(time=01jul2007) + sosaline(time=01jul2010) + sosaline(time=01jul2011))/14'  
'define t08a = ( sosaline(time=01aug1964) + sosaline(time=01aug1970) + sosaline(time=01aug1971) + sosaline(time=01aug1973) + sosaline(time=01aug1975) + sosaline(time=01aug1984) + sosaline(time=01aug1988) + sosaline(time=01aug1995) + sosaline(time=01aug1998) + sosaline(time=01aug1999) + sosaline(time=01aug2000) + sosaline(time=01aug2007) + sosaline(time=01aug2010) + sosaline(time=01aug2011))/14'  
'define t09a = ( sosaline(time=01sep1964) + sosaline(time=01sep1970) + sosaline(time=01sep1971) + sosaline(time=01sep1973) + sosaline(time=01sep1975) + sosaline(time=01sep1984) + sosaline(time=01sep1988) + sosaline(time=01sep1995) + sosaline(time=01sep1998) + sosaline(time=01sep1999) + sosaline(time=01sep2000) + sosaline(time=01sep2007) + sosaline(time=01sep2010) + sosaline(time=01sep2011))/14'  
'define t10a = ( sosaline(time=01oct1964) + sosaline(time=01oct1970) + sosaline(time=01oct1971) + sosaline(time=01oct1973) + sosaline(time=01oct1975) + sosaline(time=01oct1984) + sosaline(time=01oct1988) + sosaline(time=01oct1995) + sosaline(time=01oct1998) + sosaline(time=01oct1999) + sosaline(time=01oct2000) + sosaline(time=01oct2007) + sosaline(time=01oct2010) + sosaline(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

'set parea 0.5 5.25 2 5.5'
'../colormaps_jM.gs -map b2r -levels -1 1 0.1'
'd tinva-tinv'
*'../xcbar2.gs 0.5 5.25 1.25 1.5 -edge triangle -dir h -line on -fs 5'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map b2r -levels -1 1 0.1'
'd (tvera-tver)'
'../xcbar2.gs 0.5 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 5'
etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-SAL-INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (PSU)'
return

