(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1398:function(e,o,t){"use strict";t.r(o);var n=t(25),r=Object(n.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"google-cloud-firestore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-firestore"}},[e._v("#")]),e._v(" Google Cloud Firestore")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://firebase.google.com/docs/firestore/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Firestore"),n("OutboundLink")],1),e._v(" is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. It keeps your data in-sync across client apps through real-time listeners and offers offline support for mobile and web.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Document")]),e._v(" "),n("ul",[n("li",[e._v("Create a document")]),e._v(" "),n("li",[e._v("Create/Update a document")]),e._v(" "),n("li",[e._v("Delete a document")]),e._v(" "),n("li",[e._v("Get a document")]),e._v(" "),n("li",[e._v("Get all documents from a collection")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Collection")]),e._v(" "),n("ul",[n("li",[e._v("Get all root collections")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get a document in the Google Cloud Firestore. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/839",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Google Cloud Firestore")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(712),alt:"A workflow with the Google Cloud Firestore node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to set the name and id.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("1")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that node sets the value for name and id.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(713),alt:"Using the Set node to set the data"}})]),e._v(" "),n("h3",{attrs:{id:"_3-google-cloud-firestore-node-document-create"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-google-cloud-firestore-node-document-create"}},[e._v("#")]),e._v(" 3. Google Cloud Firestore node (document: create)")]),e._v(" "),n("p",[e._v("This node will create a new document in a collection in Google Cloud Firestore with the data from the previous node.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Google Cloud Firestore node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a project from the "),n("em",[n("strong",[e._v("Project ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the name of your collection in the "),n("em",[n("strong",[e._v("Collection")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id, name")]),e._v(" in the "),n("em",[n("strong",[e._v("Columns / attributes")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new document using the data from the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(714),alt:"Using the Google Cloud Firestore node to create new document"}})]),e._v(" "),n("h3",{attrs:{id:"_4-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-node"}},[e._v("#")]),e._v(" 4. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set a new value for "),n("code",[e._v("name")]),e._v(".")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("nodemation")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("document_id")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Cloud Firestore > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Google Cloud Firestore"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sets the values of "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("document_id")]),e._v(". These values are passed to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(715),alt:"Using the Set node to set the values for name and document_id"}})]),e._v(" "),n("h3",{attrs:{id:"_5-google-cloud-firestore1-node-document-upsert"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-google-cloud-firestore1-node-document-upsert"}},[e._v("#")]),e._v(" 5. Google Cloud Firestore1 node (document: upsert)")]),e._v(" "),n("p",[e._v("This node will update the value of the "),n("code",[e._v("name")]),e._v(" field in the document that we created using the Google Cloud Firestore node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Google Cloud Firestore node.")]),e._v(" "),n("li",[e._v("Select 'Create/Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Project ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Cloud Firestore > Parameters > projectId. You can also add the following expression: "),n("code",[e._v('{{$node["Google Cloud Firestore"].parameter["projectId"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Collection")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Cloud Firestore > Parameters > collection. You can also add the following expression: "),n("code",[e._v('{{$node["Google Cloud Firestore"].parameter["collection"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("document_id")]),e._v(" in the "),n("em",[n("strong",[e._v("Update Key")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Column /Attributes")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the value of the "),n("code",[e._v("name")]),e._v(" field in the document that we created using the Google Cloud Firestore node.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(716),alt:"Using the Google Cloud Firestore node to update a document"}})]),e._v(" "),n("h3",{attrs:{id:"_6-google-cloud-firestore-node-document-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-google-cloud-firestore-node-document-get"}},[e._v("#")]),e._v(" 6. Google Cloud Firestore node (document: get)")]),e._v(" "),n("p",[e._v("This node will get the document that we created using the Google Cloud Firestore node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Project ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Cloud Firestore > Parameters > projectId. You can also add the following expression: "),n("code",[e._v('{{$node["Google Cloud Firestore"].parameter["projectId"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Collection")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Cloud Firestore > Parameters > collection. You can also add the following expression: "),n("code",[e._v('{{$node["Google Cloud Firestore"].parameter["collection"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Document ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Set1 > Output Data > JSON > document_id. You can also add the following expression: "),n("code",[e._v('{{$node["Set1"].json["document_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the document that we created using the Google Cloud Firestore node.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(717),alt:"Using the Google Cloud Firestore node to get a document"}})])])}),[],!1,null,null,null);o.default=r.exports},712:function(e,o,t){e.exports=t.p+"assets/img/workflow.d841c779.png"},713:function(e,o,t){e.exports=t.p+"assets/img/Set_node.48bc5274.png"},714:function(e,o,t){e.exports=t.p+"assets/img/GoogleCloudFirestore_node.b0fbb383.png"},715:function(e,o,t){e.exports=t.p+"assets/img/Set1_node.88777084.png"},716:function(e,o,t){e.exports=t.p+"assets/img/GoogleCloudFirestore1_node.3b9b3a35.png"},717:function(e,o,t){e.exports=t.p+"assets/img/GoogleCloudFirestore2_node.c78a2905.png"}}]);