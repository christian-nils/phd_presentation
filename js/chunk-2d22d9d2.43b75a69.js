(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d9d2"],{f7f1:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("anim")},r=[],s=(a("38cf"),a("31be")),n=a("cffa"),i={components:{anim:s["a"]},mounted:function(){this.svg_target=document.getElementById("intersection_anim");var e=5,t=.8,a=2;n["e"].set("#guides",{alpha:0}),n["e"].set("#body",{transformOrigin:"50% bottom"});var o=new TimelineMax({repeat:-1,repeatDelay:1,ease:Power3.easeInOut});o.fromTo("#body",.1,{y:"+=0"},{y:"-=.25"}).to("#body",.1,{y:"+=.25"},.1),o.fromTo("#car",3,{x:"-=3"},{x:"+=5"}).repeat(-1).yoyo(!0);var r=document.getElementById("road"),s=document.getElementById("sides"),i=document.getElementById("road_dash"),l=document.getElementById("public_light"),c=document.getElementById("house_left"),m=document.getElementById("house_right"),y=20,u=10,d=10;w(s,c,d),w(s,m,d),w(r,i,y),w(s,l,u),i.remove(),l.remove(),c.remove(),m.remove(),n["e"].set("#sides",{x:40,y:109,transformOrigin:"50% bottom"}),n["e"].set(".road_dash",{scaleX:0,scaleY:0,transformOrigin:"50% 50%"}),n["e"].set(".public_light",{scaleX:0,scaleY:0,x:-40,y:-112,transformOrigin:"0 bottom"}),n["e"].set(".house_left",{scaleX:0,scaleY:0,x:345,y:-182,transformOrigin:"0 bottom"}),n["e"].set(".house_right",{scaleX:0,scaleY:0,x:347,y:-182,transformOrigin:"0 bottom"}),n["e"].set("#interaction",{scaleX:0,scaleY:0,x:0,y:-41.5,transformOrigin:"50% bottom"});var f=new TimelineMax({paused:!0}),p={type:"thru",curviness:0,values:[{x:"+=0",y:"+=0",scaleX:0,scaleY:0},{x:"-=200",y:"+=200",scaleX:2,scaleY:2}]},g={type:"thru",curviness:0,values:[{x:"+=0",y:"+=0",scaleX:0,scaleY:0},{x:"-=485",y:"+=200",scaleX:1.1,scaleY:1.1}]},h={type:"thru",curviness:0,values:[{x:"+=0",y:"+=0",scaleX:0,scaleY:0},{x:"-=1050",y:"+=200",scaleX:2.75,scaleY:2.75}]},x={type:"thru",curviness:0,values:[{x:"+=0",y:"+=0",scaleX:0,scaleY:0},{x:"+=725",y:"+=200",scaleX:2.5,scaleY:-2.5}]},v={type:"thru",curviness:0,values:[{x:"+=0",y:"+=0",scaleX:0,scaleY:0},{x:"+=0",y:"+=200",scaleX:4.8,scaleY:4.8}]};B(f,"road_dash",y,p,"50% 50%",Expo.easeIn,-1,!1),B(f,"public_light",u,g,"0 bottom",Expo.easeIn,1,!1),B(f,"house_left",d,h,"0 bottom",Expo.easeIn,1,!0),B(f,"house_right",d,x,"0 bottom",Expo.easeIn,1,!0),f.to("#interaction",e,{bezier:v,transformOrigin:"50% bottom",ease:Expo.easeIn,delay:e,onComplete:C,onCompleteParams:["{self}"]});var O=.5;I(O),E("left_leg",O,0),E("right_leg",O,-1),_(O),Y(O),X(O),n["e"].fromTo(f,a,{timeScale:1},{timeScale:0,delay:e-a+2,onComplete:function(){o.pause()}});var b=new TimelineMax;function I(e){n["e"].fromTo(".wheel",e/5,{transformOrigin:"center",rotation:0},{rotation:-10,ease:Linear.easeNone,repeat:-1})}function X(e){n["e"].set("#arm",{transformOrigin:"10% 90%",rotation:0}),n["e"].to("#arm",e/2,{rotation:"+=5",repeat:-1,delay:e/2*.1,yoyo:!0,ease:Sine.easeInOut})}function Y(e){n["e"].set("#head",{transformOrigin:"60% 85%",rotation:0}),n["e"].to("#head",e/2,{rotation:"-=5",repeat:-1,delay:e/2*.1,yoyo:!0,ease:Sine.easeInOut})}function _(e){n["e"].set("#back",{transformOrigin:"60% 85%",rotation:0}),n["e"].to("#back",e/2,{rotation:"+=3",repeat:-1,delay:e/2*.1,yoyo:!0,ease:Sine.easeInOut})}function E(e,t,a){n["e"].set("#"+e,{transformOrigin:"80% 10%",rotation:-20}),n["d"].set("#"+e+">.calf",{transformOrigin:"7% 18%",rotation:-10}),n["e"].to("#"+e,t,{rotation:"+=40",repeat:-1,delay:a*t,yoyo:!0,ease:Sine.easeInOut}),n["e"].to("#"+e,t,{y:.1,repeat:-1,delay:(.25+a)*t,yoyo:!0,ease:Sine.easeInOut}),n["e"].to("#"+e+">.calf",t,{rotation:"+=50",repeat:-1,delay:(.75+a)*t,yoyo:!0,ease:Sine.easeInOut})}function w(e,t,a){for(var o=1;o<a;o++){var r=t.cloneNode(!0);r.classList.add(r.id),r.removeAttribute("id"),e.appendChild(r)}}function B(t,a,o,r,s,n,i,l){for(var c=document.getElementsByClassName(a),m=0;m<c.length;m++)t.to(c[m],e,{bezier:r,transformOrigin:s,ease:n,repeat:i,onRepeat:T,onRepeatParams:["{self}",l],onComplete:C,onCompleteParams:["{self}"]},1===c.length?0:-1/(o-1)*e*m)}function T(e,t){t&&e.target.parentNode.insertBefore(e.target,e.target.parentNode.firstChild)}function C(e){if(NodeList.prototype.isPrototypeOf(e.target))for(var t=0;t<e.target.length;t++)e.target[t].remove();else e.target.remove()}b.fromTo("#cyclist",t,{x:"+=100"},{x:"-=170",delay:e-a+.6,ease:Power0.easeNone}),b.to("#cyclist",3,{transformOrigin:"center",x:"-=15",y:"-=45",scaleX:0,scaleY:0,rotation:-720,ease:Expo.easeOut}),n["e"].set("#star",{alpha:0,x:"-=20"}),b.fromTo("#star",3,{transformOrigin:"center",scaleX:.3,scaleY:.3,ease:Expo.easeOut},{scaleX:1,scaleY:1,alpha:1,rotation:25},"-=2"),b.to("#star",5,{rotation:0,repeat:-1,yoyo:!0}),f.addLabel("start",2*e),f.play("start")}},l=i,c=a("2877"),m=Object(c["a"])(l,o,r,!1,null,"072b442a",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22d9d2.43b75a69.js.map