!function(t){function o(r){if(e[r])return e[r].exports;var s=e[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}({0:function(t,o,e){var r,s;r=e(5),s=e(19),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},5:function(t,o){"use strict";t.exports={section:{label:"Meta",priority:100},props:["node"]},window.Site.components["node-meta"]=t.exports},19:function(t,o){t.exports="<div class=uk-form-horizontal> <div class=uk-form-row> <label for=form-meta-title class=uk-form-label>{{ 'Title' | trans }}</label> <div class=uk-form-controls> <input id=form-meta-title class=uk-form-width-large type=text v-model=\"node.data.meta['og:title']\"> </div> </div> <div class=uk-form-row> <label for=form-meta-description class=uk-form-label>{{ 'Description' | trans }}</label> <div class=uk-form-controls> <textarea id=form-meta-description class=uk-form-width-large rows=5 type=text v-model=\"node.data.meta['og:description']\"></textarea> </div> </div> </div>"}});