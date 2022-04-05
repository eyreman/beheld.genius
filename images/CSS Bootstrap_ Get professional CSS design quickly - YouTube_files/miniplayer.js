(function(g){var window=this;'use strict';var e4=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ze=!1;this.player=a;this.T(a,"minimized",this.pg);this.T(a,"onStateChange",this.lI)},f4=function(a){g.lL.call(this,a);
this.j=new e4(this.player);this.j.hide();g.ZK(this.player,this.j.element,4);a.Se()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(e4,g.W);g.h=e4.prototype;
g.h.TF=function(){this.tooltip=new g.iP(this.player,this);g.H(this,this.tooltip);g.ZK(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.gM(this.player);g.H(this,this.zc);this.Pg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Pg);this.Pg.Ba(this.element);this.T(this.Pg.element,"click",this.BB);var a=new g.W({G:"button",Fa:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.pI()]});g.H(this,a);a.Ba(this.Pg.element);this.T(a.element,"click",this.Si);
a=new g.u_(this.player,this);g.H(this,a);a.Ba(this.Pg.element);this.hq=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.hq);this.hq.Ba(this.Pg.element);this.T(this.hq.element,"click",this.BB);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ba(this.hq.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ba(this.hq.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ba(this.hq.element);this.iP=new g.HN(this.player,
this,!1);g.H(this,this.iP);this.iP.Ba(b.element);b=new g.FN(this.player,this);g.H(this,b);b.Ba(a.element);this.nextButton=new g.HN(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ba(c.element);this.Sg=new g.VO(this.player,this);g.H(this,this.Sg);this.Sg.Ba(this.Pg.element);this.Ic=new g.RN(this.player,this);g.H(this,this.Ic);g.ZK(this.player,this.Ic.element,4);this.qB=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.qB);g.ZK(this.player,this.qB.element,4);a=new g.W({G:"button",
Fa:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.pI()]});g.H(this,a);a.Ba(this.qB.element);this.T(a.element,"click",this.Si);a=new g.W({G:"button",Fa:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.vI()]});g.H(this,a);a.Ba(this.qB.element);this.T(a.element,"click",this.nY);this.T(this.player,"presentingplayerstatechange",this.Tc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.h.show=function(){this.ge=new g.wp(this.Uq,null,this);this.ge.start();this.ze||(this.TF(),this.ze=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.ge&&(this.ge.dispose(),this.ge=void 0);g.W.prototype.hide.call(this);this.player.Se()||(this.ze&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.h.qa=function(){this.ge&&(this.ge.dispose(),this.ge=void 0);g.W.prototype.qa.call(this)};
g.h.Si=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.h.nY=function(){this.player.playVideo()};
g.h.BB=function(a){if(a.target===this.Pg.element||a.target===this.hq.element)this.player.V().S("kevlar_miniplayer_play_pause_on_scrim")?g.sH(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.h.pg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Se())};
g.h.Hd=function(){this.Ic.Pb();this.Sg.Pb()};
g.h.Uq=function(){this.Hd();this.ge&&this.ge.start()};
g.h.Tc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.xb=function(){g.gO(this.Ic,0,this.player.bb().getPlayerSize().width,!1);g.UN(this.Ic)};
g.h.lI=function(a){this.player.Se()&&(0===a?this.hide():this.show())};
g.h.kc=function(){return this.tooltip};
g.h.bf=function(){return!1};
g.h.Df=function(){return!1};
g.h.Ni=function(){return!1};
g.h.zy=function(){};
g.h.Sn=function(){};
g.h.gt=function(){};
g.h.Bo=function(){return null};
g.h.Ww=function(){return null};
g.h.Lj=function(){return new g.Km(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.gr=function(a,b,c,d,e){var f=0,k=d=0,l=g.Ym(a);if(b){c=g.Ep(b,"ytp-prev-button")||g.Ep(b,"ytp-next-button");var m=g.Ep(b,"ytp-play-button"),n=g.Ep(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Wm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Ep(b,"ytp-miniplayer-button-top-left"),f=g.Wm(b,this.element),b=g.Ym(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.wh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Jl=function(){};
g.h.Zk=function(){return!1};g.v(f4,g.lL);f4.prototype.create=function(){};
f4.prototype.di=function(){return!1};
f4.prototype.load=function(){this.player.hideControls();this.j.show()};
f4.prototype.unload=function(){this.player.showControls();this.j.hide()};g.kL("miniplayer",f4);})(_yt_player);
