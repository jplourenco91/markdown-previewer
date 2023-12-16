import { useState } from 'react'
import './App.css'
import ReachMarkdown from "react-markdown"

const defaultMarkdown = `
# Welcome to the test React Markdown Previewer!

## This is a sub-heading...
### And here's some other stuff:

Heres some random code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstParam, lastParam) {
  if (firstParam == '\`\`\`' && lastParam == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**
Or _italic_.
Or **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (<>
    <div>
      <h1 className="main-title">Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id="preview">
          <ReachMarkdown>{markdownText}</ReachMarkdown>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
