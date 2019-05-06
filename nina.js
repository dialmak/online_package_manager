var i;
var webix;
var menu;
var myTree1;
var myTree2;
var myTree3;
var myTree4;
var myTree5;
var myTree6;


function about() {
    webix.alert({
        border: true,
        text: "by dialmak"
    });
}


function enableCheck(tree, id) {
    tree.checkItem(id);
}

function disableCheck(tree, id) {
    tree.uncheckItem(id);
}

function cleanCheck() {
    disableCheck(myTree1, 'bro');
    disableCheck(myTree1, 'sha');
    disableCheck(myTree1, 'oth');
    disableCheck(myTree1, 'ext');
    disableCheck(myTree2, 'med');
    disableCheck(myTree2, 'sec');
    disableCheck(myTree3, 'uti');
    disableCheck(myTree3, 'too');
    disableCheck(myTree4, 'run');
    disableCheck(myTree5, 'com');
    disableCheck(myTree5, 'ima');
    disableCheck(myTree5, 'sto');
    disableCheck(myTree6, 'doc');
    disableCheck(myTree6, 'mes');

    webix.message({
        text: "All clean.",
        type: "info",
        expire: 2000,
    });

}


function save_state() {
    webix.storage.local.put("state1", myTree1.getChecked());
    webix.storage.local.put("state2", myTree2.getChecked());
    webix.storage.local.put("state3", myTree3.getChecked());
    webix.storage.local.put("state4", myTree4.getChecked());
    webix.storage.local.put("state5", myTree5.getChecked());
    webix.storage.local.put("state6", myTree6.getChecked());

    webix.message({
        text: "The state is saved.",
        type: "info",
        expire: 2000,
    });
}

function restore_state() {
    var state1 = webix.storage.local.get("state1");
    var state2 = webix.storage.local.get("state2");
    var state3 = webix.storage.local.get("state3");
    var state4 = webix.storage.local.get("state4");
    var state5 = webix.storage.local.get("state5");
    var state6 = webix.storage.local.get("state6");
    if (state1) {
        for (i = 0; i < state1.length; i++) {
            enableCheck(myTree1, state1[i]);
        }
    }
    if (state2) {
        for (i = 0; i < state2.length; i++) {
            enableCheck(myTree2, state2[i]);
        }
    }
    if (state3) {
        for (i = 0; i < state3.length; i++) {
            enableCheck(myTree3, state3[i]);
        }
    }
    if (state4) {
        for (i = 0; i < state4.length; i++) {
            enableCheck(myTree4, state4[i]);
        }
    }
    if (state5) {
        for (i = 0; i < state5.length; i++) {
            enableCheck(myTree5, state5[i]);
        }
    }
    if (state6) {
        for (i = 0; i < state6.length; i++) {
            enableCheck(myTree6, state6[i]);
        }
    }

    webix.message({
        text: "The state is restored.",
        type: "info",
        expire: 2000,
    });

}

function getURL() {
    var myURL = "";
    var myChecked1 = [];
    var myChecked2 = [];
    var myChecked3 = [];
    var myChecked4 = [];
    var myChecked5 = [];
    var myChecked6 = [];


    if ($$("idTree1").getChecked().length !== 0) {
        myChecked1 = myChecked1.concat($$("idTree1").getChecked());
    }

    for (i = 0; i < myChecked1.length; i++) {
        if (!!$$("idTree1").getItem(myChecked1[i]).url) {
            myURL = myURL + $$("idTree1").getItem(myChecked1[i]).url + "-";
        }
    }
    if ($$("idTree2").getChecked().length !== 0) {
        myChecked2 = myChecked2.concat($$("idTree2").getChecked());
    }

    for (i = 0; i < myChecked2.length; i++) {
        if (!!$$("idTree2").getItem(myChecked2[i]).url) {
            myURL = myURL + $$("idTree2").getItem(myChecked2[i]).url + "-";
        }
    }


    if ($$("idTree3").getChecked().length !== 0) {
        myChecked3 = myChecked3.concat($$("idTree3").getChecked());
    }

    for (i = 0; i < myChecked3.length; i++) {
        if (!!$$("idTree3").getItem(myChecked3[i]).url) {
            myURL = myURL + $$("idTree3").getItem(myChecked3[i]).url + "-";
        }
    }

    if ($$("idTree4").getChecked().length !== 0) {
        myChecked4 = myChecked4.concat($$("idTree4").getChecked());
    }

    for (i = 0; i < myChecked4.length; i++) {
        if (!!$$("idTree4").getItem(myChecked4[i]).url) {
            myURL = myURL + $$("idTree4").getItem(myChecked4[i]).url + "-";
        }
    }

    if ($$("idTree5").getChecked().length !== 0) {
        myChecked5 = myChecked5.concat($$("idTree5").getChecked());
    }

    for (i = 0; i < myChecked5.length; i++) {

        if (!!$$("idTree5").getItem(myChecked5[i]).url) {
            myURL = myURL + $$("idTree5").getItem(myChecked5[i]).url + "-";
        }
    }


    if ($$("idTree6").getChecked().length !== 0) {
        myChecked6 = myChecked6.concat($$("idTree6").getChecked());
    }

    for (i = 0; i < myChecked6.length; i++) {
        if (!!$$("idTree6").getItem(myChecked6[i]).url) {
            myURL = myURL + $$("idTree6").getItem(myChecked6[i]).url + "-";
        }
    }

    if (myURL.length > 0) {
        myURL = myURL.substring(0, (myURL.length - 1));
        myURL = "https://ninite.com/" + myURL + "/";

        webix.alert({
            text: "<a href=" + myURL + " target='_blank'>" + myURL + "</a>",
            type: "alert-error"
        });

    } else {
        webix.message({
            text: "Nothing is selected!",
            type: "debug",
            expire: 2000,
        });
    }
}


