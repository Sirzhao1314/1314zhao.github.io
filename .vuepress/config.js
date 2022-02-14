module.exports = {
  "title": "VOKE的酒馆",
  "description": "愿你永远少年，愿少年永远不缺乏勇气",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "文档",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     },
      //     {
      //       "text": "vuepress-demo",
      //       "link": "/docs/theme-demo/"
      //     }
      //   ]
      // },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Sirzhao1314",
            "icon": "reco-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/1314zhao",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "VOKE的酒馆",
        "desc": "愿你永远少年，愿少年永远不缺乏勇气",
        "email": "2558691827@qq.com",
        "link": "https://blog.voke.work"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "VOKE",
    "authorAvatar": "/avatar.png",
    "record": "6666plus",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      'ribbon',
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1, // z-index property of the background, default: -1
      },
    ],
    ['go-top'],
    ['cursor-effects'],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }]
  ],
}