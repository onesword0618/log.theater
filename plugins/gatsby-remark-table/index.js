const unified = require(`unified`);
const remarkRehype = require(`remark-rehype`);
const toHtml = require(`hast-util-to-html`);
const visit = require(`unist-util-visit`);

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `table`, (node) => {
    // https://github.com/remarkjs/remark-rehype#use
    const html = toHtml(unified().use(remarkRehype).runSync(node));
    node.type = `html`;
    node.data = `
      <div class="table-wrapper">
        ${html}
      </div>
    `;
  });
  return markdownAST;
};
