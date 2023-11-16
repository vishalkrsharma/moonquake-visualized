# Moonquake Visualized

## HIGH-LEVEL PROJECT SUMMARY

Apollo missions were conducted from 1968-72, but till now the seismic data retrieved from it has never been visualized before in a 3D environment. Hence, we have developed an interactive web app. We plot an animated seismic wave on a 3D model of the Moon based on the date provided by the user as input. When the user provides year and day, an animated pressure gradient wave is displayed on the respective latitude and longitude along with its details.

## LINK TO FINAL PROJECT

https://moonquake-visualized.vercel.app/

## DETAILED PROJECT DESCRIPTION

### BACKGROUND

Apollo crewed missions were conducted from 1968 - 1972. The astronauts left behind several seismometers on the Lunar surface to track the geophysical events occurring on the moon. These seismometers sent back data to earth and were recorded in exabyte tapes. The data has since been studied extensively by scientists to know more about the internal structure of the moon. Although the data has been available for a long period of time, we could not find any tool that can plot and visualize the propagation of the seismic wave in an interactive environment.

### MOONQUAKE VISUALIZED

![](server/client/src/assets/readme.png)

We have created 'Moonquake Visualized' a web app to enable users to look at the different seismic activities on the Lunar surface. When the user provides the Date (year & day) as input, the corresponding latitude and longitude along with the details associated with the moonquake on that date are fetched from the database. After receiving the coordinates, an animation of a pressure wave designed in Blender is displayed on a 3D globe made with the help of ThreeJS. The size of the pressure wave is dynamic and is calculated based on the magnitude of the moonquake.

### HOW DOES IT WORK?

When you first open the website, you will be welcomed with a landing page. On clicking the 'visit moon' you will be directed to the main interface. Here you will find many parameters for adjusting

- Axis
- Lighting (Directional and Ambient)
- Toggle button for Topograph/Normal map
- Toggle button for Apollo landing marker
- Toggle button for Sea and Ocean marker

A drop-down menu for selecting the year and day of the moonquake
Switching to First-Person-View of a moonquake on the Lunar surface
From the drop-down menu, the user can select the timing of the moonquake they want to see and the corresponding seismic wave will be displayed on the globe.

## SPACE AGENCY DATA

- [PDS Geoscience Node](https://pds-geosciences.wustl.edu/lunar/urn-nasa-pds-apollo_seismic_event_catalog/) We used the seismic data provided by NASA planetary Geosciences node for making the Database of our project.
- [NASA CGI Moon Kit](https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=4720) was used for creating an accurate and highly detailed 3d model of the Moon.
- [Moon LRO LOLA](https://astrogeology.usgs.gov/search/map/Moon/LMMP/LOLA-derived/Lunar_LRO_LOLA_ClrShade_Global_128ppd_v04) from ESA was used to make the topograph of our Moon.
- [NASA Visible Earth](https://astrogeology.usgs.gov/search/map/Moon/LMMP/LOLA-derived/Lunar_LRO_LOLA_ClrShade_Global_128ppd_v04) map was used for making a 3D model of Earth.
- [NASA 3D resources](https://nasa3d.arc.nasa.gov/models) were used for creating all the 3D environment objects.
- [IRIS DMC](http://ds.iris.edu/ds/nodes/dmc/forms/assembled-data/?dataset_report_number=90-003) was used to download the original assembled PSE data files.

## TAGS

#Moon #Lunar #Geophysics #3D #WebApp #ReactJS #Blender
