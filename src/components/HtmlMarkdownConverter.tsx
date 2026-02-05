import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,     
  linkify: true,
  typographer: true,
});

const HtmlMarkdownConverter = (markdown: string) => {
  return md.render(markdown);
};

export default HtmlMarkdownConverter;
