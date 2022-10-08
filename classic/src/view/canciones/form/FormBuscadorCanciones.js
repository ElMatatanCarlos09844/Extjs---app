
Ext.define('app.view.canciones.form.FormBuscadorCanciones', {
    extend: 'Ext.form.Panel',
    bodyPadding: 10,
    xtype: 'formbuscardordecanciones',
    layout: 'anchor',
    controller: 'panelcancionesctr',
    
    initComponent: function() {

        Ext.apply(this, {
            fieldDefaults: {
                labelAling: 'right',
                labelWidth: 110,
                msgTarget: 'under',
                anchor: '100%',
                allowBlank: false, //obligatorio
            },
            

            items: [{
                reference: 'busqueda',
                xtype:'textfield',maxHeight: 20,
                fieldLabel: '* Title, album or artist',
                empyText: 'Introduce la busqueda',
                name: 'busqueda'
            },{
                xtype: 'panel',
                reference: 'detallebusqueda',
                title: 'Canciones encontradas',
                padding: 5,
                layout: {
                    type: 'column',
                    align: 'start'
                },
                scrollable: true,
                // floatWrapCls: 'x-float-wra',
                ui: 'light',
                flex:0.7
            }],

            buttons: [{
                itemId: 'submit',
                text: 'Submit',
                handler: function(){
                    this.up('formbuscardordecanciones').doSubmit();
                }
            }]

        });

        this.callParent();
        //para no sobreeescribir
    },

    doSubmit : function (){
        //console.log("Se esta haciendo la busqueda");
        console.log(this);
        const form = this.getForm(),
            panel = this;
        if( form.isValid() ){
            const busqueda = form.getValues().busqueda;

            Ext.Ajax.request({
                url:`https://api.lyrics.ovh/suggest/${busqueda}`,
                
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj.data);
                    
                    var panelResultados = panel.lookupReference('detallebusqueda');
                    panelResultados.removeAll(true);

                    if(obj.data.length > 0){
                        obj.data.map((el) =>{
                            var song = Ext.create('Ext.Container',{
    
                                defaults: {
                                    xtype: 'panel',
                                    width: 170,
                                    height: 270,
                                    margin: 10,
                                    cls: Ext.baseCSSPrefix + 'shadow',
                                    autoScroll: true,
                                },
    
                                items:[{
                                    html: 
                                    `<div style="padding:10px;">
                                        <div style="float: center; width:100%; ">
                                            <img src="${el.album.cover}" style="width:100%;">
                                        </div>
                                        <h2>${el.title}</h2>
                                        <span style="font-size:12px; "><b>Artist: </b>${el.artist.name}</span><br>
                                        <span style="font-size:10px;"><b>Album: </b>${el.album.title}</span><br>
                                    </div>`
                                }]
                            });
    
                            panelResultados.add(song);
    
                        }); 
                        panel.add(panelResultados);
                    }else{
                        console.log('No se ecnontraron canciones, ¡Intenta otra vez!')
                        Ext.Msg.alert('Error', 'No se ecnontraron canciones, ¡Intenta otra vez!');
                    }

                },failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });

            // form.method = 'GET';
            // form.submit({
            //     url: `https://api.lyrics.ovh/suggest/${busqueda}`,
            //     success: function (form, result) {
            //         console.info("Submit de canciones",result.result);
            //     },
            //     failure: function (form, result) {
            //         console.info(result);
            //     }
            // });
        }

    }

})