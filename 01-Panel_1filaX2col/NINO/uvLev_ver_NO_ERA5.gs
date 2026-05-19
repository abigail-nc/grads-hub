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
'../colormaps_v2.gs -map Hot -flipped -levels -2 2 0.2'
'd mag(uvero,vvero)-mag(uver,vver)'
'set ccolor 1'
'd skip(udif,4);vdif'
*'set arrlab off'
'draw map'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINO/ENSO-uvLev-925-ANOM_VER_NO.png x2200 y1700'

