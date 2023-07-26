# JS

## console2json(json)
```json
{
  "Print to console": {
    "prefix": "json",
    "body": [
      "console.log(JSON.parse(JSON.stringify($1)))"
    ],
    "description": "log output to JSON console"
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