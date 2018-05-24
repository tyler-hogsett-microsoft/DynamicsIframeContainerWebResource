# IFrame Container Web Resource

## Usage

This web resource requires a JSON object as a data parameter. The JSON object should be formatted as follows:

```JSON
{
  "iframeSrc": "<uri>",
  "messageReceiver": "<web resource path>"
}
```

- **iframeSrc:** _(required)_ URL to the page that should be displayed in the IFrame.
- **messageReceiver:** _(optional)_ Unique Name of a javascript web resource to include on the page _containing_ the IFrame.

_example\_message\_receiver.js_
```javascript
window.addEventListener("message", receiveMessage);
function receiveMessage(event) {
  alert(["Message Received! Data: ", event.data].join(""));
}
```

### Built-In Message Receivers

#### open\_entity\_form

**Path:** ths\_/pages/standalone/iframe\_container/message\_receivers/open\_entity\_form.js

**Expected Message Format:**
```JSON
{
  "entityName": "<entity logical name>",
  "id": "<entity id>",
  "parameters": {
    "<field name 1>": <value>,
    "<field name 2>": <value>,
  },
  "windowOptions": {
    "openInNewWindow": <true or false>
  }
}
```

**Behavior:** Calls `Xrm.Utility.openEntityForm`, as described [here](https://msdn.microsoft.com/en-us/library/jj602956.aspx#BKMK_OpenEntityForm).

### Example: Site Map

Let's suppose we wanted to include an IFrame in the Site Map to an external site which uses the `open_entity_form`. Then our JSON data parameter would be formatted as follows:

```JSON
{
  "iframeSrc": "https://my.external.domain.com/searchWebApp/search.aspx",
  "messageReceiver": "ths_/pages/standalone/iframe_container/message_receiver/open_entity_form.js"
}
```

Then to include the Web Resource in our Site Map, we would add a SubArea to our Site Map as follows:

```xml
<SubArea Id="nav_search" PassParams="1" Url="$webresource:ths_/pages/standalone/iframe_container/iframe_container.html?data=%7B%22iframeSrc%22%3A%22https%3A%2F%2Fmy.external.domain.com%2FsearchWebApp%2Fsearch.aspx%22%2C%22messageReceiver%22%3A%22ths_%2Fpages%2Fstandalone%2Fiframe_container%2Fmessage_receivers%2Fopen_entity_form.js%22%7D">
  <Titles>
    <Title LCID="1033" Title="Customer Search" />
  </Titles>
</SubArea>
```

Note that in order for CRM to accept the customizations.xml file, the data must be encoded into a valid URI component.

###### Disclaimer

This Sample Code is provided for the purpose of illustration only and is not intended to be used in a production environment.

THIS SAMPLE CODE AND ANY RELATED INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.

We grant You a nonexclusive, royalty-free right to use and modify the Sample Code and to reproduce and distribute the object code form of the Sample Code, provided that You agree: (i) to not use Our name, logo, or trademarks to market Your software product in which the Sample Code is embedded; (ii) to include a valid copyright notice on Your software product in which the Sample Code is embedded; and (iii) to indemnify, hold harmless, and defend Us and Our suppliers from and against any claims or lawsuits, including attorneys’ fees, that arise or result from the use or distribution of the Sample Code. This Sample Code is provided for the purpose of illustration only and is not intended to be used in a production environment.