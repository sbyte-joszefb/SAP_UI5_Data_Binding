![This is an image](https://camo.githubusercontent.com/79cc251c5c489cb14c432e4861bec5c9e679e925c975f3625ab1e64984bf90ff/68747470733a2f2f6f70656e7569352e6f72672f696d616765732f4f70656e5549355f6e65775f6269675f736964652e706e67)
# SAP UI5 Data Binding

Configurar o projeto

Primeiro no console rode o comando:
```
npm init --yes
```

Para criar o arquivo package.json.

Depois deve-se criar a pasta webapp e em seguida rode o comando:
```
ui5 init
```
Crie o arquivo manifest.json, o seu conteudo copie do seguinte link: [clique aqui](https://github.com/brandoncaulfield/sap-ui5-data-binding/blob/02ab308b47136426b434b405cd8d0bdcf1d3c811/webapp/manifest.json)

E por ultimo para terminar a configuração do projeto rode o comando:
```
ui5 use sapui5@latest
```
Para iniciar o servidor via terminal execute o comando:
```
ui5 serve
```

**Observação** para se rodar os comandos de ui5 acima no Windowa e imprimir o seguinte erro:
```
ui5 : The term 'ui5' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or 
if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ ui5 --help
+ ~~~
    + CategoryInfo          : ObjectNotFound: (ui5:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```
Deve-se rodar os comandos com o npx antes:
```
npx ui5 init
```
```
npx ui5 use sapui5@latest
```
```
npx ui5 serve
```
