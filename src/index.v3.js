export default {
    install: function(app) {

        app.config.globalProperties.$detectBrowser = function() {
        const userAgent = navigator.userAgent;
        if (
          userAgent.indexOf("MSIE") > -1 ||
          userAgent.indexOf("Trident/") > -1
        ) {
          return "Internet Explorer";
        } else if (userAgent.indexOf("Edg/") > -1) {
          return "Microsoft Edge";
        } else if (userAgent.indexOf("CriOS") > -1) {
          return "Google Chrome";
        } else if (userAgent.indexOf("Chrome/") > -1) {
          if (userAgent.indexOf("Brave") > -1) {
            return "Brave";
          } else {
            return "Google Chrome";
          }
        } else if (userAgent.indexOf("Firefox/") > -1) {
          return "Mozilla Firefox";
        } else if (
          userAgent.indexOf("Safari/") > -1 &&
          userAgent.indexOf("Chrome/") === -1 &&
          userAgent.indexOf("CriOS") === -1
        ) {
          return "Apple Safari";
        } else if (userAgent.indexOf("OPR/") > -1) {
          return "Opera";
        } else {
          return "Unknown Browser";
        }

      };
    }
};

