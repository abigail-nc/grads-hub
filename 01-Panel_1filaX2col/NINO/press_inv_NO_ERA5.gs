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

*INVIERNOS NIÑO
'define t11o = ( sp(time=01nov1963) + sp(time=01nov1965) + sp(time=01nov1968) + sp(time=01nov1972) + sp(time=01nov1976) + sp(time=01nov1979) + sp(time=01nov1982) + sp(time=01nov1986) + sp(time=01nov1987) + sp(time=01nov1991) + sp(time=01nov1994) + sp(time=01nov1997) + sp(time=01nov2002) + sp(time=01nov2004) + sp(time=01nov2009) + sp(time=01nov2015) + sp(time=01nov2018))/17'
'define t12o = ( sp(time=01dec1963) + sp(time=01dec1965) + sp(time=01dec1968) + sp(time=01dec1972) + sp(time=01dec1976) + sp(time=01dec1979) + sp(time=01dec1982) + sp(time=01dec1986) + sp(time=01dec1987) + sp(time=01dec1991) + sp(time=01dec1994) + sp(time=01dec1997) + sp(time=01dec2002) + sp(time=01dec2004) + sp(time=01dec2009) + sp(time=01dec2015) + sp(time=01dec2018))/17'
'define t01o = ( sp(time=01jan1964) + sp(time=01jan1966) + sp(time=01jan1969) + sp(time=01jan1973) + sp(time=01jan1977) + sp(time=01jan1980) + sp(time=01jan1983) + sp(time=01jan1987) + sp(time=01jan1988) + sp(time=01jan1992) + sp(time=01jan1995) + sp(time=01jan1996) + sp(time=01jan2003) + sp(time=01jan2005) + sp(time=01jan2010) + sp(time=01jan2016) + sp(time=01jan2019))/17'
'define t02o = ( sp(time=01feb1964) + sp(time=01feb1966) + sp(time=01feb1969) + sp(time=01feb1973) + sp(time=01feb1977) + sp(time=01feb1980) + sp(time=01feb1983) + sp(time=01feb1987) + sp(time=01feb1988) + sp(time=01feb1992) + sp(time=01feb1995) + sp(time=01feb1996) + sp(time=01feb2003) + sp(time=01feb2005) + sp(time=01feb2010) + sp(time=01feb2016) + sp(time=01feb2019))/17'
'define t03o = ( sp(time=01mar1964) + sp(time=01mar1966) + sp(time=01mar1969) + sp(time=01mar1973) + sp(time=01mar1977) + sp(time=01mar1980) + sp(time=01mar1983) + sp(time=01mar1987) + sp(time=01mar1988) + sp(time=01mar1992) + sp(time=01mar1995) + sp(time=01mar1996) + sp(time=01mar2003) + sp(time=01mar2005) + sp(time=01mar2010) + sp(time=01mar2016) + sp(time=01mar2019))/17'
'define t04o = ( sp(time=01apr1964) + sp(time=01apr1966) + sp(time=01apr1969) + sp(time=01apr1973) + sp(time=01apr1977) + sp(time=01apr1980) + sp(time=01apr1983) + sp(time=01apr1987) + sp(time=01apr1988) + sp(time=01apr1992) + sp(time=01apr1995) + sp(time=01apr1996) + sp(time=01apr2003) + sp(time=01apr2005) + sp(time=01apr2010) + sp(time=01apr2016) + sp(time=01apr2019))/17'
'define tinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)/100'

*VERANO CLIMA
'define spM = ave(sp,t=29,t=756,12)'
'define spJn = ave(sp,t=30,t=756,12)'
'define spJl = ave(sp,t=31,t=756,12)'
'define spA = ave(sp,t=32,t=756,12)'
'define spS = ave(sp,t=33,t=756,12)'
'define spO = ave(sp,t=34,t=756,12)'
'define tver = ((spM + spJn + spJl + spA + spS + spO)/6)/100'

*VERANO ENSO
'define t05o = ( sp(time=01may1963) + sp(time=01may1965) + sp(time=01may1972) + sp(time=01may1982) + sp(time=01may1987) + sp(time=01may1991) + sp(time=01may1997) + sp(time=01may2002) + sp(time=01may2004) + sp(time=01may2009) + sp(time=01may2015))/11'  
'define t06o = ( sp(time=01jun1963) + sp(time=01jun1965) + sp(time=01jun1972) + sp(time=01jun1982) + sp(time=01jun1987) + sp(time=01jun1991) + sp(time=01jun1997) + sp(time=01jun2002) + sp(time=01jun2004) + sp(time=01jun2009) + sp(time=01jun2015))/11'  
'define t07o = ( sp(time=01jul1963) + sp(time=01jul1965) + sp(time=01jul1972) + sp(time=01jul1982) + sp(time=01jul1987) + sp(time=01jul1991) + sp(time=01jul1997) + sp(time=01jul2002) + sp(time=01jul2004) + sp(time=01jul2009) + sp(time=01jul2015))/11'  
'define t08o = ( sp(time=01aug1963) + sp(time=01aug1965) + sp(time=01aug1972) + sp(time=01aug1982) + sp(time=01aug1987) + sp(time=01aug1991) + sp(time=01aug1997) + sp(time=01aug2002) + sp(time=01aug2004) + sp(time=01aug2009) + sp(time=01aug2015))/11'  
'define t09o = ( sp(time=01sep1963) + sp(time=01sep1965) + sp(time=01sep1972) + sp(time=01sep1982) + sp(time=01sep1987) + sp(time=01sep1991) + sp(time=01sep1997) + sp(time=01sep2002) + sp(time=01sep2004) + sp(time=01sep2009) + sp(time=01sep2015))/11'  
'define t10o = ( sp(time=01oct1963) + sp(time=01oct1965) + sp(time=01oct1972) + sp(time=01oct1982) + sp(time=01oct1987) + sp(time=01oct1991) + sp(time=01oct1997) + sp(time=01oct2002) + sp(time=01oct2004) + sp(time=01oct2009) + sp(time=01oct2015))/11'  
'define tvero = ((t05o + t06o + t07o + t08o + t09o + t10o)/6)/100'

'set parea 0.5 5.25 2 5.5'
'../colormaps_jM.gs -map y2b -flipped -levels -0.8 0.9 0.05'
'd tinvo-tinv'
'../xcbar2.gs 0.5 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 4'

'set parea 5.75 10.5 2 5.5'
*'../colormaps_v2.gs -map y2b -flipped -levels -0.25 0.25 0.05'
'../colormaps_jM.gs -map y2b -flipped -levels -0.8 0.9 0.05'
'd tvero-tver'
*'../xcbar2.gs 5.75 10.5  1.25 1.5 -edge triangle -dir h -line on -fs 4'
etiquetas()
'printim ../../../FIGURAS/NINO/ENSO-press-ANOM-INV-VER_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (hPa)'
return

