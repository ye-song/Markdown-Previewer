(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{38:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(6),s=t.n(r),o=t(11),c=t(12),d=t(32),l=t(31),h=t(8),u=t.n(h),b=t(9),g=t.n(b),j=(t(38),t(51)),m=t(2);u.a.setOptions({breaks:!0,highlight:function(e){return g.a.highlight(e,g.a.languages.javascript,"javascript")}});var w=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={markdown:v},a}return Object(c.a)(t,[{key:"updateMarkdown",value:function(e){this.setState({markdown:e})}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"Markdown Previewer"}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("div",{class:"column",children:[Object(m.jsx)("h4",{className:"subHeader",children:"Markdown Input"}),Object(m.jsx)("textarea",{id:"editor",style:{width:"500px",height:"80vh",marginLeft:"auto",marginRight:"auto",padding:"10px",display:"block"},value:this.state.markdown,onChange:function(n){e.updateMarkdown(n.target.value)}})]}),Object(m.jsxs)("div",{class:"column",children:[Object(m.jsx)("h4",{className:"subHeader",children:"Markdown Display"}),Object(m.jsx)(j.a,{style:{width:"500px",height:"80vh",backgroundColor:"#DCDCDC",marginLeft:"auto",marginRight:"auto",padding:"10px"},children:Object(m.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:u()(this.state.markdown)}})})]})]}),Object(m.jsx)("div",{class:"row",children:Object(m.jsx)("div",{class:"column",children:Object(m.jsx)("button",{type:"button",className:"button",value:"",onClick:function(n){e.updateMarkdown(n.target.value)},children:"Clear Input"})})})]})})}}]),t}(i.a.Component),v="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n<img src=\"logo192.png\" height=\"100\" width=\"100\">\n\n",f=w,p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),r(e),s(e)}))};t(47);s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),p()}},[[48,1,2]]]);
//# sourceMappingURL=main.44b7df23.chunk.js.map