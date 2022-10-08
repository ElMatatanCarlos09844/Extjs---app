/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'app.Application',

    name: 'app',

    requires: [
        // This will automatically load all classes in the app namespace
        // so that application classes do not need to require each other.
        // 'app.view.common.ModalWindow',
        'app.view.common.WindowStatusBar',
        'app.view.common.WindowForm',

        'app.view.main.Main',

        'app.view.login.WindowLogin',
        'app.view.login.WindowLoginController',

        'app.view.clientes.PanelClientesController',
        'app.view.clientes.PanelClientes',
        'app.view.clientes.form.FormCliente',
        'app.view.clientes.form.ComboClientes',
        'app.view.clientes.GridClientes',
        'app.store.clientes.StoreClientes',
        'app.model.clientes.ClienteModel',

        'app.view.canciones.PanelCanciones',
        'app.view.canciones.PanelCancionesController',
        'app.view.canciones.form.FormCanciones',
        'app.view.canciones.form.ComboCanciones',
        'app.view.canciones.GridCanciones',
        'app.store.canciones.StoreCanciones',
        'app.model.canciones.CancionesModel',

        'app.view.canciones.form.FormBuscadorCanciones'
    ],

    // The name of the initial view to create.
    mainView: 'app.view.main.Main'
});
