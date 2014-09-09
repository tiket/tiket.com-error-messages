(function(e){function d(e){var t=[0,0,0],n=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("transform");if(n!=="none"){var r=n.split("(")[1].split(")")[0].split(",");var i=0,s=0,o=0;if(r.length==16){i=parseFloat(r[r.length-4]);s=parseFloat(r[r.length-3]);o=parseFloat(r[r.length-2])}else{i=parseFloat(r[r.length-2]);s=parseFloat(r[r.length-1]);o=0}t=[i,s,o]}return t}function v(e){if(e.offsetWidth===0||e.offsetHeight===0)return false;var t=document.documentElement.clientHeight,n=e.getClientRects();for(var r=0,i=n.length;r<i;r++){var s=n[r],o=s.top>0?s.top<=t:s.bottom>0&&s.bottom<=t;if(o)return true}return false}function m(){var e=document.createElement("p"),t,n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(e,null);for(var r in n){if(e.style[r]!==undefined){e.style[r]="translate3d(1px,1px,1px)";t=window.getComputedStyle(e).getPropertyValue(n[r])}}document.body.removeChild(e);return t!==undefined&&t.length>0&&t!=="none"}function g(){return c===true?false:window.DeviceOrientationEvent!==undefined}function b(e){x=e.gamma;y=e.beta;if(Math.abs(window.orientation)===90){var t=x;x=y;y=t}if(window.orientation<0){x=-x;y=-y}f=f===null?x:f;l=l===null?y:l;return{x:x-f,y:y-l}}function w(e){if((new Date).getTime()<r+n)return;r=(new Date).getTime();var t=s.offset()!=null?s.offset().left:0,f=s.offset()!=null?s.offset().top:0,l=e.pageX-t,p=e.pageY-f;if(!v(i[0].obj[0].parentNode))return;if(g()){if(e.gamma===undefined){c=true;return}values=b(e);l=values.x/o;p=values.y/o;l=l<a?a:l>u?u:l;p=p<a?a:p>u?u:p;l=(l+1)/2;p=(p+1)/2}var d=l/(g()===true?u:s.width()),m=p/(g()===true?u:s.height()),y,w;for(w=i.length;w--;){y=i[w];if(h.useTransform&&!y.background){newX=y.transformStartX+y.inversionFactor*y.xRange*d;newY=y.transformStartY+y.inversionFactor*y.yRange*m;newZ=y.transformStartZ;y.obj.css({transform:"translate3d("+newX+"px,"+newY+"px,"+newZ+"px)"})}else{newX=y.startX+y.inversionFactor*y.xRange*d;newY=y.startY+y.inversionFactor*y.yRange*m;if(y.background){y.obj.css("background-position",newX+"px "+newY+"px")}else{y.obj.css("left",newX).css("top",newY)}}}}var t=25,n=1/t*1e3,r=(new Date).getTime(),i=[],s=e(window),o=30,u=1,a=-1,f=null,l=null,c=false,h=null;var p={useTransform:true};e.fn.plaxify=function(t){h=e.extend({},p,t);h.useTransform=h.useTransform?m():false;return this.each(function(){var n=-1;var r={xRange:e(this).data("xrange")||0,yRange:e(this).data("yrange")||0,zRange:e(this).data("zrange")||0,invert:e(this).data("invert")||false,background:e(this).data("background")||false};for(var s=0;s<i.length;s++){if(this===i[s].obj.get(0)){n=s}}for(var o in t){if(r[o]==0){r[o]=t[o]}}r.inversionFactor=r.invert?-1:1;r.obj=e(this);if(r.background){pos=(r.obj.css("background-position")||"0px 0px").split(/ /);if(pos.length!=2){return}x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y){return}r.originX=r.startX=x[2]||0;r.originY=r.startY=y[2]||0;r.transformOriginX=r.transformStartX=0;r.transformOriginY=r.transformStartY=0;r.transformOriginZ=r.transformStartZ=0}else{var u=r.obj.position(),a=d(r.obj);r.obj.css({transform:a.join()+"px",top:u.top,left:u.left,right:"",bottom:""});r.originX=r.startX=u.left;r.originY=r.startY=u.top;r.transformOriginX=r.transformStartX=a[0];r.transformOriginY=r.transformStartY=a[1];r.transformOriginZ=r.transformStartZ=a[2]}r.startX-=r.inversionFactor*Math.floor(r.xRange/2);r.startY-=r.inversionFactor*Math.floor(r.yRange/2);r.transformStartX-=r.inversionFactor*Math.floor(r.xRange/2);r.transformStartY-=r.inversionFactor*Math.floor(r.yRange/2);r.transformStartZ-=r.inversionFactor*Math.floor(r.zRange/2);if(n>=0){i.splice(n,1,r)}else{i.push(r)}})};e.plax={enable:function(t){if(t){if(t.activityTarget)s=t.activityTarget||e(window);if(typeof t.gyroRange==="number"&&t.gyroRange>0)o=t.gyroRange}s.bind("mousemove.plax",function(e){w(e)});if(g()){window.ondeviceorientation=function(e){w(e)}}},disable:function(t){e(document).unbind("mousemove.plax");window.ondeviceorientation=undefined;if(t&&typeof t.restorePositions==="boolean"&&t.restorePositions){for(var n=i.length;n--;){layer=i[n];if(h.useTransform&&!layer.background){layer.obj.css("transform","translate3d("+layer.transformOriginX+"px,"+layer.transformOriginY+"px,"+layer.transformOriginZ+"px)").css("top",layer.originY)}else{if(i[n].background){layer.obj.css("background-position",layer.originX+"px "+layer.originY+"px")}else{layer.obj.css("left",layer.originX).css("top",layer.originY)}}}}if(t&&typeof t.clearLayers==="boolean"&&t.clearLayers)i=[]}};if(typeof ender!=="undefined"){e.ender(e.fn,true)}})(function(){return typeof jQuery!=="undefined"?jQuery:ender}())