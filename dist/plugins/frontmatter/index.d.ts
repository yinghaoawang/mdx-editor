import type { RefObject, ReactNode, ComponentType } from 'react';
import type { Options } from 'mdast-util-to-markdown';
import type { Config } from 'mdast-util-from-markdown/lib';
import type { Extension } from 'micromark-util-types';
import type { Content } from 'mdast';
import type { MdastImportVisitor, LexicalVisitor } from '../..';
import type { EditorSubscription, EditorInFocus, BlockType } from '../core';
import type { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import type { JsxComponentDescriptor } from '../jsx';
import type { HistoryState } from '@lexical/history';
import type { LexicalEditor, RangeSelection, Klass, LexicalNode, TextFormatType, ElementNode, DecoratorNode } from 'lexical';
import type { SystemSpec, Realm, RealmNode, PluginConstructor, TypedRealm, ValueForKey, SystemKeys, ValuesForKeys, SystemDict } from '../../gurx';
/// <reference types="react" />
/** @internal */
export declare const frontmatterSystem: SystemSpec<[SystemSpec<[], (r: Realm) => {
    activeEditor: RealmNode<LexicalEditor | null>;
    inFocus: RealmNode<boolean>;
    historyState: RealmNode<HistoryState>;
    currentSelection: RealmNode<RangeSelection | null>;
    jsxIsAvailable: RealmNode<boolean>;
    jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
    initialRootEditorState: RealmNode<InitialEditorStateType>;
    rootEditor: RealmNode<LexicalEditor | null>;
    createRootEditorSubscription: RealmNode<EditorSubscription>;
    createActiveEditorSubscription: RealmNode<EditorSubscription>;
    importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
    syntaxExtensions: RealmNode<Extension[]>;
    mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
    usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
    addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
    addLexicalNode: RealmNode<Klass<LexicalNode>>;
    addSyntaxExtension: RealmNode<Extension>;
    addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
    toMarkdownExtensions: RealmNode<Options[]>;
    toMarkdownOptions: RealmNode<Options>;
    addToMarkdownExtension: RealmNode<Options>;
    addExportVisitor: RealmNode<LexicalVisitor>;
    exportVisitors: RealmNode<LexicalVisitor[]>;
    initialMarkdown: RealmNode<string>;
    setMarkdown: RealmNode<string>;
    markdown: RealmNode<string>;
    editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
    contentEditableClassName: RealmNode<string>;
    placeholder: RealmNode<ReactNode>;
    autoFocus: RealmNode<boolean | {
        defaultSelection?: "rootStart" | "rootEnd" | undefined;
        preventScroll?: boolean | undefined;
    }>;
    readOnly: RealmNode<boolean>;
    composerChildren: RealmNode<ComponentType<{}>[]>;
    addComposerChild: RealmNode<ComponentType<{}>>;
    topAreaChildren: RealmNode<ComponentType<{}>[]>;
    addTopAreaChild: RealmNode<ComponentType<{}>>;
    nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
    addNestedEditorChild: RealmNode<ComponentType<{}>>;
    editorWrappers: RealmNode<ComponentType<{
        children: ReactNode;
    }>[]>;
    addEditorWrapper: RealmNode<ComponentType<{
        children: ReactNode;
    }>>;
    currentFormat: RealmNode<number>;
    editorInFocus: RealmNode<EditorInFocus | null>;
    applyFormat: RealmNode<TextFormatType>;
    currentBlockType: RealmNode<BlockType>;
    applyBlockType: RealmNode<BlockType>;
    convertSelectionToNode: RealmNode<() => ElementNode>;
    insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
    onBlur: RealmNode<FocusEvent>;
}>], (r: Realm, [{ rootEditor, createRootEditorSubscription }]: [{
    activeEditor: RealmNode<LexicalEditor | null>;
    inFocus: RealmNode<boolean>;
    historyState: RealmNode<HistoryState>;
    currentSelection: RealmNode<RangeSelection | null>;
    jsxIsAvailable: RealmNode<boolean>;
    jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
    initialRootEditorState: RealmNode<InitialEditorStateType>;
    rootEditor: RealmNode<LexicalEditor | null>;
    createRootEditorSubscription: RealmNode<EditorSubscription>;
    createActiveEditorSubscription: RealmNode<EditorSubscription>;
    importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
    syntaxExtensions: RealmNode<Extension[]>;
    mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
    usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
    addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
    addLexicalNode: RealmNode<Klass<LexicalNode>>;
    addSyntaxExtension: RealmNode<Extension>;
    addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
    toMarkdownExtensions: RealmNode<Options[]>;
    toMarkdownOptions: RealmNode<Options>;
    addToMarkdownExtension: RealmNode<Options>;
    addExportVisitor: RealmNode<LexicalVisitor>;
    exportVisitors: RealmNode<LexicalVisitor[]>;
    initialMarkdown: RealmNode<string>;
    setMarkdown: RealmNode<string>;
    markdown: RealmNode<string>;
    editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
    contentEditableClassName: RealmNode<string>;
    placeholder: RealmNode<ReactNode>;
    autoFocus: RealmNode<boolean | {
        defaultSelection?: "rootStart" | "rootEnd" | undefined;
        preventScroll?: boolean | undefined;
    }>;
    readOnly: RealmNode<boolean>;
    composerChildren: RealmNode<ComponentType<{}>[]>;
    addComposerChild: RealmNode<ComponentType<{}>>;
    topAreaChildren: RealmNode<ComponentType<{}>[]>;
    addTopAreaChild: RealmNode<ComponentType<{}>>;
    nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
    addNestedEditorChild: RealmNode<ComponentType<{}>>;
    editorWrappers: RealmNode<ComponentType<{
        children: ReactNode;
    }>[]>;
    addEditorWrapper: RealmNode<ComponentType<{
        children: ReactNode;
    }>>;
    currentFormat: RealmNode<number>;
    editorInFocus: RealmNode<EditorInFocus | null>;
    applyFormat: RealmNode<TextFormatType>;
    currentBlockType: RealmNode<BlockType>;
    applyBlockType: RealmNode<BlockType>;
    convertSelectionToNode: RealmNode<() => ElementNode>;
    insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
    onBlur: RealmNode<FocusEvent>;
}]) => {
    insertFrontmatter: RealmNode<true>;
    removeFrontmatter: RealmNode<true>;
    hasFrontmatter: RealmNode<boolean>;
    frontmatterDialogOpen: RealmNode<boolean>;
}>;
export declare const 
/** @internal */
frontmatterPlugin: PluginConstructor<SystemSpec<[SystemSpec<[], (r: Realm) => {
    activeEditor: RealmNode<LexicalEditor | null>;
    inFocus: RealmNode<boolean>;
    historyState: RealmNode<HistoryState>;
    currentSelection: RealmNode<RangeSelection | null>;
    jsxIsAvailable: RealmNode<boolean>;
    jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
    initialRootEditorState: RealmNode<InitialEditorStateType>;
    rootEditor: RealmNode<LexicalEditor | null>;
    createRootEditorSubscription: RealmNode<EditorSubscription>;
    createActiveEditorSubscription: RealmNode<EditorSubscription>;
    importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
    syntaxExtensions: RealmNode<Extension[]>;
    mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
    usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
    addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
    addLexicalNode: RealmNode<Klass<LexicalNode>>;
    addSyntaxExtension: RealmNode<Extension>;
    addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
    toMarkdownExtensions: RealmNode<Options[]>;
    toMarkdownOptions: RealmNode<Options>;
    addToMarkdownExtension: RealmNode<Options>;
    addExportVisitor: RealmNode<LexicalVisitor>;
    exportVisitors: RealmNode<LexicalVisitor[]>;
    initialMarkdown: RealmNode<string>;
    setMarkdown: RealmNode<string>;
    markdown: RealmNode<string>;
    editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
    contentEditableClassName: RealmNode<string>;
    placeholder: RealmNode<ReactNode>;
    autoFocus: RealmNode<boolean | {
        defaultSelection?: "rootStart" | "rootEnd" | undefined;
        preventScroll?: boolean | undefined;
    }>;
    readOnly: RealmNode<boolean>;
    composerChildren: RealmNode<ComponentType<{}>[]>;
    addComposerChild: RealmNode<ComponentType<{}>>;
    topAreaChildren: RealmNode<ComponentType<{}>[]>;
    addTopAreaChild: RealmNode<ComponentType<{}>>;
    nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
    addNestedEditorChild: RealmNode<ComponentType<{}>>;
    editorWrappers: RealmNode<ComponentType<{
        children: ReactNode;
    }>[]>;
    addEditorWrapper: RealmNode<ComponentType<{
        children: ReactNode;
    }>>;
    currentFormat: RealmNode<number>;
    editorInFocus: RealmNode<EditorInFocus | null>;
    applyFormat: RealmNode<TextFormatType>;
    currentBlockType: RealmNode<BlockType>;
    applyBlockType: RealmNode<BlockType>;
    convertSelectionToNode: RealmNode<() => ElementNode>;
    insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
    onBlur: RealmNode<FocusEvent>;
}>], (r: Realm, [{ rootEditor, createRootEditorSubscription }]: [{
    activeEditor: RealmNode<LexicalEditor | null>;
    inFocus: RealmNode<boolean>;
    historyState: RealmNode<HistoryState>;
    currentSelection: RealmNode<RangeSelection | null>;
    jsxIsAvailable: RealmNode<boolean>;
    jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
    initialRootEditorState: RealmNode<InitialEditorStateType>;
    rootEditor: RealmNode<LexicalEditor | null>;
    createRootEditorSubscription: RealmNode<EditorSubscription>;
    createActiveEditorSubscription: RealmNode<EditorSubscription>;
    importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
    syntaxExtensions: RealmNode<Extension[]>;
    mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
    usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
    addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
    addLexicalNode: RealmNode<Klass<LexicalNode>>;
    addSyntaxExtension: RealmNode<Extension>;
    addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
    toMarkdownExtensions: RealmNode<Options[]>;
    toMarkdownOptions: RealmNode<Options>;
    addToMarkdownExtension: RealmNode<Options>;
    addExportVisitor: RealmNode<LexicalVisitor>;
    exportVisitors: RealmNode<LexicalVisitor[]>;
    initialMarkdown: RealmNode<string>;
    setMarkdown: RealmNode<string>;
    markdown: RealmNode<string>;
    editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
    contentEditableClassName: RealmNode<string>;
    placeholder: RealmNode<ReactNode>;
    autoFocus: RealmNode<boolean | {
        defaultSelection?: "rootStart" | "rootEnd" | undefined;
        preventScroll?: boolean | undefined;
    }>;
    readOnly: RealmNode<boolean>;
    composerChildren: RealmNode<ComponentType<{}>[]>;
    addComposerChild: RealmNode<ComponentType<{}>>;
    topAreaChildren: RealmNode<ComponentType<{}>[]>;
    addTopAreaChild: RealmNode<ComponentType<{}>>;
    nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
    addNestedEditorChild: RealmNode<ComponentType<{}>>;
    editorWrappers: RealmNode<ComponentType<{
        children: ReactNode;
    }>[]>;
    addEditorWrapper: RealmNode<ComponentType<{
        children: ReactNode;
    }>>;
    currentFormat: RealmNode<number>;
    editorInFocus: RealmNode<EditorInFocus | null>;
    applyFormat: RealmNode<TextFormatType>;
    currentBlockType: RealmNode<BlockType>;
    applyBlockType: RealmNode<BlockType>;
    convertSelectionToNode: RealmNode<() => ElementNode>;
    insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
    onBlur: RealmNode<FocusEvent>;
}]) => {
    insertFrontmatter: RealmNode<true>;
    removeFrontmatter: RealmNode<true>;
    hasFrontmatter: RealmNode<boolean>;
    frontmatterDialogOpen: RealmNode<boolean>;
}>, object>, 
/** @internal */
frontmatterPluginHooks: {
    useRealmContext: () => TypedRealm<{
        insertFrontmatter: RealmNode<true>;
        removeFrontmatter: RealmNode<true>;
        hasFrontmatter: RealmNode<boolean>;
        frontmatterDialogOpen: RealmNode<boolean>;
    } & {
        activeEditor: RealmNode<LexicalEditor | null>;
        inFocus: RealmNode<boolean>;
        historyState: RealmNode<HistoryState>;
        currentSelection: RealmNode<RangeSelection | null>;
        jsxIsAvailable: RealmNode<boolean>;
        jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
        initialRootEditorState: RealmNode<InitialEditorStateType>;
        rootEditor: RealmNode<LexicalEditor | null>;
        createRootEditorSubscription: RealmNode<EditorSubscription>;
        createActiveEditorSubscription: RealmNode<EditorSubscription>;
        importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
        syntaxExtensions: RealmNode<Extension[]>;
        mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
        usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
        addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
        addLexicalNode: RealmNode<Klass<LexicalNode>>;
        addSyntaxExtension: RealmNode<Extension>;
        addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
        toMarkdownExtensions: RealmNode<Options[]>;
        toMarkdownOptions: RealmNode<Options>;
        addToMarkdownExtension: RealmNode<Options>;
        addExportVisitor: RealmNode<LexicalVisitor>;
        exportVisitors: RealmNode<LexicalVisitor[]>;
        initialMarkdown: RealmNode<string>;
        setMarkdown: RealmNode<string>;
        markdown: RealmNode<string>;
        editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
        contentEditableClassName: RealmNode<string>;
        placeholder: RealmNode<ReactNode>;
        autoFocus: RealmNode<boolean | {
            defaultSelection?: "rootStart" | "rootEnd" | undefined;
            preventScroll?: boolean | undefined;
        }>;
        readOnly: RealmNode<boolean>;
        composerChildren: RealmNode<ComponentType<{}>[]>;
        addComposerChild: RealmNode<ComponentType<{}>>;
        topAreaChildren: RealmNode<ComponentType<{}>[]>;
        addTopAreaChild: RealmNode<ComponentType<{}>>;
        nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
        addNestedEditorChild: RealmNode<ComponentType<{}>>;
        editorWrappers: RealmNode<ComponentType<{
            children: ReactNode;
        }>[]>;
        addEditorWrapper: RealmNode<ComponentType<{
            children: ReactNode;
        }>>;
        currentFormat: RealmNode<number>;
        editorInFocus: RealmNode<EditorInFocus | null>;
        applyFormat: RealmNode<TextFormatType>;
        currentBlockType: RealmNode<BlockType>;
        applyBlockType: RealmNode<BlockType>;
        convertSelectionToNode: RealmNode<() => ElementNode>;
        insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
        onBlur: RealmNode<FocusEvent>;
    }>;
    useEmitter: <K extends "jsxComponentDescriptors" | "jsxIsAvailable" | "toMarkdownOptions" | "toMarkdownExtensions" | "mdastExtensions" | "syntaxExtensions" | "markdown" | "activeEditor" | "inFocus" | "historyState" | "currentSelection" | "initialRootEditorState" | "rootEditor" | "createRootEditorSubscription" | "createActiveEditorSubscription" | "importVisitors" | "usedLexicalNodes" | "addImportVisitor" | "addLexicalNode" | "addSyntaxExtension" | "addMdastExtension" | "addToMarkdownExtension" | "addExportVisitor" | "exportVisitors" | "initialMarkdown" | "setMarkdown" | "editorRootElementRef" | "contentEditableClassName" | "placeholder" | "autoFocus" | "readOnly" | "composerChildren" | "addComposerChild" | "topAreaChildren" | "addTopAreaChild" | "nestedEditorChildren" | "addNestedEditorChild" | "editorWrappers" | "addEditorWrapper" | "currentFormat" | "editorInFocus" | "applyFormat" | "currentBlockType" | "applyBlockType" | "convertSelectionToNode" | "insertDecoratorNode" | "onBlur" | "insertFrontmatter" | "removeFrontmatter" | "hasFrontmatter" | "frontmatterDialogOpen">(key: K, callback: (value: ValueForKey<{
        insertFrontmatter: RealmNode<true>;
        removeFrontmatter: RealmNode<true>;
        hasFrontmatter: RealmNode<boolean>;
        frontmatterDialogOpen: RealmNode<boolean>;
    } & {
        activeEditor: RealmNode<LexicalEditor | null>;
        inFocus: RealmNode<boolean>;
        historyState: RealmNode<HistoryState>;
        currentSelection: RealmNode<RangeSelection | null>;
        jsxIsAvailable: RealmNode<boolean>;
        jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
        initialRootEditorState: RealmNode<InitialEditorStateType>;
        rootEditor: RealmNode<LexicalEditor | null>;
        createRootEditorSubscription: RealmNode<EditorSubscription>;
        createActiveEditorSubscription: RealmNode<EditorSubscription>;
        importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
        syntaxExtensions: RealmNode<Extension[]>;
        mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
        usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
        addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
        addLexicalNode: RealmNode<Klass<LexicalNode>>;
        addSyntaxExtension: RealmNode<Extension>;
        addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
        toMarkdownExtensions: RealmNode<Options[]>;
        toMarkdownOptions: RealmNode<Options>;
        addToMarkdownExtension: RealmNode<Options>;
        addExportVisitor: RealmNode<LexicalVisitor>;
        exportVisitors: RealmNode<LexicalVisitor[]>;
        initialMarkdown: RealmNode<string>;
        setMarkdown: RealmNode<string>;
        markdown: RealmNode<string>;
        editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
        contentEditableClassName: RealmNode<string>;
        placeholder: RealmNode<ReactNode>;
        autoFocus: RealmNode<boolean | {
            defaultSelection?: "rootStart" | "rootEnd" | undefined;
            preventScroll?: boolean | undefined;
        }>;
        readOnly: RealmNode<boolean>;
        composerChildren: RealmNode<ComponentType<{}>[]>;
        addComposerChild: RealmNode<ComponentType<{}>>;
        topAreaChildren: RealmNode<ComponentType<{}>[]>;
        addTopAreaChild: RealmNode<ComponentType<{}>>;
        nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
        addNestedEditorChild: RealmNode<ComponentType<{}>>;
        editorWrappers: RealmNode<ComponentType<{
            children: ReactNode;
        }>[]>;
        addEditorWrapper: RealmNode<ComponentType<{
            children: ReactNode;
        }>>;
        currentFormat: RealmNode<number>;
        editorInFocus: RealmNode<EditorInFocus | null>;
        applyFormat: RealmNode<TextFormatType>;
        currentBlockType: RealmNode<BlockType>;
        applyBlockType: RealmNode<BlockType>;
        convertSelectionToNode: RealmNode<() => ElementNode>;
        insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
        onBlur: RealmNode<FocusEvent>;
    }, K>) => void) => void;
    useEmitterValues: <K_1 extends SystemKeys<{
        insertFrontmatter: RealmNode<true>;
        removeFrontmatter: RealmNode<true>;
        hasFrontmatter: RealmNode<boolean>;
        frontmatterDialogOpen: RealmNode<boolean>;
    } & {
        activeEditor: RealmNode<LexicalEditor | null>;
        inFocus: RealmNode<boolean>;
        historyState: RealmNode<HistoryState>;
        currentSelection: RealmNode<RangeSelection | null>;
        jsxIsAvailable: RealmNode<boolean>;
        jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
        initialRootEditorState: RealmNode<InitialEditorStateType>;
        rootEditor: RealmNode<LexicalEditor | null>;
        createRootEditorSubscription: RealmNode<EditorSubscription>;
        createActiveEditorSubscription: RealmNode<EditorSubscription>;
        importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
        syntaxExtensions: RealmNode<Extension[]>;
        mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
        usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
        addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
        addLexicalNode: RealmNode<Klass<LexicalNode>>;
        addSyntaxExtension: RealmNode<Extension>;
        addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
        toMarkdownExtensions: RealmNode<Options[]>;
        toMarkdownOptions: RealmNode<Options>;
        addToMarkdownExtension: RealmNode<Options>;
        addExportVisitor: RealmNode<LexicalVisitor>;
        exportVisitors: RealmNode<LexicalVisitor[]>;
        initialMarkdown: RealmNode<string>;
        setMarkdown: RealmNode<string>;
        markdown: RealmNode<string>;
        editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
        contentEditableClassName: RealmNode<string>;
        placeholder: RealmNode<ReactNode>;
        autoFocus: RealmNode<boolean | {
            defaultSelection?: "rootStart" | "rootEnd" | undefined;
            preventScroll?: boolean | undefined;
        }>;
        readOnly: RealmNode<boolean>;
        composerChildren: RealmNode<ComponentType<{}>[]>;
        addComposerChild: RealmNode<ComponentType<{}>>;
        topAreaChildren: RealmNode<ComponentType<{}>[]>;
        addTopAreaChild: RealmNode<ComponentType<{}>>;
        nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
        addNestedEditorChild: RealmNode<ComponentType<{}>>;
        editorWrappers: RealmNode<ComponentType<{
            children: ReactNode;
        }>[]>;
        addEditorWrapper: RealmNode<ComponentType<{
            children: ReactNode;
        }>>;
        currentFormat: RealmNode<number>;
        editorInFocus: RealmNode<EditorInFocus | null>;
        applyFormat: RealmNode<TextFormatType>;
        currentBlockType: RealmNode<BlockType>;
        applyBlockType: RealmNode<BlockType>;
        convertSelectionToNode: RealmNode<() => ElementNode>;
        insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
        onBlur: RealmNode<FocusEvent>;
    }>>(...keys: K_1) => ValuesForKeys<{
        insertFrontmatter: RealmNode<true>;
        removeFrontmatter: RealmNode<true>;
        hasFrontmatter: RealmNode<boolean>;
        frontmatterDialogOpen: RealmNode<boolean>;
    } & {
        activeEditor: RealmNode<LexicalEditor | null>;
        inFocus: RealmNode<boolean>;
        historyState: RealmNode<HistoryState>;
        currentSelection: RealmNode<RangeSelection | null>;
        jsxIsAvailable: RealmNode<boolean>;
        jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
        initialRootEditorState: RealmNode<InitialEditorStateType>;
        rootEditor: RealmNode<LexicalEditor | null>;
        createRootEditorSubscription: RealmNode<EditorSubscription>;
        createActiveEditorSubscription: RealmNode<EditorSubscription>;
        importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
        syntaxExtensions: RealmNode<Extension[]>;
        mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
        usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
        addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
        addLexicalNode: RealmNode<Klass<LexicalNode>>;
        addSyntaxExtension: RealmNode<Extension>;
        addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
        toMarkdownExtensions: RealmNode<Options[]>;
        toMarkdownOptions: RealmNode<Options>;
        addToMarkdownExtension: RealmNode<Options>;
        addExportVisitor: RealmNode<LexicalVisitor>;
        exportVisitors: RealmNode<LexicalVisitor[]>;
        initialMarkdown: RealmNode<string>;
        setMarkdown: RealmNode<string>;
        markdown: RealmNode<string>;
        editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
        contentEditableClassName: RealmNode<string>;
        placeholder: RealmNode<ReactNode>;
        autoFocus: RealmNode<boolean | {
            defaultSelection?: "rootStart" | "rootEnd" | undefined;
            preventScroll?: boolean | undefined;
        }>;
        readOnly: RealmNode<boolean>;
        composerChildren: RealmNode<ComponentType<{}>[]>;
        addComposerChild: RealmNode<ComponentType<{}>>;
        topAreaChildren: RealmNode<ComponentType<{}>[]>;
        addTopAreaChild: RealmNode<ComponentType<{}>>;
        nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
        addNestedEditorChild: RealmNode<ComponentType<{}>>;
        editorWrappers: RealmNode<ComponentType<{
            children: ReactNode;
        }>[]>;
        addEditorWrapper: RealmNode<ComponentType<{
            children: ReactNode;
        }>>;
        currentFormat: RealmNode<number>;
        editorInFocus: RealmNode<EditorInFocus | null>;
        applyFormat: RealmNode<TextFormatType>;
        currentBlockType: RealmNode<BlockType>;
        applyBlockType: RealmNode<BlockType>;
        convertSelectionToNode: RealmNode<() => ElementNode>;
        insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
        onBlur: RealmNode<FocusEvent>;
    }, K_1>;
    usePubKeys: () => (values: SystemDict<{
        insertFrontmatter: RealmNode<true>;
        removeFrontmatter: RealmNode<true>;
        hasFrontmatter: RealmNode<boolean>;
        frontmatterDialogOpen: RealmNode<boolean>;
    } & {
        activeEditor: RealmNode<LexicalEditor | null>;
        inFocus: RealmNode<boolean>;
        historyState: RealmNode<HistoryState>;
        currentSelection: RealmNode<RangeSelection | null>;
        jsxIsAvailable: RealmNode<boolean>;
        jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
        initialRootEditorState: RealmNode<InitialEditorStateType>;
        rootEditor: RealmNode<LexicalEditor | null>;
        createRootEditorSubscription: RealmNode<EditorSubscription>;
        createActiveEditorSubscription: RealmNode<EditorSubscription>;
        importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
        syntaxExtensions: RealmNode<Extension[]>;
        mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
        usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
        addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
        addLexicalNode: RealmNode<Klass<LexicalNode>>;
        addSyntaxExtension: RealmNode<Extension>;
        addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
        toMarkdownExtensions: RealmNode<Options[]>;
        toMarkdownOptions: RealmNode<Options>;
        addToMarkdownExtension: RealmNode<Options>;
        addExportVisitor: RealmNode<LexicalVisitor>;
        exportVisitors: RealmNode<LexicalVisitor[]>;
        initialMarkdown: RealmNode<string>;
        setMarkdown: RealmNode<string>;
        markdown: RealmNode<string>;
        editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
        contentEditableClassName: RealmNode<string>;
        placeholder: RealmNode<ReactNode>;
        autoFocus: RealmNode<boolean | {
            defaultSelection?: "rootStart" | "rootEnd" | undefined;
            preventScroll?: boolean | undefined;
        }>;
        readOnly: RealmNode<boolean>;
        composerChildren: RealmNode<ComponentType<{}>[]>;
        addComposerChild: RealmNode<ComponentType<{}>>;
        topAreaChildren: RealmNode<ComponentType<{}>[]>;
        addTopAreaChild: RealmNode<ComponentType<{}>>;
        nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
        addNestedEditorChild: RealmNode<ComponentType<{}>>;
        editorWrappers: RealmNode<ComponentType<{
            children: ReactNode;
        }>[]>;
        addEditorWrapper: RealmNode<ComponentType<{
            children: ReactNode;
        }>>;
        currentFormat: RealmNode<number>;
        editorInFocus: RealmNode<EditorInFocus | null>;
        applyFormat: RealmNode<TextFormatType>;
        currentBlockType: RealmNode<BlockType>;
        applyBlockType: RealmNode<BlockType>;
        convertSelectionToNode: RealmNode<() => ElementNode>;
        insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
        onBlur: RealmNode<FocusEvent>;
    }>) => void;
    usePublisher: <K_2 extends "jsxComponentDescriptors" | "jsxIsAvailable" | "toMarkdownOptions" | "toMarkdownExtensions" | "mdastExtensions" | "syntaxExtensions" | "markdown" | "activeEditor" | "inFocus" | "historyState" | "currentSelection" | "initialRootEditorState" | "rootEditor" | "createRootEditorSubscription" | "createActiveEditorSubscription" | "importVisitors" | "usedLexicalNodes" | "addImportVisitor" | "addLexicalNode" | "addSyntaxExtension" | "addMdastExtension" | "addToMarkdownExtension" | "addExportVisitor" | "exportVisitors" | "initialMarkdown" | "setMarkdown" | "editorRootElementRef" | "contentEditableClassName" | "placeholder" | "autoFocus" | "readOnly" | "composerChildren" | "addComposerChild" | "topAreaChildren" | "addTopAreaChild" | "nestedEditorChildren" | "addNestedEditorChild" | "editorWrappers" | "addEditorWrapper" | "currentFormat" | "editorInFocus" | "applyFormat" | "currentBlockType" | "applyBlockType" | "convertSelectionToNode" | "insertDecoratorNode" | "onBlur" | "insertFrontmatter" | "removeFrontmatter" | "hasFrontmatter" | "frontmatterDialogOpen">(key: K_2) => (value: ValueForKey<{
        insertFrontmatter: RealmNode<true>;
        removeFrontmatter: RealmNode<true>;
        hasFrontmatter: RealmNode<boolean>;
        frontmatterDialogOpen: RealmNode<boolean>;
    } & {
        activeEditor: RealmNode<LexicalEditor | null>;
        inFocus: RealmNode<boolean>;
        historyState: RealmNode<HistoryState>;
        currentSelection: RealmNode<RangeSelection | null>;
        jsxIsAvailable: RealmNode<boolean>;
        jsxComponentDescriptors: RealmNode<JsxComponentDescriptor[]>;
        initialRootEditorState: RealmNode<InitialEditorStateType>;
        rootEditor: RealmNode<LexicalEditor | null>;
        createRootEditorSubscription: RealmNode<EditorSubscription>;
        createActiveEditorSubscription: RealmNode<EditorSubscription>;
        importVisitors: RealmNode<MdastImportVisitor<Content>[]>;
        syntaxExtensions: RealmNode<Extension[]>;
        mdastExtensions: RealmNode<(Partial<Config> | Partial<Config>[])[] | null | undefined>;
        usedLexicalNodes: RealmNode<Klass<LexicalNode>[]>;
        addImportVisitor: RealmNode<MdastImportVisitor<Content>>;
        addLexicalNode: RealmNode<Klass<LexicalNode>>;
        addSyntaxExtension: RealmNode<Extension>;
        addMdastExtension: RealmNode<Partial<Config> | Partial<Config>[]>;
        toMarkdownExtensions: RealmNode<Options[]>;
        toMarkdownOptions: RealmNode<Options>;
        addToMarkdownExtension: RealmNode<Options>;
        addExportVisitor: RealmNode<LexicalVisitor>;
        exportVisitors: RealmNode<LexicalVisitor[]>;
        initialMarkdown: RealmNode<string>;
        setMarkdown: RealmNode<string>;
        markdown: RealmNode<string>;
        editorRootElementRef: RealmNode<RefObject<HTMLDivElement> | null>;
        contentEditableClassName: RealmNode<string>;
        placeholder: RealmNode<ReactNode>;
        autoFocus: RealmNode<boolean | {
            defaultSelection?: "rootStart" | "rootEnd" | undefined;
            preventScroll?: boolean | undefined;
        }>;
        readOnly: RealmNode<boolean>;
        composerChildren: RealmNode<ComponentType<{}>[]>;
        addComposerChild: RealmNode<ComponentType<{}>>;
        topAreaChildren: RealmNode<ComponentType<{}>[]>;
        addTopAreaChild: RealmNode<ComponentType<{}>>;
        nestedEditorChildren: RealmNode<ComponentType<{}>[]>;
        addNestedEditorChild: RealmNode<ComponentType<{}>>;
        editorWrappers: RealmNode<ComponentType<{
            children: ReactNode;
        }>[]>;
        addEditorWrapper: RealmNode<ComponentType<{
            children: ReactNode;
        }>>;
        currentFormat: RealmNode<number>;
        editorInFocus: RealmNode<EditorInFocus | null>;
        applyFormat: RealmNode<TextFormatType>;
        currentBlockType: RealmNode<BlockType>;
        applyBlockType: RealmNode<BlockType>;
        convertSelectionToNode: RealmNode<() => ElementNode>;
        insertDecoratorNode: RealmNode<() => DecoratorNode<unknown>>;
        onBlur: RealmNode<FocusEvent>;
    }, K_2>) => void;
};
