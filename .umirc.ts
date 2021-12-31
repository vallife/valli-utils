import { defineConfig } from 'dumi';

const repo = 'valli-utils';

export default defineConfig({
  title: repo,
  favicon:
    'https://oss.tool.lu/cache/202112/21/123226vc5hbztycsl0k5y5.jpg.icon.ico',
  logo:
    'https://oss.tool.lu/cache/202112/21/123226vc5hbztycsl0k5y5.jpg.icon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/vallife/valli-utils.git',
    },
  ],
  // more config: https://d.umijs.org/config
  devServer: {
    port: 13320,
  },
});
