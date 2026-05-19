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

*INVIERNOS NIÑA
'define t11a = ( sosstsst(time=01nov1970) + sosstsst(time=01nov1973) + sosstsst(time=01nov1974) + sosstsst(time=01nov1975) + sosstsst(time=01nov1984) + sosstsst(time=01nov1988) + sosstsst(time=01nov1995) + sosstsst(time=01nov1998) + sosstsst(time=01nov2000) + sosstsst(time=01nov2005) + sosstsst(time=01nov2007) + sosstsst(time=01nov2008) + sosstsst(time=01nov2010) + sosstsst(time=01nov2011) + sosstsst(time=01nov2017) + sosstsst(time=01nov2020) )/16'
'define t12a = ( sosstsst(time=01dec1970) + sosstsst(time=01dec1973) + sosstsst(time=01dec1974) + sosstsst(time=01dec1975) + sosstsst(time=01dec1984) + sosstsst(time=01dec1988) + sosstsst(time=01dec1995) + sosstsst(time=01dec1998) + sosstsst(time=01dec2000) + sosstsst(time=01dec2005) + sosstsst(time=01dec2007) + sosstsst(time=01dec2008) + sosstsst(time=01dec2010) + sosstsst(time=01dec2011) + sosstsst(time=01dec2017) + sosstsst(time=01dec2020) )/16'
'define t01a = ( sosstsst(time=01jan1971) + sosstsst(time=01jan1974) + sosstsst(time=01jan1975) + sosstsst(time=01jan1976) + sosstsst(time=01jan1985) + sosstsst(time=01jan1989) + sosstsst(time=01jan1996) + sosstsst(time=01jan1999) + sosstsst(time=01jan2001) + sosstsst(time=01jan2006) + sosstsst(time=01jan2008) + sosstsst(time=01jan2009) + sosstsst(time=01jan2011) + sosstsst(time=01jan2012) + sosstsst(time=01jan2018) + sosstsst(time=01jan2021) )/16'
'define t02a = ( sosstsst(time=01feb1971) + sosstsst(time=01feb1974) + sosstsst(time=01feb1975) + sosstsst(time=01feb1976) + sosstsst(time=01feb1985) + sosstsst(time=01feb1989) + sosstsst(time=01feb1996) + sosstsst(time=01feb1999) + sosstsst(time=01feb2001) + sosstsst(time=01feb2006) + sosstsst(time=01feb2008) + sosstsst(time=01feb2009) + sosstsst(time=01feb2011) + sosstsst(time=01feb2012) + sosstsst(time=01feb2018) + sosstsst(time=01feb2021) )/16'
'define t03a = ( sosstsst(time=01mar1971) + sosstsst(time=01mar1974) + sosstsst(time=01mar1975) + sosstsst(time=01mar1976) + sosstsst(time=01mar1985) + sosstsst(time=01mar1989) + sosstsst(time=01mar1996) + sosstsst(time=01mar1999) + sosstsst(time=01mar2001) + sosstsst(time=01mar2006) + sosstsst(time=01mar2008) + sosstsst(time=01mar2009) + sosstsst(time=01mar2011) + sosstsst(time=01mar2012) + sosstsst(time=01mar2018) + sosstsst(time=01mar2021) )/16'
'define t04a = ( sosstsst(time=01apr1971) + sosstsst(time=01apr1974) + sosstsst(time=01apr1975) + sosstsst(time=01apr1976) + sosstsst(time=01apr1985) + sosstsst(time=01apr1989) + sosstsst(time=01apr1996) + sosstsst(time=01apr1999) + sosstsst(time=01apr2001) + sosstsst(time=01apr2006) + sosstsst(time=01apr2008) + sosstsst(time=01apr2009) + sosstsst(time=01apr2011) + sosstsst(time=01apr2012) + sosstsst(time=01apr2018) + sosstsst(time=01apr2021) )/16'
'define tinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

