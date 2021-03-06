/*
Copyright (c) 2009-2015, Dan "Ducky" Little & GeoMOOSE.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

dojo.provide('GeoMOOSE.Tab.Catalog.LayerControl.DrawPolygon');

dojo.require('GeoMOOSE.Tab.Catalog.LayerControl.Selectable');

dojo.declare('GeoMOOSE.Tab.Catalog.LayerControl.DrawPolygon', [GeoMOOSE.Tab.Catalog.LayerControl.Selectable], {
	classes: ['sprite-control-drawPolygon'],

	tip: 'CONFIGURATION.layer_controls["draw-polygon"].tip',

	onClick: function() {
		GeoMOOSE.activateMapSource(this.layer.src);
		GeoMOOSE.activateLayerTool('polygon', {title: this.layer.title});
		this.inherited(arguments);
	}
});

GeoMOOSE._registerLayerControl('draw-polygon', GeoMOOSE.Tab.Catalog.LayerControl.DrawPolygon);

