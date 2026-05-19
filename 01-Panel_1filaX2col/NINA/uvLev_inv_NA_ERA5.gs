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
'define t11 = ave(u,t=35,t=756,12)'
'define t12 = ave(u,t=36,t=756,12)'
'define t01 = ave(u,t=25,t=756,12)'
'define t02 = ave(u,t=26,t=756,12)'
'define t03 = ave(u,t=27,t=756,12)'
'define t04 = ave(u,t=28,t=756,12)'
'define uinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑA
'define t11a = ( u(time=01nov1970) + u(time=01nov1973) + u(time=01nov1974) + u(time=01nov1975) + u(time=01nov1984) + u(time=01nov1988) + u(time=01nov1995) + u(time=01nov1998) + u(time=01nov2000) + u(time=01nov2005) + u(time=01nov2007) + u(time=01nov2008) + u(time=01nov2010) + u(time=01nov2011) + u(time=01nov2017) + u(time=01nov2020) )/16'
'define t12a = ( u(time=01dec1970) + u(time=01dec1973) + u(time=01dec1974) + u(time=01dec1975) + u(time=01dec1984) + u(time=01dec1988) + u(time=01dec1995) + u(time=01dec1998) + u(time=01dec2000) + u(time=01dec2005) + u(time=01dec2007) + u(time=01dec2008) + u(time=01dec2010) + u(time=01dec2011) + u(time=01dec2017) + u(time=01dec2020) )/16'
'define t01a = ( u(time=01jan1971) + u(time=01jan1974) + u(time=01jan1975) + u(time=01jan1976) + u(time=01jan1985) + u(time=01jan1989) + u(time=01jan1996) + u(time=01jan1999) + u(time=01jan2001) + u(time=01jan2006) + u(time=01jan2008) + u(time=01jan2009) + u(time=01jan2011) + u(time=01jan2012) + u(time=01jan2018) + u(time=01jan2021) )/16'
'define t02a = ( u(time=01feb1971) + u(time=01feb1974) + u(time=01feb1975) + u(time=01feb1976) + u(time=01feb1985) + u(time=01feb1989) + u(time=01feb1996) + u(time=01feb1999) + u(time=01feb2001) + u(time=01feb2006) + u(time=01feb2008) + u(time=01feb2009) + u(time=01feb2011) + u(time=01feb2012) + u(time=01feb2018) + u(time=01feb2021) )/16'
'define t03a = ( u(time=01mar1971) + u(time=01mar1974) + u(time=01mar1975) + u(time=01mar1976) + u(time=01mar1985) + u(time=01mar1989) + u(time=01mar1996) + u(time=01mar1999) + u(time=01mar2001) + u(time=01mar2006) + u(time=01mar2008) + u(time=01mar2009) + u(time=01mar2011) + u(time=01mar2012) + u(time=01mar2018) + u(time=01mar2021) )/16'
'define t04a = ( u(time=01apr1971) + u(time=01apr1974) + u(time=01apr1975) + u(time=01apr1976) + u(time=01apr1985) + u(time=01apr1989) + u(time=01apr1996) + u(time=01apr1999) + u(time=01apr2001) + u(time=01apr2006) + u(time=01apr2008) + u(time=01apr2009) + u(time=01apr2011) + u(time=01apr2012) + u(time=01apr2018) + u(time=01apr2021) )/16'
'define uinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

