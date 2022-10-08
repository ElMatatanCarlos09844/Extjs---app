Ext.define('app.view.clientes.form.FormCliente', {
    extend: 'Ext.form.Panel',
    bodyPadding: 10,
    xtype: 'formcliente',
    layout: 'anchor',

    initComponent: function() {
        Ext.apply(this, {
            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 100
            },
            fieldDefaults: {
                labelAling: 'right',
                labelWidth: 110,
                msgTarget: 'under',
                anchor: '100%',
                allowBlank: false, //obligatorio
            },
            defaultType: 'textfield',
            


            items: [{
                fieldLabel: '* Nombre',
                empyText: 'Este campo es obligatorio',
                name: 'txt_nombre'
            },{
                fieldLabel: '* Correo',
                vtype: 'email',
                empyText: 'ejemplo@dir.dom',
                name: 'txt_correo'
            },{
                xtype: 'displayfield',
                fieldLabel: 'Apodo',
                name: 'home_score',
                value: 'Por asignar...'
            },{
                xtype: 'numberfield',
                fieldLabel: 'Edad',
                maxValue: 99,
                minValue: 1,
                allowDecimals: false,
                name: 'txt_edad'
            },{
                xtype: 'datefield',
                fieldLabel: 'Fecha de nacimiento',
                maxValue: new Date(),
                fortmat: 'd-m-Y',
                allowBlank: true,
                name: 'txt_fechanacimiento'
            },{
                xtype: 'radiogroup',
                fieldLabel: 'Género',
                vertical: true,
                items: [{
                    boxLabel: 'Hombre', name: 'txt_genero', inputValue: '1'
                },{
                    boxLabel: 'Mujer', name: 'txt_genero', inputValue: '2', checked: true
                }]
            },{
                xtype: 'checkboxgroup',
                fieldLabel: 'Idiomas',
                columns: 2,
                vertical: true,
                items: [
                    {boxLabel: 'Francés', name: 'txt_idioma', inputValue:'1'},
                    {boxLabel: 'Portugués', name: 'txt_idioma', inputValue:'2', checked: true},
                    {boxLabel: 'Alemán', name: 'txt_idioma', inputValue:'3'},
                    {boxLabel: 'Inglés', name: 'txt_idioma', inputValue:'4'}
                ]
            }],

        });

        

        this.callParent();
        //para no sobreeescribir
    },

    doSubmit : function (){
        this.getForm().submit({
            url: 'server/doformpost.json',
            success: function (form, result) {
                console.info(result);
            },
            failure: function (form, result) {
                console.info(result);
            }
        });
    },

    doLoad: function () {
        this.getForm().load({
            url: 'server/doformload.json',
            success: function (form, response){
                console.info(response.result);
            }
        });
    }

})