*compuesto uvLev-_ver_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-uvLev-59_21.nc'
'set display color white'
'c'
'set lon 240 280'
'set lat 14 35'
'set lev 925'
'set display color white'
'set mproj scaled'
'set mpdset hires estados'
'set grads off'
'set gxout shaded'
'set xlab off'
'set ylab off'

*para uvm se define u v uo vo

*INVIERNOS CLIMA u
'define tu11 = ave(u,t=35,t=756,12)'
'define tu12 = ave(u,t=36,t=756,12)'
'define tu01 = ave(u,t=25,t=756,12)'
'define tu02 = ave(u,t=26,t=756,12)'
'define tu03 = ave(u,t=27,t=756,12)'
'define tu04 = ave(u,t=28,t=756,12)'
'define uinv = ((tu11 + tu12 + tu01 + tu02 + tu03 + tu04)/6)'

*INVIERNOS NIÑO uo
'define t11o = ( u(time=01nov1963) + u(time=01nov1965) + u(time=01nov1968) + u(time=01nov1972) + u(time=01nov1976) + u(time=01nov1979) + u(time=01nov1982) + u(time=01nov1986) + u(time=01nov1987) + u(time=01nov1991) + u(time=01nov1994) + u(time=01nov1997) + u(time=01nov2002) + u(time=01nov2004) + u(time=01nov2009) + u(time=01nov2015) + u(time=01nov2018))/17'
'define t12o = ( u(time=01dec1963) + u(time=01dec1965) + u(time=01dec1968) + u(time=01dec1972) + u(time=01dec1976) + u(time=01dec1979) + u(time=01dec1982) + u(time=01dec1986) + u(time=01dec1987) + u(time=01dec1991) + u(time=01dec1994) + u(time=01dec1997) + u(time=01dec2002) + u(time=01dec2004) + u(time=01dec2009) + u(time=01dec2015) + u(time=01dec2018))/17'
'define t01o = ( u(time=01jan1964) + u(time=01jan1966) + u(time=01jan1969) + u(time=01jan1973) + u(time=01jan1977) + u(time=01jan1980) + u(time=01jan1983) + u(time=01jan1987) + u(time=01jan1988) + u(time=01jan1992) + u(time=01jan1995) + u(time=01jan1996) + u(time=01jan2003) + u(time=01jan2005) + u(time=01jan2010) + u(time=01jan2016) + u(time=01jan2019))/17'
'define t02o = ( u(time=01feb1964) + u(time=01feb1966) + u(time=01feb1969) + u(time=01feb1973) + u(time=01feb1977) + u(time=01feb1980) + u(time=01feb1983) + u(time=01feb1987) + u(time=01feb1988) + u(time=01feb1992) + u(time=01feb1995) + u(time=01feb1996) + u(time=01feb2003) + u(time=01feb2005) + u(time=01feb2010) + u(time=01feb2016) + u(time=01feb2019))/17'
'define t03o = ( u(time=01mar1964) + u(time=01mar1966) + u(time=01mar1969) + u(time=01mar1973) + u(time=01mar1977) + u(time=01mar1980) + u(time=01mar1983) + u(time=01mar1987) + u(time=01mar1988) + u(time=01mar1992) + u(time=01mar1995) + u(time=01mar1996) + u(time=01mar2003) + u(time=01mar2005) + u(time=01mar2010) + u(time=01mar2016) + u(time=01mar2019))/17'
'define t04o = ( u(time=01apr1964) + u(time=01apr1966) + u(time=01apr1969) + u(time=01apr1973) + u(time=01apr1977) + u(time=01apr1980) + u(time=01apr1983) + u(time=01apr1987) + u(time=01apr1988) + u(time=01apr1992) + u(time=01apr1995) + u(time=01apr1996) + u(time=01apr2003) + u(time=01apr2005) + u(time=01apr2010) + u(time=01apr2016) + u(time=01apr2019))/17'
'define uinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

*INVIERNO CLIMA v
'define tv11 = ave(v,t=35,t=756,12)'
'define tv12 = ave(v,t=36,t=756,12)'
'define tv01 = ave(v,t=25,t=756,12)'
'define tv02 = ave(v,t=26,t=756,12)'
'define tv03 = ave(v,t=27,t=756,12)'
'define tv04 = ave(v,t=28,t=756,12)'
'define vinv = ((tv11 + tv12 + tv01 + tv02 + tv03 + tv04)/6)'

