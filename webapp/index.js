sap.ui.require(
    [
        "sap/m/Text",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/mvc/XMLView",
        "sap/ui/model/BindingMode"
    ],
    function (Text, JSONModel, XMLView, BindingMode) {
        // Anexa uma função anônima ao evento SAPUI5 'init'
        sap.ui.getCore().attachInit(
            function () {
                // Cria um modelo JSON a partir de um objeto literal
                var oModel = new JSONModel(
                    {
                        firstName: "Obiwan",
                        lastName: "Kenobi",
                        enabled: true,
                        panelHeaderText: "Data Biunding Basics"
                    }
                );
                
                oModel.setDefaultBindingMode(BindingMode.OneWay);

                // Atribui o objeto modelo ao núcleo SAPUI5
                sap.ui.getCore().setModel(oModel);

                // Display the XML view called "App"
                new XMLView({
                    viewName: "sap.ui.demo.db.view.App"
                }).placeAt("content");
            }
        )
    }
)
