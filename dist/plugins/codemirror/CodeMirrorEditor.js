import { SandpackProvider, CodeEditor } from "@codesandbox/sandpack-react";
import React__default from "react";
import styles from "../../styles/ui.module.css.js";
import { useCodeBlockEditorContext } from "../codeblock/CodeBlockNode.js";
import { corePluginHooks } from "../core/index.js";
import { useCodeMirrorRef } from "../sandpack/useCodeMirrorRef.js";
const CodeMirrorEditor = ({ language, nodeKey, code, focusEmitter }) => {
  const codeMirrorRef = useCodeMirrorRef(nodeKey, "codeblock", "jsx", focusEmitter);
  const [readOnly] = corePluginHooks.useEmitterValues("readOnly");
  const { setCode } = useCodeBlockEditorContext();
  React__default.useEffect(() => {
    var _a, _b;
    (_b = (_a = codeMirrorRef.current) == null ? void 0 : _a.getCodemirror()) == null ? void 0 : _b.dom.addEventListener("paste", (e) => {
      e.stopPropagation();
    });
  }, [codeMirrorRef]);
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: styles.sandpackWrapper,
      onKeyDown: (e) => {
        e.stopPropagation();
      }
    },
    /* @__PURE__ */ React__default.createElement(SandpackProvider, null, /* @__PURE__ */ React__default.createElement(
      CodeEditor,
      {
        readOnly,
        showLineNumbers: true,
        initMode: "immediate",
        key: language,
        filePath: `file.${language || "txt"}`,
        code,
        onCodeUpdate: setCode,
        ref: codeMirrorRef
      }
    ))
  );
};
export {
  CodeMirrorEditor
};
