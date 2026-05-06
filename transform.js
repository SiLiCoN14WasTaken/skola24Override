(text) => {
  console.log(text);
  return text.replace("</body>", "<script></script></body>");
}
