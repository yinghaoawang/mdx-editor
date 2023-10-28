import React from 'react';
import { DecoratorNode, EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
import { CodeBlockEditorProps } from '.';
/**
 * The options necessary to construct a new code block node.
 */
export interface CreateCodeBlockNodeOptions {
    /**
     * The code contents of the block.
     */
    code: string;
    /**
     * The language of the code block (i.e. `js`, `jsx`, etc.). This is used for syntax highlighting.
     */
    language: string;
    /**
     * The additional meta data of the block.
     */
    meta: string;
}
/**
 * A serialized representation of an {@link CodeBlockNode}.
 */
export type SerializedCodeBlockNode = Spread<CreateCodeBlockNodeOptions & {
    type: 'codeblock';
    version: 1;
}, SerializedLexicalNode>;
/**
 * A lexical node that represents a fenced code block. Use {@link "$createCodeBlockNode"} to construct one.
 */
export declare class CodeBlockNode extends DecoratorNode<JSX.Element> {
    __code: string;
    __meta: string;
    __language: string;
    __focusEmitter: {
        publish: () => void; /**
         * The code contents of the block.
         */
        subscribe: (cb: () => void) => void;
    };
    static getType(): string;
    static clone(node: CodeBlockNode): CodeBlockNode;
    static importJSON(serializedNode: SerializedCodeBlockNode): CodeBlockNode;
    constructor(code: string, language: string, meta: string, key?: NodeKey);
    exportJSON(): SerializedCodeBlockNode;
    createDOM(_config: EditorConfig): HTMLDivElement;
    updateDOM(): false;
    getCode(): string;
    getMeta(): string;
    getLanguage(): string;
    setCode: (code: string) => void;
    setMeta: (meta: string) => void;
    setLanguage: (language: string) => void;
    select: () => void;
    decorate(editor: LexicalEditor): JSX.Element;
    isInline(): boolean;
}
interface CodeBlockEditorContainerProps extends CodeBlockEditorProps {
    /** The Lexical editor that contains the node */
    parentEditor: LexicalEditor;
    /** The Lexical node that is being edited */
    codeBlockNode: CodeBlockNode;
}
/**
 * A set of functions that modify the underlying code block node. Get this with the {@link useCodeBlockEditorContext} hook.
 */
export interface CodeBlockEditorContextValue {
    /**
     * Updates the code contents of the code block.
     */
    setCode: (code: string) => void;
    /**
     * Updates the language of the code block. See {@link https://www.markdownguide.org/extended-syntax/#syntax-highlighting} for language examples.
     *
     */
    setLanguage: (language: string) => void;
    /**
     * Updates the meta of the code block. The meta is the additional string that comes after the code block language.
     */
    setMeta: (meta: string) => void;
    /**
     * The Lexical node that's being edited.
     */
    lexicalNode: CodeBlockNode;
}
/**
 * Use this hook in your custom code block editors to modify the underlying node code, language, and meta.
 */
export declare function useCodeBlockEditorContext(): CodeBlockEditorContextValue;
export declare function CodeBlockEditorContainer(props: CodeBlockEditorContainerProps): React.JSX.Element;
/**
 * Creates a {@link CodeBlockNode}.
 * @param options - The code contents, the language  (i.e. js, jsx, etc.), and the additional meta data of the block.
 */
export declare function $createCodeBlockNode(options: Partial<CreateCodeBlockNodeOptions>): CodeBlockNode;
/**
 * Returns true if the given node is a {@link CodeBlockNode}.
 */
export declare function $isCodeBlockNode(node: LexicalNode | null | undefined): node is CodeBlockNode;
export {};