webix.ready(function() {
    myTree1 = webix.ui({
        css: "my_css",
        container: "col1",
        view: "tree",
        id: "idTree1",
        template: "{common.icon()} {common.checkbox()} {common.folder()} <div class='my_tree'>#title#</div>",
        threeState: true,
        tooltip: {
            template: "<div class='my_tooltip'>#desc#</div>"
        },
        data: webix.copy(browsers),
        ready: function() {
            //this.openAll();
            //this.checkItem("5");
        }


    });

    myTree2 = webix.ui({
        css: "my_css",
        container: "col2",
        view: "tree",
        id: "idTree2",
        template: "{common.icon()} {common.checkbox()} {common.folder()} <div class='my_tree'>#title#</div>",
        threeState: true,
        tooltip: {
            template: "<div class='my_tooltip'>#desc#</div>"
        },
        data: webix.copy(media),
        ready: function() {
            //this.openAll();
            //this.checkItem("5");
        }
    });

    myTree3 = webix.ui({
        css: "my_css",
        container: "col3",
        view: "tree",
        id: "idTree3",
        template: "{common.icon()} {common.checkbox()} {common.folder()} <div class='my_tree'>#title#</div>",
        threeState: true,
        tooltip: {
            template: "<div class='my_tooltip'>#desc#</div>"
        },
        data: webix.copy(utilities),
        ready: function() {
            //this.openAll();
            //this.checkItem("5");
        }
    });


    myTree4 = webix.ui({
        css: "my_css",
        container: "col4",
        view: "tree",
        id: "idTree4",
        template: "{common.icon()} {common.checkbox()} {common.folder()} <div class='my_tree'>#title#</div>",
        threeState: true,
        tooltip: {
            template: "<div class='my_tooltip'>#desc#</div>"
        },
        data: webix.copy(runtimes),
        ready: function() {
            //this.openAll();
            //this.checkItem("5");
        }
    });

    myTree5 = webix.ui({
        css: "my_css",
        container: "col5",
        view: "tree",
        id: "idTree5",
        template: "{common.icon()} {common.checkbox()} {common.folder()} <div class='my_tree'>#title#</div>",
        threeState: true,
        tooltip: {
            template: "<div class='my_tooltip'>#desc#</div>"
        },
        data: webix.copy(compression),
        ready: function() {
            //this.openAll();
            //this.checkItem("5");
        }
    });

    myTree6 = webix.ui({
        css: "my_css",
        container: "col6",
        view: "tree",
        id: "idTree6",
        template: "{common.icon()} {common.checkbox()} {common.folder()} <div class='my_tree'>#title#</div>",
        threeState: true,
        tooltip: {
            template: "<div class='my_tooltip'>#desc#</div>"
        },
        data: webix.copy(documents),
        ready: function() {
            //this.openAll();
            //this.checkItem("5");
        }
    });



    menu = webix.ui({
        container: "my_next",

        view: "menu",
        css: "my_menu",
        autowidth: true,
        data: [{
                id: "301",
                value: "Go",
            },
            {
                id: "302",
                value: "State",
                submenu: ["Save state", "Restore state", "Clean"]
            },
            {
                id: "303",
                value: "About",
            }
        ],

        on: {
            onMenuItemClick: function(id) {
                if (this.getMenuItem(id).value == "Go") {
                    getURL();
                }
                if (this.getMenuItem(id).value == "Save state") {
                    save_state();
                }
                if (this.getMenuItem(id).value == "Restore state") {
                    restore_state();
                }
                if (this.getMenuItem(id).value == "Clean") {
                    cleanCheck();
                }
                if (this.getMenuItem(id).value == "About") {
                    about();
                }
            }
        },

        type: {
            subsign: true
        }
    });

});
