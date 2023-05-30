sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/library",
        "sap/ui/core/Locale",
        "sap/ui/core/LocaleData",
        "sap/ui/model/type/Currency",
        "sap/m/ObjectAttribute"
    ],
    function (Controller, mobileLibrary, Locale, LocaleData, Currency, ObjectAttribute) {
        "use strict"

        return Controller.extend("sap.ui.demo.db.controller.App",
            {
                formatMail: function(sFirstName, sLastName) {
                    var oBundle = this.getView().getModel("i18n").getResourceBundle();
                    return mobileLibrary.URLHelper.normalizeEmail(
                        sFirstName + "." + sLastName + "@example.com",
                        oBundle.getText("mailSubject", [sFirstName]),
                        oBundle.getText("mailBody")
                    );
                },
                formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
                    var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
                    var oLocale = new Locale(sBrowserLocale);
                    var oLocaleData= new LocaleData(oLocale);
                    var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
                    return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
                },
                onItemSelected: function(oEvent) {
                    var oSelectedItem = oEvent.getSource();
                    var oContext = oSelectedItem.getBindingContext("products");
                    var sPath = oContext.getPath();
                    var oProductDetailPanel = this.byId("productDetailsPanel");
                    oProductDetailPanel.bindElement({ path: sPath, model: "products"});
                },
                productListFactory: function(sId, oContext) {
                    var oUIControl;
        
                    // Decide com base nos dados que dependem para clonar
                    if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
                        // O item foi descontinuado, então use um StandardListItem
                        oUIControl = this.byId("productSimple").clone(sId);
                    } else {
                        // O item está disponível, então vamos criar um ObjectListItem
                        oUIControl = this.byId("productExtended").clone(sId);
        
                        // o item está temporariamente fora de estoque, então adicionaremos um status
                        if (oContext.getProperty("UnitsInStock") < 1) {
                            oUIControl.addAttribute(new ObjectAttribute({
                                text : {
                                    path: "i18n>outOfStock"
                                }
                            }))
                        }
                    }
        
                    return oUIControl;
                }
            }
        )
    }
)
