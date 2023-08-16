(function(g){var window=this;'use strict';var $nb=function(a,b){g.X.call(this,{I:"button",Na:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.yS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.qb(this,g.sS(b.Fc(),this.element))},aob=function(a){g.X.call(this,{I:"div",
T:"ytp-miniplayer-ui"});this.xg=!1;this.player=a;this.V(a,"minimized",this.Eh);this.V(a,"onStateChange",this.sR)},bob=function(a){g.fT.call(this,a);
this.B=new g.wJ(this);this.j=new aob(this.player);this.j.hide();g.eS(this.player,this.j.element,4);a.yg()&&(this.load(),g.rr(a.getRootNode(),"ytp-player-minimized",!0))};
g.x($nb,g.X);$nb.prototype.onClick=function(){this.J.Ra("onExpandMiniplayer")};g.x(aob,g.X);g.k=aob.prototype;
g.k.gO=function(){this.tooltip=new g.LV(this.player,this);g.H(this,this.tooltip);g.eS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.fd=new g.LT(this.player);g.H(this,this.fd);this.zk=new g.X({I:"div",T:"ytp-miniplayer-scrim"});g.H(this,this.zk);this.zk.Ha(this.element);this.V(this.zk.element,"click",this.TI);var a=new g.X({I:"button",Na:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.kQ()]});g.H(this,a);a.Ha(this.zk.element);this.V(a.element,"click",this.Np);
a=new $nb(this.player,this);g.H(this,a);a.Ha(this.zk.element);this.Gv=new g.X({I:"div",T:"ytp-miniplayer-controls"});g.H(this,this.Gv);this.Gv.Ha(this.zk.element);this.V(this.Gv.element,"click",this.TI);var b=new g.X({I:"div",T:"ytp-miniplayer-button-container"});g.H(this,b);b.Ha(this.Gv.element);a=new g.X({I:"div",T:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ha(this.Gv.element);var c=new g.X({I:"div",T:"ytp-miniplayer-button-container"});g.H(this,c);c.Ha(this.Gv.element);this.gZ=new g.SU(this.player,
this,!1);g.H(this,this.gZ);this.gZ.Ha(b.element);b=new g.RU(this.player,this);g.H(this,b);b.Ha(a.element);this.nextButton=new g.SU(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ha(c.element);this.Oj=new g.yV(this.player,this);g.H(this,this.Oj);this.Oj.Ha(this.zk.element);this.Rc=new g.XU(this.player,this);g.H(this,this.Rc);g.eS(this.player,this.Rc.element,4);this.zI=new g.X({I:"div",T:"ytp-miniplayer-buttons"});g.H(this,this.zI);g.eS(this.player,this.zI.element,4);a=new g.X({I:"button",
Na:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.kQ()]});g.H(this,a);a.Ha(this.zI.element);this.V(a.element,"click",this.Np);a=new g.X({I:"button",Na:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.zGa()]});g.H(this,a);a.Ha(this.zI.element);this.V(a.element,"click",this.w9);this.V(this.player,"presentingplayerstatechange",this.Pd);this.V(this.player,"appresize",this.Mb);this.V(this.player,"fullscreentoggled",this.Mb);this.Mb()};
g.k.show=function(){this.Af=new g.dr(this.Jw,null,this);this.Af.start();this.xg||(this.gO(),this.xg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Rc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.X.prototype.hide.call(this);this.player.yg()||(this.xg&&this.Rc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.X.prototype.ya.call(this)};
g.k.Np=function(){this.player.stopVideo();this.player.Ra("onCloseMiniplayer")};
g.k.w9=function(){this.player.playVideo()};
g.k.TI=function(a){if(a.target===this.zk.element||a.target===this.Gv.element)g.iP(this.player.Lb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Eh=function(){g.rr(this.player.getRootNode(),"ytp-player-minimized",this.player.yg())};
g.k.cf=function(){this.Rc.Dc();this.Oj.Dc()};
g.k.Jw=function(){this.cf();this.Af&&this.Af.start()};
g.k.Pd=function(a){g.DO(a.state,32)&&this.tooltip.hide()};
g.k.Mb=function(){g.iV(this.Rc,0,this.player.rb().getPlayerSize().width,!1);g.YU(this.Rc)};
g.k.sR=function(a){this.player.yg()&&(0===a?this.hide():this.show())};
g.k.Fc=function(){return this.tooltip};
g.k.Lg=function(){return!1};
g.k.Mg=function(){return!1};
g.k.Am=function(){return!1};
g.k.QJ=function(){};
g.k.uq=function(){};
g.k.iz=function(){};
g.k.vn=function(){return null};
g.k.mH=function(){return null};
g.k.vN=function(){return new g.ue(0,0)};
g.k.Rk=function(){return new g.wo(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Sw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ko(a);if(b){c=g.mr(b,"ytp-prev-button")||g.mr(b,"ytp-next-button");var m=g.mr(b,"ytp-play-button"),n=g.mr(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Io(b,this.element),h=b.x,f=b.y-12):n&&(h=g.mr(b,"ytp-miniplayer-button-top-left"),f=g.Io(b,this.element),b=g.Ko(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.rb().getPlayerSize().width;e=f+(e||0);l=g.oe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Yp=function(){};
g.k.pm=function(){return!1};
g.k.mF=function(){};
g.k.aB=function(){};
g.k.Sr=function(){};
g.k.Rr=function(){};
g.k.Ey=function(){};
g.k.gt=function(){};
g.k.WE=function(){};g.x(bob,g.fT);g.k=bob.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.rr(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.fT.prototype.create.call(this);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.yl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.eT("miniplayer",bob);})(_yt_player);
