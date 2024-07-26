"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5996],{81638:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a ClientComm object.\\n\\nIf `usePromise` is set to `true`, then `GetFunction` will generate a function that returns a Promise\\nthat resolves with the server response. If set to `false`, the function will act like a normal\\ncall to a RemoteFunction and yield until the function responds.\\n\\n```lua\\nlocal clientComm = ClientComm.new(game:GetService(\\"ReplicatedStorage\\"), true)\\n\\n-- If using a unique namespace with ServerComm, include it as second argument:\\nlocal clientComm = ClientComm.new(game:GetService(\\"ReplicatedStorage\\"), true, \\"MyNamespace\\")\\n```","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"usePromise","desc":"","lua_type":"boolean"},{"name":"namespace","desc":"","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"ClientComm"}],"function_type":"static","source":{"line":46,"path":"modules/comm/Client/ClientComm.luau"}},{"name":"GetFunction","desc":"Generates a function on the matching RemoteFunction generated with ServerComm. The function\\ncan then be called to invoke the server. If this `ClientComm` object was created with\\nthe `usePromise` parameter set to `true`, then this generated function will return\\na Promise when called.\\n\\n```lua\\n-- Server-side:\\nlocal serverComm = ServerComm.new(someParent)\\nserverComm:BindFunction(\\"MyFunction\\", function(player, msg)\\n\\treturn msg:upper()\\nend)\\n\\n-- Client-side:\\nlocal clientComm = ClientComm.new(someParent)\\nlocal myFunc = clientComm:GetFunction(\\"MyFunction\\")\\nlocal uppercase = myFunc(\\"hello world\\")\\nprint(uppercase) --\x3e HELLO WORLD\\n\\n-- Client-side, using promises:\\nlocal clientComm = ClientComm.new(someParent, true)\\nlocal myFunc = clientComm:GetFunction(\\"MyFunction\\")\\nmyFunc(\\"hi there\\"):andThen(function(msg)\\n\\tprint(msg) --\x3e HI THERE\\nend):catch(function(err)\\n\\tprint(\\"Error:\\", err)\\nend)\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"inboundMiddleware","desc":"","lua_type":"ClientMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ClientMiddleware?"}],"returns":[{"desc":"","lua_type":"(...: any) -> any"}],"function_type":"method","source":{"line":95,"path":"modules/comm/Client/ClientComm.luau"}},{"name":"GetSignal","desc":"Returns a new ClientRemoteSignal that mirrors the matching RemoteSignal created by\\nServerComm with the same matching `name`.\\n\\n```lua\\nlocal mySignal = clientComm:GetSignal(\\"MySignal\\")\\n\\n-- Listen for data from the server:\\nmySignal:Connect(function(message)\\n\\tprint(\\"Received message from server:\\", message)\\nend)\\n\\n-- Send data to the server:\\nmySignal:Fire(\\"Hello!\\")\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"inboundMiddleware","desc":"","lua_type":"ClientMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ClientMiddleware?"}],"returns":[{"desc":"","lua_type":"ClientRemoteSignal"}],"function_type":"method","source":{"line":123,"path":"modules/comm/Client/ClientComm.luau"}},{"name":"GetProperty","desc":"Returns a new ClientRemoteProperty that mirrors the matching RemoteProperty created by\\nServerComm with the same matching `name`.\\n\\nTake a look at the ClientRemoteProperty documentation for more info, such as\\nunderstanding how to wait for data to be ready.\\n\\n```lua\\nlocal mapInfo = clientComm:GetProperty(\\"MapInfo\\")\\n\\n-- Observe the initial value of mapInfo, and all subsequent changes:\\nmapInfo:Observe(function(info)\\n\\tprint(\\"Current map info\\", info)\\nend)\\n\\n-- Check to see if data is initially ready:\\nif mapInfo:IsReady() then\\n\\t-- Get the data:\\n\\tlocal info = mapInfo:Get()\\nend\\n\\n-- Get a promise that resolves once the data is ready (resolves immediately if already ready):\\nmapInfo:OnReady():andThen(function(info)\\n\\tprint(\\"Map info is ready with info\\", info)\\nend)\\n\\n-- Same as above, but yields thread:\\nlocal success, info = mapInfo:OnReady():await()\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"inboundMiddleware","desc":"","lua_type":"ClientMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ClientMiddleware?"}],"returns":[{"desc":"","lua_type":"ClientRemoteProperty"}],"function_type":"method","source":{"line":165,"path":"modules/comm/Client/ClientComm.luau"}},{"name":"BuildObject","desc":"Returns an object which maps RemoteFunctions as methods\\nand RemoteEvents as fields.\\n```lua\\n-- Server-side:\\nserverComm:BindFunction(\\"Test\\", function(player) end)\\nserverComm:CreateSignal(\\"MySignal\\")\\nserverComm:CreateProperty(\\"MyProperty\\", 10)\\n\\n-- Client-side\\nlocal obj = clientComm:BuildObject()\\nobj:Test()\\nobj.MySignal:Connect(function(data) end)\\nobj.MyProperty:Observe(function(value) end)\\n```","params":[{"name":"inboundMiddleware","desc":"","lua_type":"ClientMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ClientMiddleware?"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"method","source":{"line":192,"path":"modules/comm/Client/ClientComm.luau"}},{"name":"Destroy","desc":"Destroys the ClientComm object.","params":[],"returns":[],"function_type":"method","source":{"line":230,"path":"modules/comm/Client/ClientComm.luau"}}],"properties":[],"types":[{"name":"ClientMiddlewareFn","desc":"The middleware function takes the arguments (as a table array), and should\\nreturn `true|false` to indicate if the process should continue.\\n\\nIf returning `false`, the optional varargs after the `false` are used as the new return values\\nto whatever was calling the middleware.","lua_type":"(args: {any}) -> (shouldContinue: boolean, ...: any)","source":{"line":25,"path":"modules/comm/Client/ClientComm.luau"}},{"name":"ClientMiddleware","desc":"Array of middleware functions.","lua_type":"{ClientMiddlewareFn}","source":{"line":30,"path":"modules/comm/Client/ClientComm.luau"}}],"name":"ClientComm","desc":"","realm":["Client"],"source":{"line":13,"path":"modules/comm/Client/ClientComm.luau"}}')}}]);