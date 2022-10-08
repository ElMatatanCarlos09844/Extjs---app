Ext.define('app.store.canciones.StoreCancionesBuscadas',{
    extend:'Ext.data.Store',

    model: 'app.model.canciones.CancionesBuscadasModel',

    proxy: {
        type: 'ajax',
        method: 'GET',
        url: 'server/listsongsbuscadas.json',

        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty: "numFilas"
        }
    }
})