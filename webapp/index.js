sap.ui.require(
    [
        "sap/m/Text",
        "sap/ui/model/json/JSONModel"
    ],
    function (Text, JSONModel) {
        // Anexa uma função anônima ao evento SAPUI5 'init'
        sap.ui.getCore().attachInit(
            function () {
                // Cria um modelo JSON a partir de um objeto literal
                var oModel = new JSONModel(
                    {
                        greetingText:"Hi. My name is ... SAP UI5"
                    }
                );

                // Atribui o objeto modelo ao núcleo SAPUI5
                sap.ui.getCore().setModel(oModel);

                // Cria um elemento de UI de texto que exibe uma string de texto codificada
                new Text({
                    text: "Ola mundo! Sou uma aplição SAP UI5"
                }).placeAt("content");
            }
        )
    }
)
