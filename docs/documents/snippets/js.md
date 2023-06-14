# JS

## console2json(cls)
```json
{
  "Print to console": {
    "prefix": "cls",
    "body": [
      "console.log(JSON.parse(JSON.stringify($1)))"
    ],
    "description": "Log output to JSON console"
  }
}
```

## fn(fn)
```json
{
  "generate enhanced function": {
    "prefix": "fn",
    "body": [
      "$1($2) {",
      "  $3",
      "},"
    ],
    "description": "generate enhanced function"
  }
}
```

## import-api(api)
```json
{
	"Import Api": {
		"prefix": "api",
		"body": [
			"import {$1} from '@/api/$2';"
		],
		"description": "import api"
	}
}
```

## import-component(cpn)
```json
{
  "Import Component": {
    "prefix": "cpn",
    "body": ["import $1 from '@/component/$1';"],
    "description": "import component"
  }
}
```