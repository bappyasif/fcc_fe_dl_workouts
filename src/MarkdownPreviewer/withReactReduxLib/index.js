import '../styles/index.css'
import { createStore } from "redux";
import { connect } from 'react-redux';
import React from 'react';
import { Provider } from 'react-redux';
import marked from 'marked';
import DOMPurify from 'dompurify';
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

let markedDown;
let initialText;

let PREVIEW = 'PREVIEW';

let showPreview = htmlText => {
    return {
        type: PREVIEW,
        markdown: htmlText
    }
}

let previewReducer = (state=[], action) => {
    switch(action.type) {
        case PREVIEW:
            state = []
            return [...state, action.markdown]
            // return {state: action.markdown}
        default:
            return state
    }
}

let store = createStore(previewReducer);

class MarkdownPreviewerUsingReactReduxLibrary extends React.Component {
    constructor(props) {
        super(props)

        this.handleChangeInTextarea = this.handleChangeInTextarea.bind(this);
    }

    handleChangeInTextarea(evt) {
        this.props.handlePreview(evt.target.value)
    }

    sanitizer(html) {
        let div = document.createElement('div');
        div.innerHTML = html;
        return div.innerHTML;
    }

    componentDidMount() {
        initialText = marked(initialContentForTextarea, { breaks: true, gfm: true })
        // this.props.handlePreview(initialText)
        this.props.handlePreview(initialContentForTextarea);
        console.log(document.querySelector('#preview02').querySelector('h2'))
        document.querySelectorAll('code').forEach(node=>node.classList.add('language-js'));
        let div =  document.createElement('div');
        div.textContent = '"'
        let div2 =  document.createElement('div');
        div2.textContent = '"'
        document.querySelector('#preview02').querySelectorAll('blockquote p').forEach(node=> {           
            node.append(div2);
            node.prepend(div);
        })
    }

    render() {
        // console.log(this.props)
        // let renderer = new marked.Renderer();
        markedDown = marked(this.props.markdownText[0] ? this.props.markdownText[0] : '', { breaks: true, gfm: true });

        // let initialText = marked(initialContentForTextarea, { breaks: true, gfm: true })

        // Returns a highlighted HTML string
        // const html = Prism.highlight(markedDown, Prism.languages.javascript, 'javascript');

        // using a sanitizer to make html injection safer
        // let sanitized = this.sanitizer(markedDown);

        // using domPurifier
        let sanitizer = DOMPurify.sanitize;

        return (
            <div>
                <textarea
                    id='editor02'
                    value={this.props.markdownText ? this.props.markdownText[0] : initialText}
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
                    id="preview02"
                />
            </div>
        )
    }
}

let mapStateToProps = state => {
    // console.log(state, "??")
    return {
        markdownText: state
    }
}

let mapDispatchToProps = dispatch => {
    return {
        handlePreview: (htmlText) => dispatch(showPreview(htmlText))
    }
}

let ConnectedContent = connect(mapStateToProps, mapDispatchToProps) (MarkdownPreviewerUsingReactReduxLibrary);

class WrapperContainer extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <ConnectedContent />
                {/* <pre><code className="language-code" style={{ color: 'red' }}>p</code></pre> */}
            </Provider>
        )
    }
}

export default WrapperContainer;