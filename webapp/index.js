sap.ui.require(
    [
        "sap/m/Text",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/mvc/XMLView",
        "sap/ui/model/BindingMode",
        "sap/ui/model/resource/ResourceModel"
    ],
    function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
        // Anexa uma função anônima ao evento SAPUI5 'init'
        sap.ui.getCore().attachInit(
            function () {
                // Cria um modelo JSON a partir de um objeto literal
                var oModel = new JSONModel(
                    {
                        firstName: "Obiwan",
                        lastName: "Kenobi",
                        enabled: true,
                        address: {
                            street: "1 Any Lane",
                            city: "Walldorf",
                            zip: "69190",
                            country: "Germany"
                        },
                        salesAmount: 12345.6789,
                        currencyCode: "EUR",
                        panelHeaderText: "Data Biunding Basics"
                    }
                );
                
                var oResourceModel = new ResourceModel(
                    {
                        bundleName: "sap.ui.demo.db.i18n.i18n",
                        supportedLocales: ["", "de", "pt"],
                        fallbackLocale:"" 
                    }
                )

                sap.ui.getCore().setModel(oResourceModel, "i18n");
                
                // oModel.setDefaultBindingMode(BindingMode.OneWay);

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
