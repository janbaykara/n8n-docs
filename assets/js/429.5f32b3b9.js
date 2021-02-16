(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1315:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressions"}},[t._v("#")]),t._v(" Expressions")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("With the help of expressions, it is possible to set node parameters dynamically by referencing other data. That can be data from the flow, nodes, the environment or self-generated data. Expressions are normal text with placeholders (everything between {{...}}) that can execute JavaScript code, which offers access to special variables to access data.")]),t._v(" "),a("p",[t._v("An expression could look like this:")]),t._v(" "),a("p",[t._v("My name is: "),a("code",[t._v('{{$node["Webhook"].json["query"]["name"]}}')])]),t._v(" "),a("p",[t._v('This one would return "My name is: " and then attach the value that the node with the name "Webhook" outputs and there select the property "query" and its key "name". So if the node would output this data:')]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-json extra-class"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jim"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v('the value would be: "My name is: Jim"')]),t._v(" "),a("p",[t._v("The following special variables are available:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("$binary")]),t._v(": Incoming binary data of a node")]),t._v(" "),a("li",[a("strong",[t._v("$env")]),t._v(": Environment variables")]),t._v(" "),a("li",[a("strong",[t._v("$evaluateExpression")]),t._v(": Evaluates a string as expression")]),t._v(" "),a("li",[a("strong",[t._v("$items")]),t._v(": Incoming data from an input node")]),t._v(" "),a("li",[a("strong",[t._v("$json")]),t._v(": Incoming JSON data of a node")]),t._v(" "),a("li",[a("strong",[t._v("$node")]),t._v(": Data of other nodes (binary, context, json, parameter, runIndex)")]),t._v(" "),a("li",[a("strong",[t._v("$parameters")]),t._v(": Parameters of the current node")]),t._v(" "),a("li",[a("strong",[t._v("$runIndex")]),t._v(": The current run index (first time node gets executed it is 0, second time 1, ...)")]),t._v(" "),a("li",[a("strong",[t._v("$workflow")]),t._v(": Returns workflow metadata like: active, id, name")])]),t._v(" "),a("p",[t._v("Normally it is not needed to write the JavaScript variables manually as they can be selected with the help of the Expression Editor.")]),t._v(" "),a("h2",{attrs:{id:"method-evaluateexpression-expression-string-itemindex-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-evaluateexpression-expression-string-itemindex-number"}},[t._v("#")]),t._v(" Method: $evaluateExpression(expression: string, itemIndex: number)")]),t._v(" "),a("p",[t._v("Evaluates a given string as expression.\nIf no "),a("code",[t._v("itemIndex")]),t._v(" is provided it uses by default in the Function-Node the data of item 0 and\nin the Function Item-Node the data of the current item.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("variable1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$evaluateExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{1+2}}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nitems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("variable2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$evaluateExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Set"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myExpression"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"method-items-nodename-string-outputindex-number-runindex-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-items-nodename-string-outputindex-number-runindex-number"}},[t._v("#")]),t._v(" Method: $items(nodeName?: string, outputIndex?: number, runIndex?: number)")]),t._v(" "),a("p",[t._v("This gives access to all the items of current or parent nodes. If no parameters are supplied,\nit returns all the items of the current node.\nIf a node-name is given, it returns the items the node output on its first output\n(index: 0, most nodes only have one output, exceptions are IF and Switch-Node) on\nits last run.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns all the items of the current node and current run")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allItems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns all items the node "IF" outputs (index: 0 which is Output "true" of its most recent run)')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allItems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns all items the node "IF" outputs (index: 0 which is Output "true" of the same run as current node)')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allItems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $runIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns all items the node "IF" outputs (index: 1 which is Output "false" of run 0 which is the first run)')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allItems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"variable-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-node"}},[t._v("#")]),t._v(" Variable: $node")]),t._v(" "),a("p",[t._v("Works exactly like "),a("code",[t._v("$item")]),t._v(" with the difference that it will always return the data of the first output and\nthe last run of the node.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the fileName of binary property "data" of Node "HTTP Request"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP Request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("binary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fileName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the context data "noItemsLeft" of Node "SplitInBatches"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" noItemsLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SplitInBatches"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noItemsLeft"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the value of the JSON data property "myNumber" of Node "Set"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Set"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myNumber'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the value of the parameter "channel" of Node "Slack"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" channel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Slack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the index of the last run of Node "HTTP Request"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" runIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP Request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("Parameters can be set for most nodes in n8n. The values that get set define what exactly a node does.")]),t._v(" "),a("p",[t._v("Parameter values are static by default and are always the same no matter what kind of data the node processes. However, it is possible to set the values dynamically with the help of an Expression. Using Expressions, it is possible to make the parameter value dependent on other factors like the data of flow or parameters of other nodes.")]),t._v(" "),a("h2",{attrs:{id:"variable-runindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-runindex"}},[t._v("#")]),t._v(" Variable: $runIndex")]),t._v(" "),a("p",[t._v("Contains the index of the current run of the node.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns all items the node "IF" outputs (index: 0 which is Output "true" of the same run as current node)')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allItems "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $runIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"variable-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-workflow"}},[t._v("#")]),t._v(" Variable: $workflow")]),t._v(" "),a("p",[t._v("Gives information about the current workflow.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isActive "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workflowId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workflowName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);