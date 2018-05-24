/*================================================================================================================================

  This Sample Code is provided for the purpose of illustration only and is not intended to be used in a production environment.  

  THIS SAMPLE CODE AND ANY RELATED INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, 
  INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.  

  We grant You a nonexclusive, royalty-free right to use and modify the Sample Code and to reproduce and distribute the object 
  code form of the Sample Code, provided that You agree: (i) to not use Our name, logo, or trademarks to market Your software 
  product in which the Sample Code is embedded; (ii) to include a valid copyright notice on Your software product in which the 
  Sample Code is embedded; and (iii) to indemnify, hold harmless, and defend Us and Our suppliers from and against any claims 
  or lawsuits, including attorneys’ fees, that arise or result from the use or distribution of the Sample Code.

=================================================================================================================================*/

window.iframeContainer = (function () {
    var PARAMETERS = {
        IFRAME_SOURCE: "iframeSrc",
        MESSAGE_RECEIVER: "messageReceiver"
    };

    function onLoad() {
        var parameters = getParameters();
        requireParameter(parameters, PARAMETERS.IFRAME_SOURCE);

        includeMessageReceiver(parameters);

        setIframeSource(parameters);
    }

    function getParameters() {
        return JSON.parse(decodeURIComponent(getDataParameter()));
    }

    function getDataParameter() {
        if (location.search == "") {
            return null;
        }

        var urlParameterStrings = location.search.substr(1).split("&");
        for(var i = 0; i < urlParameterStrings.length; i++)
        {
            var parameterParts = urlParameterStrings[i].replace(/\+/g, " ").split("=");
            if(parameterParts[0].toLowerCase() == "data")
            {
                return parameterParts[1];
            }
        }
        return null;
    }

    function requireParameter(parameters, parameterName) {
        if (parameters == null || parameters[parameterName] == null)
        {
            throw Error(["Missing required parameter: \"", parameterName, "\"."].join(""));
        }
    }

    function includeMessageReceiver(parameters)
    {
        if (parameters[PARAMETERS.MESSAGE_RECEIVER] == null) {
            return;
        }

        includeScript(parameters[PARAMETERS.MESSAGE_RECEIVER]);
    }

    function includeScript(source) {
        var head = document.getElementsByTagName("head")[0];
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.src = ["../../../../", source].join("");
        head.appendChild(scriptTag);
    }

    function setIframeSource(parameters)
    {
        var iframe = getIframe();
        iframe.src = parameters[PARAMETERS.IFRAME_SOURCE];
    }

    function getIframe() {
        return document.getElementById("iframe");
    }

    return {
        onLoad: onLoad
    };
}());