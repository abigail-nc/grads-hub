*compuesto press_inv_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-press-59_21.nc'
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
'define t11 = ave(sp,t=35,t=756,12)'
'define t12 = ave(sp,t=36,t=756,12)'
'define t01 = ave(sp,t=25,t=756,12)'
'define t02 = ave(sp,t=26,t=756,12)'
'define t03 = ave(sp,t=27,t=756,12)'
'define t04 = ave(sp,t=28,t=756,12)'
'define tinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)/100'

*INVIERNOS NIÑA
'define t11a = ( sp(time=01nov1970) + sp(time=01nov1973) + sp(time=01nov1974) + sp(time=01nov1975) + sp(time=01nov1984) + sp(time=01nov1988) + sp(time=01nov1995) + sp(time=01nov1998) + sp(time=01nov2000) + sp(time=01nov2005) + sp(time=01nov2007) + sp(time=01nov2008) + sp(time=01nov2010) + sp(time=01nov2011) + sp(time=01nov2017) + sp(time=01nov2020) )/16'
'define t12a = ( sp(time=01dec1970) + sp(time=01dec1973) + sp(time=01dec1974) + sp(time=01dec1975) + sp(time=01dec1984) + sp(time=01dec1988) + sp(time=01dec1995) + sp(time=01dec1998) + sp(time=01dec2000) + sp(time=01dec2005) + sp(time=01dec2007) + sp(time=01dec2008) + sp(time=01dec2010) + sp(time=01dec2011) + sp(time=01dec2017) + sp(time=01dec2020) )/16'
'define t01a = ( sp(time=01jan1971) + sp(time=01jan1974) + sp(time=01jan1975) + sp(time=01jan1976) + sp(time=01jan1985) + sp(time=01jan1989) + sp(time=01jan1996) + sp(time=01jan1999) + sp(time=01jan2001) + sp(time=01jan2006) + sp(time=01jan2008) + sp(time=01jan2009) + sp(time=01jan2011) + sp(time=01jan2012) + sp(time=01jan2018) + sp(time=01jan2021) )/16'
'define t02a = ( sp(time=01feb1971) + sp(time=01feb1974) + sp(time=01feb1975) + sp(time=01feb1976) + sp(time=01feb1985) + sp(time=01feb1989) + sp(time=01feb1996) + sp(time=01feb1999) + sp(time=01feb2001) + sp(time=01feb2006) + sp(time=01feb2008) + sp(time=01feb2009) + sp(time=01feb2011) + sp(time=01feb2012) + sp(time=01feb2018) + sp(time=01feb2021) )/16'
'define t03a = ( sp(time=01mar1971) + sp(time=01mar1974) + sp(time=01mar1975) + sp(time=01mar1976) + sp(time=01mar1985) + sp(time=01mar1989) + sp(time=01mar1996) + sp(time=01mar1999) + sp(time=01mar2001) + sp(time=01mar2006) + sp(time=01mar2008) + sp(time=01mar2009) + sp(time=01mar2011) + sp(time=01mar2012) + sp(time=01mar2018) + sp(time=01mar2021) )/16'
'define t04a = ( sp(time=01apr1971) + sp(time=01apr1974) + sp(time=01apr1975) + sp(time=01apr1976) + sp(time=01apr1985) + sp(time=01apr1989) + sp(time=01apr1996) + sp(time=01apr1999) + sp(time=01apr2001) + sp(time=01apr2006) + sp(time=01apr2008) + sp(time=01apr2009) + sp(time=01apr2011) + sp(time=01apr2012) + sp(time=01apr2018) + sp(time=01apr2021) )/16'
'define tinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)/100'

*VERANO CLIMA
'define spM = ave(sp,t=29,t=756,12)'
'define spJn = ave(sp,t=30,t=756,12)'
'define spJl = ave(sp,t=31,t=756,12)'
'define spA = ave(sp,t=32,t=756,12)'
'define spS = ave(sp,t=33,t=756,12)'
'define spO = ave(sp,t=34,t=756,12)'
'define tver = ((spM + spJn + spJl + spA + spS + spO)/6)/100'
 
*VERANOS NIÑA
'define t05a = ( sp(time=01may1964) + sp(time=01may1970) + sp(time=01may1971) + sp(time=01may1973) + sp(time=01may1975) + sp(time=01may1984) + sp(time=01may1988) + sp(time=01may1995) + sp(time=01may1998) + sp(time=01may1999) + sp(time=01may2000) + sp(time=01may2007) + sp(time=01may2010) + sp(time=01may2011))/14'  
'define t06a = ( sp(time=01jun1964) + sp(time=01jun1970) + sp(time=01jun1971) + sp(time=01jun1973) + sp(time=01jun1975) + sp(time=01jun1984) + sp(time=01jun1988) + sp(time=01jun1995) + sp(time=01jun1998) + sp(time=01jun1999) + sp(time=01jun2000) + sp(time=01jun2007) + sp(time=01jun2010) + sp(time=01jun2011))/14'  
'define t07a = ( sp(time=01jul1964) + sp(time=01jul1970) + sp(time=01jul1971) + sp(time=01jul1973) + sp(time=01jul1975) + sp(time=01jul1984) + sp(time=01jul1988) + sp(time=01jul1995) + sp(time=01jul1998) + sp(time=01jul1999) + sp(time=01jul2000) + sp(time=01jul2007) + sp(time=01jul2010) + sp(time=01jul2011))/14'  
'define t08a = ( sp(time=01aug1964) + sp(time=01aug1970) + sp(time=01aug1971) + sp(time=01aug1973) + sp(time=01aug1975) + sp(time=01aug1984) + sp(time=01aug1988) + sp(time=01aug1995) + sp(time=01aug1998) + sp(time=01aug1999) + sp(time=01aug2000) + sp(time=01aug2007) + sp(time=01aug2010) + sp(time=01aug2011))/14'  
'define t09a = ( sp(time=01sep1964) + sp(time=01sep1970) + sp(time=01sep1971) + sp(time=01sep1973) + sp(time=01sep1975) + sp(time=01sep1984) + sp(time=01sep1988) + sp(time=01sep1995) + sp(time=01sep1998) + sp(time=01sep1999) + sp(time=01sep2000) + sp(time=01sep2007) + sp(time=01sep2010) + sp(time=01sep2011))/14'  
'define t10a = ( sp(time=01oct1964) + sp(time=01oct1970) + sp(time=01oct1971) + sp(time=01oct1973) + sp(time=01oct1975) + sp(time=01oct1984) + sp(time=01oct1988) + sp(time=01oct1995) + sp(time=01oct1998) + sp(time=01oct1999) + sp(time=01oct2000) + sp(time=01oct2007) + sp(time=01oct2010) + sp(time=01oct2011))/14'  
'define tvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)/100'

'set parea 0.5 5.25 2 5.5'
'../colormaps_jM.gs -map y2b -flipped -levels -0.8 0.8 0.05'
'd tinva-tinv'
'../xcbar2.gs 0.5 5.25 1.25 1.5 -edge triangle -dir h -line on -fs 4'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map y2b -flipped -levels -0.25 0.25 0.025'
'd tvera-tver'
'../xcbar2.gs 5.75 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 4'
etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-press-INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (hPa)'
return

