Ext.define('app.view.canciones.PanelCanciones', {
    extend: 'Ext.Panel',

    xtype: 'panelcanciones',

    layout: 'border',
    controller: 'panelcancionesctr',
    tbar:[{//topbar
        // Este primer componente es por defecto un boton
        // no es necesario usar el xtype para expecificar que debe ser un botón
        //xtype: 'button',
        text: 'Agregar canciones',
        iconCls: 'x-fa fa-plus',
        handler: 'agregarCanciones'
    },'->',{//flecha que se interpreta: todo lo que encuentre despues de la flecha
        // se pone del lado derecho
        xtype: 'combocanciones',
        emptyText: 'Buscar canciones',
        width: 250//px
    }],

    items: [{
        region: 'center',
        layout:'fit',
        xtype: 'tabpanel',

        items: [{
            title: 'Listado de canciones',
            xtype: 'gridcanciones',
            reference: 'gridlistadocanciones',
            bodyPadding: 10,
            bodyStyle: 'background-color: #777; color:#FFF; font-size: 30px;',

            listeners:{
                itemClick: 'showClienteDetalle'
            }
        },{
            title: 'Buscador de canciones',
            layout:'fit',
            bodyPadding: 10,

            xtype: 'formbuscardordecanciones'

        }],
    },{
        flex: 0.3,//px
        region: 'east',
        bodyStyle: 'background-color:#eee; border: 1px solid black',
        reference:'paneldetalle',
        tpl: 
            '<div style="margin:10px;">'+
                '<div style="float: center; width:100%; ">'+
                    '<img src="resources/img/song.png" style="width:100%;">'+
                '</div>'+
                '<h2>{nombre}</h2>'+
                '<span style="font-size:16px; color:#5fa2dd">{Title}</span><br>'+
                '<span style="font-size:16px;">{Artist}</span><br>'+
                '<span style="font-size:10px;">{AlbumArtist}</span><br>'+
            '</div>',
    }]


});