// /src/plugins/wysiwyg/admin/src/components/Tinymce/index.js

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
const TinyEditor = ({ onChange, name, value, disabled }) => {
  const onChangeRef = useRef(onChange);
  function onBlur(ev, editor) {
    const content = editor.getContent();
    onChangeRef.current({ target: { name, value: content, type: "wysiwyg" } });
  }
  return (
    <>
      <Editor
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        value={value}
        tagName={name}
        onEditorChange={(editorContent) => {
          onChange({ target: { name, value: editorContent } });
        }}
        outputFormat="html"
        init={{
          selector: "textarea",
            resize: false,
            menubar: true,
            branding: false,
            statusbar: false,
            contextmenu: "copy paste",
            forced_root_block: "p",
            remove_trailing_brs: true,
            
            toolbar:
              "undo redo | image | link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | lineheight | outdent indent | media",

            plugins: ["lists", "emoticons", "media", "table", "link", "image"],

            
            content_style: `img {max-width: 100% !important; height: auto !important;} iframe {max-width: 100% !important; }`,
        }}
      />
    </>
  );
};
TinyEditor.defaultProps = {
  value: "",
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;
