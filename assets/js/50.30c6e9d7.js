(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1383:function(e,t,o){"use strict";o.r(t);var s=o(25),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"discourse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discourse"}},[e._v("#")]),e._v(" Discourse")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.discourse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discourse"),s("OutboundLink")],1),e._v(" is an open-source discussion platform that can be used as a mailing list, discussion forum, long-form chat room, and more.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Discourse/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Category")]),e._v(" "),s("ul",[s("li",[e._v("Create a category")]),e._v(" "),s("li",[e._v("Get all categories")]),e._v(" "),s("li",[e._v("Update a category")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Group")]),e._v(" "),s("ul",[s("li",[e._v("Create a group")]),e._v(" "),s("li",[e._v("Get a group")]),e._v(" "),s("li",[e._v("Get all groups")]),e._v(" "),s("li",[e._v("Update a group")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Post")]),e._v(" "),s("ul",[s("li",[e._v("Create a post")]),e._v(" "),s("li",[e._v("Get a post")]),e._v(" "),s("li",[e._v("Get all posts")]),e._v(" "),s("li",[e._v("Update a post")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("User")]),e._v(" "),s("ul",[s("li",[e._v("Create a user")]),e._v(" "),s("li",[e._v("Get a user")]),e._v(" "),s("li",[e._v("Get all users")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("User Group")]),e._v(" "),s("ul",[s("li",[e._v("Add a user to a group")]),e._v(" "),s("li",[e._v("Remove a user from a group")])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to create, update, and get a post using the Discourse node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/930",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Discourse")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(670),alt:"A workflow with the Discourse node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-discourse-node-create-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-discourse-node-create-post"}},[e._v("#")]),e._v(" 2. Discourse node (create: post)")]),e._v(" "),s("p",[e._v("This node will create a post under the "),s("code",[e._v("Lounge")]),e._v(" category. If you want to create a post under a different category, select that category instead.")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Discourse node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Discourse/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Enter a title for the post in the "),s("em",[s("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the content of the post in the "),s("em",[s("strong",[e._v("Content")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Add Field")])]),e._v(" and select 'Category ID' from the dropdown list.")]),e._v(" "),s("li",[e._v("Select 'Lounge' from the "),s("em",[s("strong",[e._v("Category ID")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node creates a new topic under the category "),s("code",[e._v("Lounge")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:o(671),alt:"Using the Discourse node to create a topic"}})]),e._v(" "),s("h3",{attrs:{id:"_3-discourse1-node-update-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-discourse1-node-update-post"}},[e._v("#")]),e._v(" 3. Discourse1 node (update: post)")]),e._v(" "),s("p",[e._v("This node will update the content of the post that we created in the previous node.")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select 'Update' from the "),s("em",[s("strong",[e._v("Operations")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Post ID")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),s("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),s("li",[e._v("Enter the updated content in the "),s("em",[s("strong",[e._v("Content")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[e._v("In the screenshot below, you will notice that the node updates the content of the post that we created in the previous node.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(672),alt:"Using the Discourse node to update a post"}})]),e._v(" "),s("h3",{attrs:{id:"_4-discourse2-node-get-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-discourse2-node-get-post"}},[e._v("#")]),e._v(" 4. Discourse2 node (get: post)")]),e._v(" "),s("p",[e._v("This node will retrieve the post that we updated previously.")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select 'Get' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Post ID")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),s("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[e._v("In the screenshot below, you notice that the node retrieves the post that we created earlier.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(673),alt:"Using the Discourse node to get a post"}})])])}),[],!1,null,null,null);t.default=r.exports},670:function(e,t,o){e.exports=o.p+"assets/img/workflow.eefea95d.png"},671:function(e,t,o){e.exports=o.p+"assets/img/Discourse_node.cc8c1512.png"},672:function(e,t,o){e.exports=o.p+"assets/img/Discourse1_node.794ff78f.png"},673:function(e,t,o){e.exports=o.p+"assets/img/Discourse2_node.4b0b68a6.png"}}]);