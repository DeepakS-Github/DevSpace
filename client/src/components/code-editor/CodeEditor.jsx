import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({setCode, language}) => {
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
        language={language==="C++"?"cpp":language.toLowerCase()}
        height={"94vh"}
        theme="customTheme"
        onChange={(value) => setCode(value)}
        options={{
          inlineSuggest: true,
          fontSize: 14,
          // readOnlyMessage: { value: "Read only editor" },
          formatOnType: true,
          autoClosingBrackets: "always",
          // readOnly: true,
          minimap: { enabled: false },
          padding: {
            top: 10,
          },
        }}
      />
    </>
  );
};

export default CodeEditor;
