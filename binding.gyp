{
	"targets": [
		{
			"target_name": "<(module_name)",
			"cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
			"sources": ["lib/prompt.cc"],
			"include_dirs": [
				"<!@(node -p \"require('node-addon-api').include\")"
			],
			"product_dir": "<(module_path)",
			"defines": ['NAPI_DISABLE_CPP_EXCEPTIONS'],
		}
	]
}
