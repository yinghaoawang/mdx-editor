import React from 'react'
import ReactDOM from 'react-dom'
import { MDXEditor, toolbarPlugin, UndoRedo, BoldItalicUnderlineToggles } from './src'

ReactDOM.render(
  <React.StrictMode>
    <MDXEditor 
      markdown='Hello world'
      plugins={[toolbarPlugin({
        toolbarContents: () => ( <><UndoRedo /><BoldItalicUnderlineToggles /></>)
      })]}
    />
  </React.StrictMode>,
  document.getElementById('root')!, 
)
