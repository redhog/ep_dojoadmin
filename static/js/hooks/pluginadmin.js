define([
  "dijit/MenuBar",
  "dijit/DropDownMenu",
  "dijit/MenuItem",
  "dijit/PopupMenuBarItem"
], function (
  MenuBar,
  DropDownMenu,
  MenuItem,
  PopupMenuBarItem
) {
  return {
    admin: function (hook, args, cb) {
      


      var pSubMenu = new DropDownMenu({});
      pSubMenu.addChild(new MenuItem({
          label: "Installed"
      }));
      pSubMenu.addChild(new MenuItem({
          label: "Add"
      }));
      window.ui.menu.addChild(new PopupMenuBarItem({
          label: "Plugins",
          popup: pSubMenu
      }));

      cb();
    }
  }
});
