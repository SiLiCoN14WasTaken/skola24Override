(text) => {
  console.log(text);
  return text.replace("</body>", "<script>console.log("hi")</script></body>");
}
