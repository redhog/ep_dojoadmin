define([
  "dojo/_base/declare",
  "dijit/layout/AccordionContainer",
  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane",
  "dijit/MenuBar",
  "dijit/DropDownMenu",
  "dijit/MenuItem",
  "dijit/PopupMenuBarItem",
], function (
  declare,
  AccordionContainer,
  BorderContainer,
  ContentPane,
  MenuBar,
  DropDownMenu,
  MenuItem,
  PopupMenuBarItem
) {
  return declare("Ui", [dijit.layout.BorderContainer], {
    'class': 'DojoAdmin',
    liveSplitters: true,
    design: 'headline',
    style: 'padding: 0; margin: 0; left: 0; top: 0; width: 100%; height: 100%; position: absolute;',
    startup: function () {
      var self = this;
      self.inherited(arguments);

      self.main = new ContentPane({
        'class': 'DojoAdminMain',
         region: 'center',
         style: 'border: none; overflow: hidden;'
      });
      self.addChild(self.main);

      self.menu = new MenuBar({region: 'top'});
      self.addChild(self.menu);

      var pSubMenu = new DropDownMenu({});
      pSubMenu.addChild(new MenuItem({
          label: "File item #1"
      }));
      pSubMenu.addChild(new MenuItem({
          label: "File item #2"
      }));
      self.menu.addChild(new PopupMenuBarItem({
          label: "File",
          popup: pSubMenu
      }));

      self.sidebar = new AccordionContainer({
        region: 'right',
        splitter:true
      });

      var infoPane = new ContentPane({
        title: 'Info',
        content:""
      });
      self.sidebar.addChild(infoPane);

      self.addChild(self.sidebar);
    }
  });
});
