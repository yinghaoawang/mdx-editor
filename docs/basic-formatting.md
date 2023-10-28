---
title: Basic Formatting
slug: basic-formatting
position: 0.1
---

# Basic Formatting

In its bare form, MDXEditor supports only the most basic formatting - **bold**, *italic*, <u>underline</u> and `inline code`. It's enough to write a simple text, but not much more. There are several plugins that allow the users to create a document structure and apply semantic formatting.

## Headings

The Headings plugin enables the usage of markdown headings which translate to `H1` - `H6` in HTML. 

```tsx

import { MDXEditor } from '@alan/editor/MDXEditor'
import { headingsPlugin } from '@alan/editor/plugins/headings'

//...
<MDXEditor markdown='# Hello world' plugins={[headingsPlugin()]} />
```

## Quotes

The Quote plugin enables the usage of quotes which translate to `blockquote` in HTML. 

```tsx

import { MDXEditor } from '@alan/editor/MDXEditor'
import { quotePlugin } from '@alan/editor/plugins/quote'

const markdown = "> This is a quote"

//...
<MDXEditor markdown={markdown} plugins={[quotePlugin()]} />
```

## Lists

The Lists plugin enables the usage of ordered and unordered lists, including multiple levels of nesting.

```tsx

import { MDXEditor } from '@alan/editor/MDXEditor'
import { listsPlugin } from '@alan/editor/plugins/lists'

const markdown = `
  * Item 1
  * Item 2
  * Item 3
    * nested item

  1. Item 1
  2. Item 2
`

//...
<MDXEditor markdown={markdown} plugins={[listsPlugin()]} />
```

## Thematic Break

The Thematic Break plugin enables the usage of thematic breaks which translate to `hr` in HTML.

```tsx
import { MDXEditor } from '@alan/editor/MDXEditor'
import { thematicBreakPlugin } from '@alan/editor/plugins/thematic-break'

const markdown = `
Hello

---

World
`

//...
<MDXEditor markdown={markdown} plugins={[thematicBreakPlugin()]} />
