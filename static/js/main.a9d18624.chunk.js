(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(7),c=o.n(r),u=o(2),l=o(3),i=o(1),h=o(5),s=o(4),d=(o(13),function(e){Object(h.a)(o,e);var t=Object(s.a)(o);function o(e){var a;return Object(u.a)(this,o),(a=t.call(this,e)).componentDidMount=function(){a.getRandomQuote()},a.getRandomQuote=function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(e){return e.quotes.map((function(e){return{quote:"".concat(e.quote),author:"".concat(e.author)}}))})).then((function(e){var t=Math.floor(Math.random()*e.length);a.setState({quote:e[t].quote,author:e[t].author,tweetURL:"https://twitter.com/intent/tweet/?text="+e[t].quote.replace(/ /g,"+")+"+-"+e[t].author.replace(/ /g,"+")})})).catch((function(e){return console.log("An Error Occured",e)}))},a.handleNewQuote=function(){for(var e=["color1","color2","color3","color4","color5","color6"],t=e[Math.floor(Math.random()*e.length)];t===a.props.color;)t=e[Math.floor(Math.random()*e.length)];a.props.handleColorChange(t),a.getRandomQuote()},a.state={quote:"",author:"",tweetURL:""},a.getRandomQuote=a.getRandomQuote.bind(Object(i.a)(a)),a.handleNewQuote=a.handleNewQuote.bind(Object(i.a)(a)),a}return Object(l.a)(o,[{key:"render",value:function(){var e=this.state,t=e.quote,o=e.author,a=e.tweetURL;return n.a.createElement("div",{id:"quote-box",className:"quote-box"},n.a.createElement("div",{id:"quote-container",className:"quote-container"},n.a.createElement("p",{id:"text",className:"text"},'"',t,'"'),n.a.createElement("p",{id:"author",className:"author"},"-",o)),n.a.createElement("div",{id:"btn-container",className:"btn-container"},n.a.createElement("button",{id:"tweet-quote",className:"tweet-quote"},n.a.createElement("a",{href:a},n.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),n.a.createElement("button",{id:"new-quote",className:"new-quote",onClick:this.handleNewQuote},"New Quote")))}}]),o}(n.a.Component)),m=(o(14),function(e){Object(h.a)(o,e);var t=Object(s.a)(o);function o(){var e;return Object(u.a)(this,o),(e=t.call(this)).handleColorChange=function(t){e.setState({color:t})},e.state={color:"color1"},e.handleColorChange=e.handleColorChange.bind(Object(i.a)(e)),e}return Object(l.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{id:"app",className:this.state.color},n.a.createElement(d,{color:this.state.color,handleColorChange:this.handleColorChange}))}}]),o}(a.Component));o(15);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root"))},8:function(e,t,o){e.exports=o(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a9d18624.chunk.js.map