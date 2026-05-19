*compuesto sp_ver_NO
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

*'set parea 0.5 7.5 0.35 3.85'
'set parea 0.3 10.5 2 8.2'
'../colormaps_v2.gs -map y2b -flipped -levels -0.25 0.25 0.025'
'd tvera-tver'
'../xcbar2.gs 0.3 10.5 1.25 1.5 -edge triangle -dir h -line on -fs 2'

'printim ../../../FIGURAS/NINA/ENSO-press-VER_NA.png x2200 y1700'