*VERANO CLIMA
'define sosstsstM = ave(sosstsst,t=29,t=756,12)'
'define sosstsstJn = ave(sosstsst,t=30,t=756,12)'
'define sosstsstJl = ave(sosstsst,t=31,t=756,12)'
'define sosstsstA = ave(sosstsst,t=32,t=756,12)'
'define sosstsstS = ave(sosstsst,t=33,t=756,12)'
'define sosstsstO = ave(sosstsst,t=34,t=756,12)'
'define tver = (sosstsstM + sosstsstJn + sosstsstJl + sosstsstA + sosstsstS + sosstsstO)/6'

*VERANOS NIÑA
'define t05a = ( sosstsst(time=01may1964) + sosstsst(time=01may1970) + sosstsst(time=01may1971) + sosstsst(time=01may1973) + sosstsst(time=01may1975) + sosstsst(time=01may1984) + sosstsst(time=01may1988) + sosstsst(time=01may1995) + sosstsst(time=01may1998) + sosstsst(time=01may1999) + sosstsst(time=01may2000) + sosstsst(time=01may2007) + sosstsst(time=01may2010) + sosstsst(time=01may2011))/14'  
'define t06a = ( sosstsst(time=01jun1964) + sosstsst(time=01jun1970) + sosstsst(time=01jun1971) + sosstsst(time=01jun1973) + sosstsst(time=01jun1975) + sosstsst(time=01jun1984) + sosstsst(time=01jun1988) + sosstsst(time=01jun1995) + sosstsst(time=01jun1998) + sosstsst(time=01jun1999) + sosstsst(time=01jun2000) + sosstsst(time=01jun2007) + sosstsst(time=01jun2010) + sosstsst(time=01jun2011))/14'  
'define t07a = ( sosstsst(time=01jul1964) + sosstsst(time=01jul1970) + sosstsst(time=01jul1971) + sosstsst(time=01jul1973) + sosstsst(time=01jul1975) + sosstsst(time=01jul1984) + sosstsst(time=01jul1988) + sosstsst(time=01jul1995) + sosstsst(time=01jul1998) + sosstsst(time=01jul1999) + sosstsst(time=01jul2000) + sosstsst(time=01jul2007) + sosstsst(time=01jul2010) + sosstsst(time=01jul2011))/14'  
'define t08a = ( sosstsst(time=01aug1964) + sosstsst(time=01aug1970) + sosstsst(time=01aug1971) + sosstsst(time=01aug1973) + sosstsst(time=01aug1975) + sosstsst(time=01aug1984) + sosstsst(time=01aug1988) + sosstsst(time=01aug1995) + sosstsst(time=01aug1998) + sosstsst(time=01aug1999) + sosstsst(time=01aug2000) + sosstsst(time=01aug2007) + sosstsst(time=01aug2010) + sosstsst(time=01aug2011))/14'  
'define t09a = ( sosstsst(time=01sep1964) + sosstsst(time=01sep1970) + sosstsst(time=01sep1971) + sosstsst(time=01sep1973) + sosstsst(time=01sep1975) + sosstsst(time=01sep1984) + sosstsst(time=01sep1988) + sosstsst(time=01sep1995) + sosstsst(time=01sep1998) + sosstsst(time=01sep1999) + sosstsst(time=01sep2000) + sosstsst(time=01sep2007) + sosstsst(time=01sep2010) + sosstsst(time=01sep2011))/14'  
'define t10a = ( sosstsst(time=01oct1964) + sosstsst(time=01oct1970) + sosstsst(time=01oct1971) + sosstsst(time=01oct1973) + sosstsst(time=01oct1975) + sosstsst(time=01oct1984) + sosstsst(time=01oct1988) + sosstsst(time=01oct1995) + sosstsst(time=01oct1998) + sosstsst(time=01oct1999) + sosstsst(time=01oct2000) + sosstsst(time=01oct2007) + sosstsst(time=01oct2010) + sosstsst(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tinvA-tinv'
*'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map b2r -levels -2 2 0.15'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-SST-INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string  5.1 1.7 (`0`a0`nC)'
return
