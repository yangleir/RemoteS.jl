var documenterSearchIndex = {"docs":
[{"location":"#RemoteS-1","page":"Index","title":"RemoteS","text":"","category":"section"},{"location":"#Index-1","page":"Index","title":"Index","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"Modules = [RemoteS]\nOrder   = [:function, :type, :module]","category":"page"},{"location":"#Functions-1","page":"Index","title":"Functions","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"Modules = [RemoteS]\nOrder   = [:function, :type, :module]","category":"page"},{"location":"#RemoteS.clg-Tuple{Any, Any}","page":"Index","title":"RemoteS.clg","text":"CLG = clg(green, redEdge3; kw...)\n\nGreen cholorphyl index. Wu et al 2012.\n\nCLG = (redEdge3)/(green)-1 \n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.clre-Tuple{Any, Any}","page":"Index","title":"RemoteS.clre","text":"CLRE = clre(redEdge1, redEdge3; kw...)\n\nRedEdge cholorphyl index. Clevers and Gitelson 2013.\n\nCLRE = (redEdge3)/(redEdge1)-1\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.cutcube-Tuple{}","page":"Index","title":"RemoteS.cutcube","text":"cutcube(names=String[], bands=Int[], template=\"\", region=nothing, extension=\".TIF\", description=String[], save=\"\")\n\nCut a 3D cube out of a Landsat/Sentinel scene within a subregion region and a selection of bands.\n\nnames: (optional) A vector with the individual bands full file name\nbands: When names is not provided give a vector of integers corresponding to the choosen bands.          This works well for Landsat and most of Sentinel bands. However, in later case, there are also          bands that contain characters, for example band 8A. In this case bands should be a vector of          strings including the extension. e.g. [\"02.jp2\", \"8A.jp2\"]\ntemplate: Goes together with the bands option. They are both composed a template * band[n] to recreate          the full file name of each band.\nregion Is the region to extract and must contain the extracting region limits as [W, E, S, N] or a          GMT style -R string (without the leading \"-R\").\nextension: In case the bands is numeric but file extensions are not \"*.TIF\" (case insensitive),          use the extension passed by this option.\ndescription: A vector of strings (as many as bands) with a description for each band. If not provided and          the file is recognized as a Landasat 8, band description is added automatically, otherwise          we build one with the bands file names. This info will saved if data is written to a file.\nsave:  The file name where to save the output. If not provided, a GMTimage is returned.\n\nReturn: nothing if the result is written in file or a GMTimage otherwise.\n\nExamples\n\n# Cut a Landsat 8 scene for a small region (in UTM) and return a GMTimage with 3 bands in UInt16.\ntemp = \"C:\\SIG_AnaliseDadosSatelite\\SIG_ADS\\DadosEx2\\LC82040332015145LGN00\\LC82040332015145LGN00_B\";\ncube = cutcube(bands=[2,3,4], template=temp, region=[479670,492720,4282230,4294500])\n\n# The same example as above but save the data in a GeoTIFF disk file and use a string for `region`\ncutcube(bands=[2,3,4], template=temp, region=\"479670/492720/4282230/4294500\", save=\"landsat_cube.tif\")\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.dn2radiance-Tuple{String}","page":"Index","title":"RemoteS.dn2radiance","text":"R = dn2radiance(fname::String; band::Int=0, mtl::String=\"\")\n\nReturns a GMTgrid with the radiance at TopOfAtmosphere for the Landsat8 band file fname\n\nInput can be either a file name of a LANDSATPRODUCTID geotiff band, or the name of a cube file created with the cutcube function. In the first case, if the companion ...MTL.txt file is not in the same directory as fname one can still pass it via the mtl=path-to-MTL-file option. In the second case it is mandatory to use the band=N where N is the band number with the data to convert.\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.dn2reflectance-Tuple{String}","page":"Index","title":"RemoteS.dn2reflectance","text":"R = dn2reflectance(fname::String; band::Int=0, mtl::String=\"\")\n\nReturns a GMTgrid with the TopOfAtmosphere planetary reflectance for the Landsat8 band file fname\n\nInput can be either a file name of a LANDSATPRODUCTID geotiff band, or the name of a cube file created with the cutcube function. In the first case, if the companion ...MTL.txt file is not in the same directory as fname one can still pass it via the mtl=path-to-MTL-file option. In the second case it is mandatory to use the band=N where N is the band number with the data to convert.\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.dn2temperature-Tuple{String}","page":"Index","title":"RemoteS.dn2temperature","text":"R = dn2temperature(fname::String; band::Int=0, mtl::String=\"\")\n\nReturns a GMTgrid with the brigthness temperature of Landasat8 termal band (10 or 11)\n\nInput can be either a file name of a LANDSATPRODUCTID geotiff band, or the name of a cube file created with the cutcube function. In the first case, if the companion ...MTL.txt file is not in the same directory as fname one can still pass it via the mtl=path-to-MTL-file option. In the second case it is mandatory to use the band=N where N is the band number with the data to convert.\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.evi-Tuple{Any, Any, Any}","page":"Index","title":"RemoteS.evi","text":"EVI = evi(blue, red, nir; kw...)\n\nEnhanced vegetation index. Huete et al 1990\n\nEVI = G * ((nir - red) / (nir + C1 * red - C2 * blue + Levi)); C1, C2, G, Levi = 6.0, 7.5, 2.5, 1.\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.evi2-Tuple{Any, Any}","page":"Index","title":"RemoteS.evi2","text":"EVI2 = evi(red, nir; kw...)\n\nTwo-band Enhanced vegetation index. Jiang et al 2008\n\nEVI2 = G * ((nir - red) / (nir + 2.4 * red ))\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.gndvi-Tuple{Any, Any}","page":"Index","title":"RemoteS.gndvi","text":"GNDVI = gndvi(green, nir; kw...)\n\ngreen Normalized diff vegetation index: more sensitive to cholorphyll than ndvi. Gitelson, A., and M. Merzlyak\n\nGNDVI = (nir - green) / (nir + green)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.grid_at_sensor","page":"Index","title":"RemoteS.grid_at_sensor","text":"G = grid_at_sensor(fname::String, sds_name::String=\"\"; V::Bool=false, kw...)\n\nRead one of those netCDF files that are not regular grids but have instead the coordinates in the LONGITUDE abd LATITUDE arrays. MODIS L2 files are a good example of this. Data in theses files are not layed down on a regular grid and we must interpolate to get one. Normally the lon and lat arrays are called 'longitude' and 'latitude' and these it's what is seek for by default. But files exist that pretend to comply to CF but use other names. In this case, use the kwargs 'xarray' & 'yarray' to pass in the variable names. For example: xarray=\"XLONG\", yarray=\"XLAT\" The other fundamental info to pass in is the name of the array to be read/interpolated. We do that via the SDS_NAME arg.\n\nIn simpler cases the variable to be interpolated lays down on a 2D array but it is also possible that it is stored in a 3D array. If that is the case, use the keyword 'band' to select a band (ex: 'band=2') Bands are numbered from 1.\n\nThe interpolation is done so far with 'nearneighbor'. Both the region (-R) and increment (-I) are estimated from data but they can be set with 'region' and 'inc' kwargs as well. For MODIS data we can select the quality flag to filter by data quality. By default the best quality (=0) is used, but one can select another with the quality=val kwarg. Positive 'val' values select data of quality <= quality, whilst negative 'val' values select only data with quality >= abs(val). This allows for example to extract only the cloud coverage.\n\nIf instead of calculating a grid (returned as a GMTgrid type) user wants the x,y,z data intself, use the keywords 'dataset', or 'outxyz' and the output will be in a GMTdataset (i.e. use 'dataset=true').\n\nTo inquire just the list of available arrays use 'list=true' or 'gdalinfo=true' to get the full file info.\n\nExamples:\n\nG = grid_at_sensor(\"AQUA_MODIS.20020717T135006.L2.SST.nc\", \"sst\", V=true);\n\nG = grid_at_sensor(\"TXx-narr-annual-timavg.nc\", \"T2MAX\", xarray=\"XLONG\", yarray=\"XLAT\", V=true);\n\n\n\n\n\n","category":"function"},{"location":"#RemoteS.mcari-Tuple{Any, Any, Any}","page":"Index","title":"RemoteS.mcari","text":"MCARI = mcari(green, red, redEdge1; kw...)\n\nModified Chlorophyll Absorption ratio index. Daughtery et al. 2000\n\nMCARI = (redEdge1 - red - 0.2 * (redEdge1 + green)) * (redEdge1 / red)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.mndwi-Tuple{Any, Any}","page":"Index","title":"RemoteS.mndwi","text":"MNDWI = mndwi(green, swir2; kw...)\n\nModified Normalised Difference Water Index. Xu2006\n\nMNDWI = (green-swir2) / (green+swir2)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.msavi-Tuple{Any, Any}","page":"Index","title":"RemoteS.msavi","text":"MSAVI = msavi(red, nir; kw...)\n\nModified soil adjusted vegetation index. Qi 1994\n\nMSAVI = nir + 0.5 - (0.5 * sqrt(pow(2.0 * nir + 1.0, 2) - 8.0 * (nir - (2.0 * red))))\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.mtci-Tuple{Any, Any, Any}","page":"Index","title":"RemoteS.mtci","text":"MTCI = mtci(red, redEdge1, redEdge2; kw...)\n\nMeris Terrestrial Chlorophyll Index. Clevers and Gitelson 2013, Dash and Curran 2004\n\nMTCI = (redEdge2-redEdge1) / (redEdge1-red)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.ndrei1-Tuple{Any, Any}","page":"Index","title":"RemoteS.ndrei1","text":"NDREI1 = ndrei1(redEdge1, redEdge2; kw...)\n\nNormalized difference red edge index. Gitelson and Merzlyak 1994\n\nNDREI1 = (redEdge2 - redEdge1) / (redEdge2 + redEdge1)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.ndrei2-Tuple{Any, Any}","page":"Index","title":"RemoteS.ndrei2","text":"NDREI2 = ndrei2(redEdge1, redEdge3; kw...)\n\nNormalized difference red edge index 2. Barnes et al 2000\n\nNDREI2 = (redEdge3 - redEdge1) / (redEdge3 + redEdge1)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.ndvi-Tuple{Any, Any}","page":"Index","title":"RemoteS.ndvi","text":"NDVI = ndvi(red, nir; kw...)\n\nCompute the NDVI vegetation index. Input can be either the bands file names, or GMTimage objects with the band's data.\n\nNDVI = (nir - red) / (nir + red)\n\nReturns either a Float32 GMTgrid or a UInt8 GMTimage if the mask option is set to true.\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.ndwi-Tuple{Any, Any}","page":"Index","title":"RemoteS.ndwi","text":"NDWI = ndwi(green, nir; kw...)\n\nNormalized difference water index. McFeeters 1996. NDWI => (green - nir)/(green + nir)\n\nNDWI = (green - nir)/(green + nir)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.ndwi2-Tuple{Any, Any}","page":"Index","title":"RemoteS.ndwi2","text":"NDWI2 = ndwi2(nir, swir2; kw...)\n\nNormalized difference water index. Gao 1996, Chen 2005 (also known as Normalized Difference Moisture Index NDBI and LSWI)\n\nNDWI2 = (nir - swir2)/(nir + swir2)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.reflectance_surf-Tuple{String}","page":"Index","title":"RemoteS.reflectance_surf","text":"R = reflectance_surf(fname::String; band::Int=0, mtl::String=\"\")\n\nCompute the radiance-at-surface of Landsat8 band using the COST model.\n\nReturns a Float32 GMTgrid type\n\nInput can be either a file name of a LANDSATPRODUCTID geotiff band, or the name of a cube file created with the cutcube function. In the first case, if the companion ...MTL.txt file is not in the same directory as fname one can still pass it via the mtl=path-to-MTL-file option. In the second case it is mandatory to use the band=N where N is the band number with the data to convert.\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.satvi-Tuple{Any, Any, Any}","page":"Index","title":"RemoteS.satvi","text":"SATVI = satvi(red, swir2, swir3; kw...)\n\nSoil adjusted total vegetation index. Marsett 2006\n\nSATVI = ((swir2 - red) / (swir2 + red + L)) * (1.0 + L) - (swir3 / 2.0)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.savi-Tuple{Any, Any}","page":"Index","title":"RemoteS.savi","text":"SAVI = savi(red, nir; kw...)\n\nSoil adjusted vegetation index. Huete 1988\n\nSAVI = (nir - red) * (1.0 + L) / (nir + red + L)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.slavi-Tuple{Any, Any, Any}","page":"Index","title":"RemoteS.slavi","text":"SLAVI = slavi(red, nir, swir2; kw...)\n\nSpecific Leaf Area Vegetation Index. Lymburger 2000\n\nSLAVI = nir / (red + swir2)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.truecolor-Tuple{Any, Any, Any}","page":"Index","title":"RemoteS.truecolor","text":"Irgb = truecolor(bndR, bndG, bndB)\n\nTake three Landsat8/Sentinel2 UINT16 GMTimages or the file names of those bands and compose an RGB true color image applying automatic histogram stretching.\n\nReturn an UInt8 RGB GMTimage\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.nbri-Tuple{Any, Any}","page":"Index","title":"RemoteS.nbri","text":"NBRI = nbri(nir, swir3; kw...)\n\nNormalised Burn Ratio Index. Garcia 1991\n\nNBRI = (nir - swir3) / (nir + swir3)\n\n\n\n\n\n","category":"method"},{"location":"#RemoteS.read_mtl","page":"Index","title":"RemoteS.read_mtl","text":"readmtl(bandname::String, mtl::String=\"\"; get_full=false)\n\nUse the band_name of a Landsat8 band to find the MTL file with the scene parameters at which that band belongs and read the params needed to compute Brightness temperature, radiance at top of atmosphere, etc. If the MTL file does not lieve next to the band file, send its name via the mtl argument.\n\nThe get_full option makes this function return a tring with contents of the MTL file or nothing if the MTL file is not found.\n\nReturns a tuple with:\n\n(band=band, radmul=radmul, radadd=radadd, radmax=radmax, reflectmul=reflectmul, reflectadd=reflectadd, reflectmax=reflectmax, sunazim=sunazim, sunelev=sunelev, sundis=sunazim, K1=K1, K2=K2)\n\nor a string with MTL contents (or nothing if MTL file is not found)\n\n\n\n\n\n","category":"function"}]
}
