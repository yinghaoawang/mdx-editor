import React from 'react'
import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread
} from 'lexical'

import { DecoratorNode } from 'lexical'
import { ImageEditor } from './ImageEditor'

function convertImageElement(domNode: Node): null | DOMConversionOutput {
  if (domNode instanceof HTMLImageElement) {
    const { alt: altText, src, title, width, height } = domNode
    const node = $createImageNode({ altText, src, title, width, height })
    return { node }
  }
  return null
}

/**
 * A serialized representation of an {@link ImageNode}.
 */
export type SerializedImageNode = Spread<
  {
    altText: string
    title?: string
    width?: number
    height?: number
    style?: string
    src: string
    type: 'image'
    version: 1
  },
  SerializedLexicalNode
>

/**
 * A lexical node that represents an image. Use {@link "$createImageNode"} to construct one.
 */
export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string
  __altText: string
  __title: string | undefined
  __width: 'inherit' | number
  __height: 'inherit' | number
  __style: string | undefined

  static getType(): string {
    return 'image'
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__altText, node.__title, node.__width, node.__height, node.__key)
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { altText, title, src, width, height } = serializedNode
    const node = $createImageNode({
      altText,
      title,
      src,
      height,
      width
    })
    return node
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('img')
    element.setAttribute('src', this.__src)
    element.setAttribute('alt', this.__altText)
    if (this.__title) {
      element.setAttribute('title', this.__title)
    }
    if (this.__width) {
      element.setAttribute('width', this.__width.toString())
    }
    if (this.__height) {
      element.setAttribute('height', this.__height.toString())
    }
    if (this.__style) {
      element.setAttribute('style', this.__style.toString())
    }
    return { element }
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: () => ({
        conversion: convertImageElement,
        priority: 0
      })
    }
  }

  constructor(
    src: string,
    altText: string,
    title: string | undefined,
    width?: 'inherit' | number,
    height?: 'inherit' | number,
    style?: string | undefined,
    key?: NodeKey
  ) {
    super(key)
    this.__src = src
    this.__title = title
    this.__altText = altText
    this.__width = width || 'inherit'
    this.__height = height || 'inherit'
    this.__style = style
  }

  exportJSON(): SerializedImageNode {
    return {
      altText: this.getAltText(),
      title: this.getTitle(),
      height: this.__height === 'inherit' ? 0 : this.__height,
      width: this.__width === 'inherit' ? 0 : this.__width,
      style: this.getStyle(),
      src: this.getSrc(),
      type: 'image',
      version: 1
    }
  }

  setWidthAndHeight(width: 'inherit' | number, height: 'inherit' | number): void {
    const writable = this.getWritable()
    writable.__width = width
    writable.__height = height
  }

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span')
    const theme = config.theme
    const className = theme.image
    if (className !== undefined) {
      span.className = className
    }
    return span
  }

  updateDOM(): false {
    return false
  }

  getSrc(): string {
    return this.__src
  }

  getAltText(): string {
    return this.__altText
  }

  getStyle(): string | undefined {
    return this.__style
  }

  getTitle(): string | undefined {
    return this.__title
  }

  getHeight(): 'inherit' | number {
    return this.__height
  }

  getWidth(): 'inherit' | number {
    return this.__width
  }

  hasExplicitDimensions(): boolean {
    return this.__width !== 'inherit' || this.__height !== 'inherit'
  }

  setTitle(title: string | undefined): void {
    this.getWritable().__title = title
  }

  setSrc(src: string): void {
    this.getWritable().__src = src
  }

  setAltText(altText: string | undefined): void {
    this.getWritable().__altText = altText ?? ''
  }

  decorate(_parentEditor: LexicalEditor): JSX.Element {
    return (
      <ImageEditor
        src={this.getSrc()}
        title={this.getTitle()}
        nodeKey={this.getKey()}
        width={this.__width}
        height={this.__height}
        alt={this.__altText}
      />
    )
  }
}

/**
 * The payload to create an {@link ImageNode}.
 */
export interface CreateImageNodeOptions {
  altText: string
  width?: number
  height?: number
  title?: string
  key?: NodeKey
  src: string
}

/**
 * Creates an {@link ImageNode}.
 * @param options - The payload to create an image. The keys map to the img tag attributes.
 */
export function $createImageNode(options: CreateImageNodeOptions): ImageNode {
  const { altText, title, src, key, width, height } = options
  return new ImageNode(src, altText, title, width, height, key)
}

/**
 * Retruns true if the node is an {@link ImageNode}.
 */
export function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode {
  return node instanceof ImageNode
}