*INVIERNOS NIÑO vo
'define t11o = ( v(time=01nov1963) + v(time=01nov1965) + v(time=01nov1968) + v(time=01nov1972) + v(time=01nov1976) + v(time=01nov1979) + v(time=01nov1982) + v(time=01nov1986) + v(time=01nov1987) + v(time=01nov1991) + v(time=01nov1994) + v(time=01nov1997) + v(time=01nov2002) + v(time=01nov2004) + v(time=01nov2009) + v(time=01nov2015) + v(time=01nov2018))/17'
'define t12o = ( v(time=01dec1963) + v(time=01dec1965) + v(time=01dec1968) + v(time=01dec1972) + v(time=01dec1976) + v(time=01dec1979) + v(time=01dec1982) + v(time=01dec1986) + v(time=01dec1987) + v(time=01dec1991) + v(time=01dec1994) + v(time=01dec1997) + v(time=01dec2002) + v(time=01dec2004) + v(time=01dec2009) + v(time=01dec2015) + v(time=01dec2018))/17'
'define t01o = ( v(time=01jan1964) + v(time=01jan1966) + v(time=01jan1969) + v(time=01jan1973) + v(time=01jan1977) + v(time=01jan1980) + v(time=01jan1983) + v(time=01jan1987) + v(time=01jan1988) + v(time=01jan1992) + v(time=01jan1995) + v(time=01jan1996) + v(time=01jan2003) + v(time=01jan2005) + v(time=01jan2010) + v(time=01jan2016) + v(time=01jan2019))/17'
'define t02o = ( v(time=01feb1964) + v(time=01feb1966) + v(time=01feb1969) + v(time=01feb1973) + v(time=01feb1977) + v(time=01feb1980) + v(time=01feb1983) + v(time=01feb1987) + v(time=01feb1988) + v(time=01feb1992) + v(time=01feb1995) + v(time=01feb1996) + v(time=01feb2003) + v(time=01feb2005) + v(time=01feb2010) + v(time=01feb2016) + v(time=01feb2019))/17'
'define t03o = ( v(time=01mar1964) + v(time=01mar1966) + v(time=01mar1969) + v(time=01mar1973) + v(time=01mar1977) + v(time=01mar1980) + v(time=01mar1983) + v(time=01mar1987) + v(time=01mar1988) + v(time=01mar1992) + v(time=01mar1995) + v(time=01mar1996) + v(time=01mar2003) + v(time=01mar2005) + v(time=01mar2010) + v(time=01mar2016) + v(time=01mar2019))/17'
'define t04o = ( v(time=01apr1964) + v(time=01apr1966) + v(time=01apr1969) + v(time=01apr1973) + v(time=01apr1977) + v(time=01apr1980) + v(time=01apr1983) + v(time=01apr1987) + v(time=01apr1988) + v(time=01apr1992) + v(time=01apr1995) + v(time=01apr1996) + v(time=01apr2003) + v(time=01apr2005) + v(time=01apr2010) + v(time=01apr2016) + v(time=01apr2019))/17'
'define vinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

*VERANO CLIMA u
'define uM = ave(u,t=29,t=756,12)'
'define uJn = ave(u,t=30,t=756,12)'
'define uJl = ave(u,t=31,t=756,12)'
'define uA = ave(u,t=32,t=756,12)'
'define uS = ave(u,t=33,t=756,12)'
'define uO = ave(u,t=34,t=756,12)'
'define uver = (uM + uJn + uJl + uA + uS + uO)/6'

*VERANO ENSO uo
'define t05o = ( u(time=01may1963) + u(time=01may1965) + u(time=01may1972) + u(time=01may1982) + u(time=01may1987) + u(time=01may1991) + u(time=01may1997) + u(time=01may2002) + u(time=01may2004) + u(time=01may2009) + u(time=01may2015))/11'  
'define t06o = ( u(time=01jun1963) + u(time=01jun1965) + u(time=01jun1972) + u(time=01jun1982) + u(time=01jun1987) + u(time=01jun1991) + u(time=01jun1997) + u(time=01jun2002) + u(time=01jun2004) + u(time=01jun2009) + u(time=01jun2015))/11'  
'define t07o = ( u(time=01jul1963) + u(time=01jul1965) + u(time=01jul1972) + u(time=01jul1982) + u(time=01jul1987) + u(time=01jul1991) + u(time=01jul1997) + u(time=01jul2002) + u(time=01jul2004) + u(time=01jul2009) + u(time=01jul2015))/11'  
'define t08o = ( u(time=01aug1963) + u(time=01aug1965) + u(time=01aug1972) + u(time=01aug1982) + u(time=01aug1987) + u(time=01aug1991) + u(time=01aug1997) + u(time=01aug2002) + u(time=01aug2004) + u(time=01aug2009) + u(time=01aug2015))/11'  
'define t09o = ( u(time=01sep1963) + u(time=01sep1965) + u(time=01sep1972) + u(time=01sep1982) + u(time=01sep1987) + u(time=01sep1991) + u(time=01sep1997) + u(time=01sep2002) + u(time=01sep2004) + u(time=01sep2009) + u(time=01sep2015))/11'  
'define t10o = ( u(time=01oct1963) + u(time=01oct1965) + u(time=01oct1972) + u(time=01oct1982) + u(time=01oct1987) + u(time=01oct1991) + u(time=01oct1997) + u(time=01oct2002) + u(time=01oct2004) + u(time=01oct2009) + u(time=01oct2015))/11'  
'define uvero = ((t05o + t06o + t07o + t08o + t09o + t10o)/6)'

