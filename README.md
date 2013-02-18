#### Cliff Notes - [cliff.barendsen@gmail.com]
##### February 17th, 2013

## MappedIT 
#### [Get Meteor and Meteorite](#meteor)

### Technologies:
* Metoer
	* Node
	* Backbone
	* D3
* Meteorite
* APIs
	* Google Maps
	* Facebook Connect

### Overview:
Using Meteor Framework with Meteorite Packaging wrapper to connect with Facebook, Google Maps, and use D3 for vectoring.

Google maps will help provide all the data points and overlays and d3 will be used for charting data and analytics.

Create a map with hover items that show facebook people. Chart area to filter by likes and such.


## <a id="meteor"></a>Getting METEOR and METEORITE 

###Install Meteor:

    curl https://install.meteor.com | /bin/sh

Then you need to install meteorite
### Install Meteorite

Meteorite can be installed via [npm](https://npmjs.org/).

``` sh
$ sudo npm install -g meteorite
```

### Run locally
From command line, point to directory you've cloned this project, then type:
```
mrt run
```
... you should see the build and then something like
```
Ok, everything's ready. Here comes Meteor!
[[[[[ ~/Desktop/nomas/meteor/meteor-fb ]]]]]
Running on: http://localhost:3000/
```
Got to url localhost:3000 and you should be able to run project