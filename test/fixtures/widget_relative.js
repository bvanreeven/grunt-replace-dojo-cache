/*jslint indent: 4, forin: true */
/*global buzz, dijit, dojo, logger, mx, mxui, Mustache, window*/
dojo.provide("buzz.widget.MessagesView");

dojo.require("dojo.cache");
dojo.require("dojo.NodeList-traverse");
dojo.require("buzz.widget.lib.mustache");

(function () {
    mxui.widget.declare("buzz.widget.MessagesView", {

        template: Mustache.compile(dojo.cache("fixtures", "template.html")),
        tempNode: mxui.dom.div()

    });
}());