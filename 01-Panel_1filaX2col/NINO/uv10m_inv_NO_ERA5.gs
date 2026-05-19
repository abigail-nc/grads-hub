*compuesto uv10m_ver_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ERA5-uv10m-59_21.nc'
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

*para uv10m se define u10 v10 u10o v10o

*INVIERNOS CLIMA u10
'define tu11 = ave(u10,t=35,t=756,12)'
'define tu12 = ave(u10,t=36,t=756,12)'
'define tu01 = ave(u10,t=25,t=756,12)'
'define tu02 = ave(u10,t=26,t=756,12)'
'define tu03 = ave(u10,t=27,t=756,12)'
'define tu04 = ave(u10,t=28,t=756,12)'
'define uinv = ((tu11 + tu12 + tu01 + tu02 + tu03 + tu04)/6)'

*INVIERNOS NIÑO u10o
'define t11o = ( u10(time=01nov1963) + u10(time=01nov1965) + u10(time=01nov1968) + u10(time=01nov1972) + u10(time=01nov1976) + u10(time=01nov1979) + u10(time=01nov1982) + u10(time=01nov1986) + u10(time=01nov1987) + u10(time=01nov1991) + u10(time=01nov1994) + u10(time=01nov1997) + u10(time=01nov2002) + u10(time=01nov2004) + u10(time=01nov2009) + u10(time=01nov2015) + u10(time=01nov2018))/17'
'define t12o = ( u10(time=01dec1963) + u10(time=01dec1965) + u10(time=01dec1968) + u10(time=01dec1972) + u10(time=01dec1976) + u10(time=01dec1979) + u10(time=01dec1982) + u10(time=01dec1986) + u10(time=01dec1987) + u10(time=01dec1991) + u10(time=01dec1994) + u10(time=01dec1997) + u10(time=01dec2002) + u10(time=01dec2004) + u10(time=01dec2009) + u10(time=01dec2015) + u10(time=01dec2018))/17'
'define t01o = ( u10(time=01jan1964) + u10(time=01jan1966) + u10(time=01jan1969) + u10(time=01jan1973) + u10(time=01jan1977) + u10(time=01jan1980) + u10(time=01jan1983) + u10(time=01jan1987) + u10(time=01jan1988) + u10(time=01jan1992) + u10(time=01jan1995) + u10(time=01jan1996) + u10(time=01jan2003) + u10(time=01jan2005) + u10(time=01jan2010) + u10(time=01jan2016) + u10(time=01jan2019))/17'
'define t02o = ( u10(time=01feb1964) + u10(time=01feb1966) + u10(time=01feb1969) + u10(time=01feb1973) + u10(time=01feb1977) + u10(time=01feb1980) + u10(time=01feb1983) + u10(time=01feb1987) + u10(time=01feb1988) + u10(time=01feb1992) + u10(time=01feb1995) + u10(time=01feb1996) + u10(time=01feb2003) + u10(time=01feb2005) + u10(time=01feb2010) + u10(time=01feb2016) + u10(time=01feb2019))/17'
'define t03o = ( u10(time=01mar1964) + u10(time=01mar1966) + u10(time=01mar1969) + u10(time=01mar1973) + u10(time=01mar1977) + u10(time=01mar1980) + u10(time=01mar1983) + u10(time=01mar1987) + u10(time=01mar1988) + u10(time=01mar1992) + u10(time=01mar1995) + u10(time=01mar1996) + u10(time=01mar2003) + u10(time=01mar2005) + u10(time=01mar2010) + u10(time=01mar2016) + u10(time=01mar2019))/17'
'define t04o = ( u10(time=01apr1964) + u10(time=01apr1966) + u10(time=01apr1969) + u10(time=01apr1973) + u10(time=01apr1977) + u10(time=01apr1980) + u10(time=01apr1983) + u10(time=01apr1987) + u10(time=01apr1988) + u10(time=01apr1992) + u10(time=01apr1995) + u10(time=01apr1996) + u10(time=01apr2003) + u10(time=01apr2005) + u10(time=01apr2010) + u10(time=01apr2016) + u10(time=01apr2019))/17'
'define uinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

*INVIERNOS CLIMA v10
'define tv11 = ave(v10,t=35,t=756,12)'
'define tv12 = ave(v10,t=36,t=756,12)'
'define tv01 = ave(v10,t=25,t=756,12)'
'define tv02 = ave(v10,t=26,t=756,12)'
'define tv03 = ave(v10,t=27,t=756,12)'
'define tv04 = ave(v10,t=28,t=756,12)'
'define vinv = ((tv11 + tv12 + tv01 + tv02 + tv03 + tv04)/6)'