*INVIERNO CLIMA v
'define t11 = ave(v,t=35,t=756,12)'
'define t12 = ave(v,t=36,t=756,12)'
'define t01 = ave(v,t=25,t=756,12)'
'define t02 = ave(v,t=26,t=756,12)'
'define t03 = ave(v,t=27,t=756,12)'
'define t04 = ave(v,t=28,t=756,12)'
'define vinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑA vo
'define t11a = ( v(time=01nov1970) + v(time=01nov1973) + v(time=01nov1974) + v(time=01nov1975) + v(time=01nov1984) + v(time=01nov1988) + v(time=01nov1995) + v(time=01nov1998) + v(time=01nov2000) + v(time=01nov2005) + v(time=01nov2007) + v(time=01nov2008) + v(time=01nov2010) + v(time=01nov2011) + v(time=01nov2017) + v(time=01nov2020) )/16'
'define t12a = ( v(time=01dec1970) + v(time=01dec1973) + v(time=01dec1974) + v(time=01dec1975) + v(time=01dec1984) + v(time=01dec1988) + v(time=01dec1995) + v(time=01dec1998) + v(time=01dec2000) + v(time=01dec2005) + v(time=01dec2007) + v(time=01dec2008) + v(time=01dec2010) + v(time=01dec2011) + v(time=01dec2017) + v(time=01dec2020) )/16'
'define t01a = ( v(time=01jan1971) + v(time=01jan1974) + v(time=01jan1975) + v(time=01jan1976) + v(time=01jan1985) + v(time=01jan1989) + v(time=01jan1996) + v(time=01jan1999) + v(time=01jan2001) + v(time=01jan2006) + v(time=01jan2008) + v(time=01jan2009) + v(time=01jan2011) + v(time=01jan2012) + v(time=01jan2018) + v(time=01jan2021) )/16'
'define t02a = ( v(time=01feb1971) + v(time=01feb1974) + v(time=01feb1975) + v(time=01feb1976) + v(time=01feb1985) + v(time=01feb1989) + v(time=01feb1996) + v(time=01feb1999) + v(time=01feb2001) + v(time=01feb2006) + v(time=01feb2008) + v(time=01feb2009) + v(time=01feb2011) + v(time=01feb2012) + v(time=01feb2018) + v(time=01feb2021) )/16'
'define t03a = ( v(time=01mar1971) + v(time=01mar1974) + v(time=01mar1975) + v(time=01mar1976) + v(time=01mar1985) + v(time=01mar1989) + v(time=01mar1996) + v(time=01mar1999) + v(time=01mar2001) + v(time=01mar2006) + v(time=01mar2008) + v(time=01mar2009) + v(time=01mar2011) + v(time=01mar2012) + v(time=01mar2018) + v(time=01mar2021) )/16'
'define t04a = ( v(time=01apr1971) + v(time=01apr1974) + v(time=01apr1975) + v(time=01apr1976) + v(time=01apr1985) + v(time=01apr1989) + v(time=01apr1996) + v(time=01apr1999) + v(time=01apr2001) + v(time=01apr2006) + v(time=01apr2008) + v(time=01apr2009) + v(time=01apr2011) + v(time=01apr2012) + v(time=01apr2018) + v(time=01apr2021) )/16'
'define vinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

*VERANO CLIMA u
'define uM = ave(u,t=29,t=756,12)'
'define uJn = ave(u,t=30,t=756,12)'
'define uJl = ave(u,t=31,t=756,12)'
'define uA = ave(u,t=32,t=756,12)'
'define uS = ave(u,t=33,t=756,12)'
'define uO = ave(u,t=34,t=756,12)'
'define uver = (uM + uJn + uJl + uA + uS + uO)/6'

*VERANOS NIÑA ua
'define t05a = ( u(time=01may1964) + u(time=01may1970) + u(time=01may1971) + u(time=01may1973) + u(time=01may1975) + u(time=01may1984) + u(time=01may1988) + u(time=01may1995) + u(time=01may1998) + u(time=01may1999) + u(time=01may2000) + u(time=01may2007) + u(time=01may2010) + u(time=01may2011))/14'  
'define t06a = ( u(time=01jun1964) + u(time=01jun1970) + u(time=01jun1971) + u(time=01jun1973) + u(time=01jun1975) + u(time=01jun1984) + u(time=01jun1988) + u(time=01jun1995) + u(time=01jun1998) + u(time=01jun1999) + u(time=01jun2000) + u(time=01jun2007) + u(time=01jun2010) + u(time=01jun2011))/14'  
'define t07a = ( u(time=01jul1964) + u(time=01jul1970) + u(time=01jul1971) + u(time=01jul1973) + u(time=01jul1975) + u(time=01jul1984) + u(time=01jul1988) + u(time=01jul1995) + u(time=01jul1998) + u(time=01jul1999) + u(time=01jul2000) + u(time=01jul2007) + u(time=01jul2010) + u(time=01jul2011))/14'  
'define t08a = ( u(time=01aug1964) + u(time=01aug1970) + u(time=01aug1971) + u(time=01aug1973) + u(time=01aug1975) + u(time=01aug1984) + u(time=01aug1988) + u(time=01aug1995) + u(time=01aug1998) + u(time=01aug1999) + u(time=01aug2000) + u(time=01aug2007) + u(time=01aug2010) + u(time=01aug2011))/14'  
'define t09a = ( u(time=01sep1964) + u(time=01sep1970) + u(time=01sep1971) + u(time=01sep1973) + u(time=01sep1975) + u(time=01sep1984) + u(time=01sep1988) + u(time=01sep1995) + u(time=01sep1998) + u(time=01sep1999) + u(time=01sep2000) + u(time=01sep2007) + u(time=01sep2010) + u(time=01sep2011))/14'  
'define t10a = ( u(time=01oct1964) + u(time=01oct1970) + u(time=01oct1971) + u(time=01oct1973) + u(time=01oct1975) + u(time=01oct1984) + u(time=01oct1988) + u(time=01oct1995) + u(time=01oct1998) + u(time=01oct1999) + u(time=01oct2000) + u(time=01oct2007) + u(time=01oct2010) + u(time=01oct2011))/14'  
'define uvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

