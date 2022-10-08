Ext.define('app.view.login.WindowLogin',{
    extend: 'Ext.window.Window',
    controller: 'windowlogincontroller',
    title: 'Bienvenido usuario',
    width: 300,
    height: 190,
    draggable: false,
    closable: false,
    modal: true,
    buttonAling: 'center',

    items: [{
        xtype: 'form',
        bodyPadding: 10,

        reference:'loginForm',

        defaults: {
            xtype: 'textfield',
            allowBlank: false,
        },
        items: [
            {
                fieldLabel: 'User',
                emptyText: 'user',
                name: 'user',
                vtype: 'email',
                value: 'example@domain.com'
            },{
                fieldLabel: 'Password',
                emptyText: 'password',
                name: 'password',
                inputType: 'password',
                value: 'pass'
            }
        ]
    }],

    buttons:[{
        iconCls: 'x-fa fa-user',
        text: 'Ingresar',
        handler: 'closeLoginWindow'
    }] 
});