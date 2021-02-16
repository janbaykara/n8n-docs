(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1396:function(e,t,a){"use strict";a.r(t);var o=a(25),l=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gmail"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gmail"}},[e._v("#")]),e._v(" Gmail")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.gmail.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gmail"),o("OutboundLink")],1),e._v(" is an email service developed by Google. Users can access Gmail on the web and using third-party programs that synchronize email content through POP or IMAP protocols.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Draft")]),e._v(" "),o("ul",[o("li",[e._v("Create a new email draft")]),e._v(" "),o("li",[e._v("Delete a draft")]),e._v(" "),o("li",[e._v("Get a draft")]),e._v(" "),o("li",[e._v("Get all drafts")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Label")]),e._v(" "),o("ul",[o("li",[e._v("Create a new label")]),e._v(" "),o("li",[e._v("Delete a label")]),e._v(" "),o("li",[e._v("Get a label")]),e._v(" "),o("li",[e._v("Get all labels")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Message")]),e._v(" "),o("ul",[o("li",[e._v("Send an email")]),e._v(" "),o("li",[e._v("Delete a message")]),e._v(" "),o("li",[e._v("Get a message")]),e._v(" "),o("li",[e._v("Get all messages")]),e._v(" "),o("li",[e._v("Reply to an email")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Message Label")]),e._v(" "),o("ul",[o("li",[e._v("Add a label to a message")]),e._v(" "),o("li",[e._v("Remove a label from a message")])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to get all messages with a certain label, remove the label from the messages, and add a new label to the messages. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/621",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Gmail")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(704),alt:"A workflow with the Gmail node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-gmail-node-getall-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-gmail-node-getall-message"}},[e._v("#")]),e._v(" 2. Gmail node (getAll: message)")]),e._v(" "),o("p",[e._v("This node will return ten messages with the label "),o("code",[e._v("n8n")]),e._v(" from Gmail. If you want to return all the messages toggle "),o("em",[o("strong",[e._v("Return All")])]),e._v(" to "),o("code",[e._v("true")]),e._v(".")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Gmail node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select 'Message' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Get All' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" button and select 'Format' from the dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Full' from "),o("em",[o("strong",[e._v("Format")])]),e._v(" dropdown menu. This option will return the full email message data with the body content parsed in the payload field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" button and select 'Label IDs' from the dropdown list.")]),e._v(" "),o("li",[e._v("Select the label from the "),o("em",[o("strong",[e._v("Label IDs")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node returns ten email messages with the label "),o("code",[e._v("n8n")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(705),alt:"Using the Gmail node to get all messages with a particular label"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_3-gmail1-node-remove-messagelabel"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-gmail1-node-remove-messagelabel"}},[e._v("#")]),e._v(" 3. Gmail1 node (remove: messageLabel)")]),e._v(" "),o("p",[e._v("This node will remove the label "),o("code",[e._v("n8n")]),e._v(" from all the messages that you received in the previous node. If you want to remove a different label, select that label instead.")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous Gmail node.")]),e._v(" "),o("li",[e._v("Select 'Message Label' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Remove' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Message ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Gmail > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["Gmail"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Select the label from the "),o("em",[o("strong",[e._v("Label IDs")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node removes the "),o("code",[e._v("n8n")]),e._v(" label from the messages that we received from the previous node.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(706),alt:"Using the Gmail node to remove a label from the messages"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_4-gmail2-node-add-messagelabel"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-gmail2-node-add-messagelabel"}},[e._v("#")]),e._v(" 4. Gmail2 node (add: messageLabel)")]),e._v(" "),o("p",[e._v("This node will add a new label "),o("code",[e._v("nodemation")]),e._v(" to the messages that we received from the Gmail node. If you want to add a different label, select that label instead.")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous Gmail node.")]),e._v(" "),o("li",[e._v("Select 'Message Label' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Message ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Gmail > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["Gmail"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Select the label from the "),o("em",[o("strong",[e._v("Label IDs")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node adds a new label "),o("code",[e._v("nodemation")]),e._v(" to the messages that we received from the Gmail node.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(707),alt:"Using the Gmail node to add a label to the messages"}})]),e._v(" "),o("h2",{attrs:{id:"faqs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),o("h3",{attrs:{id:"how-to-return-all-the-messages-with-a-particular-label"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-return-all-the-messages-with-a-particular-label"}},[e._v("#")]),e._v(" How to return all the messages with a particular label?")]),e._v(" "),o("p",[e._v("To return all the messages with a particular label, follow the steps mentioned below.")]),e._v(" "),o("ol",[o("li",[e._v("Select 'Message' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Get All' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("If you want to all return all the messages with a particular, toggle "),o("em",[o("strong",[e._v("Return All")])]),e._v(" to "),o("code",[e._v("true")]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" and select 'Query'.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("label:LABEL_NAME")]),e._v(" in the "),o("em",[o("strong",[e._v("Query")])]),e._v(" field. Replace "),o("code",[e._v("LABEL_NAME")]),e._v(" with your label name.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("Refer to "),o("a",{attrs:{href:"https://support.google.com/mail/answer/7190?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Search operators you can use with Gmail"),o("OutboundLink")],1),e._v(" to learn more about filtering your search results.")]),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/supercharging-your-conference-registration-process-with-n8n-2831cdff37f9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supercharging your conference registration process with n8n 🎫"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=l.exports},704:function(e,t,a){e.exports=a.p+"assets/img/workflow.f62f6be0.png"},705:function(e,t,a){e.exports=a.p+"assets/img/Gmail_node.128dd39f.png"},706:function(e,t,a){e.exports=a.p+"assets/img/Gmail1_node.d27e3fe5.png"},707:function(e,t,a){e.exports=a.p+"assets/img/Gmail2_node.f6fd8cb7.png"}}]);