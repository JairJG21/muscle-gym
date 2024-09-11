import{j as V}from"./jsx-runtime.CRkqtJS5.js";import{R as D,r as K}from"./index.B52nOzfP.js";function Q(i,u){var d=Object.keys(i);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);u&&(f=f.filter(function(h){return Object.getOwnPropertyDescriptor(i,h).enumerable})),d.push.apply(d,f)}return d}function wt(i){for(var u=1;u<arguments.length;u++){var d=arguments[u]!=null?arguments[u]:{};u%2?Q(Object(d),!0).forEach(function(f){o(i,f,d[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(d)):Q(Object(d)).forEach(function(f){Object.defineProperty(i,f,Object.getOwnPropertyDescriptor(d,f))})}return i}function o(i,u,d){return u in i?Object.defineProperty(i,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[u]=d,i}function Mt(i,u){i.prototype=Object.create(u.prototype),i.prototype.constructor=i,$(i,u)}function $(i,u){return $=Object.setPrototypeOf||function(f,h){return f.__proto__=h,f},$(i,u)}function s(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function St(i,u){var d;return function(){for(var f=arguments.length,h=new Array(f),p=0;p<f;p++)h[p]=arguments[p];var w=this;clearTimeout(d),d=setTimeout(function(){return i.apply(w,h)},u)}}function j(i,u){for(;i;){if(i.classList&&i.classList.contains(u))return!0;i=i.parentElement}return!1}function at(i){var u=i.getBoundingClientRect();return{x:u.left,y:u.top}}function xt(i,u,d){return"https://tile.openstreetmap.org/"+d+"/"+i+"/"+u+".png"}var J=300,Et=1500,Tt=150,Ct=40,U=2,tt=300,bt=60,Dt=300,yt=300,A=function(){return!0},Y=function(u,d){return(u+180)/360*Math.pow(2,d)},N=function(u,d){return(1-Math.log(Math.tan(u*Math.PI/180)+1/Math.cos(u*Math.PI/180))/Math.PI)/2*Math.pow(2,d)};function W(i,u){return i/Math.pow(2,u)*360-180}function z(i,u){var d=Math.PI-2*Math.PI*i/Math.pow(2,u);return 180/Math.PI*Math.atan(.5*(Math.exp(d)-Math.exp(-d)))}function P(i,u){var d=at(i);return[u.clientX-d.x,u.clientY-d.y]}function Zt(i){return i*(2-i)}var H=[z(Math.pow(2,10),10),z(0,10),W(0,10),W(Math.pow(2,10),10)],G=typeof window<"u",L=G&&window.performance&&window.performance.now?function(){return window.performance.now()}:function(){var i=new Date().getTime();return function(){return new Date().getTime()-i}}(),q=function(u){return G?(window.requestAnimationFrame||window.setTimeout)(u):(u(new Date().getTime()),null)},et=function(u){return G&&u?(window.cancelAnimationFrame||window.clearTimeout)(u):!1};function nt(i,u,d,f,h){return!i||i.length===0?"":i.map(function(p){return u(d,f,h,p)+(p===1?"":" "+p+"x")}).join(", ")}var Pt=function(u){var d=u.tile,f=u.tileLoaded;return D.createElement("img",{src:d.url,srcSet:d.srcSet,width:d.width,height:d.height,loading:"lazy",onLoad:f,alt:"",style:{position:"absolute",left:d.left,top:d.top,willChange:"transform",transformOrigin:"top left",opacity:1}})},it=function(i){Mt(u,i);function u(f){var h,p,w,E,_,T,M,S,t;return t=i.call(this,f)||this,o(s(t),"_containerRef",void 0),o(s(t),"_mousePosition",void 0),o(s(t),"_loadTracker",void 0),o(s(t),"_dragStart",null),o(s(t),"_mouseDown",!1),o(s(t),"_moveEvents",[]),o(s(t),"_lastClick",null),o(s(t),"_lastTap",null),o(s(t),"_lastWheel",null),o(s(t),"_touchStartPixel",null),o(s(t),"_touchStartMidPoint",null),o(s(t),"_touchStartDistance",null),o(s(t),"_secondTouchEnd",null),o(s(t),"_warningClearTimeout",null),o(s(t),"_isAnimating",!1),o(s(t),"_animationStart",null),o(s(t),"_animationEnd",null),o(s(t),"_zoomStart",null),o(s(t),"_centerTarget",null),o(s(t),"_zoomTarget",null),o(s(t),"_zoomAround",null),o(s(t),"_animFrame",null),o(s(t),"_boundsSynced",!1),o(s(t),"_minMaxCache",null),o(s(t),"_lastZoom",void 0),o(s(t),"_lastCenter",void 0),o(s(t),"_centerStart",void 0),o(s(t),"_resizeObserver",null),o(s(t),"updateWidthHeight",function(){if(t._containerRef){var e=t._containerRef.getBoundingClientRect();if(e&&e.width>0&&e.height>0)return t.setState({width:e.width,height:e.height}),!0}return!1}),o(s(t),"wa",function(){var e;return(e=window).addEventListener.apply(e,arguments)}),o(s(t),"wr",function(){var e;return(e=window).removeEventListener.apply(e,arguments)}),o(s(t),"bindMouseEvents",function(){t.wa("mousedown",t.handleMouseDown),t.wa("mouseup",t.handleMouseUp),t.wa("mousemove",t.handleMouseMove)}),o(s(t),"bindTouchEvents",function(){t.wa("touchstart",t.handleTouchStart,{passive:!1}),t.wa("touchmove",t.handleTouchMove,{passive:!1}),t.wa("touchend",t.handleTouchEnd,{passive:!1})}),o(s(t),"unbindMouseEvents",function(){t.wr("mousedown",t.handleMouseDown),t.wr("mouseup",t.handleMouseUp),t.wr("mousemove",t.handleMouseMove)}),o(s(t),"unbindTouchEvents",function(){t.wr("touchstart",t.handleTouchStart),t.wr("touchmove",t.handleTouchMove),t.wr("touchend",t.handleTouchEnd)}),o(s(t),"bindResizeEvent",function(){t.wa("resize",t.updateWidthHeight)}),o(s(t),"unbindResizeEvent",function(){t.wr("resize",t.updateWidthHeight)}),o(s(t),"bindWheelEvent",function(){t._containerRef&&t._containerRef.addEventListener("wheel",t.handleWheel,{passive:!1})}),o(s(t),"unbindWheelEvent",function(){t._containerRef&&t._containerRef.removeEventListener("wheel",t.handleWheel)}),o(s(t),"setCenterZoomTarget",function(e,n,a,r,l){if(a===void 0&&(a=!1),r===void 0&&(r=null),l===void 0&&(l=J),t.props.animate&&(!a||t.distanceInScreens(e,n,t.state.center,t.state.zoom)<=t.props.animateMaxScreens)){if(t._isAnimating){et(t._animFrame);var c=t.animationStep(L()),m=c.centerStep,g=c.zoomStep;t._centerStart=m,t._zoomStart=g}else t._isAnimating=!0,t._centerStart=t.limitCenterAtZoom([t._lastCenter[0],t._lastCenter[1]],t._lastZoom),t._zoomStart=t._lastZoom,t.onAnimationStart();t._animationStart=L(),t._animationEnd=t._animationStart+l,r?(t._zoomAround=r,t._centerTarget=t.calculateZoomCenter(t._lastCenter,r,t._lastZoom,n)):(t._zoomAround=null,t._centerTarget=e),t._zoomTarget=n,t._animFrame=q(t.animate)}else if(t.stopAnimating(),r){var v=t.calculateZoomCenter(t._lastCenter,r,t._lastZoom,n);t.setCenterZoom(v,n,a)}else t.setCenterZoom(e||t.state.center,n,a)}),o(s(t),"setCenterZoomForChildren",function(e,n){t.setCenterZoomTarget(e||t.state.center,n||t.state.zoom,!0)}),o(s(t),"distanceInScreens",function(e,n,a,r){var l=t.state,c=l.width,m=l.height,g=t.latLngToPixel(a,a,r),v=t.latLngToPixel(e,a,r),x=t.latLngToPixel(a,a,n),b=t.latLngToPixel(e,a,n),C=(Math.abs(g[0]-v[0])+Math.abs(x[0]-b[0]))/2/c,Z=(Math.abs(g[1]-v[1])+Math.abs(x[1]-b[1]))/2/m;return Math.sqrt(C*C+Z*Z)}),o(s(t),"animationStep",function(e){if(!t._animationEnd||!t._animationStart||!t._zoomTarget||!t._zoomStart||!t._centerStart||!t._centerTarget)return{centerStep:t.state.center,zoomStep:t.state.zoom};var n=t._animationEnd-t._animationStart,a=Math.max(e-t._animationStart,0),r=Zt(a/n),l=(t._zoomTarget-t._zoomStart)*r,c=t._zoomStart+l;if(t._zoomAround){var m=t.calculateZoomCenter(t._centerStart,t._zoomAround,t._zoomStart,c);return{centerStep:m,zoomStep:c}}else{var g=[t._centerStart[0]+(t._centerTarget[0]-t._centerStart[0])*r,t._centerStart[1]+(t._centerTarget[1]-t._centerStart[1])*r];return{centerStep:g,zoomStep:c}}}),o(s(t),"animate",function(e){if(!t._animationEnd||e>=t._animationEnd)t._isAnimating=!1,t.setCenterZoom(t._centerTarget,t._zoomTarget,!0),t.onAnimationStop();else{var n=t.animationStep(e),a=n.centerStep,r=n.zoomStep;t.setCenterZoom(a,r),t._animFrame=q(t.animate)}}),o(s(t),"stopAnimating",function(){t._isAnimating&&(t._isAnimating=!1,t.onAnimationStop(),et(t._animFrame))}),o(s(t),"limitCenterAtZoom",function(e,n){var a=t.getBoundsMinMax(n||t.state.zoom);return[Math.max(Math.min(!e||isNaN(e[0])?t.state.center[0]:e[0],a[1]),a[0]),Math.max(Math.min(!e||isNaN(e[1])?t.state.center[1]:e[1],a[3]),a[2])]}),o(s(t),"onAnimationStart",function(){t.props.onAnimationStart&&t.props.onAnimationStart()}),o(s(t),"onAnimationStop",function(){t.props.onAnimationStop&&t.props.onAnimationStop()}),o(s(t),"setCenterZoom",function(e,n,a){a===void 0&&(a=!1);var r=t.limitCenterAtZoom(e,n);if(n&&Math.round(t.state.zoom)!==Math.round(n)){var l=t.tileValues(t.state),c=t.tileValues({center:r,zoom:n,width:t.state.width,height:t.state.height}),m=t.state.oldTiles;t.setState({oldTiles:m.filter(function(y){return y.roundedZoom!==l.roundedZoom}).concat(l)},A);for(var g={},v=c.tileMinX;v<=c.tileMaxX;v++)for(var x=c.tileMinY;x<=c.tileMaxY;x++){var b=v+"-"+x+"-"+c.roundedZoom;g[b]=!1}t._loadTracker=g}t.setState({center:r,zoom:n||t.state.zoom},A);var C=t.props.zoom?t.props.zoom:t._lastZoom,Z=t.props.center?t.props.center:t._lastCenter;n&&(a||Math.abs(C-n)>.001||Math.abs(Z[0]-r[0])>1e-5||Math.abs(Z[1]-r[1])>1e-5)&&(t._lastZoom=n,t._lastCenter=[].concat(r),t.syncToProps(r,n))}),o(s(t),"getBoundsMinMax",function(e){if(t.props.limitBounds==="center")return H;var n=t.state,a=n.width,r=n.height;if(t._minMaxCache&&t._minMaxCache[0]===e&&t._minMaxCache[1]===a&&t._minMaxCache[2]===r)return t._minMaxCache[3];var l=Math.pow(2,e)*256,c=a>l?0:W(a/512,e),m=r>l?0:z(Math.pow(2,e)-r/512,e),g=a>l?0:W(Math.pow(2,e)-a/512,e),v=r>l?0:z(r/512,e),x=[m,v,c,g];return t._minMaxCache=[e,a,r,x],x}),o(s(t),"tileLoaded",function(e){if(t._loadTracker&&e in t._loadTracker){t._loadTracker[e]=!0;var n=Object.values(t._loadTracker).filter(function(a){return!a}).length;n===0&&t.setState({oldTiles:[]},A)}}),o(s(t),"handleTouchStart",function(e){if(t._containerRef&&!(e.target&&j(e.target,"pigeon-drag-block"))){if(e.touches.length===1){var n=e.touches[0],a=P(t._containerRef,n);if(t.coordsInside(a)&&(t._touchStartPixel=[a],!t.props.twoFingerDrag))if(t.stopAnimating(),t._lastTap&&L()-t._lastTap<tt){e.preventDefault();var r=t.pixelToLatLng(t._touchStartPixel[0]);t.setCenterZoomTarget(null,Math.max(t.props.minZoom,Math.min(t.state.zoom+1,t.props.maxZoom)),!1,r)}else t._lastTap=L(),t.trackMoveEvents(a)}else if(e.touches.length===2&&t._touchStartPixel){e.preventDefault(),t.stopTrackingMoveEvents(),(t.state.pixelDelta||t.state.zoomDelta)&&t.sendDeltaChange();var l=P(t._containerRef,e.touches[0]),c=P(t._containerRef,e.touches[1]);t._touchStartPixel=[l,c],t._touchStartMidPoint=[(l[0]+c[0])/2,(l[1]+c[1])/2],t._touchStartDistance=Math.sqrt(Math.pow(l[0]-c[0],2)+Math.pow(l[1]-c[1],2))}}}),o(s(t),"handleTouchMove",function(e){if(!t._containerRef){t._touchStartPixel=null;return}if(e.touches.length===1&&t._touchStartPixel){var n=e.touches[0],a=P(t._containerRef,n);t.props.twoFingerDrag?t.coordsInside(a)&&t.showWarning("fingers"):(e.preventDefault(),t.trackMoveEvents(a),t.setState({pixelDelta:[a[0]-t._touchStartPixel[0][0],a[1]-t._touchStartPixel[0][1]]},A))}else if(e.touches.length===2&&t._touchStartPixel&&t._touchStartMidPoint&&t._touchStartDistance){var r=t.state,l=r.width,c=r.height,m=r.zoom;e.preventDefault();var g=P(t._containerRef,e.touches[0]),v=P(t._containerRef,e.touches[1]),x=[(g[0]+v[0])/2,(g[1]+v[1])/2],b=[x[0]-t._touchStartMidPoint[0],x[1]-t._touchStartMidPoint[1]],C=Math.sqrt(Math.pow(g[0]-v[0],2)+Math.pow(g[1]-v[1],2)),Z=Math.max(t.props.minZoom,Math.min(t.props.maxZoom,m+Math.log2(C/t._touchStartDistance)))-m,y=Math.pow(2,Z),O=[(l/2-x[0])*(y-1),(c/2-x[1])*(y-1)];t.setState({zoomDelta:Z,pixelDelta:[O[0]+b[0]*y,O[1]+b[1]*y]},A)}}),o(s(t),"handleTouchEnd",function(e){if(!t._containerRef){t._touchStartPixel=null;return}if(t._touchStartPixel){var n=t.props,a=n.zoomSnap,r=n.twoFingerDrag,l=n.minZoom,c=n.maxZoom,m=t.state.zoomDelta,g=t.sendDeltaChange(),v=g.center,x=g.zoom;if(e.touches.length===0)if(r)t.clearWarning();else{var b=t._touchStartPixel[0],C=P(t._containerRef,e.changedTouches[0]);(Math.abs(b[0]-C[0])>U||Math.abs(b[1]-C[1])>U)&&(!t._secondTouchEnd||L()-t._secondTouchEnd>Dt)&&(e.preventDefault(),t.throwAfterMoving(C,v,x)),t._touchStartPixel=null,t._secondTouchEnd=null}else if(e.touches.length===1){e.preventDefault();var Z=P(t._containerRef,e.touches[0]);if(t._secondTouchEnd=L(),t._touchStartPixel=[Z],t.trackMoveEvents(Z),a){var y=t._touchStartMidPoint?t.pixelToLatLng(t._touchStartMidPoint):t.state.center,O;r&&Math.round(t.state.zoom)===Math.round(t.state.zoom+m)?O=Math.round(t.state.zoom):O=m>0?Math.ceil(t.state.zoom):Math.floor(t.state.zoom);var X=Math.max(l,Math.min(O,c));t.setCenterZoomTarget(y,X,!1,y)}}}}),o(s(t),"handleMouseDown",function(e){if(t._containerRef){var n=P(t._containerRef,e);if(e.button===0&&(!e.target||!j(e.target,"pigeon-drag-block"))&&t.coordsInside(n))if(t.stopAnimating(),e.preventDefault(),t._lastClick&&L()-t._lastClick<tt){if(!j(e.target,"pigeon-click-block")){var a=t.pixelToLatLng(t._mousePosition||n);t.setCenterZoomTarget(null,Math.max(t.props.minZoom,Math.min(t.state.zoom+1,t.props.maxZoom)),!1,a)}}else t._lastClick=L(),t._mouseDown=!0,t._dragStart=n,t.trackMoveEvents(n)}}),o(s(t),"handleMouseMove",function(e){t._containerRef&&(t._mousePosition=P(t._containerRef,e),t._mouseDown&&t._dragStart&&(t.trackMoveEvents(t._mousePosition),t.setState({pixelDelta:[t._mousePosition[0]-t._dragStart[0],t._mousePosition[1]-t._dragStart[1]]},A)))}),o(s(t),"handleMouseUp",function(e){if(!t._containerRef){t._mouseDown=!1;return}var n=t.state.pixelDelta;if(t._mouseDown){t._mouseDown=!1;var a=P(t._containerRef,e);if(t.props.onClick&&(!e.target||!j(e.target,"pigeon-click-block"))&&(!n||Math.abs(n[0])+Math.abs(n[1])<=U)){var r=t.pixelToLatLng(a);t.props.onClick({event:e,latLng:r,pixel:a}),t.setState({pixelDelta:void 0},A)}else{var l=t.sendDeltaChange(),c=l.center,m=l.zoom;t.throwAfterMoving(a,c,m)}}}),o(s(t),"stopTrackingMoveEvents",function(){t._moveEvents=[]}),o(s(t),"trackMoveEvents",function(e){var n=L();(t._moveEvents.length===0||n-t._moveEvents[t._moveEvents.length-1].timestamp>40)&&(t._moveEvents.push({timestamp:n,coords:e}),t._moveEvents.length>2&&t._moveEvents.shift())}),o(s(t),"throwAfterMoving",function(e,n,a){var r=t.state,l=r.width,c=r.height,m=t.props.animate,g=L(),v=t._moveEvents.shift();if(v&&m){var x=Math.max(g-v.timestamp,1),b=[(e[0]-v.coords[0])/x*120,(e[1]-v.coords[1])/x*120],C=Math.sqrt(b[0]*b[0]+b[1]*b[1]);if(C>Ct){var Z=Math.sqrt(l*l+c*c),y=Et*C/Z,O=W(Y(n[1],a)-b[0]/256,a),X=z(N(n[0],a)-b[1]/256,a);t.setCenterZoomTarget([X,O],a,!1,null,y)}}t.stopTrackingMoveEvents()}),o(s(t),"sendDeltaChange",function(){var e=t.state,n=e.center,a=e.zoom,r=e.pixelDelta,l=e.zoomDelta,c=n[0],m=n[1];return(r||l!==0)&&(m=W(Y(n[1],a+l)-(r?r[0]/256:0),a+l),c=z(N(n[0],a+l)-(r?r[1]/256:0),a+l),t.setCenterZoom([c,m],a+l)),t.setState({pixelDelta:void 0,zoomDelta:0},A),{center:t.limitCenterAtZoom([c,m],a+l),zoom:a+l}}),o(s(t),"getBounds",function(e,n){e===void 0&&(e=t.state.center),n===void 0&&(n=t.zoomPlusDelta());var a=t.state,r=a.width,l=a.height;return{ne:t.pixelToLatLng([r-1,0],e,n),sw:t.pixelToLatLng([0,l-1],e,n)}}),o(s(t),"syncToProps",function(e,n){e===void 0&&(e=t.state.center),n===void 0&&(n=t.state.zoom);var a=t.props.onBoundsChanged;if(a){var r=t.getBounds(e,n);a({center:e,zoom:n,bounds:r,initial:!t._boundsSynced}),t._boundsSynced=!0}}),o(s(t),"handleWheel",function(e){var n=t.props,a=n.mouseEvents,r=n.metaWheelZoom,l=n.zoomSnap,c=n.animate;if(a)if(!r||e.metaKey||e.ctrlKey){e.preventDefault();var m=-e.deltaY/Tt;if(!l&&t._zoomTarget){var g=t._zoomTarget-t.state.zoom;t.zoomAroundMouse(m+g,e)}else c?t.zoomAroundMouse(m,e):(!t._lastWheel||L()-t._lastWheel>J)&&(t._lastWheel=L(),t.zoomAroundMouse(m,e))}else t.showWarning("wheel")}),o(s(t),"showWarning",function(e){(!t.state.showWarning||t.state.warningType!==e)&&t.setState({showWarning:!0,warningType:e}),t._warningClearTimeout&&window.clearTimeout(t._warningClearTimeout),t._warningClearTimeout=window.setTimeout(t.clearWarning,yt)}),o(s(t),"clearWarning",function(){t.state.showWarning&&t.setState({showWarning:!1})}),o(s(t),"zoomAroundMouse",function(e,n){if(t._containerRef){var a=t.state.zoom,r=t.props,l=r.minZoom,c=r.maxZoom,m=r.zoomSnap;if(t._mousePosition=P(t._containerRef,n),!(!t._mousePosition||a===l&&e<0||a===c&&e>0)){var g=t.pixelToLatLng(t._mousePosition),v=a+e;m&&(v=e<0?Math.floor(v):Math.ceil(v)),v=Math.max(l,Math.min(v,c)),t.setCenterZoomTarget(null,v,!1,g)}}}),o(s(t),"zoomPlusDelta",function(){return t.state.zoom+t.state.zoomDelta}),o(s(t),"pixelToLatLng",function(e,n,a){n===void 0&&(n=t.state.center),a===void 0&&(a=t.zoomPlusDelta());var r=t.state,l=r.width,c=r.height,m=r.pixelDelta,g=[(e[0]-l/2-(m?m[0]:0))/256,(e[1]-c/2-(m?m[1]:0))/256],v=Y(n[1],a)+g[0],x=N(n[0],a)+g[1];return[Math.max(H[0],Math.min(H[1],z(x,a))),Math.max(H[2],Math.min(H[3],W(v,a)))]}),o(s(t),"latLngToPixel",function(e,n,a){n===void 0&&(n=t.state.center),a===void 0&&(a=t.zoomPlusDelta());var r=t.state,l=r.width,c=r.height,m=r.pixelDelta,g=Y(n[1],a),v=N(n[0],a),x=Y(e[1],a),b=N(e[0],a);return[(x-g)*256+l/2+(m?m[0]:0),(b-v)*256+c/2+(m?m[1]:0)]}),o(s(t),"calculateZoomCenter",function(e,n,a,r){var l=t.state,c=l.width,m=l.height,g=t.latLngToPixel(n,e,a),v=t.latLngToPixel(n,e,r),x=t.pixelToLatLng([c/2+v[0]-g[0],m/2+v[1]-g[1]],e,r);return t.limitCenterAtZoom(x,r)}),o(s(t),"setRef",function(e){t._containerRef=e}),t.syncToProps=St(t.syncToProps,bt),t._lastZoom=(h=(p=f.defaultZoom)!==null&&p!==void 0?p:f.zoom)!==null&&h!==void 0?h:14,t._lastCenter=(w=(E=f.defaultCenter)!==null&&E!==void 0?E:f.center)!==null&&w!==void 0?w:[0,0],t.state={zoom:t._lastZoom,center:t._lastCenter,width:(_=(T=f.width)!==null&&T!==void 0?T:f.defaultWidth)!==null&&_!==void 0?_:-1,height:(M=(S=f.height)!==null&&S!==void 0?S:f.defaultHeight)!==null&&M!==void 0?M:-1,zoomDelta:0,pixelDelta:void 0,oldTiles:[],showWarning:!1,warningType:void 0},t}var d=u.prototype;return d.componentDidMount=function(){var h=this;this.props.mouseEvents&&this.bindMouseEvents(),this.props.touchEvents&&this.bindTouchEvents(),(!this.props.width||!this.props.height)&&(this.updateWidthHeight()||q(this.updateWidthHeight),this.bindResizeEvent()),this.bindWheelEvent(),this.syncToProps(),typeof window.ResizeObserver<"u"&&(this._resizeObserver=new window.ResizeObserver(function(){h.updateWidthHeight()}),this._resizeObserver.observe(this._containerRef))},d.componentWillUnmount=function(){this.props.mouseEvents&&this.unbindMouseEvents(),this.props.touchEvents&&this.unbindTouchEvents(),this.unbindWheelEvent(),(!this.props.width||!this.props.height)&&this.unbindResizeEvent(),this._resizeObserver&&this._resizeObserver.disconnect()},d.componentDidUpdate=function(h){var p;if(this.props.mouseEvents!==h.mouseEvents&&(this.props.mouseEvents?this.bindMouseEvents():this.unbindMouseEvents()),this.props.touchEvents!==h.touchEvents&&(this.props.touchEvents?this.bindTouchEvents():this.unbindTouchEvents()),this.props.width&&this.props.width!==h.width&&this.setState({width:this.props.width}),this.props.height&&this.props.height!==h.height&&this.setState({height:this.props.height}),!(!this.props.center&&!this.props.zoom)&&!((!this.props.center||this.props.center[0]===(h==null||(p=h.center)===null||p===void 0?void 0:p[0])&&this.props.center[1]===h.center[1])&&this.props.zoom===h.zoom)){var w=this._isAnimating?this._centerTarget:this.state.center,E=this._isAnimating?this._zoomTarget:this.state.zoom;if(w&&E){var _,T,M=(_=this.props.center)!==null&&_!==void 0?_:w,S=(T=this.props.zoom)!==null&&T!==void 0?T:E;(Math.abs(S-E)>.001||Math.abs(M[0]-w[0])>1e-4||Math.abs(M[1]-w[1])>1e-4)&&this.setCenterZoomTarget(M,S,!0)}}},d.coordsInside=function(h){var p=this.state,w=p.width,E=p.height;if(h[0]<0||h[1]<0||h[0]>=w||h[1]>=E)return!1;var _=this._containerRef;if(_){var T=at(_),M=document.elementFromPoint(h[0]+T.x,h[1]+T.y);return _===M||_.contains(M)}else return!1},d.tileValues=function(h){var p=h.center,w=h.zoom,E=h.pixelDelta,_=h.zoomDelta,T=h.width,M=h.height,S=Math.round(w+(_||0)),t=w+(_||0)-S,e=Math.pow(2,t),n=T/e,a=M/e,r=Y(p[1],S)-(E?E[0]/256/e:0),l=N(p[0],S)-(E?E[1]/256/e:0),c=n/2/256,m=a/2/256,g=Math.floor(r-c),v=Math.floor(r+c),x=Math.floor(l-m),b=Math.floor(l+m);return{tileMinX:g,tileMaxX:v,tileMinY:x,tileMaxY:b,tileCenterX:r,tileCenterY:l,roundedZoom:S,zoomDelta:_||0,scaleWidth:n,scaleHeight:a,scale:e}},d.renderTiles=function(){for(var h=this,p=this.state,w=p.oldTiles,E=p.width,_=p.height,T=this.props.dprs,M=this.props.provider||xt,S=this.tileValues(this.state),t=S.tileMinX,e=S.tileMaxX,n=S.tileMinY,a=S.tileMaxY,r=S.tileCenterX,l=S.tileCenterY,c=S.roundedZoom,m=S.scaleWidth,g=S.scaleHeight,v=S.scale,x=[],b=0;b<w.length;b++){var C=w[b],Z=C.roundedZoom-c;if(!(Math.abs(Z)>4||Z===0))for(var y=1/Math.pow(2,Z),O=-(t-C.tileMinX*y)*256,X=-(n-C.tileMinY*y)*256,rt=Math.max(C.tileMinX,0),ot=Math.max(C.tileMinY,0),st=Math.min(C.tileMaxX,Math.pow(2,C.roundedZoom)-1),lt=Math.min(C.tileMaxY,Math.pow(2,C.roundedZoom)-1),R=rt;R<=st;R++)for(var k=ot;k<=lt;k++)x.push({key:R+"-"+k+"-"+C.roundedZoom,url:M(R,k,C.roundedZoom),srcSet:nt(T,M,R,k,C.roundedZoom),left:O+(R-C.tileMinX)*256*y,top:X+(k-C.tileMinY)*256*y,width:256*y,height:256*y,active:!1})}for(var ht=Math.max(t,0),ut=Math.max(n,0),ct=Math.min(e,Math.pow(2,c)-1),dt=Math.min(a,Math.pow(2,c)-1),I=ht;I<=ct;I++)for(var F=ut;F<=dt;F++)x.push({key:I+"-"+F+"-"+c,url:M(I,F,c),srcSet:nt(T,M,I,F,c),left:(I-t)*256,top:(F-n)*256,width:256,height:256,active:!0});var mt={width:m,height:g,position:"absolute",top:"calc((100% - "+_+"px) / 2)",left:"calc((100% - "+E+"px) / 2)",overflow:"hidden",willChange:"transform",transform:"scale("+v+", "+v+")",transformOrigin:"top left"},ft=this.props.boxClassname||"pigeon-tiles-box",vt=-((r-t)*256-m/2),pt=-((l-n)*256-g/2),gt={position:"absolute",width:(e-t+1)*256,height:(a-n+1)*256,willChange:"transform",transform:"translate("+vt+"px, "+pt+"px)"},_t=this.props.tileComponent;return D.createElement("div",{style:mt,className:ft},D.createElement("div",{className:"pigeon-tiles",style:gt},x.map(function(B){return D.createElement(_t,{key:B.key,tile:B,tileLoaded:function(){return h.tileLoaded(B.key)}})})))},d.renderOverlays=function(){var h=this,p=this.state,w=p.width,E=p.height,_=p.center,T={bounds:this.getBounds(),zoom:this.zoomPlusDelta(),center:_,width:w,height:E},M=D.Children.map(this.props.children,function(t){if(!t)return null;if(!D.isValidElement(t))return t;var e=t.props,n=e.anchor,a=e.position,r=e.offset,l=h.latLngToPixel(n||a||_);return D.cloneElement(t,{left:l[0]-(r?r[0]:0),top:l[1]-(r?r[1]:0),latLngToPixel:h.latLngToPixel,pixelToLatLng:h.pixelToLatLng,setCenterZoom:h.setCenterZoomForChildren,mapProps:h.props,mapState:T})}),S={position:"absolute",width:w,height:E,top:"calc((100% - "+E+"px) / 2)",left:"calc((100% - "+w+"px) / 2)"};return D.createElement("div",{className:"pigeon-overlays",style:S},M)},d.renderAttribution=function(){var h=this.props,p=h.attribution,w=h.attributionPrefix;if(p===!1)return null;var E={position:"absolute",bottom:0,right:0,fontSize:"11px",padding:"2px 5px",background:"rgba(255, 255, 255, 0.7)",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"#333"},_={color:"#0078A8",textDecoration:"none"};return D.createElement("div",{key:"attr",className:"pigeon-attribution",style:E},w===!1?null:D.createElement("span",null,w||D.createElement("a",{href:"https://pigeon-maps.js.org/",style:_,target:"_blank",rel:"noreferrer noopener"},"Pigeon")," | "),p||D.createElement("span",null," © ",D.createElement("a",{href:"https://www.openstreetmap.org/copyright",style:_,target:"_blank",rel:"noreferrer noopener"},"OpenStreetMap")," contributors"))},d.renderWarning=function(){var h=this.props,p=h.metaWheelZoom,w=h.metaWheelZoomWarning,E=h.twoFingerDrag,_=h.twoFingerDragWarning,T=h.warningZIndex,M=this.state,S=M.showWarning,t=M.warningType,e=M.width,n=M.height;if(p&&w||E&&_){var a={position:"absolute",top:0,left:0,width:e,height:n,overflow:"hidden",pointerEvents:"none",opacity:S?100:0,transition:"opacity 300ms",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:22,fontFamily:'"Arial", sans-serif',textAlign:"center",zIndex:T},r=typeof window<"u"&&window.navigator&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"ctrl",l=t==="fingers"?_:w;return D.createElement("div",{className:"pigeon-overlay-warning",style:a},l.replace("META",r))}else return null},d.render=function(){var h=this.props,p=h.touchEvents,w=h.twoFingerDrag,E=this.state,_=E.width,T=E.height,M={width:this.props.width?_:"100%",height:this.props.height?T:"100%",position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd",touchAction:p?w?"pan-x pan-y":"none":"auto"},S=!!(_&&T);return D.createElement("div",{style:M,ref:this.setRef,dir:"ltr"},S&&this.renderTiles(),S&&this.renderOverlays(),S&&this.renderAttribution(),S&&this.renderWarning())},u}(K.Component);o(it,"defaultProps",{animate:!0,metaWheelZoom:!1,metaWheelZoomWarning:"Use META + wheel to zoom!",twoFingerDrag:!1,twoFingerDragWarning:"Use two fingers to move the map",zoomSnap:!0,mouseEvents:!0,touchEvents:!0,warningZIndex:100,animateMaxScreens:5,minZoom:1,maxZoom:18,limitBounds:"center",dprs:[],tileComponent:Pt});function Lt(i){var u=typeof i.width<"u"?i.width:typeof i.height<"u"?i.height*29/34:29,d=typeof i.height<"u"?i.height:typeof i.width<"u"?i.width*34/29:34,f=K.useState(i.hover||!1),h=f[0],p=f[1],w=typeof i.hover>"u"?h:i.hover,E=i.color||"#93C0D0",_=function(M){return{event:M,anchor:i.anchor,payload:i.payload}};return D.createElement("div",{style:wt({position:"absolute",transform:"translate("+(i.left-u/2)+"px, "+(i.top-(d-1))+"px)",filter:w?"drop-shadow(0 0 4px rgba(0, 0, 0, .3))":"",pointerEvents:"none",cursor:"pointer"},i.style||{}),className:i.className?i.className+" pigeon-click-block":"pigeon-click-block",onClick:i.onClick?function(T){return i.onClick(_(T))}:null,onContextMenu:i.onContextMenu?function(T){return i.onContextMenu(_(T))}:null,onMouseOver:function(M){i.onMouseOver&&i.onMouseOver(_(M)),p(!0)},onMouseOut:function(M){i.onMouseOut&&i.onMouseOut(_(M)),p(!1)}},i.children||D.createElement("svg",{width:u,height:d,viewBox:"0 0 61 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D.createElement("g",{style:{pointerEvents:"auto"}},D.createElement("path",{d:"M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z",fill:E,stroke:"white",strokeWidth:"4"}),D.createElement("circle",{cx:"30.5",cy:"30.5",r:"8.5",fill:"white",opacity:w?.98:.6}))))}const zt=()=>{const[i,u]=K.useState(!0);return V.jsx(it,{height:400,defaultCenter:[18.696713,-100.369824],defaultZoom:15,metaWheelZoom:i,children:V.jsx(Lt,{width:30,anchor:[18.696713,-100.369824],offset:[0,-10]})})};export{zt as default};
