(this["webpackJsonpryans-portfolio"]=this["webpackJsonpryans-portfolio"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/florida.ca7e5eec.jpg"},112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=(a(19),a(8)),i=a(6),s=a(11),u=a(12),m=a(13),h=a(57),E=a.n(h),b=a(72),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){alert("The button doesn't actually work yet, but thank you for your interest! Please reach out to me directly at rrgallop@gmail.com. I look forward to hearing from you."),e.preventDefault()},a.handleChange=function(e){a.setState({value:e.target.value})},a.state={value:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"body-section-1"},l.a.createElement("section",{className:"tagline"},l.a.createElement("h2",null,"I am a",l.a.createElement("br",null),l.a.createElement(b.a,{loop:1/0,wrapper:"b",steps:["Software Engineer",1e3,"Software Developer",1e3,"Creative",1e3,"Tech Enthusiast",1e3,"Long-distance Hiker",1e3,"Total Nerd",1e3,"Musician",1e3]}))),l.a.createElement("section",{className:"infoblurb"},l.a.createElement("h3",null,"I love to code. I love to learn.",l.a.createElement("br",null),"Working with tech is my passion.",l.a.createElement("br",null),"If it's yours too, I would love to be a part",l.a.createElement("br",null),"of your organization."))),l.a.createElement("section",{className:"body-section-2"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"goodbye"},"Contact Me"),l.a.createElement("h2",null,"If you like what you see and would like to get in contact,",l.a.createElement("br",null),"just enter your email address below.",l.a.createElement("br",null),"I will get back to you as soon as I can."),l.a.createElement("form",{onSubmit:this.handleSubmit},"your name: ",l.a.createElement("input",{type:"text",className:"contact-me-1",placeholder:"your name",value:this.state.value,onChange:this.handleChange}),l.a.createElement("br",null),"email addr: ",l.a.createElement("input",{type:"email",className:"contact-me-1",placeholder:"you@email.com",value:this.state.value,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),"tell me about yourself:",l.a.createElement("br",null),l.a.createElement("textarea",{className:"contact-me-2",placeholder:"Send me a nice message!",value:this.state.value,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"button_1"},"Submit")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{className:"goodbye"},"Thanks for stopping by!"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(l.a.Component),p=a(60),v=a.n(p),g=(a(82),a(61)),f=a.n(g),A=a(62),y=a.n(A),I=a(32),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){var t=a.props,n=t.replace,l=t.to,c=t.delay,r=t.onDelayStart,o=t.onDelayEnd,i=a.context.router.history;r(e,l),e.defaultPrevented||(e.preventDefault(),a.timeout=setTimeout((function(){n?i.replace(l):i.push(l),o(e,l)}),c))},a.timeout=null,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.delay,delete e.onDelayStart,delete e.onDelayEnd,l.a.createElement(I.a,null,l.a.createElement(I.b,Object.assign({},e,{onClick:this.handleClick})))}}]),t}(l.a.Component);j.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},j.contextTypes=I.b.contextTypes;var w=a(25),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).clickedRoids=function(){(0,a.props.setDisplay)("asteroids")},a.clickedYouTube=function(){(0,a.props.setDisplay)("youtube")},a.clickedCalc=function(){(0,a.props.setDisplay)("calculator")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{class:"body-section-1"},l.a.createElement("section",{className:"tagline"},l.a.createElement("h2",null,"My Work")),l.a.createElement("section",{className:"infoblurb"},l.a.createElement("h3",null,"I believe that the best way to learn is to get your hands dirty."),l.a.createElement("br",null),l.a.createElement("br",null),"Here I would like to showcase a few different projects I have done.",l.a.createElement("br",null),"The goal is to expose myself to many different techniques and technologies.",l.a.createElement("br",null),l.a.createElement("br",null),"Expand a project to learn more, view sourcecode,",l.a.createElement("br",null),"and interact with the project. Everything here can be considered a work in progress.",l.a.createElement("br",null),"Even if I'm satisfied with the current state of a project,",l.a.createElement("br",null),"I may come back to it later to expand features,",l.a.createElement("br",null),"so check back if you want to see the current state of my work.")),l.a.createElement("section",{className:"body-section-2"},l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-box"},l.a.createElement("button",{className:"project-button",onClick:this.clickedRoids},l.a.createElement("img",{src:v.a,alt:"html"}),l.a.createElement("h4",null,"Asteroids")),l.a.createElement("p",null,"A JavaScript diversion if you want to kill some time.")),l.a.createElement("div",{className:"project-box"},l.a.createElement("button",{className:"project-button",onClick:this.clickedCalc},l.a.createElement("img",{src:y.a,alt:"calculator"}),l.a.createElement("h4",null,"Angular Calculator")),l.a.createElement("p",null,"Calculator built using Angular")),l.a.createElement("div",{className:"project-box"},l.a.createElement("button",{className:"project-button",onClick:this.clickedYouTube},l.a.createElement("img",{src:f.a,alt:"youtube"}),l.a.createElement("h4",null,"YouTube Video Player")),l.a.createElement("p",null,"YouTube Video Player built using React & YouTube API")))))}}]),t}(l.a.Component),D=a(18),T=a(64),C=a.n(T),x=a(65),k=a.n(x),B=a(66),O=a.n(B),Q=a(67),M=a.n(Q),R=a(68),S=a.n(R),G=a(69),Y=a.n(G),L=a(70),P=a.n(L),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).lastTouch=0,a.IMG_WIDTH=344,a.state={imgs:[C.a,M.a,S.a,Y.a,O.a,k.a,P.a],currentIndex:0,movement:0},a.handleWheel=function(e){clearTimeout(a.wheelTimeout),a.handleMovement(e.deltaX),a.wheelTimeout=setTimeout((function(){return a.handleMovementEnd()}),100)},a.handleMovement=function(e){clearTimeout(a.transitionTimeout),a.setState((function(t){var n=t.imgs.length-1,l=t.movement+e;return l<0&&(l=0),l>n*a.IMG_WIDTH&&(l=n*a.IMG_WIDTH),{movement:l,transitionDuration:"0s"}}))},a.handleTouchStart=function(e){a.lastTouch=e.nativeEvent.touches[0].clientX},a.handleTouchMove=function(e){var t=a.lastTouch-e.nativeEvent.touches[0].clientX;a.lastTouch=e.nativeEvent.touches[0].clientX,a.handleMovement(t)},a.handleTouchEnd=function(){a.handleMovementEnd(),a.lastTouch=0},a.handleMovementEnd=function(){var e=a.state,t=e.movement,n=e.currentIndex,l=t/a.IMG_WIDTH,c=l%1,r=l-c,o=r-n,i=r;o>=0?c>=.2&&(i+=1):o<0&&(i=n-Math.abs(o),c>.8&&(i+=1)),a.transitionTo(i,Math.min(.5,1-Math.abs(c)))},a.transitionTo=function(e,t){a.setState({currentIndex:e,movement:e*a.IMG_WIDTH,transitionDuration:"".concat(t,"s")}),a.transitionTimeout=setTimeout((function(){a.setState({transitionDuration:"0s"})}))},a.componentWillUnmount=function(){clearTimeout(a.transitionTimeout)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.imgs,n=t.movement,c=t.transitionDuration,r=t.currentIndex,o=(a.length-1)*this.IMG_WIDTH;return l.a.createElement("div",null,l.a.createElement("section",{className:"body-section-1"},l.a.createElement("section",{className:"tagline"},"Hi, my name is Ryan.",l.a.createElement("br",null),"Thanks for stopping by.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",Object(D.a)({className:"swiper-container",style:{width:this.IMG_WIDTH-1,height:510},onWheel:this.handleWheel,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},"onWheel",this.handleWheel),l.a.createElement("div",{className:"swiper",style:{transform:"translateX(".concat(-1*n,"px)"),transitionDuration:c}},a.map((function(e){return l.a.createElement("img",{key:e,src:e,height:"500"})})))),l.a.createElement("div",{className:"swipe-buttons"},l.a.createElement("button",{className:"back move",onClick:function(){0!==n&&e.transitionTo(r-1,.5)}},"\u2190"),l.a.createElement("button",{className:"next move",onClick:function(){n!==o&&e.transitionTo(r+1,.5)}},"\u2192"))),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("section",{className:"body-section-1"},l.a.createElement("section",{className:"infoblurb"},l.a.createElement("h3",null,"I'm a total nerd, and spend most of my time in front of a computer learning new skills and playing with technologies."),l.a.createElement("br",null),"Some of the languages/technologies I know are:",l.a.createElement("br",null),"Java",l.a.createElement("br",null),"C/C++",l.a.createElement("br",null),"Python",l.a.createElement("br",null),"C#",l.a.createElement("br",null),"JavaScript",l.a.createElement("br",null),"TypeScript",l.a.createElement("br",null),"HTML/CSS",l.a.createElement("br",null),"React",l.a.createElement("br",null),"Angular",l.a.createElement("br",null),"NodeJS",l.a.createElement("br",null),l.a.createElement("br",null),"Technology is my passion and has been since I was very young.",l.a.createElement("br",null),l.a.createElement("br",null),"My top 3 favorite languages are probably Python, JavaScript and C. I earned my degree in Computer Science from the University of Southern Maine in 2019. I was born and raised in Maine. I've traveled all over the country, and lived in places like San Francisco CA and Atlanta GA.")),l.a.createElement("section",{className:"body-section-1"},l.a.createElement("section",{className:"infoblurb"},l.a.createElement("h3",null,"I love the outdoors and I love pushing my limits."),l.a.createElement("br",null),"I have hiked over 2,000 miles of the Appalachian Trail. I've been an endurance athlete for much of my life, and I've completed local marathon and half-marathon races for fun. I've also been a musician for many years. I play bass in a band with my friends. I also love to play guitar and sing for people.")))}}]),t}(l.a.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"body-section-1"},l.a.createElement("div",{className:"infoblurb"},l.a.createElement("iframe",{align:"middle",className:"asteroids",src:"https://rrgallop.github.io/asteroids.html",height:"520",width:"720"})))}}]),t}(l.a.Component),F=a(9),W=a.n(F),K=a(23),z=a(71),X=a.n(z).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),V=a(140),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={searchTerm:""},a.doChange=function(e){a.setState({searchTerm:e.target.value})},a.doSubmit=function(e){var t=a.state.searchTerm;(0,a.props.onFormSubmit)(t),e.preventDefault()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.doSubmit},l.a.createElement(V.a,{fullWidth:!0,color:"secondary",label:"Search YouTube...",onChange:this.doChange}),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(l.a.Component),Z=a(139),q=function(e){var t=e.video;if(!t)return l.a.createElement("div",null);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Result"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"videoframe"},l.a.createElement("iframe",{className:"responsive-iframe",frameBorder:"5",title:"VideoPlayer",src:a})),l.a.createElement("div",null,l.a.createElement(Z.a,{variant:"h5"},t.snippet.title," - ",t.snippet.channelTitle),l.a.createElement(Z.a,{variant:"subtitle1"},t.snippet.channelTitle),l.a.createElement(Z.a,{variant:"body2"},t.snippet.description)))},_=function(e){var t=e.video,a=e.onVideoSelect;return l.a.createElement("div",null,l.a.createElement("div",{className:"yt-thumbs",onClick:function(){return a(t)}},l.a.createElement("img",{alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),l.a.createElement("div",null,l.a.createElement("b",null,t.snippet.title))))},$=function(e){var t=e.videos.map((function(t,a){return l.a.createElement(_,{onVideoSelect:e.onVideoSelect,key:a,video:t})}));return 0===t.length?l.a.createElement("div",null):l.a.createElement("div",{className:"video-list-container"},l.a.createElement("h3",null,"Related videos:"),l.a.createElement("br",null),t)},ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={videos:[],selectedVideo:null},a.openVideo=function(e){a.setState({selectedVideo:e})},a.doSubmit=function(){var e=Object(K.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("search",{params:{part:"snippet",maxResult:5,key:"AIzaSyBIYd_ZCOmL_CU6gIT1q9Xtbu9_BU9WZFA",q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return l.a.createElement("div",null,l.a.createElement("section",{className:"body-section-1"},l.a.createElement("section",{className:"tagline"},l.a.createElement("h2",null,"YouTube Player")),l.a.createElement("section",{className:"infoblurb"},l.a.createElement("h3",null,"Search and watch YouTube videos directly from my homepage. Interacts with the YouTube API."))),l.a.createElement("section",{className:"body-section-2"},l.a.createElement("div",{className:"youtube-player"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"searchbar"},l.a.createElement(J,{onFormSubmit:this.doSubmit})),l.a.createElement("div",{className:"videoport"},l.a.createElement(q,{video:t})),l.a.createElement("div",{className:"videolist"},l.a.createElement($,{videos:a,onVideoSelect:this.openVideo})))))))}}]),t}(l.a.Component),te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"body-section-1"},l.a.createElement("div",{className:"infoblurb"},l.a.createElement("h2",null,"Leave your calculator at home? Phone went through the wash? I got you covered...",l.a.createElement("br",null),"Simple calculator app built using Angular."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("iframe",{align:"middle",className:"calculator",src:"https://rrgallop.github.io/AngularCalculator",height:"700",width:"500"})))}}]),t}(l.a.Component),ae=(a(111),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={home:!0,contact:!0,projects:!0,display:""},a.clickContact=function(){},a.clickHome=function(){},a.clickProjects=function(){console.log("success")},a.setDisplay=function(e){a.setState({display:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"background"},l.a.createElement("header",null,l.a.createElement("div",{className:"my-picture"},l.a.createElement("img",{src:E.a,alt:"my face"})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"name-plate"},l.a.createElement("h1",null,"Ryan R. Gallop")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(w.Link,{onClick:this.clickHome,activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:1e3,to:"aboutme"},"Home")),l.a.createElement("li",null,l.a.createElement(w.Link,{onClick:this.clickProjects,activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:1e3,to:"myprojects"},"Projects")),l.a.createElement("li",null,l.a.createElement(w.Link,{onClick:this.clickHome,activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:1e3,to:"contactme"},"Contact")))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{id:"aboutme"},this.state.home?l.a.createElement(U,null):null),l.a.createElement("div",{className:"seperator"}),l.a.createElement("div",{id:"myprojects"},this.state.projects?l.a.createElement(N,{setDisplay:this.setDisplay}):null),"asteroids"===this.state.display?l.a.createElement(H,null):null,"youtube"===this.state.display?l.a.createElement(ee,null):null,"calculator"===this.state.display?l.a.createElement(te,null):null,l.a.createElement("div",{className:"seperator"}),l.a.createElement("div",{id:"contactme"},this.state.contact?l.a.createElement(d,null):null))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,a){},57:function(e,t){e.exports="data:image/png;base64,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"},60:function(e,t,a){e.exports=a.p+"static/media/logo_html.8ba1a66e.png"},61:function(e,t){e.exports="data:image/png;base64,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"},62:function(e,t,a){e.exports=a.p+"static/media/calc.e21e996b.png"},64:function(e,t,a){e.exports=a.p+"static/media/ryan-at.7b8beea4.jpeg"},65:function(e,t,a){e.exports=a.p+"static/media/ryan-at-2.f007afe5.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/music.b81d7fa2.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/katahdin.201e8638.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/bridge.f8659139.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/shennies-cropped.d564c630.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/washington.d0b82774.jpg"},76:function(e,t,a){e.exports=a(112)},82:function(e,t,a){e.exports=a.p+"static/media/logo_css.f1f33005.png"}},[[76,1,2]]]);
//# sourceMappingURL=main.ca7e59a6.chunk.js.map