import { defineConfig } from 'dumi';

const repo = 'valli-utils';

export default defineConfig({
  title: repo,
  favicon:
    'https://oss.tool.lu/cache/202202/07/171151k8tzn7m27kq9td7k.jpg.icon.ico',
  logo:
    'https://oss.tool.lu/cache/202202/07/171151k8tzn7m27kq9td7k.jpg.icon.png',
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
