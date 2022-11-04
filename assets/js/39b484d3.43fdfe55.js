"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3812],{6990:e=>{e.exports=JSON.parse('{"functions":[{"name":"SerializeArgs","desc":"Serializes the arguments and returns the serialized values in a table.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"args: table"}],"function_type":"static","source":{"line":85,"path":"modules/ser/init.lua"}},{"name":"SerializeArgsAndUnpack","desc":"Serializes the arguments and returns the serialized values.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"args: ...any"}],"function_type":"static","source":{"line":103,"path":"modules/ser/init.lua"}},{"name":"DeserializeArgs","desc":"Deserializes the arguments and returns the deserialized values in a table.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"args: table"}],"function_type":"static","source":{"line":113,"path":"modules/ser/init.lua"}},{"name":"DeserializeArgsAndUnpack","desc":"Deserializes the arguments and returns the deserialized values.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"args: table"}],"function_type":"static","source":{"line":131,"path":"modules/ser/init.lua"}},{"name":"Serialize","desc":"Serializes the given value.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"static","source":{"line":141,"path":"modules/ser/init.lua"}},{"name":"Deserialize","desc":"Deserializes the given value.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"static","source":{"line":156,"path":"modules/ser/init.lua"}},{"name":"UnpackArgs","desc":"Unpacks the arguments returned by either `SerializeArgs` or `DeserializeArgs`.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"static","source":{"line":171,"path":"modules/ser/init.lua"}}],"properties":[{"name":"Classes","desc":"A dictionary of classes along with a Serialize and Deserialize function.\\nFor instance, the default class added is the Option class, which looks\\nlike the following:\\n\\n```lua\\nSer.Classes.Option = {\\n\\tSerialize = function(opt) return opt:Serialize() end;\\n\\tDeserialize = Option.Deserialize;\\n}\\n```\\n\\nAdd to this table in order to extend what classes are automatically\\nserialized/deserialized.\\n\\nThe Ser library checks every object\'s `ClassName` field in both serialized\\nand deserialized data in order to map it to the correct function within\\nthe Classes table.","lua_type":"table","source":{"line":71,"path":"modules/ser/init.lua"}}],"types":[],"name":"Ser","desc":"Library for serializing and deserializing data.\\n\\nSee the `Classes` property for information on extending the use\\nof the Ser library to include other classes.","source":{"line":47,"path":"modules/ser/init.lua"}}')}}]);