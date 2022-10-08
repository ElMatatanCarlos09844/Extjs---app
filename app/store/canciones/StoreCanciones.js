Ext.define('app.store.canciones.StoreCanciones',{
    extend:'Ext.data.Store',

    model: 'app.model.canciones.CancionesModel',

    proxy: {
        type: 'ajax',
        url: 'server/listsongs.json',

        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty: "numFilas"
        }
    }
})