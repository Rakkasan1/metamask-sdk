(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[2964],{"./src/mocks/storybook.mocks.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.sdkProviderArgTypes=exports.defaultSDKtArgs=exports.SdkContextDecorator=void 0;var _sdkReact=__webpack_require__("../sdk-react/dist/esm/index.js"),_networks=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/utils/networks.ts"))),_sdkCommunicationLayer=__webpack_require__("../sdk-communication-layer/dist/browser/es/metamask-sdk-communication-layer.js"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),defaultSDKtArgs=exports.defaultSDKtArgs={sdk:{getProvider:function getProvider(){return{}}},connected:!0,connecting:!1,extensionActive:!1,chainId:"0x1",balance:"11111111111111111",account:"0xAAAAA0e296961f476E01184274Ce85ae60184CB0"},chainIdOptions=Object.keys(_networks.default).reduce((function(options,key){var network=_networks.default[key];return console.log(`key: ${key}`,network),options[network.name]=network.hexChainId,options}),{});exports.sdkProviderArgTypes={connected:{control:"boolean"},connecting:{control:"boolean"},account:{control:"text",defaultValue:defaultSDKtArgs.account},balance:{control:"text",defaultValue:defaultSDKtArgs.balance},chainId:{control:"select",options:chainIdOptions,defaultValue:defaultSDKtArgs.chainId},keyExchangeStep:{control:"select",options:_sdkCommunicationLayer.KeyExchangeMessageType,defaultValue:_sdkCommunicationLayer.KeyExchangeMessageType.KEY_HANDSHAKE_ACK},rpcHistory:{control:"object",defaultValue:{}},extensionActive:{control:"boolean"}},exports.SdkContextDecorator=function SdkContextDecorator(ThisStory,sc){var _sc$args=sc.args,ready=_sc$args.ready,account=_sc$args.account,connected=_sc$args.connected,connecting=_sc$args.connecting,chainId=_sc$args.chainId,balance=_sc$args.balance,readOnlyCalls=_sc$args.readOnlyCalls,extensionActive=_sc$args.extensionActive,rpcHistory=_sc$args.rpcHistory,status={keyInfo:{keysExchanged:!0,ecies:{private:"aaa",public:"bbb",otherPubKey:"ccc"},step:_sc$args.keyExchangeStep}};return console.log("sc.args",sc.args),(0,_jsxRuntime.jsx)(_sdkReact.SDKContext.Provider,{value:{ready,extensionActive,balance,connected,readOnlyCalls,connecting,account,chainId,rpcHistory,status},children:(0,_jsxRuntime.jsx)(ThisStory,{})})}}}]);