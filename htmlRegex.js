
var html = `
    <!doctype html>
    <html>
      <head>
        <title>Galvanize | Pick a Location</title>
        <link rel="shortcut icon" href="https://s3-us-west-2.amazonaws.com/galvanize.com-dev/favicon.ico" type="image/x-icon">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
        <link href='https://api.mapbox.com/mapbox.js/v3.0.1/mapbox.css' rel='stylesheet' />
        <link rel="stylesheet" href="/style-62cdad28a0.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style>
          .my-icon {
          	color: #fff;
          	font-size: 16px;
          	font-weight: 300;
          	width: 160px;
          	height: 41px;
          	line-height: 41px;
          	background-color: #EA882D;
          	box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
          	text-transform: uppercase;
          }

          /* arrow tick at bottom of location icon */
          .my-icon:after {
          	content:'';
          	position: absolute;
          	top: 100%;
          	left: 0;
          	right: 0;
          	margin: 0 auto;
          	width: 0;
          	height: 0;
          	border-top: solid 10px #EA882D;
          	border-left: solid 10px transparent;
          	border-right: solid 10px transparent;
          }
          </style>

  <meta name="geo.region" content="US-AZ" />
  <meta name="geo.placename" content="Phoenix" />
  <meta name="geo.position" content="33.450012;-112.075619" />
  <meta name="ICBM" content="33.450012, -112.075619" />

  <meta name="geo.region" content="US-CA" />
  <meta name="geo.placename" content="San Francisco" />
  <meta name="geo.position" content="37.787601;-122.396643" />
  <meta name="ICBM" content="37.787601, -122.396643" />

  <meta name="geo.region" content="US-CO" />
  <meta name="geo.placename" content="Denver" />
  <meta name="geo.position" content="39.757657;-105.006953" />
  <meta name="ICBM" content="39.757657, -105.006953" />

  <meta name="geo.region" content="US-CO" />
  <meta name="geo.placename" content="Boulder" />
  <meta name="geo.position" content="40.016545;-105.281686" />
  <meta name="ICBM" content="40.016545, -105.281686" />

  <meta name="geo.region" content="US-CO" />
  <meta name="geo.placename" content="Fort Collins" />
  <meta name="geo.position" content="40.588511;-105.074243" />
  <meta name="ICBM" content="40.588511, -105.074243" />

  <meta name="geo.region" content="US-NY" />
  <meta name="geo.placename" content="New York" />
  <meta name="geo.position" content="40.726388;-74.007792" />
  <meta name="ICBM" content="40.726388, -74.007792" />

  <meta name="geo.region" content="US-TX" />
  <meta name="geo.placename" content="Austin" />
  <meta name="geo.position" content="30.265326;-97.74955" />
  <meta name="ICBM" content="30.265326, -97.74955" />

  <meta name="geo.region" content="US-WA" />
  <meta name="geo.placename" content="Seattle" />
  <meta name="geo.position" content="47.598962;-122.333799" />
  <meta name="ICBM" content="47.598962, -122.333799" />

  <meta name="viewport" content="width=device-width, initial-scale=1">


<!-- Optimizely -->
<script async src="https://cdn.optimizely.com/js/2974420093.js"></script>
<!-- End Optimizely -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRH7D9');</script>
<!-- End Google Tag Manager -->

<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-35669009-1', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->

<!-- begin olark code -->
<script data-cfasync="false" type='text/javascript'>/*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
f[z]=function(){
(a.s=a.s||[]).push(arguments)};var a=f[z]._={
},q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
0:+new Date};a.P=function(u){
a.p[u]=new Date-a.p[0]};function s(){
a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
b.contentWindow[g].open()}catch(w){
c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
/* custom configuration goes here (www.olark.com/documentation) */
olark.identify('7195-711-10-1930');/*]]>*/</script><noscript><a href="https://www.olark.com/site/7195-711-10-1930/contact" title="Contact us" target="_blank">Questions? Feedback?</a> powered by <a href="http://www.olark.com?welcome" title="Olark live chat software">Olark live chat software</a></noscript>
<!-- end olark code —>

<!-- start Mixpanel -->
<script type="text/javascript">(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("cd6683b534dd8294a2376d117b2cb324");</script>
<!-- end Mixpanel —>

      </head>
      <body id="dotcom-body" class="-gray">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRH7D9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <script src='https://api.mapbox.com/mapbox.js/v3.0.1/mapbox.js'></script>

        <div id="root"><div data-reactroot="" data-reactid="1" data-react-checksum="-1368290036"><div data-reactid="2"><nav class="bootstrap-style navbar navbar-legacy navbar-fixed-top" data-reactid="3"><div class="nav" data-reactid="4"><div class="navbar-header" data-reactid="5"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" data-reactid="6"><span class="sr-only" data-reactid="7">Toggle navigation</span><span class="icon-bar" data-reactid="8"></span><span class="icon-bar" data-reactid="9"></span><span class="icon-bar" data-reactid="10"></span></button><a class="navbar-brand" href="/" data-reactid="11"><img alt="Galvanize Logo" src="https://s3-us-west-2.amazonaws.com/galvanize.com-dev/galvanize-logo.svg" width="150px" data-reactid="12"/></a></div><div id="navbar" class="navbar-collapse collapse pull-right" data-reactid="13"><ul id="menu-menu-1" class="nav navbar-nav" data-reactid="14"><li class="nav-item" data-reactid="15"><a href="/full-time" title="Students" class="dropdown-toggle" aria-haspopup="true" data-reactid="16"><!-- react-text: 17 -->Students<!-- /react-text --><!-- react-text: 18 --> <!-- /react-text --><span class="caret" data-reactid="19"></span></a><ul role="menu" class=" dropdown-menu dropdown-menu-left" data-reactid="20"><li class="nav-item" data-reactid="21"><a title="Web Development" href="/web-development" data-reactid="22">Web Development</a></li><li class="nav-item" data-reactid="23"><a title="Data Science" href="/data-science" data-reactid="24">Data Science</a></li><li class="nav-item" data-reactid="25"><a title="Part-time Courses" href="/part-time" data-reactid="26">Part-time Courses</a></li><li class="nav-item" data-reactid="27"><a title="Admissions Process" href="/admissions-process" data-reactid="28">Admissions Process</a></li><li class="nav-item" data-reactid="29"><a title="Info Sessions" href="/info-sessions" data-reactid="30">Info Sessions</a></li><li class="nav-item" data-reactid="31"><a title="Student Housing" href="/worldahead" data-reactid="32">Student Housing</a></li><li class="nav-item" data-reactid="33"><a title="Meetups" href="/meetups" data-reactid="34">Meetups</a></li><li class="nav-item" data-reactid="35"><a title="Tutorials" href="http://blog.galvanize.com/learn/learn-to-code/" data-reactid="36">Tutorials</a></li><li class="nav-item" data-reactid="37"><a title="Alexa Skills Workshops" href="/alexa-workshops" data-reactid="38">Alexa Skills Workshops</a></li></ul></li><li class="nav-item" data-reactid="39"><a href="/entrepreneur" title="Entrepreneurs" class="dropdown-toggle" aria-haspopup="true" data-reactid="40"><!-- react-text: 41 -->Entrepreneurs<!-- /react-text --><!-- react-text: 42 --> <!-- /react-text --><span class="caret" data-reactid="43"></span></a><ul role="menu" class=" dropdown-menu dropdown-menu-left" data-reactid="44"><li class="nav-item" data-reactid="45"><a title="Overview" href="/entrepreneur" data-reactid="46">Overview</a></li><li class="nav-item" data-reactid="47"><a title="Meet the Members" href="/meet-the-members" data-reactid="48">Meet the Members</a></li><li class="nav-item" data-reactid="49"><a title="Meet the Mentors" href="/mentors" data-reactid="50">Meet the Mentors</a></li><li class="nav-item" data-reactid="51"><a title="Pitch Events" href="/pitchers-and-pitches" data-reactid="52">Pitch Events</a></li><li class="nav-item" data-reactid="53"><a title="Request a Tour" href="/campuses/request-a-tour" data-reactid="54">Request a Tour</a></li><li class="nav-item" data-reactid="55"><a title="Apply for Membership" href="/become-a-member" data-reactid="56">Apply for Membership</a></li></ul></li><li class="nav-item" data-reactid="57"><a href="/companies" title="Companies" class="dropdown-toggle" aria-haspopup="true" data-reactid="58"><!-- react-text: 59 -->Companies<!-- /react-text --><!-- react-text: 60 --> <!-- /react-text --><span class="caret" data-reactid="61"></span></a><ul role="menu" class=" dropdown-menu dropdown-menu-left" data-reactid="62"><li class="nav-item" data-reactid="63"><a title="Overview" href="/companies" data-reactid="64">Overview</a></li><li class="nav-item" data-reactid="65"><a title="Hire Tech Talent" href="/companies/talent" data-reactid="66">Hire Tech Talent</a></li><li class="nav-item" data-reactid="67"><a title="Company Membership" href="/companies/membership " data-reactid="68">Company Membership</a></li><li class="nav-item" data-reactid="69"><a title="Upskill Your Teams" href="/companies/upskill" data-reactid="70">Upskill Your Teams</a></li><li class="nav-item" data-reactid="71"><a title="Our Faculty" href="/companies/instructors" data-reactid="72">Our Faculty</a></li><li class="nav-item" data-reactid="73"><a title="Cognitive Builder Course" href="/cognitivedeveloper" data-reactid="74">Cognitive Builder Course</a></li></ul></li><li class="nav-item" data-reactid="75"><a title="Blog" href="http://blog.galvanize.com/" data-reactid="76">Blog</a></li><li class="nav-item" data-reactid="77"><a title="Events" href="/events" data-reactid="78">Events</a></li></ul></div></div></nav></div><main role="main" class="-gray" data-reactid="79"><div class="informational-layout" data-reactid="80"><div class="section-header" data-reactid="81"><div class="container" data-reactid="82"><div class="u-textCenter" data-reactid="83"><h2 data-reactid="84">Choose a location you want to learn in</h2></div></div></div><div class="section" data-reactid="85"><div class="container" data-reactid="86"><div class="grid grid-row grid--gutters grid--1of2" data-reactid="87"><div class="grid-cell" data-reactid="88"><div class="hero-card card" data-reactid="89"><a id="austin" href="/austin/" class="hero" data-reactid="90"><div id="austin-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_austin.jpg);" data-reactid="91"></div><div class="hero-caption" data-reactid="92"><h2 class="campus-name" data-reactid="93"><!-- react-text: 94 -->Austin<!-- /react-text --><!-- react-text: 95 -->, <!-- /react-text --><!-- react-text: 96 -->TX<!-- /react-text --><br data-reactid="97"/><!-- react-text: 98 -->(<!-- /react-text --><!-- react-text: 99 -->2nd Street District<!-- /react-text --><!-- react-text: 100 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="101"/></div><div class="grid-cell" data-reactid="102"><div class="hero-card card" data-reactid="103"><a id="boulder" href="/boulder/" class="hero" data-reactid="104"><div id="boulder-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_boulder.jpg);" data-reactid="105"></div><div class="hero-caption" data-reactid="106"><h2 class="campus-name" data-reactid="107"><!-- react-text: 108 -->Boulder<!-- /react-text --><!-- react-text: 109 -->, <!-- /react-text --><!-- react-text: 110 -->CO<!-- /react-text --><br data-reactid="111"/><!-- react-text: 112 -->(<!-- /react-text --><!-- react-text: 113 -->Walnut<!-- /react-text --><!-- react-text: 114 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="115"/></div><div class="grid-cell" data-reactid="116"><div class="hero-card card" data-reactid="117"><a id="denver-platte" href="/denver-platte/" class="hero" data-reactid="118"><div id="denver-platte-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_denver-platte.jpg);" data-reactid="119"></div><div class="hero-caption" data-reactid="120"><h2 class="campus-name" data-reactid="121"><!-- react-text: 122 -->Denver<!-- /react-text --><!-- react-text: 123 -->, <!-- /react-text --><!-- react-text: 124 -->CO<!-- /react-text --><br data-reactid="125"/><!-- react-text: 126 -->(<!-- /react-text --><!-- react-text: 127 -->Platte<!-- /react-text --><!-- react-text: 128 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="129"/></div><div class="grid-cell" data-reactid="130"><div class="hero-card card" data-reactid="131"><a id="denver-golden-triangle" href="/denver-golden-triangle/" class="hero" data-reactid="132"><div id="denver-golden-triangle-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_denver-gt.jpg);" data-reactid="133"></div><div class="hero-caption" data-reactid="134"><h2 class="campus-name" data-reactid="135"><!-- react-text: 136 -->Denver<!-- /react-text --><!-- react-text: 137 -->, <!-- /react-text --><!-- react-text: 138 -->CO<!-- /react-text --><br data-reactid="139"/><!-- react-text: 140 -->(<!-- /react-text --><!-- react-text: 141 -->Golden Triangle<!-- /react-text --><!-- react-text: 142 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="143"/></div><div class="grid-cell" data-reactid="144"><div class="hero-card card" data-reactid="145"><a id="new-york" href="/new-york/" class="hero" data-reactid="146"><div id="new-york-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_nyc.jpg);" data-reactid="147"></div><div class="hero-caption" data-reactid="148"><h2 class="campus-name" data-reactid="149"><!-- react-text: 150 -->New York<!-- /react-text --><!-- react-text: 151 -->, <!-- /react-text --><!-- react-text: 152 -->NY<!-- /react-text --><br data-reactid="153"/><!-- react-text: 154 -->(<!-- /react-text --><!-- react-text: 155 -->West SoHo<!-- /react-text --><!-- react-text: 156 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="157"/></div><div class="grid-cell" data-reactid="158"><div class="hero-card card" data-reactid="159"><a id="phoenix" href="/phoenix/" class="hero" data-reactid="160"><div id="phoenix-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_phoenix.jpg);" data-reactid="161"></div><div class="hero-caption" data-reactid="162"><h2 class="campus-name" data-reactid="163"><!-- react-text: 164 -->Phoenix<!-- /react-text --><!-- react-text: 165 -->, <!-- /react-text --><!-- react-text: 166 -->AZ<!-- /react-text --><br data-reactid="167"/><!-- react-text: 168 -->(<!-- /react-text --><!-- react-text: 169 -->Warehouse District<!-- /react-text --><!-- react-text: 170 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="171"/></div><div class="grid-cell" data-reactid="172"><div class="hero-card card" data-reactid="173"><a id="san-francisco" href="/san-francisco/" class="hero" data-reactid="174"><div id="san-francisco-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_sf.jpg);" data-reactid="175"></div><div class="hero-caption" data-reactid="176"><h2 class="campus-name" data-reactid="177"><!-- react-text: 178 -->San Francisco<!-- /react-text --><!-- react-text: 179 -->, <!-- /react-text --><!-- react-text: 180 -->CA<!-- /react-text --><br data-reactid="181"/><!-- react-text: 182 -->(<!-- /react-text --><!-- react-text: 183 -->SoMa<!-- /react-text --><!-- react-text: 184 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="185"/></div><div class="grid-cell" data-reactid="186"><div class="hero-card card" data-reactid="187"><a id="seattle" href="/seattle/" class="hero" data-reactid="188"><div id="seattle-img" class="image" style="background-image:linear-gradient(to top left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(https://d1cvw29nua6zwm.cloudfront.net/campus/campus_seattle.jpg);" data-reactid="189"></div><div class="hero-caption" data-reactid="190"><h2 class="campus-name" data-reactid="191"><!-- react-text: 192 -->Seattle<!-- /react-text --><!-- react-text: 193 -->, <!-- /react-text --><!-- react-text: 194 -->WA<!-- /react-text --><br data-reactid="195"/><!-- react-text: 196 -->(<!-- /react-text --><!-- react-text: 197 -->Pioneer Square<!-- /react-text --><!-- react-text: 198 -->)<!-- /react-text --></h2></div></a></div><br data-reactid="199"/></div></div></div></div></div></main></div></div>

        <script>
          if (!Array.prototype.includes) {
            Object.defineProperty(Array.prototype, 'includes', {
              value: function(searchElement, fromIndex) {
                if (this == null) {
                  throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                var len = o.length >>> 0;
                if (len === 0) return false;
                var n = fromIndex | 0;
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                while (k < len) {
                  if (o[k] === searchElement) return true;
                  k++;
                }
                return false;
              }
            });
          }
          if (!String.prototype.includes) {
            String.prototype.includes = function(search, start) {
              'use strict';
              if (typeof start !== 'number') {
                start = 0;
              }
              if (start + search.length > this.length) {
                return false;
              } else {
                return this.indexOf(search, start) !== -1;
              }
            };
          }
        </script>
        <textarea id="state" style="display:none">undefined</textarea>
        <script src="https://use.typekit.net/dgr7rdu.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){ console.log(e) }</script>
        <script src="/styleguide.min.js"></script>
        <script src="/vendor-cb726a60b01dbff55a08.js"></script>
        <script>
          window.__APP_INITIAL_STATE__ = JSON.parse($('#state').val());
        </script>


        <script>
          $(document).on('click', '[data-track]', function(e) {
            var $el = $(e.target).closest('[data-track]');
            mixpanel.track($el.data('track'), $el.data('trackData'));
          });
        </script>

        <noscript id="deferred-styles">
          <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        </noscript>
        <script>
          var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.createElement("div");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
          };
          var raf = requestAnimationFrame || mozRequestAnimationFrame ||
              webkitRequestAnimationFrame || msRequestAnimationFrame;
          if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
          else window.addEventListener('load', loadDeferredStyles);
        </script>
        <script>
          (function(w, d){
           var id='embedly-platform', n = 'script';
           if (!d.getElementById(id)){
             w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
             var e = d.createElement(n); e.id = id; e.async=1;
             e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
             var s = d.getElementsByTagName(n)[0];
             s.parentNode.insertBefore(e, s);
           }
          })(window, document);
        </script>
      </body>
    </html>
    `;
    var matches = html.match(/https?:\/\/[\w\d-.\/#?=%]+/gi);
    console.log(matches);
