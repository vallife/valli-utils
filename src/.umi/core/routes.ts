// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/Work/PersonalKit-vallife/valli-utils/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('D:/Work/PersonalKit-vallife/valli-utils/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('D:/Work/PersonalKit-vallife/valli-utils/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/libs/obj2url",
        "component": require('D:/Work/PersonalKit-vallife/valli-utils/src/obj2url/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/obj2url/index.md",
          "updatedTime": 1640927323000,
          "title": "obj2url - 将对象参数解析为url字符串",
          "nav": {
            "title": "使用文档",
            "path": "/libs"
          },
          "group": {
            "path": "/libs/",
            "order": 2,
            "title": "使用文档"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "obj2url",
              "heading": "obj2url"
            }
          ]
        },
        "title": "obj2url - 将对象参数解析为url字符串 - valli-utils"
      },
      {
        "path": "/libs/url2obj",
        "component": require('D:/Work/PersonalKit-vallife/valli-utils/src/url2obj/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/url2obj/index.md",
          "updatedTime": 1640927323000,
          "title": "url2obj - 解码、获取url中参数并转为对象",
          "nav": {
            "title": "使用文档",
            "path": "/libs"
          },
          "group": {
            "path": "/libs/",
            "order": 3,
            "title": "使用文档"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "url2obj",
              "heading": "url2obj"
            }
          ]
        },
        "title": "url2obj - 解码、获取url中参数并转为对象 - valli-utils"
      },
      {
        "path": "/libs/uuid",
        "component": require('D:/Work/PersonalKit-vallife/valli-utils/src/uuid/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/uuid/index.md",
          "updatedTime": 1640927323000,
          "componentName": "uuid",
          "title": "uuid - 生成唯一id",
          "nav": {
            "title": "使用文档",
            "path": "/libs"
          },
          "group": {
            "path": "/libs/",
            "order": 1,
            "title": "使用文档"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "uuid",
              "heading": "uuid"
            }
          ]
        },
        "title": "uuid - 生成唯一id - valli-utils"
      },
      {
        "path": "/",
        "component": require('D:/Work/PersonalKit-vallife/valli-utils/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1640063604000,
          "title": "valli-utils - 为组件开发场景而生的文档工具",
          "order": 10,
          "hero": {
            "title": "valli-utils",
            "desc": "<div class=\"markdown\"><p>📖 为组件开发场景而生的文档工具</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/libs"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>提供大量开箱即用的js函数</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "按需使用",
              "desc": "<div class=\"markdown\"><p>按需使用, 不产生冗余代码</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/b3e102cd-5dad-4046-a02a-be33241d1cc7/kj9t8oji_w144_h144.png",
              "title": "面向复杂场景",
              "desc": "<div class=\"markdown\"><p>基于复杂场景的深度封装</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by DQY</p></div>",
          "slugs": []
        },
        "title": "valli-utils - 为组件开发场景而生的文档工具 - valli-utils"
      },
      {
        "path": "/libs/",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/libs/obj2url"
      },
      {
        "path": "/libs",
        "meta": {},
        "exact": true,
        "redirect": "/libs/"
      }
    ],
    "title": "valli-utils",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
