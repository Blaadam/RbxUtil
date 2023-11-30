"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9935],{64760:e=>{e.exports=JSON.parse('{"functions":[{"name":"RemoteEvent","desc":"Gets a RemoteEvent with the given name.\\n\\nOn the server, if the RemoteEvent does not exist, then\\nit will be created with the given name.\\n\\nOn the client, if the RemoteEvent does not exist, then\\nit will wait until it exists for at least 10 seconds.\\nIf the RemoteEvent does not exist after 10 seconds, an\\nerror will be thrown.\\n\\n```lua\\nlocal remoteEvent = Net:RemoteEvent(\\"PointsChanged\\")\\n```","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"RemoteEvent\\n"}],"function_type":"method","source":{"line":25,"path":"modules/net/init.lua"}},{"name":"UnreliableRemoteEvent","desc":"Gets an UnreliableRemoteEvent with the given name.\\n\\nOn the server, if the UnreliableRemoteEvent does not\\nexist, then it will be created with the given name.\\n\\nOn the client, if the UnreliableRemoteEvent does not\\nexist, then it will wait until it exists for at least\\n10 seconds. If the UnreliableRemoteEvent does not exist\\nafter 10 seconds, an error will be thrown.\\n\\n```lua\\nlocal unreliableRemoteEvent = Net:UnreliableRemoteEvent(\\"PositionChanged\\")\\n```","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"UnreliableRemoteEvent\\n"}],"function_type":"method","source":{"line":59,"path":"modules/net/init.lua"}},{"name":"Connect","desc":"Connects a handler function to the given RemoteEvent.\\n\\n```lua\\n-- Client\\nNet:Connect(\\"PointsChanged\\", function(points)\\n\\tprint(\\"Points\\", points)\\nend)\\n\\n-- Server\\nNet:Connect(\\"SomeEvent\\", function(player, ...) end)\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"handler","desc":"","lua_type":"(...any) -> ()"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\n"}],"function_type":"method","source":{"line":91,"path":"modules/net/init.lua"}},{"name":"ConnectUnreliable","desc":"Connects a handler function to the given UnreliableRemoteEvent.\\n\\n```lua\\n-- Client\\nNet:ConnectUnreliable(\\"PositionChanged\\", function(position)\\n\\tprint(\\"Position\\", position)\\nend)\\n\\n-- Server\\nNet:ConnectUnreliable(\\"SomeEvent\\", function(player, ...) end)\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"handler","desc":"","lua_type":"(...any) -> ()"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\n"}],"function_type":"method","source":{"line":112,"path":"modules/net/init.lua"}},{"name":"RemoteFunction","desc":"Gets a RemoteFunction with the given name.\\n\\nOn the server, if the RemoteFunction does not exist, then\\nit will be created with the given name.\\n\\nOn the client, if the RemoteFunction does not exist, then\\nit will wait until it exists for at least 10 seconds.\\nIf the RemoteFunction does not exist after 10 seconds, an\\nerror will be thrown.\\n\\n```lua\\nlocal remoteFunction = Net:RemoteFunction(\\"GetPoints\\")\\n```","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"RemoteFunction\\n"}],"function_type":"method","source":{"line":135,"path":"modules/net/init.lua"}},{"name":"Handle","desc":"Sets the invocation function for the given RemoteFunction.\\n\\n```lua\\nNet:Handle(\\"GetPoints\\", function(player)\\n\\treturn 10\\nend)\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"handler","desc":"","lua_type":"(player: Player, ...any) -> ...any"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":164,"path":"modules/net/init.lua"}},{"name":"Invoke","desc":"Invokes the RemoteFunction with the given arguments.\\n\\n```lua\\nlocal points = Net:Invoke(\\"GetPoints\\")\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"...any\\n"}],"function_type":"method","realm":["Client"],"source":{"line":176,"path":"modules/net/init.lua"}},{"name":"Clean","desc":"Destroys all RemoteEvents and RemoteFunctions. This\\nshould really only be used in testing environments\\nand not during runtime.","params":[],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":186,"path":"modules/net/init.lua"}}],"properties":[],"types":[],"name":"Net","desc":"Basic networking module for creating and handling static\\nRemoteEvents and RemoteFunctions.","source":{"line":8,"path":"modules/net/init.lua"}}')}}]);