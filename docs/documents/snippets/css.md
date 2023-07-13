# CSS

## single-row-ellipsis(sre)

```json
"single-row-ellipsis": {
  "prefix": "sre",
  "body": [
    "overflow: hidden;",
    "text-overflow: ellipsis;",
    "white-space: nowrap;"
  ],
  "description": ""
}
```

## double-row-ellipsis(dre)

```json
"double-row-ellipsis": {
  "prefix": "dre",
  "body": [
    "display: -webkit-box;",
    "word-break: break-all;",
    "-webkit-box-orient: vertical;",
    "-webkit-line-clamp: 2;",
    "overflow: hidden;",
    "text-overflow: ellipsis;"
  ],
  "description": ""
}
```

## flex(fl)

```json
"flex": {
  "prefix": "fl",
  "body": [
    "display: flex;"
  ],
  "description": ""
},
```

## flex-xy-center(fcc)

```json
"flex-xy-center": {
  "prefix": "fcc",
  "body": [
    "display: flex;",
    "justify-content: center;",
    "align-items: center;"
  ],
  "description": ""
}
```

## flex-x-center(fx)

```json
"flex-x-center": {
  "prefix": "fx",
  "body": [
    "display: flex;",
    "justify-content: center;"
  ],
  "description": ""
}
```

## flex-y-center(fy)

```json
"flex-y-center": {
  "prefix": "fy",
  "body": [
    "display: flex;",
    "align-items: center;"
  ],
  "description": ""
}
```

## flex-between(fb)

```json
"flex-between": {
  "prefix": "fb",
  "body": [
    "display: flex;",
    "justify-content: space-between;",
    "align-items: center;"
  ],
  "description": ""
}
```

## absolute-center-center(acc)

```json
"absolute-center-center": {
  "prefix": "acc",
  "body": [
    "position: absolute;",
    "top: 50%;",
    "left: 50%;",
    "transform: translate(-50%, -50%);"
  ]
}
```

## hide-scrollbar(hs)

```json
"hide-scrollbar": {
  "prefix": "hs",
  "body": [
    "&::-webkit-scrollbar: {",
      "display: none",
    "}"
  ]
}
```

## shadow(shadow)

```json
"shadow": {
  "prefix": "shadow",
  "body": [
    "box-shadow: 0 3px 6px rgba(140,149,159,0.15);"
  ],
  "description": "shadow of github"
}
```

## border(border)

```json
"border": {
  "prefix": "border",
  "body": [
    "border: 1px solid #d0d7de;"
  ],
  "description": "default border"
}
```

## scss variable

```json
"$mainBg": {
  "prefix": "main",
  "body": [
    "\\$mainBg",
  ],
  "description": "scss variable"
},
"$mainColor": {
  "prefix": "main",
  "body": [
    "\\$mainColor",
  ],
  "description": "scss variable"
},
"$mainBorder": {
  "prefix": "main",
  "body": [
    "\\$mainBorder",
  ],
  "description": "scss variable"
},
"$mainShadow": {
  "prefix": "main",
  "body": [
    "\\$mainShadow",
  ],
  "description": "scss variable"
},
"$mainMarginX": {
  "prefix": "main",
  "body": [
    "\\$mainMarginX",
  ],
  "description": "scss variable"
},
"$mainMarginY": {
  "prefix": "main",
  "body": [
    "\\$mainMarginY",
  ],
  "description": "scss variable"
},
"$mainMargin": {
  "prefix": "main",
  "body": [
    "\\$mainMargin",
  ],
  "description": "scss variable"
},
"$mainPaddingX": {
  "prefix": "main",
  "body": [
    "\\$mainPaddingX",
  ],
  "description": "scss variable"
},
"$mainPaddingY": {
  "prefix": "main",
  "body": [
    "\\$mainPaddingY",
  ],
  "description": "scss variable"
},
"$mainPadding": {
  "prefix": "main",
  "body": [
    "\\$mainPadding",
  ],
  "description": "scss variable"
}
```
