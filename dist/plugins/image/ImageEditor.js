import React__default from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext.js";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection.js";
import { mergeRegister } from "@lexical/utils";
import classNames from "classnames";
import { $isNodeSelection, $getSelection, $getNodeByKey, $setSelection, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_LOW, CLICK_COMMAND, DRAGSTART_COMMAND, KEY_DELETE_COMMAND, KEY_BACKSPACE_COMMAND, KEY_ENTER_COMMAND, KEY_ESCAPE_COMMAND } from "lexical";
import { imagePluginHooks } from "./index.js";
import SettingsIcon from "../../icons/settings.svg.js";
import styles from "../../styles/ui.module.css.js";
import { $isImageNode } from "./ImageNode.js";
import ImageResizer from "./ImageResizer.js";
const imageCache = /* @__PURE__ */ new Set();
function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}
function LazyImage({
  title,
  alt,
  className,
  imageRef,
  src,
  width,
  height
}) {
  useSuspenseImage(src);
  return /* @__PURE__ */ React__default.createElement(
    "img",
    {
      className: className || void 0,
      alt,
      src,
      title,
      ref: imageRef,
      draggable: "false",
      width,
      height
    }
  );
}
function ImageEditor({ src, title, alt, nodeKey, width, height }) {
  const imageRef = React__default.useRef(null);
  const buttonRef = React__default.useRef(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey);
  const [editor] = useLexicalComposerContext();
  const [selection, setSelection] = React__default.useState(null);
  const activeEditorRef = React__default.useRef(null);
  const [isResizing, setIsResizing] = React__default.useState(false);
  const [disableImageResize, imagePreviewHandler] = imagePluginHooks.useEmitterValues("disableImageResize", "imagePreviewHandler");
  const [imageSource, setImageSource] = React__default.useState(null);
  const openEditImageDialog = imagePluginHooks.usePublisher("openEditImageDialog");
  const onDelete = React__default.useCallback(
    (payload) => {
      if (isSelected && $isNodeSelection($getSelection())) {
        const event = payload;
        event.preventDefault();
        const node = $getNodeByKey(nodeKey);
        if ($isImageNode(node)) {
          node.remove();
        }
      }
      return false;
    },
    [isSelected, nodeKey]
  );
  const onEnter = React__default.useCallback(
    (event) => {
      const latestSelection = $getSelection();
      const buttonElem = buttonRef.current;
      if (isSelected && $isNodeSelection(latestSelection) && latestSelection.getNodes().length === 1) {
        if (buttonElem !== null && buttonElem !== document.activeElement) {
          event.preventDefault();
          buttonElem.focus();
          return true;
        }
      }
      return false;
    },
    [isSelected]
  );
  const onEscape = React__default.useCallback(
    (event) => {
      if (buttonRef.current === event.target) {
        $setSelection(null);
        editor.update(() => {
          setSelected(true);
          const parentRootElement = editor.getRootElement();
          if (parentRootElement !== null) {
            parentRootElement.focus();
          }
        });
        return true;
      }
      return false;
    },
    [editor, setSelected]
  );
  React__default.useEffect(() => {
    if (imagePreviewHandler) {
      const callPreviewHandler = async () => {
        const updatedSrc = await imagePreviewHandler(src);
        setImageSource(updatedSrc);
      };
      callPreviewHandler().catch(console.error);
    } else {
      setImageSource(src);
    }
  }, [src, imagePreviewHandler]);
  React__default.useEffect(() => {
    let isMounted = true;
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => $getSelection()));
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor;
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const event = payload;
          if (isResizing) {
            return true;
          }
          if (event.target === imageRef.current) {
            if (event.shiftKey) {
              setSelected(!isSelected);
            } else {
              clearSelection();
              setSelected(true);
            }
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            event.preventDefault();
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(KEY_DELETE_COMMAND, onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_BACKSPACE_COMMAND, onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ENTER_COMMAND, onEnter, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ESCAPE_COMMAND, onEscape, COMMAND_PRIORITY_LOW)
    );
    return () => {
      isMounted = false;
      unregister();
    };
  }, [clearSelection, editor, isResizing, isSelected, nodeKey, onDelete, onEnter, onEscape, setSelected]);
  const onResizeEnd = (nextWidth, nextHeight) => {
    setTimeout(() => {
      setIsResizing(false);
    }, 200);
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.setWidthAndHeight(nextWidth, nextHeight);
      }
    });
  };
  const onResizeStart = () => {
    setIsResizing(true);
  };
  const draggable = $isNodeSelection(selection);
  const isFocused = isSelected;
  return imageSource !== null ? /* @__PURE__ */ React__default.createElement(React__default.Suspense, { fallback: null }, /* @__PURE__ */ React__default.createElement("div", { className: styles.imageWrapper, "data-editor-block-type": "image" }, /* @__PURE__ */ React__default.createElement("div", { draggable }, /* @__PURE__ */ React__default.createElement(
    LazyImage,
    {
      width,
      height,
      className: classNames({
        [styles.focusedImage]: isFocused
      }),
      src: imageSource,
      title: title || "",
      alt: alt || "",
      imageRef
    }
  )), draggable && isFocused && !disableImageResize && /* @__PURE__ */ React__default.createElement(ImageResizer, { editor, imageRef, onResizeStart, onResizeEnd }), !disableImageResize && /* @__PURE__ */ React__default.createElement(
    "button",
    {
      type: "button",
      className: classNames(styles.iconButton, styles.editImageButton),
      title: "Edit image",
      onClick: () => {
        openEditImageDialog({
          nodeKey,
          initialValues: {
            src: imageSource,
            title: title || "",
            altText: alt || ""
          }
        });
      }
    },
    /* @__PURE__ */ React__default.createElement(SettingsIcon, null)
  ))) : null;
}
export {
  ImageEditor
};
