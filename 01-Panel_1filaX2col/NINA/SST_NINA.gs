*compuesto SST_inv_NO
'reinit'
'sdfopen ../../../DATOS/DATOS-CORREGIDOS/ORAS5-SST-59_21.nc'
'set display color white'
'c'
'set lon -60 -120'
'set lat -35 20'
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
'define t02 = ave(sosstsst,t=2,t=756,12)'
'define t03 = ave(sosstsst,t=3,t=756,12)'
'define t04 = ave(sosstsst,t=4,t=756,12)'
'define tinv = ((t11 + t12 + t01 + t02 + t03 + t04)/6)'

*INVIERNOS NIÑA
'define t11a = ( sosstsst(time=01nov1970) + sosstsst(time=01nov1973) + sosstsst(time=01nov1974) + sosstsst(time=01nov1975) + sosstsst(time=01nov1984) + sosstsst(time=01nov1988) + sosstsst(time=01nov1995) + sosstsst(time=01nov1998) + sosstsst(time=01nov2000) + sosstsst(time=01nov2005) + sosstsst(time=01nov2007) + sosstsst(time=01nov2008) + sosstsst(time=01nov2010) + sosstsst(time=01nov2011) + sosstsst(time=01nov2017) + sosstsst(time=01nov2020) )/16'
'define t12a = ( sosstsst(time=01dec1970) + sosstsst(time=01dec1973) + sosstsst(time=01dec1974) + sosstsst(time=01dec1975) + sosstsst(time=01dec1984) + sosstsst(time=01dec1988) + sosstsst(time=01dec1995) + sosstsst(time=01dec1998) + sosstsst(time=01dec2000) + sosstsst(time=01dec2005) + sosstsst(time=01dec2007) + sosstsst(time=01dec2008) + sosstsst(time=01dec2010) + sosstsst(time=01dec2011) + sosstsst(time=01dec2017) + sosstsst(time=01dec2020) )/16'
'define t01a = ( sosstsst(time=01jan1971) + sosstsst(time=01jan1974) + sosstsst(time=01jan1975) + sosstsst(time=01jan1976) + sosstsst(time=01jan1985) + sosstsst(time=01jan1989) + sosstsst(time=01jan1996) + sosstsst(time=01jan1999) + sosstsst(time=01jan2001) + sosstsst(time=01jan2006) + sosstsst(time=01jan2008) + sosstsst(time=01jan2009) + sosstsst(time=01jan2011) + sosstsst(time=01jan2012) + sosstsst(time=01jan2018) + sosstsst(time=01jan2021) )/16'
'define t02a = ( sosstsst(time=01feb1971) + sosstsst(time=01feb1974) + sosstsst(time=01feb1975) + sosstsst(time=01feb1976) + sosstsst(time=01feb1985) + sosstsst(time=01feb1989) + sosstsst(time=01feb1996) + sosstsst(time=01feb1999) + sosstsst(time=01feb2001) + sosstsst(time=01feb2006) + sosstsst(time=01feb2008) + sosstsst(time=01feb2009) + sosstsst(time=01feb2011) + sosstsst(time=01feb2012) + sosstsst(time=01feb2018) + sosstsst(time=01feb2021) )/16'
'define t03a = ( sosstsst(time=01mar1971) + sosstsst(time=01mar1974) + sosstsst(time=01mar1975) + sosstsst(time=01mar1976) + sosstsst(time=01mar1985) + sosstsst(time=01mar1989) + sosstsst(time=01mar1996) + sosstsst(time=01mar1999) + sosstsst(time=01mar2001) + sosstsst(time=01mar2006) + sosstsst(time=01mar2008) + sosstsst(time=01mar2009) + sosstsst(time=01mar2011) + sosstsst(time=01mar2012) + sosstsst(time=01mar2018) + sosstsst(time=01mar2021) )/16'
'define t04a = ( sosstsst(time=01apr1971) + sosstsst(time=01apr1974) + sosstsst(time=01apr1975) + sosstsst(time=01apr1976) + sosstsst(time=01apr1985) + sosstsst(time=01apr1989) + sosstsst(time=01apr1996) + sosstsst(time=01apr1999) + sosstsst(time=01apr2001) + sosstsst(time=01apr2006) + sosstsst(time=01apr2008) + sosstsst(time=01apr2009) + sosstsst(time=01apr2011) + sosstsst(time=01apr2012) + sosstsst(time=01apr2018) + sosstsst(time=01apr2021) )/16'
'define tinva = ((t11a + t12a + t01a + t02a + t03a + t04a)/6)'

*'set parea 0.5 7.5 7.45 10.95'
*'./../colormaps_jM.gs -map jet -levels 10 35.5 0.5'
*'d tinv'

*'set parea 0.5 7.5 3.90 7.40'
'./../colormaps_jM.gs -map jet -levels 10 35.2 0.5'
'd tinva'
'../xcbar2.gs -line off -fs 10'

*'set parea 0.5 7.5 0.35 3.85'
*'./../colormaps_jM.gs -map b2r -levels -2.5 2.5 0.1'
*'d tinva-tinv'
*'../xcbar2.gs 7.75 8.0 0.25 3.65 -dir v -line off -fs 5'

'printim ./ENSO-SST-INV_NA.png x2200 y1700'

