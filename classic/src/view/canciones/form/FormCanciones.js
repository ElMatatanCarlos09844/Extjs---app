Ext.define('app.view.canciones.form.FormCanciones', {
    extend: 'Ext.form.Panel',
    bodyPadding: 10,
    xtype: 'formcanciones',
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
                name: 'Title'
            },{
                fieldLabel: '* Artista',
                empyText: '* Nombre del artista',
                name: 'Artist'
            },{
                fieldLabel: '* Album',
                empyText: 'Album del artista',
                name: 'AlbumArtist'
            },{
                fieldLabel: 'Genero',
                empyText: 'Genero musical',
                name: 'Genre'
            },{
                xtype: 'numberfield',
                fieldLabel: 'Año de lanzamiento',
                minValue: 1900,
                allowDecimals: false,
                name: 'Year_Released'
            }],

        });

        this.callParent();
        //para no sobreeescribir
    },

    doSubmit : function (){
        this.getForm().submit({
            url: 'server/doformsongspost.json',
            success: function (form, result) {
                console.info("Submit de canciones",result.result);
            },
            failure: function (form, result) {
                console.info(result);
            }
        });
    },

    doLoad: function () {
        this.getForm().load({
            url: 'server/doformsongsload.json',
            success: function (form, response){
                console.info("Load de canciones",response.result);
            }
        });
    }

})