*INVIERNOS NIÑO v10o
'define t11o = ( v10(time=01nov1963) + v10(time=01nov1965) + v10(time=01nov1968) + v10(time=01nov1972) + v10(time=01nov1976) + v10(time=01nov1979) + v10(time=01nov1982) + v10(time=01nov1986) + v10(time=01nov1987) + v10(time=01nov1991) + v10(time=01nov1994) + v10(time=01nov1997) + v10(time=01nov2002) + v10(time=01nov2004) + v10(time=01nov2009) + v10(time=01nov2015) + v10(time=01nov2018))/17'
'define t12o = ( v10(time=01dec1963) + v10(time=01dec1965) + v10(time=01dec1968) + v10(time=01dec1972) + v10(time=01dec1976) + v10(time=01dec1979) + v10(time=01dec1982) + v10(time=01dec1986) + v10(time=01dec1987) + v10(time=01dec1991) + v10(time=01dec1994) + v10(time=01dec1997) + v10(time=01dec2002) + v10(time=01dec2004) + v10(time=01dec2009) + v10(time=01dec2015) + v10(time=01dec2018))/17'
'define t01o = ( v10(time=01jan1964) + v10(time=01jan1966) + v10(time=01jan1969) + v10(time=01jan1973) + v10(time=01jan1977) + v10(time=01jan1980) + v10(time=01jan1983) + v10(time=01jan1987) + v10(time=01jan1988) + v10(time=01jan1992) + v10(time=01jan1995) + v10(time=01jan1996) + v10(time=01jan2003) + v10(time=01jan2005) + v10(time=01jan2010) + v10(time=01jan2016) + v10(time=01jan2019))/17'
'define t02o = ( v10(time=01feb1964) + v10(time=01feb1966) + v10(time=01feb1969) + v10(time=01feb1973) + v10(time=01feb1977) + v10(time=01feb1980) + v10(time=01feb1983) + v10(time=01feb1987) + v10(time=01feb1988) + v10(time=01feb1992) + v10(time=01feb1995) + v10(time=01feb1996) + v10(time=01feb2003) + v10(time=01feb2005) + v10(time=01feb2010) + v10(time=01feb2016) + v10(time=01feb2019))/17'
'define t03o = ( v10(time=01mar1964) + v10(time=01mar1966) + v10(time=01mar1969) + v10(time=01mar1973) + v10(time=01mar1977) + v10(time=01mar1980) + v10(time=01mar1983) + v10(time=01mar1987) + v10(time=01mar1988) + v10(time=01mar1992) + v10(time=01mar1995) + v10(time=01mar1996) + v10(time=01mar2003) + v10(time=01mar2005) + v10(time=01mar2010) + v10(time=01mar2016) + v10(time=01mar2019))/17'
'define t04o = ( v10(time=01apr1964) + v10(time=01apr1966) + v10(time=01apr1969) + v10(time=01apr1973) + v10(time=01apr1977) + v10(time=01apr1980) + v10(time=01apr1983) + v10(time=01apr1987) + v10(time=01apr1988) + v10(time=01apr1992) + v10(time=01apr1995) + v10(time=01apr1996) + v10(time=01apr2003) + v10(time=01apr2005) + v10(time=01apr2010) + v10(time=01apr2016) + v10(time=01apr2019))/17'
'define vinvo = ((t11o + t12o + t01o + t02o + t03o + t04o)/6)'

*VERANO CLIMA u10
'define u10M = ave(u10,t=29,t=756,12)'
'define u10Jn = ave(u10,t=30,t=756,12)'
'define u10Jl = ave(u10,t=31,t=756,12)'
'define u10A = ave(u10,t=32,t=756,12)'
'define u10S = ave(u10,t=33,t=756,12)'
'define u10O = ave(u10,t=34,t=756,12)'
'define uver = (u10M + u10Jn + u10Jl + u10A + u10S + u10O)/6'

