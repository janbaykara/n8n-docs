(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1591:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"cli-commands-for-n8n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands-for-n8n"}},[a._v("#")]),a._v(" CLI commands for n8n")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#start-a-workflow"}},[a._v("Start a workflow")])]),s("li",[s("a",{attrs:{href:"#change-the-active-status-of-a-workflow"}},[a._v("Change the active status of a workflow")])]),s("li",[s("a",{attrs:{href:"#export-workflows-and-credentials"}},[a._v("Export workflows and credentials")]),s("ul",[s("li",[s("a",{attrs:{href:"#workflows"}},[a._v("Workflows")])]),s("li",[s("a",{attrs:{href:"#credentials"}},[a._v("Credentials")])])])]),s("li",[s("a",{attrs:{href:"#import-workflows-and-credentials"}},[a._v("Import workflows and credentials")]),s("ul",[s("li",[s("a",{attrs:{href:"#workflows"}},[a._v("Workflows")])]),s("li",[s("a",{attrs:{href:"#credentials"}},[a._v("Credentials")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"start-a-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-a-workflow"}},[a._v("#")]),a._v(" Start a workflow")]),a._v(" "),s("p",[a._v("Workflows can not only be started by triggers, webhooks, or manually via the Editor. It is also possible to start them directly via the CLI.")]),a._v(" "),s("p",[a._v("Execute a saved workflow by its ID:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n execute --id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Execute a workflow from a workflow file:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n execute --file "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("WORKFLOW_FILE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"change-the-active-status-of-a-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-the-active-status-of-a-workflow"}},[a._v("#")]),a._v(" Change the active status of a workflow")]),a._v(" "),s("p",[a._v("You can change the active status of a workflow via the CLI.")]),a._v(" "),s("p",[a._v("Set the active status of a workflow by its ID to false:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n update:workflow --id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --active"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Set the active status of a workflow by its ID to true:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n update:workflow --id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --active"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),s("p",[a._v("Set the active status to false for all the workflows:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n update:workflow --all --active"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Set the active status to true for all the workflows:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n update:workflow --all --active"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),s("h2",{attrs:{id:"export-workflows-and-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-workflows-and-credentials"}},[a._v("#")]),a._v(" Export workflows and credentials")]),a._v(" "),s("p",[a._v("You can export your workflows and credentials from n8n via the CLI.")]),a._v(" "),s("p",[a._v("There are a couple of flags available for this.")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Flag")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("--help")]),a._v(" "),s("td",[a._v("Help prompt.")])]),a._v(" "),s("tr",[s("td",[a._v("--all")]),a._v(" "),s("td",[a._v("Export all workflows/credentials.")])]),a._v(" "),s("tr",[s("td",[a._v("--backup")]),a._v(" "),s("td",[a._v("Sets --all --pretty --separate for simple backups. Only --output has to be set additionally.")])]),a._v(" "),s("tr",[s("td",[a._v("--id")]),a._v(" "),s("td",[a._v("The ID of the workflow to export.")])]),a._v(" "),s("tr",[s("td",[a._v("--output")]),a._v(" "),s("td",[a._v("Output file name or directory if using separate files.")])]),a._v(" "),s("tr",[s("td",[a._v("--pretty")]),a._v(" "),s("td",[a._v("Format the output in an easier to read fashion.")])]),a._v(" "),s("tr",[s("td",[a._v("--separate")]),a._v(" "),s("td",[a._v("Exports one file per workflow (useful for versioning). Must inform a directory via --output.")])])])]),a._v(" "),s("h3",{attrs:{id:"workflows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workflows"}},[a._v("#")]),a._v(" Workflows")]),a._v(" "),s("p",[a._v("Export all your workflows to the standard output (terminal):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:workflow --all\n")])])]),s("p",[a._v("Export a workflow by its ID and specify the output file name:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:workflow --id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file.json\n")])])]),s("p",[a._v("Export all workflows to a specific directory in a single file:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:workflow --all --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("backups/latest/\n")])])]),s("p",[a._v("Export all the workflows to a specific directory using the "),s("code",[a._v("--backup")]),a._v(" flag (details above):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:workflow --backup --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("backups/latest/\n")])])]),s("h3",{attrs:{id:"credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[a._v("#")]),a._v(" Credentials")]),a._v(" "),s("p",[a._v("Export all your credentials to the standard output (terminal):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:credentials --all\n")])])]),s("p",[a._v("Export credentials by their ID and specify the output file name:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:credentials --id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file.json\n")])])]),s("p",[a._v("Export all credentials to a specific directory in a single file:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:credentials --all --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("backups/latest/\n")])])]),s("p",[a._v("Export all the credentials to a specific directory using the "),s("code",[a._v("--backup")]),a._v(" flag (details above):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n export:credentials --backup --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("backups/latest/\n")])])]),s("h2",{attrs:{id:"import-workflows-and-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-workflows-and-credentials"}},[a._v("#")]),a._v(" Import workflows and credentials")]),a._v(" "),s("p",[a._v("You can import your workflows and credentials from n8n via the CLI.")]),a._v(" "),s("p",[a._v("There are a couple of flags available for this.")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Flag")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("--help")]),a._v(" "),s("td",[a._v("Help prompt.")])]),a._v(" "),s("tr",[s("td",[a._v("--input")]),a._v(" "),s("td",[a._v("Input file name or directory if --separate is used.")])]),a._v(" "),s("tr",[s("td",[a._v("--separate")]),a._v(" "),s("td",[a._v("Imports *.json files from directory provided by --input.")])])])]),a._v(" "),s("h3",{attrs:{id:"workflows-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workflows-2"}},[a._v("#")]),a._v(" Workflows")]),a._v(" "),s("p",[a._v("Import workflows from a specific file:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n import:workflow --input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file.json\n")])])]),s("p",[a._v("Import all the workflow files (*.json) from the specified directory:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n import:workflow --separate --input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("backups/latest/\n")])])]),s("h3",{attrs:{id:"credentials-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#credentials-2"}},[a._v("#")]),a._v(" Credentials")]),a._v(" "),s("p",[a._v("Import credentials from a specific file:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n import:credentials --input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file.json\n")])])]),s("p",[a._v("Import all the credentials files (*.json) from the specified directory:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("n8n import:credentials --separate --input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("backups/latest/\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);