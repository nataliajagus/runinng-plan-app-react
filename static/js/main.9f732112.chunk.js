(window.webpackJsonpjogging=window.webpackJsonpjogging||[]).push([[0],{30:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),i=n.n(l),o=n(14),c=n(7),s=n(1),m=n(2);function u(){var e=Object(s.a)([" \n\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap');\n\n    *, *::before, *::after {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n         -moz-osx-font-smoothing: grayscale;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font-size: 1.6rem;\n        font-family: 'Montserrat', sans-serif;\n        margin: 0;\n    }\n\n    span {\n        font-family: 'Montserrat', sans-serif;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n"]);return u=function(){return e},e}var f=Object(m.a)(u()),d=n(11),p=n(12),h=n(15),v=n(13),g=n(16);function x(){var e=Object(s.a)(["\n  font-size: 50px;\n  font-weight: 300;\n  color: #1f5aac;\n  text-align: center;\n"]);return x=function(){return e},e}function w(){var e=Object(s.a)(["\n  color: #1f5aac;\n  display: flex;\n  font-size: 70px;\n  justify-content: center;\n  font-weight: 700;\n  min-width: 300px;\n"]);return w=function(){return e},e}function b(){var e=Object(s.a)(["\n  padding: 50px;\n  background: #fff;\n  flex-shrink: 0;\n  flex-direction: column;\n  display: flex;\n  max-width: 350px;\n  align-self: center;\n  border-radius: 18px;\n  border: none;\n  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.18);\n  margin-top: 30px;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return e},e}var k=m.c.div(b()),E=m.c.span(w()),O=m.c.span(x()),j=function(e){return r.a.createElement(k,null,r.a.createElement(E,null,e.minutes,":",e.seconds),r.a.createElement(O,null,e.mode))};function y(){var e=Object(s.a)(["\n    background-image: linear-gradient(#15A1F8, #065B9A);\n    width: 100vw;\n    border-radius: 0px 0px 40% 40%;\n    padding: 50px 0px 20px 0px;\n    display: flex;\n    min-height: 200px;\n    flex-direction: column;\n    align-items: center;\n    "]);return y=function(){return e},e}var P=m.c.header(y());function T(){var e=Object(s.a)(["\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n"]);return T=function(){return e},e}var M=m.c.div(T());function Z(){var e=Object(s.a)(["\n            color: red;\n            background-color: #fff;\n            border: 1px solid red;\n        "]);return Z=function(){return e},e}function I(){var e=Object(s.a)(["\n            color: #FFF;\n            background-color: #cdcdcd;\n            border: 0;\n        "]);return I=function(){return e},e}function S(){var e=Object(s.a)(["\n    border: 0;\n    border-radius: 10px;\n    padding: 20px 40px;\n    font-size: 14px;\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: #096db2; \n    background-color: #FFF;\n    border: 1px solid #096db2; \n    margin: 10px;\n\n    ","\n\n     ","\n\n"]);return S=function(){return e},e}var H=m.c.button(S(),(function(e){return e.secondary&&Object(m.b)(I())}),(function(e){return e.stop&&Object(m.b)(Z())}));function A(){var e=Object(s.a)(["\n  color: #fff;\n  text-align: center;\n  font-weight: 100;\n"]);return A=function(){return e},e}function _(){var e=Object(s.a)(["\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-size: 35px;\n  margin-top: -20px;\n  align-self: center;\n  margin-top: 20px;\n  text-align: center;\n"]);return _=function(){return e},e}var V=m.c.h2(_()),z=m.c.p(A()),R=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0,isRunning:!0,isWalking:!1,totalTime:0,roundTime:0,run:0,walk:0,rounds:0,mode:"run",week:1},n.startTimer=function(){n.setState({timerOn:!0,timerStart:n.state.totalTime});var e=function(e){n.setState({mode:"run",timerOn:!0}),n.state.isRunning&&(n.runInterval=setInterval((function(){var t=n.state.timerTime-10;t>=0?n.setState({timerTime:t}):(clearInterval(n.runInterval),n.setState({isRunning:!1,isWalking:!0,timerTime:n.state.walk}),e())}),10))},t=function t(){n.setState({mode:"walk"}),n.state.isWalking&&(n.walkInterval=setInterval((function(){var a=n.state.timerTime-10;a>=0?n.setState({timerTime:a}):(clearInterval(n.walkInterval),n.setState({timerOn:!1}),n.setState({isRunning:!0,isWalking:!1}),n.state.totalTime>=0&&(n.setState({timerTime:n.state.run}),e(t)))}),10))};return n.totalTimer=setInterval((function(){var e=n.state.totalTime-10;e>=0?n.setState({totalTime:e}):(clearInterval(n.totalTimer),n.setState({timerOn:!1,timerTime:0}))}),10),n.state.isRunning?e(t):t()},n.stopTimer=function(){clearInterval(n.runInterval),clearInterval(n.walkInterval),clearInterval(n.totalTimer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.run,totalTime:(n.state.run+n.state.walk)*n.state.rounds})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state,t=e.run,n=e.walk,a=e.rounds,r=e.week;this.setState({run:t,walk:n,rounds:a,timerTime:t,totalTime:(t+n)*a,week:r})}},{key:"componentDidUpdate",value:function(){0===this.state.totalTime&&(clearInterval(this.runInterval),clearInterval(this.walkInterval))}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){var e=this.state,t=e.timerTime,n=e.timerStart,a=e.timerOn,l=e.totalTime,i=("0"+Math.floor(t/1e3%60)%60).slice(-2),o=("0"+Math.floor(t/6e4%60)).slice(-2),c=("0"+Math.floor(l/6e4%60)).slice(-2),s=("0"+Math.floor(l/1e3%60)%60).slice(-2);return r.a.createElement(M,null,r.a.createElement(P,null,r.a.createElement(V,null,"Week ",this.state.week),r.a.createElement(z,null,"Time left: ",c,":",s),r.a.createElement(j,{minutes:o,seconds:i,mode:this.state.mode})),r.a.createElement("div",null,!1===a&&(0===n||t===n)&&r.a.createElement(H,{onClick:this.startTimer},"Start"),!0===a&&l>=1e3&&r.a.createElement(H,{stop:!0,onClick:this.stopTimer},"Stop"),!1===a&&0!==n&&n!==t&&0!==t&&r.a.createElement(H,{onClick:this.startTimer},"Resume"),(!1===a||l<=0)&&n!==t&&n>0&&r.a.createElement(H,{onClick:this.resetTimer},"Reset")))}}]),t}(a.Component);function C(){var e=Object(s.a)(["\n    font-weight: 700;\n    font-size: 60px;\n    color: #0E4D8B;\n    align-self: center;\n"]);return C=function(){return e},e}function F(){var e=Object(s.a)(["\n    background: #fff;\n    color: #C6C6C6;\n    padding: 20px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 18px;\n    font-size: 20px;\n    font-weight: 300;\n    border: none;\n    box-shadow: 1px 2px 8px 0px #dedede;\n    min-width: 140px;\n    min-height: 140px;\n    align-items: center;\n"]);return F=function(){return e},e}var W=m.c.button(F()),B=m.c.span(C()),D=function(e){return r.a.createElement(W,null,r.a.createElement(B,null,e.week),"week")};function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var G=r.a.createElement("g",{id:"jogging",transform:"translate(0 0)"},r.a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M278.138,112.584a15.6,15.6,0,0,0,.238-1.67H268.018l.271-1.38a15.715,15.715,0,0,0-6.1-15.727,15.717,15.717,0,0,0-14.765,12.136l-7.63,32.72h22.686l2.824-14.172h21.926a6.784,6.784,0,0,0,5.663-10.528H277.868Zm0,0",transform:"translate(-155.444 -60.81)",fill:"#9bef86"}),r.a.createElement("path",{id:"Path_2","data-name":"Path 2",d:"M215.345,101.578l-12.421,8.135a4.932,4.932,0,0,0-1.79,6.161l5.969,13.172",transform:"translate(-130.096 -65.846)",fill:"#9bef86"}),r.a.createElement("path",{id:"Path_3","data-name":"Path 3",d:"M162.239,309.328v19.195H135.27v15.126h35.236A13.191,13.191,0,0,0,183.7,330.458V309.328Zm0,0",transform:"translate(-87.686 -200.516)",fill:"#fccd9d"}),r.a.createElement("path",{id:"Path_4","data-name":"Path 4",d:"M290.493,300.355l4.392,13.437a30.455,30.455,0,0,1,1.507,9.463V354.52H279.918V329.779l-6.976-9.849V303.512Zm0,0",transform:"translate(-176.929 -194.7)",fill:"#fccd9d"}),r.a.createElement("path",{id:"Path_5","data-name":"Path 5",d:"M283.966,221.328l6.524,27.8-17.553,3.156,5.043-30.956Zm0,0",transform:"translate(-176.927 -143.472)",fill:"#4dbaf6"}),r.a.createElement("g",{id:"Group_1","data-name":"Group 1",transform:"translate(30.816 78.208)"},r.a.createElement("path",{id:"Path_6","data-name":"Path 6",d:"M251.115,252.932l4.985-30.6H239.273v30.6Zm0,0",transform:"translate(-185.92 -222.328)",fill:"#72d8ff"}),r.a.createElement("path",{id:"Path_7","data-name":"Path 7",d:"M87.6,391.35h3a13.765,13.765,0,0,0,13.764-13.764v-15.8H95.3a7.7,7.7,0,0,0-7.7,7.7V391.35Zm0,0",transform:"translate(-87.602 -312.726)",fill:"#72d8ff"}),r.a.createElement("path",{id:"Path_8","data-name":"Path 8",d:"M319.539,471.1v-3a13.764,13.764,0,0,0-13.766-13.764h-15.8V463.4a7.7,7.7,0,0,0,7.7,7.7Zm0,0",transform:"translate(-218.782 -372.723)",fill:"#72d8ff"})),r.a.createElement("path",{id:"Path_9","data-name":"Path 9",d:"M279.813,10.43A12.664,12.664,0,0,0,264.3,19.385l-.6,2.225a12.664,12.664,0,0,0,24.464,6.554l.6-2.223A12.665,12.665,0,0,0,279.813,10.43Zm0,0",transform:"translate(-170.661 -6.479)",fill:"#fccd9d"}),r.a.createElement("path",{id:"Path_10","data-name":"Path 10",d:"M182.1,67.2a10.306,10.306,0,1,0,0-20.613H166.949a19.289,19.289,0,0,0-4.643-13.469c.463-.213.922-.44,1.369-.7a16.077,16.077,0,0,0,7.54-9.825l.6-2.225A16.184,16.184,0,0,0,160.369.552h0A16.2,16.2,0,0,0,140.55,12l-.6,2.223A16.076,16.076,0,0,0,141.571,26.5c.154.267.316.526.484.782a19.392,19.392,0,0,0-8.871,5.8l-11.975,7.843a8.4,8.4,0,0,0-3.067,10.556L123.75,63.86l-3.077,13.2c0,.006,0,.008,0,.014a3.525,3.525,0,0,0-.091.786v30.956a3.5,3.5,0,0,0,.76,2.181v13.5H100.05a3.5,3.5,0,0,0-2.16-.743H88.825a11.233,11.233,0,0,0-11.22,11.219v21.869a3.518,3.518,0,0,0,3.518,3.518h3a17.312,17.312,0,0,0,16.907-13.7h32.093a16.734,16.734,0,0,0,15.885-11.533l.767,1.081v21.183a3.5,3.5,0,0,0-.987,2.439v9.065a11.233,11.233,0,0,0,11.219,11.22h21.869a3.518,3.518,0,0,0,3.518-3.518v-3a17.313,17.313,0,0,0-12.11-16.491V128.558A33.924,33.924,0,0,0,171.606,118l-4.346-13.294L160.944,77.8l2.112-10.6ZM146.75,16.04l.595-2.223a9.146,9.146,0,0,1,17.67,4.734l-.6,2.225a9.143,9.143,0,0,1-10.873,6.546q-.408-.13-.826-.24c-.037-.011-.076-.018-.113-.027A9.143,9.143,0,0,1,146.75,16.04Zm3.863,17.767q.388.124.783.231c.056.015.114.025.17.04a12.227,12.227,0,0,1,8.133,13.97l-.271,1.38a3.517,3.517,0,0,0,3.452,4.2H182.1a3.271,3.271,0,0,1,0,6.542H156.01a10.124,10.124,0,0,1-9.671-7.252,3.517,3.517,0,1,0-6.754,1.969,17.2,17.2,0,0,0,16.3,12.319l-1.422,7.138H128.531l7.335-31.453a12.146,12.146,0,0,1,2.354-4.86c.033-.038.066-.078.1-.118a12.211,12.211,0,0,1,12.3-4.1Zm14.306,86.38a26.885,26.885,0,0,1,1.333,8.37V156.3h-9.439V135.079a3.525,3.525,0,0,0-.647-2.034l-6.33-8.936V111.754l11.643-2.094Zm-37.3-14.892V81.374h19.607l-3.9,23.92Zm26.942-23.92,5.04,21.476-9.009,1.62,3.761-23.1Zm-30.009-32.8a1.407,1.407,0,0,1,.513-1.767l3.145-2.06-1.832,7.857ZM84.641,153.3V134.965a4.189,4.189,0,0,1,4.184-4.186h5.547v12.289A10.26,10.26,0,0,1,84.641,153.3Zm48.485-13.687H101.408v-8.091h23.452a3.517,3.517,0,0,0,3.518-3.518V112.33H142.8v17.612A9.684,9.684,0,0,1,133.126,139.615Zm45.223,33.455H160.01a4.189,4.189,0,0,1-4.184-4.184v-5.549h12.287A10.264,10.264,0,0,1,178.349,173.07Zm0,0",transform:"translate(-50.306 0)"}),r.a.createElement("path",{id:"Path_11","data-name":"Path 11",d:"M157.2,492H114.162a3.518,3.518,0,0,0,0,7.035H157.2a3.518,3.518,0,0,0,0-7.035Zm0,0",transform:"translate(-71.723 -318.93)"}),r.a.createElement("path",{id:"Path_12","data-name":"Path 12",d:"M79.58,492a3.519,3.519,0,1,0,2.487,1.031A3.546,3.546,0,0,0,79.58,492Zm0,0",transform:"translate(-49.306 -318.93)"}),r.a.createElement("path",{id:"Path_13","data-name":"Path 13",d:"M40.19,218.363a3.519,3.519,0,1,0-2.487-1.031A3.553,3.553,0,0,0,40.19,218.363Zm0,0",transform:"translate(-23.772 -136.989)"}),r.a.createElement("path",{id:"Path_14","data-name":"Path 14",d:"M51.1,270.846a3.517,3.517,0,0,0-3.518-3.518H3.518a3.518,3.518,0,1,0,0,7.035H47.584A3.517,3.517,0,0,0,51.1,270.846Zm0,0",transform:"translate(0 -173.29)"}),r.a.createElement("path",{id:"Path_15","data-name":"Path 15",d:"M80.186,218.363h23.687a3.518,3.518,0,0,0,0-7.035H80.186a3.518,3.518,0,1,0,0,7.035Zm0,0",transform:"translate(-49.699 -136.989)"})),L=function(e){var t=e.svgRef,n=e.title,a=q(e,["svgRef","title"]);return r.a.createElement("svg",J({width:142.097,height:180.106,viewBox:"0 0 142.097 180.106",ref:t},a),r.a.createElement("title",null,n),G)},U=r.a.forwardRef((function(e,t){return r.a.createElement(L,J({svgRef:t},e))}));n.p;function $(){var e=Object(s.a)(["\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    font-size: 35px;\n    margin-top: -20px;\n    align-self: center;\n    margin-top: 20px;\n    text-align: center;\n"]);return $=function(){return e},e}var K=m.c.h2($()),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(K,null,"10 Weeks Jogging Plan App"))},Q=[{week:1,run:12e4,walk:24e4,rounds:5},{week:2,run:18e4,walk:18e4,rounds:5},{week:3,run:18e4,walk:15e4,rounds:4},{week:4,run:42e4,walk:18e4,rounds:3},{week:5,run:1e4,walk:5e3,rounds:2},{week:6,run:48e4,walk:12e4,rounds:3},{week:7,run:54e4,walk:6e4,rounds:3},{week:8,run:78e4,walk:12e4,rounds:2},{week:9,run:84e4,walk:6e4,rounds:2},{week:10,run:18e5,walk:0,rounds:1}];function X(){var e=Object(s.a)(["\n  flex-flow: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: -50px;\n  z-index: 2;\n  display: flex;\n  max-width: 800px;\n"]);return X=function(){return e},e}var Y=m.c.div(X()),ee=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement(P,null,r.a.createElement(N,null)),r.a.createElement(Y,null,Q.map((function(e){return r.a.createElement(o.b,{to:{pathname:"/exercise",state:{run:e.run,walk:e.walk,rounds:e.rounds,week:e.week}},key:e.week},r.a.createElement(D,{week:e.week}))}))))}}]),t}(a.Component),te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(o.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:ee}),r.a.createElement(c.a,{path:"/exercise",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9f732112.chunk.js.map