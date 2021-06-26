import React from 'react';
import marked from 'marked';
import Prism from "prismjs";
import './App.scss';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      markdown: placeholder,
    };
  }

  updateMarkdown(markdown){
    this.setState({markdown});
  }

  render(){

    var inputStyle = {
      width: "500px",
      height: "80vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      display: "block"
    }

    var outputStyle = {
      width: "500px",
      height: "80vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    }

    return(
      <div className="App">
        <div className="container">
            <h1 className="title">Markdown Previewer</h1>
          <div class="row">
            <div class="column">
              <h4 className="subHeader">Markdown Input</h4>
              <textarea id="editor" style={inputStyle}
                  value={this.state.markdown}
                  onChange = {(e)=>{
                    this.updateMarkdown(e.target.value);
                  }}>
              </textarea>
            </div>
            <div class="column">
              <h4 className="subHeader">Preview</h4>
              <div id="preview" style={outputStyle}
                dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}>
              </div>
            </div>
          </div>
        </div>
      </div>
  );}
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

<img src="logo192.png" height="100" width="100">

`;

export default App;
