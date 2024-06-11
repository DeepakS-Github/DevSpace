import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const setEditorTheme = (monaco) => {
    monaco.editor.defineTheme("customTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1f1f1f",
      },
    });
  };

  return (
    <>
    <Editor
      beforeMount={setEditorTheme}
      language="javascript"
      height={"92vh"}
      theme="customTheme"
      value={"console.log('hello')"}
      options={{
        inlineSuggest: true,
        fontSize: 14,
        readOnlyMessage: { value: "Read only editor" },
        formatOnType: true,
        autoClosingBrackets: "always",
        // readOnly: true,
        minimap: { enabled: false },
        padding: {
          top: 10,
          bottom: 10,
        },
      }}
    />
    </>
  );
};

export default CodeEditor;
