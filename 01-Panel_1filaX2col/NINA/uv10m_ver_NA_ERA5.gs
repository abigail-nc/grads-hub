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

*VERANO CLIMA u10
'define u10M = ave(u10,t=29,t=756,12)'
'define u10Jn = ave(u10,t=30,t=756,12)'
'define u10Jl = ave(u10,t=31,t=756,12)'
'define u10A = ave(u10,t=32,t=756,12)'
'define u10S = ave(u10,t=33,t=756,12)'
'define u10O = ave(u10,t=34,t=756,12)'
'define uver = (u10M + u10Jn + u10Jl + u10A + u10S + u10O)/6'

*VERANOS NIÑA u10a
'define t05a = ( u10(time=01may1964) + u10(time=01may1970) + u10(time=01may1971) + u10(time=01may1973) + u10(time=01may1975) + u10(time=01may1984) + u10(time=01may1988) + u10(time=01may1995) + u10(time=01may1998) + u10(time=01may1999) + u10(time=01may2000) + u10(time=01may2007) + u10(time=01may2010) + u10(time=01may2011))/14'  
'define t06a = ( u10(time=01jun1964) + u10(time=01jun1970) + u10(time=01jun1971) + u10(time=01jun1973) + u10(time=01jun1975) + u10(time=01jun1984) + u10(time=01jun1988) + u10(time=01jun1995) + u10(time=01jun1998) + u10(time=01jun1999) + u10(time=01jun2000) + u10(time=01jun2007) + u10(time=01jun2010) + u10(time=01jun2011))/14'  
'define t07a = ( u10(time=01jul1964) + u10(time=01jul1970) + u10(time=01jul1971) + u10(time=01jul1973) + u10(time=01jul1975) + u10(time=01jul1984) + u10(time=01jul1988) + u10(time=01jul1995) + u10(time=01jul1998) + u10(time=01jul1999) + u10(time=01jul2000) + u10(time=01jul2007) + u10(time=01jul2010) + u10(time=01jul2011))/14'  
'define t08a = ( u10(time=01aug1964) + u10(time=01aug1970) + u10(time=01aug1971) + u10(time=01aug1973) + u10(time=01aug1975) + u10(time=01aug1984) + u10(time=01aug1988) + u10(time=01aug1995) + u10(time=01aug1998) + u10(time=01aug1999) + u10(time=01aug2000) + u10(time=01aug2007) + u10(time=01aug2010) + u10(time=01aug2011))/14'  
'define t09a = ( u10(time=01sep1964) + u10(time=01sep1970) + u10(time=01sep1971) + u10(time=01sep1973) + u10(time=01sep1975) + u10(time=01sep1984) + u10(time=01sep1988) + u10(time=01sep1995) + u10(time=01sep1998) + u10(time=01sep1999) + u10(time=01sep2000) + u10(time=01sep2007) + u10(time=01sep2010) + u10(time=01sep2011))/14'  
'define t10a = ( u10(time=01oct1964) + u10(time=01oct1970) + u10(time=01oct1971) + u10(time=01oct1973) + u10(time=01oct1975) + u10(time=01oct1984) + u10(time=01oct1988) + u10(time=01oct1995) + u10(time=01oct1998) + u10(time=01oct1999) + u10(time=01oct2000) + u10(time=01oct2007) + u10(time=01oct2010) + u10(time=01oct2011))/14'  
'define uvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

*VERANO CLIMA v10
'define v10M = ave(v10,t=29,t=756,12)'
'define v10Jn = ave(v10,t=30,t=756,12)'
'define v10Jl = ave(v10,t=31,t=756,12)'
'define v10A = ave(v10,t=32,t=756,12)'
'define v10S = ave(v10,t=33,t=756,12)'
'define v10O = ave(v10,t=34,t=756,12)'
'define vver = (v10M + v10Jn + v10Jl + v10A + v10S + v10O)/6'

*VERANOS NIÑA v10a
'define t05a = ( v10(time=01may1964) + v10(time=01may1970) + v10(time=01may1971) + v10(time=01may1973) + v10(time=01may1975) + v10(time=01may1984) + v10(time=01may1988) + v10(time=01may1995) + v10(time=01may1998) + v10(time=01may1999) + v10(time=01may2000) + v10(time=01may2007) + v10(time=01may2010) + v10(time=01may2011))/14'  
'define t06a = ( v10(time=01jun1964) + v10(time=01jun1970) + v10(time=01jun1971) + v10(time=01jun1973) + v10(time=01jun1975) + v10(time=01jun1984) + v10(time=01jun1988) + v10(time=01jun1995) + v10(time=01jun1998) + v10(time=01jun1999) + v10(time=01jun2000) + v10(time=01jun2007) + v10(time=01jun2010) + v10(time=01jun2011))/14'  
'define t07a = ( v10(time=01jul1964) + v10(time=01jul1970) + v10(time=01jul1971) + v10(time=01jul1973) + v10(time=01jul1975) + v10(time=01jul1984) + v10(time=01jul1988) + v10(time=01jul1995) + v10(time=01jul1998) + v10(time=01jul1999) + v10(time=01jul2000) + v10(time=01jul2007) + v10(time=01jul2010) + v10(time=01jul2011))/14'  
'define t08a = ( v10(time=01aug1964) + v10(time=01aug1970) + v10(time=01aug1971) + v10(time=01aug1973) + v10(time=01aug1975) + v10(time=01aug1984) + v10(time=01aug1988) + v10(time=01aug1995) + v10(time=01aug1998) + v10(time=01aug1999) + v10(time=01aug2000) + v10(time=01aug2007) + v10(time=01aug2010) + v10(time=01aug2011))/14'  
'define t09a = ( v10(time=01sep1964) + v10(time=01sep1970) + v10(time=01sep1971) + v10(time=01sep1973) + v10(time=01sep1975) + v10(time=01sep1984) + v10(time=01sep1988) + v10(time=01sep1995) + v10(time=01sep1998) + v10(time=01sep1999) + v10(time=01sep2000) + v10(time=01sep2007) + v10(time=01sep2010) + v10(time=01sep2011))/14'  
'define t10a = ( v10(time=01oct1964) + v10(time=01oct1970) + v10(time=01oct1971) + v10(time=01oct1973) + v10(time=01oct1975) + v10(time=01oct1984) + v10(time=01oct1988) + v10(time=01oct1995) + v10(time=01oct1998) + v10(time=01oct1999) + v10(time=01oct2000) + v10(time=01oct2007) + v10(time=01oct2010) + v10(time=01oct2011))/14'  
'define vvera = ((t05a + t06a + t07a + t08a + t09a + t10a)/6)'

*dar formato al vector
'set gxout vector'
len = 0.3
scale = 10
xrit = 2.0
ybot = 0.05
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

'define udif = uvera-uver'
'define vdif = vvera-vver'

'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map Hot -flipped -levels -1 1.1 0.2'
'd mag(uvera,vvera)-mag(uver,vver)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'
'printim ../../../FIGURAS/NINA/ENSO-uv10m-VER_NA.png x2200 y1700'

