import * as Dialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import React__default from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/ui.module.css.js";
import { corePluginHooks } from "../core/index.js";
import { imagePluginHooks } from "./index.js";
import { DownshiftAutoComplete } from "../core/ui/DownshiftAutoComplete.js";
const ImageDialog = () => {
  const [imageAutocompleteSuggestions, state] = imagePluginHooks.useEmitterValues("imageAutocompleteSuggestions", "imageDialogState");
  const saveImage = imagePluginHooks.usePublisher("saveImage");
  const [editorRootElementRef] = corePluginHooks.useEmitterValues("editorRootElementRef");
  const closeImageDialog = imagePluginHooks.usePublisher("closeImageDialog");
  const { register, handleSubmit, control, setValue, reset } = useForm({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    values: state.type === "editing" ? state.initialValues : {}
  });
  return /* @__PURE__ */ React__default.createElement(
    Dialog.Root,
    {
      open: state.type !== "inactive",
      onOpenChange: (open) => {
        if (!open) {
          closeImageDialog(true);
          reset({ src: "", title: "", altText: "" });
        }
      }
    },
    /* @__PURE__ */ React__default.createElement(Dialog.Portal, { container: editorRootElementRef == null ? void 0 : editorRootElementRef.current }, /* @__PURE__ */ React__default.createElement(Dialog.Overlay, { className: styles.dialogOverlay }), /* @__PURE__ */ React__default.createElement(
      Dialog.Content,
      {
        className: styles.dialogContent,
        onOpenAutoFocus: (e) => {
          e.preventDefault();
        }
      },
      /* @__PURE__ */ React__default.createElement(
        "form",
        {
          onSubmit: (e) => {
            void handleSubmit(saveImage)(e);
            reset({ src: "", title: "", altText: "" });
            e.preventDefault();
            e.stopPropagation();
          },
          className: styles.multiFieldForm
        },
        /* @__PURE__ */ React__default.createElement("div", { className: styles.formField }, /* @__PURE__ */ React__default.createElement("label", { htmlFor: "file" }, "Upload an image from your device:"), /* @__PURE__ */ React__default.createElement("input", { type: "file", ...register("file") })),
        /* @__PURE__ */ React__default.createElement("div", { className: styles.formField }, /* @__PURE__ */ React__default.createElement("label", { htmlFor: "src" }, "Or add an image from an URL:"), /* @__PURE__ */ React__default.createElement(
          DownshiftAutoComplete,
          {
            initialInputValue: state.type === "editing" ? state.initialValues.src || "" : "",
            inputName: "src",
            suggestions: imageAutocompleteSuggestions,
            setValue,
            control,
            placeholder: "Select or paste an image src"
          }
        )),
        /* @__PURE__ */ React__default.createElement("div", { className: styles.formField }, /* @__PURE__ */ React__default.createElement("label", { htmlFor: "alt" }, "Alt:"), /* @__PURE__ */ React__default.createElement("input", { type: "text", ...register("altText"), className: styles.textInput })),
        /* @__PURE__ */ React__default.createElement("div", { className: styles.formField }, /* @__PURE__ */ React__default.createElement("label", { htmlFor: "title" }, "Title:"), /* @__PURE__ */ React__default.createElement("input", { type: "text", ...register("title"), className: styles.textInput })),
        /* @__PURE__ */ React__default.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: "var(--spacing-2)" } }, /* @__PURE__ */ React__default.createElement("button", { type: "submit", title: "Save", "aria-label": "Save", className: classNames(styles.primaryButton) }, "Save"), /* @__PURE__ */ React__default.createElement(Dialog.Close, { asChild: true }, /* @__PURE__ */ React__default.createElement("button", { type: "reset", title: "Cancel", "aria-label": "Cancel", className: classNames(styles.secondaryButton) }, "Cancel")))
      )
    ))
  );
};
export {
  ImageDialog
};
