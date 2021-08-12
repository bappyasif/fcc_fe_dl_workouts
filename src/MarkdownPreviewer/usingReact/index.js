const Prism = require('prismjs');
import DOMPurify from 'dompurify';
import marked from 'marked';
import React, { Component } from 'react'
import '../styles/index.css'

let initialContentForTextarea = `# Welcome to my React Markdown Previewer!

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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class MarkdownPreviewerUsingReact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textareaContent: initialContentForTextarea,
        }

        this.handleChangeInTextarea = this.handleChangeInTextarea.bind(this);
    }

    handleChangeInTextarea(evt) {
        this.setState({
            textareaContent: evt.target.value
        })
    }

    sanitizer(html) {
        let div = document.createElement('div');
        div.innerHTML = html;
        return div.innerHTML;
    }

    assignClasses(html) {
        html.querySelectorAll('code').forEach(node=>node.classList.add('language-js'))
        console.log(html);
    }

    componentDidMount() {
        document.querySelector('#preview').querySelectorAll('code').forEach(node=>node.classList.add('language-js'));
        let div =  document.createElement('div');
        div.textContent = '"'
        let div2 =  document.createElement('div');
        div2.textContent = '"'
        document.querySelector('#preview').querySelectorAll('blockquote p').forEach(node=> {           
            node.append(div2);
            node.prepend(div);
        })
    }

    render() {
        // let renderer = new marked.Renderer();
        let markedDown = marked(this.state.textareaContent, { breaks: true, gfm: true });

        // Returns a highlighted HTML string
        // const html = Prism.highlight(markedDown, Prism.languages.javascript, 'javascript');

        // using a sanitizer to make html injection safer
        // let sanitized = this.sanitizer(markedDown);

        // using domPurifier
        let sanitizer = DOMPurify.sanitize;

        // assigning classes
        // this.assignClasses(markedDown)

        return (
            <div>
                <textarea
                    id='editor'
                    value={this.state.textareaContent}
                    onChange={this.handleChangeInTextarea}
                    rows={20}
                    cols={56}
                />
                <div
                    dangerouslySetInnerHTML={{
                        // __html: markedDown
                        // __html: sanitized
                        __html: sanitizer(markedDown)
                        // __html: html
                    }}
                    id="preview"
                />
            </div>
        )
    }
}

export default MarkdownPreviewerUsingReact
