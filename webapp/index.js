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
                        greetingText:"Olá. meu nome é ... SAP UI5"
                    }
                );

                // Atribui o objeto modelo ao núcleo SAPUI5
                sap.ui.getCore().setModel(oModel);

                // Exibir um elemento de texto cujo texto é derivado
                // do objeto modelo
                new Text({
                    text: "{/greetingText}"
                }).placeAt("content");
            }
        )
    }
)
