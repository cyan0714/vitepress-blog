# VSCode 配置

## settings.json

```json
{
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    // esbenp 是指 Prettier 插件的作者名（Esben Petersen）
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true // 开启自动提示功能，当键入字符串时会自动列出可选项。
    },
    // 在选择建议项时使用替换模式，即选择建议项后会覆盖当前输入的内容。
    "editor.suggest.insertMode": "replace",
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {
    "editor.formatOnType": true
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // 使在 md 文件中可以使用 snippets
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    },
    "editor.acceptSuggestionOnEnter": "on"
  },

  // 在键入 JavaScript 代码时，如果 editor.formatOnType 设置为 true，
  // 则当输入结束符号（如分号或大括号）时，编辑器会自动对整个行或当前作用域
  // 的代码进行格式化。这有助于保持代码的一致性和可读性，并减少手动格式化的工作量。
  "editor.formatOnType": true,

  // 保存时自动运行 eslint 工具来修复所有错误和警告
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.lineNumbers": "relative",
  "editor.lineHeight": 28,
  "editor.fontFamily": "Fira Code, monospace",
  "editor.suggestSelection": "first",
  "editor.hover.delay": 1000,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.inlineSuggest.enabled": true,
  "editor.fontSize": 16,

  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.enable": false,
  "eslint.validate": ["javascript", "javascriptreact", "html", "vue"],

  "prettier.tabWidth": 2,
  "prettier.printWidth": 80,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.arrowParens": "avoid",
  "prettier.bracketSameLine": true,

  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,

  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Monokai Pro (Filter Machine)",
  "workbench.startupEditor": "none",
  "workbench.editor.showTabs": false,

  // 默认使用 bash 为终端
  "terminal.integrated.defaultProfile.windows": "MyBash",
  "terminal.integrated.profiles.windows": {
    "MyBash": {
      "path": "E:\\Git\\Git\\bin\\bash.exe"
    }
  },

  "debug.javascript.autoAttachFilter": "smart",
  "debug.allowBreakpointsEverywhere": true,

  "vim.hlsearch": true,
  "vim.easymotion": true,
  "vim.leader": "<space>",
  "vim.useSystemClipboard": true,
  // normal mode
  "vim.normalModeKeyBindings": [
    {
      "before": ["<C-n>"],
      "commands": [":nohl"]
    },
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    },
    {
      "before": ["K"],
      "after": ["h", "$", "V", "%"]
    },
    // 从当前字符删除到最左边字符
    {
      "before": ["S"],
      "after": ["v", "^", "d"]
    },

    // 删除两个空格之间的字符串
    {
      "before": ["<leader>", "s"],
      "after": ["B", "d", "E", "a"]
    },
    {
      "before": ["<leader>", "i"],
      "after": ["/", "f", "r", "o", "m", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "a"],
      "after": ["/", "n", "a", "m", "e", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "d"],
      "after": ["/", "d", "a", "t", "a", "\\", "(", "\\", ")", "<leader>", "{", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "c"],
      "after": ["/", "c", "o", "m", "p", "o", "n", "e", "n", "t", "s", ":", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "p"],
      "after": ["/", "p", "r", "o", "p", "s", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "o"],
      "after": ["/", "c", "o", "m", "p", "u", "t", "e", "d", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "w"],
      "after": ["/", "w", "a", "t", "c", "h", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "r"],
      "after": ["/", "c", "r", "e", "a", "t", "e", "d", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "m"],
      "after": ["/", "m", "o", "u", "n", "t", "e", "d", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "e"],
      "after": ["/", "m", "e", "t", "h", "o", "d", "s", "<Enter>", "z", "z"]
    },
    {
      "before": ["<leader>", "l"],
      "after": ["/", "l", "a", "n", "g", "<Enter>", "z", "z"]
    }
  ],

  "vim.normalModeKeyBindingsNonRecursive": [
    // 快速复制颜色值
    {
      "before": ["y", "c"],
      "after": ["F", "#", "v", "l", "l", "l", "l", "l", "l", "y"]
    },
    // 跳到 data 位置并自动补上复制的值（快速生成对应的 data)
    {
      "before": ["q"],
      "after": [
        "y",
        "i",
        "w",
        "/",
        "d",
        "a",
        "t",
        "a",
        "\\",
        "(",
        "\\",
        ")",
        "<Enter>",
        "z",
        "z",
        "j",
        "o",
        "<C-v>",
        ":",
        "<leader>",
        ",",
        "<Esc>",
        "i"
      ]
    },
    // 快速生成对应的 methods
    {
      "before": [";"],
      "after": [
        "y",
        "i",
        "w",
        "/",
        "m",
        "e",
        "t",
        "h",
        "o",
        "d",
        "s",
        "(",
        ")",
        "<Enter>",
        "z",
        "z",
        "o",
        "<C-v>",
        "(",
        ")",
        "<leader>",
        "{",
        "}",
        ",",
        "<Esc>",
        "h",
        "i",
        "<Enter>"
      ]
    },
    // 从 template 里的 class 跳到 style 标签里的 class(右边是双引号时)
    {
      "before": ["<leader>", "j"],
      "after": ["F", "\"", "l", "v", "t", "\"", "y", "/", "<C-r>", "\"", "<leader>", "<Enter>"]
    },
    // 从 template 里的 class 跳到 style 标签里的 class(右边是空格时)
    {
      "before": ["<leader>", "n"],
      "after": [
        "F",
        "\"",
        "l",
        "v",
        "t",
        "<leader>",
        "y",
        "/",
        "<C-r>",
        "\"",
        "<leader>",
        "<Enter>"
      ]
    },
    // 从 style 标签里的 class 跳到 template 里的 class
    {
      "before": ["<leader>", "k"],
      "after": [
        "F",
        ".",
        "l",
        "v",
        "t",
        "<leader>",
        "y",
        "/",
        "class=\"(.*",
        "<C-r>",
        "\"",
        ".*)",
        "<Enter>"
      ]
    },
    {
      "before": ["w"],
      "after": ["w", "w"]
    },
    {
      "before": ["b"],
      "after": ["b", "b"]
    },
    {
      "before": ["u"],
      "after": ["<C-u>", "z", "z"]
    },
    // 标记当前位置
    {
      "before": ["m"],
      "after": ["m", ","]
    },
    // 返回标记的位置
    {
      "before": [","],
      "after": ["`", ","]
    },
    {
      "before": ["n"],
      "after": ["*"]
    },
    {
      "before": ["'"],
      "after": ["<C-u>", "z", "z"]
    },
    {
      "before": ["s"],
      "after": ["<Esc>", "<leader>", "<leader>", "s"]
    },
    {
      "before": ["p", "p"],
      "after": ["p"]
    },
    // 从当前光标所在字符复制到当前行最后一个字符
    {
      "before": ["y", "e"],
      "after": ["v", "g", "_", "y"]
    },
    // 复制两个空格之间的字符串
    {
      "before": ["y", "<leader>"],
      "after": ["B", "y", "E"]
    },
    // 复制反引号里的内容
    {
      "before": ["y", "`"],
      "after": ["F", "`", "l", "y", "t", "`"]
    },
    // 复制单引号里的内容
    {
      "before": ["y", "'"],
      "after": ["F", "'", "l", "y", "t", "'"]
    },
    // 复制双引号里的内容
    {
      "before": ["y", "\""],
      "after": ["F", "\"", "l", "y", "t", "\""]
    },
    // 将单引号里的内容删除, 并将复制的内容粘贴到单引号里
    {
      "before": ["p", "'"],
      "after": ["F", "'", "l", "h", "p", "l", "d", "t", "'"]
    },
    // 从当前位置将复制的内容粘贴到右边单引号里
    {
      "before": ["p", "t", "'"],
      "after": ["p", "l", "d", "t", "'"]
    },
    // 将双引号里的内容删除, 并将复制的内容粘贴到单引号里
    {
      "before": ["p", "\""],
      "after": ["F", "\"", "l", "h", "p", "l", "d", "t", "\""]
    },
    // 从当前位置将复制的内容粘贴到右边双引号里
    {
      "before": ["p", "t", "\""],
      "after": ["p", "l", "d", "t", "\""]
    },
    // 将反引号里的内容删除, 并将复制的内容粘贴到反引号里
    {
      "before": ["p", "`"],
      "after": ["F", "`", "l", "h", "p", "l", "d", "t", "`"]
    },
    // 从当前位置将复制的内容粘贴到右边反引号里
    {
      "before": ["p", "t", "`"],
      "after": ["p", "l", "d", "t", "`"]
    },
    // 将标签里的内容删除, 并将复制的内容粘贴到标签里
    {
      "before": ["p", "i", "t"],
      "after": ["^", "f", ">", "p", "l", "d", "t", "<"]
    }
  ],
  // insert mode
  "vim.insertModeKeyBindings": [
    {
      "before": ["<C-q>"],
      "after": ["<Enter>"]
    },
    {
      "before": ["<C-i>"],
      "after": ["<Esc>"]
    },
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    },
    {
      "before": ["j", "k"],
      "after": ["<Esc>", "l", "a", ","]
    },
    {
      "before": ["j", "n"],
      "after": ["<Esc>", "o"]
    },
    {
      "before": ["j", ";"],
      "after": ["<Esc>", "A", ";", "<Esc>", "o"]
    },
    {
      "before": ["j", ","],
      "after": ["<Esc>", "A", ",", "<Esc>", "o"]
    },
    {
      "before": ["j", "l"],
      "after": ["right"]
    },
    {
      "before": ["<C-j>"],
      "after": ["<Esc>", "d", "d"]
    },
    {
      // 从当前字符删除到最左边字符
      "before": ["K"],
      "after": ["<Esc>", "v", "^", "d"]
    },
    {
      "before": ["<C-d>"],
      "after": ["<Esc>", "d", "d"]
    },
    {
      "before": ["<C-l>"],
      "after": ["<Esc>", "A"]
    },
    {
      "before": ["<C-h>"],
      "after": ["<Esc>", "I"]
    }
  ],
  // visual mode
  "vim.visualModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    },
    {
      "before": ["w"],
      "after": ["i", "w"]
    }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    // 粘贴上一次复制的值
    {
      "before": ["p"],
      "after": ["\"", "0", "p"]
    },
    // 复制后将光标定位到最后一个字符
    {
      "before": ["y"],
      "after": ["y", "g", "_", "%"]
    }
  ],
  "vim.operatorPendingModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    }
  ],
  "vim.operatorPendingModeKeyBindingsNonRecursive": [
    {
      "before": ["w"],
      "after": ["i", "w"]
    },
    {
      "before": ["b"],
      "after": ["i", "b"]
    },
    {
      "before": ["B"],
      "after": ["i", "B"]
    }
  ],
  "vim.handleKeys": {
    "<C-c>": false,
    "<C-v>": false,
    "<C-x>": false,
    "<C-z>": false,
    "<C-a>": false,
    "<C-f>": false,
    "<C-y>": false,
    "<C-u>": false
  },
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.obtainIMCmd": "C:\\im-select.exe",
  "vim.autoSwitchInputMethod.switchIMCmd": "C:\\im-select.exe {im}",
  "vim.autoSwitchInputMethod.defaultIM": "\"1033\"",

  "search.exclude": {
    "**/node_modules": false,
    "**/bower_components": true
  },
  "htmltagwrap.tag": "div",
  "files.insertFinalNewline": true,
  "files.exclude": {
    "**/.git": false
  },
  // WeChat Mini Program Config
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact"
  },
  "minapp-vscode.disableAutoConfig": true,
  "minapp-vscode.disableDecorate": true,
  "minapp-vscode.cssExtname": "sass",

  "outline.collapseItems": "alwaysCollapse"
}
```

## keybindings.json

```json
// 将键绑定放在此文件中以覆盖默认值auto[]
[
  {
    "key": "ctrl+shift+j",
    "command": "vim.remap",
    "when": "inputFocus && (vim.mode == 'Normal' || vim.mode == 'Insert')",
    "args": {
      "after": ["y", "y", "p", "p"]
    }
  },
  {
    "key": "ctrl+shift+k",
    "command": "vim.remap",
    "when": "inputFocus && (vim.mode == 'Normal' || vim.mode == 'Insert')",
    "args": {
      "after": ["y", "y", "P"]
    }
  },
  // ctrl + ;
  {
    "key": "ctrl+oem_1",
    "command": "workbench.view.explorer",
    "when": "viewContainer.workbench.view.explorer.enabled"
  },
  // ctrl + `
  {
    "key": "ctrl+oem_2",
    "command": "workbench.action.terminal.sendSequence",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+alt+u",
    "command": "editor.action.transformToUppercase"
  },
  {
    "key": "ctrl+alt+l",
    "command": "editor.action.transformToLowercase"
  },
  {
    "key": "shift+a",
    "command": "explorer.newFolder",
    "when": "filesExplorerFocus && !inputFocus"
  },
  {
    "key": "a",
    "command": "explorer.newFile",
    "when": "filesExplorerFocus && !inputFocus"
  },
  {
    "key": "d",
    "command": "deleteFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "r",
    "command": "renameFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "alt+j",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+down",
    "command": "-editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+k",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+up",
    "command": "-editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "tab",
    "command": "acceptSelectedSuggestion",
    "when": "suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "shift+tab",
    "command": "acceptSelectedSuggestion",
    "when": "suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "tab",
    "command": "selectNextSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "shift+tab",
    "command": "selectPrevSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  }
]
```
