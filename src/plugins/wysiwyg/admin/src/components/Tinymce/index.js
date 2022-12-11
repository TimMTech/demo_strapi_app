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
          toolbar:
            "undo redo | link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media",

          plugins: ["lists", "emoticons", "media", "table", "link"],
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
