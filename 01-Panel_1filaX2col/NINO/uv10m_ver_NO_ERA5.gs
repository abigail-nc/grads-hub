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
xrit = 5.5
ybot = 1.65
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

'define udif = uvero-uver'
'define vdif = vvero-vver'

'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map Hot -flipped -levels -1 1.1 0.1'
'd mag(uvero,vvero)-mag(uver,vver)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINO/ENSO-uv10m-VER_NO.png x2200 y1700'


