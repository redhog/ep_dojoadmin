define([
  "ep_dojoadmin/static/js/Ui",
  'ep_carabiner/static/js/hooks',
], function (
  Ui,
  hooks
) {
  return {
    documentReadyAdmin: function (hook, args, cb) {
      window.ui = new Ui();
      window.ui.placeAt(document.getElementsByTagName("body")[0]);
      window.ui.startup();

      hooks.aCallAll("admin");
      cb();
    }
  }
});
