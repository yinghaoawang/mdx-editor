import React from 'react'
import { MDXEditorCore } from '../MDXEditorCore'
import { AdmonitionDirectiveDescriptor } from '../directive-editors/AdmonitionDirectiveDescriptor'
import { GenericDirectiveEditor } from '../directive-editors/GenericDirectiveEditor'
import { DirectiveDescriptor, directivesPlugin } from '../plugins/directives/realmPlugin'
import { linkPlugin } from '../plugins/link/realmPlugin'
import { YoutubeDirectiveDescriptor } from './_boilerplate'
import admonitionMarkdown from './assets/admonition.md?raw'

const youtubeMarkdown = `
This should be an youtube video:

::youtube{#A5lXAKrttBU}
`

const GenericDirectiveDescriptor: DirectiveDescriptor = {
  name: 'directive',
  testNode() {
    return true
  },
  attributes: ['id'],
  hasChildren: true,
  Editor: GenericDirectiveEditor
}

export const Youtube: React.FC = () => {
  return <MDXEditorCore markdown={youtubeMarkdown} plugins={[directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor] })]} />
}

const genericMarkdown = `
a text directive :d{#id} with some text.

::leaf[some content]{#meh}

text

:::block{#id}

Some **markdown**

:::
`

export const CatchAll: React.FC = () => {
  return <MDXEditorCore markdown={genericMarkdown} plugins={[directivesPlugin({ directiveDescriptors: [GenericDirectiveDescriptor] })]} />
}

export const Admonitions: React.FC = () => {
  return (
    <MDXEditorCore
      onChange={console.log}
      markdown={admonitionMarkdown}
      plugins={[directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }), linkPlugin()]}
    />
  )
}
