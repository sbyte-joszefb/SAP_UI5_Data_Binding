sap.ui.require(
    [
        "sap/m/Text"
    ],
    function (Text) {
        // Anexa uma função anônima ao evento SAPUI5 'init'
        sap.ui.getCore().attachInit(
                function () {
                // Cria um elemento de UI de texto que exibe uma string de texto codificada
                new Text({
                    text: "Ola mundo! Sou uma aplição SAP UI5"
                }).placeAt("content");
            }
        )
    }
)