*VERANO CLIMA v
'define vM = ave(v,t=29,t=756,12)'
'define vJn = ave(v,t=30,t=756,12)'
'define vJl = ave(v,t=31,t=756,12)'
'define vA = ave(v,t=32,t=756,12)'
'define vS = ave(v,t=33,t=756,12)'
'define vO = ave(v,t=34,t=756,12)'
'define vver = (vM + vJn + vJl + vA + vS + vO)/6'

*VERANO ENSO vo
'define t05o = ( v(time=01may1963) + v(time=01may1965) + v(time=01may1972) + v(time=01may1982) + v(time=01may1987) + v(time=01may1991) + v(time=01may1997) + v(time=01may2002) + v(time=01may2004) + v(time=01may2009) + v(time=01may2015))/11'  
'define t06o = ( v(time=01jun1963) + v(time=01jun1965) + v(time=01jun1972) + v(time=01jun1982) + v(time=01jun1987) + v(time=01jun1991) + v(time=01jun1997) + v(time=01jun2002) + v(time=01jun2004) + v(time=01jun2009) + v(time=01jun2015))/11'  
'define t07o = ( v(time=01jul1963) + v(time=01jul1965) + v(time=01jul1972) + v(time=01jul1982) + v(time=01jul1987) + v(time=01jul1991) + v(time=01jul1997) + v(time=01jul2002) + v(time=01jul2004) + v(time=01jul2009) + v(time=01jul2015))/11'  
'define t08o = ( v(time=01aug1963) + v(time=01aug1965) + v(time=01aug1972) + v(time=01aug1982) + v(time=01aug1987) + v(time=01aug1991) + v(time=01aug1997) + v(time=01aug2002) + v(time=01aug2004) + v(time=01aug2009) + v(time=01aug2015))/11'  
'define t09o = ( v(time=01sep1963) + v(time=01sep1965) + v(time=01sep1972) + v(time=01sep1982) + v(time=01sep1987) + v(time=01sep1991) + v(time=01sep1997) + v(time=01sep2002) + v(time=01sep2004) + v(time=01sep2009) + v(time=01sep2015))/11'  
'define t10o = ( v(time=01oct1963) + v(time=01oct1965) + v(time=01oct1972) + v(time=01oct1982) + v(time=01oct1987) + v(time=01oct1991) + v(time=01oct1997) + v(time=01oct2002) + v(time=01oct2004) + v(time=01oct2009) + v(time=01oct2015))/11'  
'define vvero = ((t05o + t06o + t07o + t08o + t09o + t10o)/6)'

*dar formato al vector
'set gxout vector'
len = 0.3
scale = 10
xrit = 6.5
ybot = 1.55
'set arrscl 'len' 'scale
'set arrlab off'
*'d u;v'
rc = arrow(xrit-0.25,ybot+0.2,len,scale)

'define udif = uinvo-uinv'
'define vdif = vinvo-vinv'

function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.1'
'draw string 'x' 'y-0.1' 'scale

'define udif = uinvo-uinv'
'define vdif = vinvo-vinv'

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map Hot -flipped -levels -3 3.3 0.3'
'd mag(uinvo,vinvo)-mag(uinv,vinv)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.5 5.25 1.25 1.5 -edge triangle -dir h -line on -fs 3'

'define udif = uvero-uver'
'define vdif = vvero-vver'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map Hot -flipped -levels -2 1.9 0.2'
'd mag(uvero,vvero)-mag(uver,vver)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 5.75 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 3'
etiquetas()
'printim ../../../FIGURAS/NINO/ENSO-uvLev-925-ANOM_INV_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (m/s)'
return

