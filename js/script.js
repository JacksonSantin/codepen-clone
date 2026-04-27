var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
  mode: "xml",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
  autoCloseTags: true,
});

var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
  mode: "css",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
});

var jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
});

function run() {
  let htmlCode = htmlEditor.getValue();
  let cssCode = cssEditor.getValue();
  let jsCode = jsEditor.getValue();
  let output = document.getElementById("output");

  let style = `
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      padding: 10px;
    }
  </style>
`;

  output.contentDocument.open();
  output.contentDocument.write(
    style + htmlCode + "<style>" + cssCode + "</style>"
  );
  output.contentDocument.close();
  output.contentWindow.eval(jsCode);
}

htmlEditor.on("change", run);
cssEditor.on("change", run);
jsEditor.on("change", run);