*VERANO CLIMA v
'define vM = ave(v,t=29,t=756,12)'
'define vJn = ave(v,t=30,t=756,12)'
'define vJl = ave(v,t=31,t=756,12)'
'define vA = ave(v,t=32,t=756,12)'
'define vS = ave(v,t=33,t=756,12)'
'define vO = ave(v,t=34,t=756,12)'
'define vver = (vM + vJn + vJl + vA + vS + vO)/6'

*VERANOS NIÑA va
'define t05a = ( v(time=01may1964) + v(time=01may1970) + v(time=01may1971) + v(time=01may1973) + v(time=01may1975) + v(time=01may1984) + v(time=01may1988) + v(time=01may1995) + v(time=01may1998) + v(time=01may1999) + v(time=01may2000) + v(time=01may2007) + v(time=01may2010) + v(time=01may2011))/14'  
'define t06a = ( v(time=01jun1964) + v(time=01jun1970) + v(time=01jun1971) + v(time=01jun1973) + v(time=01jun1975) + v(time=01jun1984) + v(time=01jun1988) + v(time=01jun1995) + v(time=01jun1998) + v(time=01jun1999) + v(time=01jun2000) + v(time=01jun2007) + v(time=01jun2010) + v(time=01jun2011))/14'  
'define t07a = ( v(time=01jul1964) + v(time=01jul1970) + v(time=01jul1971) + v(time=01jul1973) + v(time=01jul1975) + v(time=01jul1984) + v(time=01jul1988) + v(time=01jul1995) + v(time=01jul1998) + v(time=01jul1999) + v(time=01jul2000) + v(time=01jul2007) + v(time=01jul2010) + v(time=01jul2011))/14'  
'define t08a = ( v(time=01aug1964) + v(time=01aug1970) + v(time=01aug1971) + v(time=01aug1973) + v(time=01aug1975) + v(time=01aug1984) + v(time=01aug1988) + v(time=01aug1995) + v(time=01aug1998) + v(time=01aug1999) + v(time=01aug2000) + v(time=01aug2007) + v(time=01aug2010) + v(time=01aug2011))/14'  
'define t09a = ( v(time=01sep1964) + v(time=01sep1970) + v(time=01sep1971) + v(time=01sep1973) + v(time=01sep1975) + v(time=01sep1984) + v(time=01sep1988) + v(time=01sep1995) + v(time=01sep1998) + v(time=01sep1999) + v(time=01sep2000) + v(time=01sep2007) + v(time=01sep2010) + v(time=01sep2011))/14'  
'define t10a = ( v(time=01oct1964) + v(time=01oct1970) + v(time=01oct1971) + v(time=01oct1973) + v(time=01oct1975) + v(time=01oct1984) + v(time=01oct1988) + v(time=01oct1995) + v(time=01oct1998) + v(time=01oct1999) + v(time=01oct2000) + v(time=01oct2007) + v(time=01oct2010) + v(time=01oct2011))/14'  
'define vvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

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

'define udif = uinva-uinv'
'define vdif = vinva-vinv'

'set parea 0.5 5.25 2 5.5'
'../colormaps_v2.gs -map Hot -flipped -levels -4 4 0.5'
'd mag(uinva,vinva)-mag(uinv,vinv)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.5 5.25 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'define udif = uvera-uver'
'define vdif = vvera-vver'

'set parea 5.75 10.5 2 5.5'
'../colormaps_v2.gs -map Hot -flipped -levels -1 1.1 0.1'
'd mag(uvera,vvera)-mag(uver,vver)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 5.75 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 3'
etiquetas()
'printim ../../../FIGURAS/NINA/ENSO-uvLev-925_INV_NA.png x2200 y1700'
function etiquetas()
'set string 1 l 5 0'
'set strsiz 0.15'
'draw string 0.5 5.67 a)'
'draw string 5.75 5.67 b)'
'draw string 5.1 1.7 (hPa)'
return