*VERANO ENSO u10o
'define t05o = ( u10(time=01may1963) + u10(time=01may1965) + u10(time=01may1972) + u10(time=01may1982) + u10(time=01may1987) + u10(time=01may1991) + u10(time=01may1997) + u10(time=01may2002) + u10(time=01may2004) + u10(time=01may2009) + u10(time=01may2015))/11'  
'define t06o = ( u10(time=01jun1963) + u10(time=01jun1965) + u10(time=01jun1972) + u10(time=01jun1982) + u10(time=01jun1987) + u10(time=01jun1991) + u10(time=01jun1997) + u10(time=01jun2002) + u10(time=01jun2004) + u10(time=01jun2009) + u10(time=01jun2015))/11'  
'define t07o = ( u10(time=01jul1963) + u10(time=01jul1965) + u10(time=01jul1972) + u10(time=01jul1982) + u10(time=01jul1987) + u10(time=01jul1991) + u10(time=01jul1997) + u10(time=01jul2002) + u10(time=01jul2004) + u10(time=01jul2009) + u10(time=01jul2015))/11'  
'define t08o = ( u10(time=01aug1963) + u10(time=01aug1965) + u10(time=01aug1972) + u10(time=01aug1982) + u10(time=01aug1987) + u10(time=01aug1991) + u10(time=01aug1997) + u10(time=01aug2002) + u10(time=01aug2004) + u10(time=01aug2009) + u10(time=01aug2015))/11'  
'define t09o = ( u10(time=01sep1963) + u10(time=01sep1965) + u10(time=01sep1972) + u10(time=01sep1982) + u10(time=01sep1987) + u10(time=01sep1991) + u10(time=01sep1997) + u10(time=01sep2002) + u10(time=01sep2004) + u10(time=01sep2009) + u10(time=01sep2015))/11'  
'define t10o = ( u10(time=01oct1963) + u10(time=01oct1965) + u10(time=01oct1972) + u10(time=01oct1982) + u10(time=01oct1987) + u10(time=01oct1991) + u10(time=01oct1997) + u10(time=01oct2002) + u10(time=01oct2004) + u10(time=01oct2009) + u10(time=01oct2015))/11'  
'define uvero = (t05o + t06o + t07o + t08o + t09o + t10o)/6'

*VERANO CLIMA v10
'define v10M = ave(v10,t=29,t=756,12)'
'define v10Jn = ave(v10,t=30,t=756,12)'
'define v10Jl = ave(v10,t=31,t=756,12)'
'define v10A = ave(v10,t=32,t=756,12)'
'define v10S = ave(v10,t=33,t=756,12)'
'define v10O = ave(v10,t=34,t=756,12)'
'define vver = (v10M + v10Jn + v10Jl + v10A + v10S + v10O)/6'

*VERANO ENSO v10o
'define t05o = ( v10(time=01may1963) + v10(time=01may1965) + v10(time=01may1972) + v10(time=01may1982) + v10(time=01may1987) + v10(time=01may1991) + v10(time=01may1997) + v10(time=01may2002) + v10(time=01may2004) + v10(time=01may2009) + v10(time=01may2015))/11'  
'define t06o = ( v10(time=01jun1963) + v10(time=01jun1965) + v10(time=01jun1972) + v10(time=01jun1982) + v10(time=01jun1987) + v10(time=01jun1991) + v10(time=01jun1997) + v10(time=01jun2002) + v10(time=01jun2004) + v10(time=01jun2009) + v10(time=01jun2015))/11'  
'define t07o = ( v10(time=01jul1963) + v10(time=01jul1965) + v10(time=01jul1972) + v10(time=01jul1982) + v10(time=01jul1987) + v10(time=01jul1991) + v10(time=01jul1997) + v10(time=01jul2002) + v10(time=01jul2004) + v10(time=01jul2009) + v10(time=01jul2015))/11'  
'define t08o = ( v10(time=01aug1963) + v10(time=01aug1965) + v10(time=01aug1972) + v10(time=01aug1982) + v10(time=01aug1987) + v10(time=01aug1991) + v10(time=01aug1997) + v10(time=01aug2002) + v10(time=01aug2004) + v10(time=01aug2009) + v10(time=01aug2015))/11'  
'define t09o = ( v10(time=01sep1963) + v10(time=01sep1965) + v10(time=01sep1972) + v10(time=01sep1982) + v10(time=01sep1987) + v10(time=01sep1991) + v10(time=01sep1997) + v10(time=01sep2002) + v10(time=01sep2004) + v10(time=01sep2009) + v10(time=01sep2015))/11'  
'define t10o = ( v10(time=01oct1963) + v10(time=01oct1965) + v10(time=01oct1972) + v10(time=01oct1982) + v10(time=01oct1987) + v10(time=01oct1991) + v10(time=01oct1997) + v10(time=01oct2002) + v10(time=01oct2004) + v10(time=01oct2009) + v10(time=01oct2015))/11'  
'define vvero = (t05o + t06o + t07o + t08o + t09o + t10o)/6'

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
'../colormaps_v2.gs -map Hot -flipped -levels -1 1.1 0.1'
'd mag(uinvo,vinvo)-mag(uinv,vinv)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'define udif = uvero-uver'
'define vdif = vvero-vver'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map Hot -flipped -levels -1 1.1 0.1'
'd mag(uvero,vvero)-mag(uver,vver)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'
etiquetas()
'printim ../../../FIGURAS/NINO/ENSO-uv10m-INV_NO.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (m/s)'
return

