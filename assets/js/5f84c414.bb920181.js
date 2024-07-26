"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7839],{30110:e=>{e.exports=JSON.parse('{"functions":[],"properties":[],"types":[],"name":"Symbol","desc":"Represents a unique object.\\n\\nSymbols are often used as unique keys in tables. This is useful to avoid possible collisions\\nwith a key in a table, since the symbol will always be unique and cannot be reconstructed.\\n\\n\\n:::note All Unique\\nEvery creation of a symbol is unique, even if the\\ngiven names are the same.\\n:::\\n\\n```lua\\nlocal Symbol = require(packages.Symbol)\\n\\n-- Create a symbol:\\nlocal symbol = Symbol(\\"MySymbol\\")\\n\\n-- The name is optional:\\nlocal anotherSymbol = Symbol()\\n\\n-- Comparison:\\nprint(symbol == symbol) --\x3e true\\n\\n-- All symbol constructions are unique, regardless of the name:\\nprint(Symbol(\\"Hello\\") == Symbol(\\"Hello\\")) --\x3e false\\n\\n-- Commonly used as unique keys in a table:\\nlocal DATA_KEY = Symbol(\\"Data\\")\\nlocal t = {\\n\\t-- Can only be accessed using the DATA_KEY symbol:\\n\\t[DATA_KEY] = {}\\n}\\n\\nprint(t[DATA_KEY]) --\x3e {}\\n```","source":{"line":44,"path":"modules/symbol/init.luau"}}')}}]);