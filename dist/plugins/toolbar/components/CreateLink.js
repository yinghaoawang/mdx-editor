import React__default from "react";
import { ButtonWithTooltip } from "../primitives/toolbar.js";
import LinkIcon from "../../../icons/link.svg.js";
import { linkDialogPluginHooks } from "../../link-dialog/index.js";
const CreateLink = () => {
  const openLinkDialog = linkDialogPluginHooks.usePublisher("openLinkEditDialog");
  return /* @__PURE__ */ React__default.createElement(
    ButtonWithTooltip,
    {
      title: "Create link",
      onClick: (_) => {
        openLinkDialog(true);
      }
    },
    /* @__PURE__ */ React__default.createElement(LinkIcon, null)
  );
};
export {
  CreateLink
};
