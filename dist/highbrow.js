(function() {
  var highbrow, root,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function(root, factory) {
    return root.highbrow = factory(root.highbrow);
  })(this, function() {
    return highbrow;
  }, root = this || global, highbrow = {}, highbrow = {
    alert: function(msg) {
      return window.alert(msg);
    },
    assign: function() {
      return window.location.assign();
    },
    atob: function(str) {
      return window.atob(str);
    },
    back: function() {
      return window.history.back();
    },
    blur: function() {
      return window.blur();
    },
    btoa: function(str) {
      return window.btoa(str);
    },
    close: function() {
      return window.close();
    },
    confirm: function(msg) {
      return window.confirm(msg);
    },
    forward: function() {
      return window.history.forward();
    },
    go: function(loc) {
      return window.history.go(loc);
    },
    is: {
      chrome: function() {
        return window.chrome != null;
      },
      closed: function() {
        return window.closed;
      },
      firefox: function() {
        return highbrow.get.userAgentDowncase().indexOf('firefox') === !-1;
      },
      opera: function() {
        return highbrow.get.userAgentDowncase().indexOf('presto') === !-1;
      },
      safari: function() {
        return highbrow.get.userAgentDowncase().indexOf('chrome') === !-1 && highbrow.get.userAgentDowncase.indexOf('safari') === !-1;
      },
      ie: function() {
        return (!version)(/msie/i.test(userAgent) || indexOf.call(window, 'ActiveXObject') >= 0);
      },
      online: function() {
        return window.navigator.onLine;
      }
    },
    get: {
      appName: function() {
        return window.navigator.appName;
      },
      appVersion: function() {
        return window.navigator.appVersion;
      },
      hash: function() {
        return window.location.hash;
      },
      height: function() {
        return Math.max(document.documentElement['clientHeight'], document.body['scrollHeight'], document.documentElement['scrollHeight'], document.body['offsetHeight'], document.documentElement['offsetHeight']);
      },
      host: function() {
        return window.location.host;
      },
      hostname: function() {
        return window.location.hostname;
      },
      href: function() {
        return window.location.href;
      },
      innerHeight: function() {
        return window.innerHeight;
      },
      innerWidth: function() {
        return window.innerWidth;
      },
      language: function() {
        return window.navigator.language;
      },
      location: function() {
        return window.navigator.geoLocation;
      },
      name: function() {
        return window.name;
      },
      opener: function() {
        return window.opener;
      },
      origin: function() {
        return window.location.origin;
      },
      pathname: function() {
        return window.location.pathname;
      },
      platform: function() {
        return window.navigator.platform;
      },
      port: function() {
        return window.location.port;
      },
      protocol: function() {
        return window.location.protocol;
      },
      referrer: function() {
        return document.referrer;
      },
      search: function() {
        return window.location.search;
      },
      scripts: function() {
        return window.document.scripts;
      },
      url: function() {
        return window.document.URL;
      },
      userAgent: function() {
        return window.navigator.userAgent;
      },
      userAgentDowncase: function() {
        return window.navigator.userAgent.toLowerCase();
      },
      width: function() {
        return Math.max(document.documentElement['clientWidth'], document.body['scrollWidth'], document.documentElement['scrollWidth'], document.body['offsetWidth'], document.documentElement['offsetWidth']);
      }
    },
    not: function(fnc) {
      return function() {
        return !fnc.apply(null, Array.slice(arguments));
      };
    },
    prompt: function(msg, def) {
      return window.prompt(msg, def);
    },
    reload: function() {
      return window.location.reload();
    },
    replace: function() {
      return window.location.replace();
    },
    set: {
      cookie: function(name, value, daysTilExpire) {
        var cookie, exdate;
        exdate = new Date().setDate(exdate.getDate() + daysTilExpire);
        cookie = name + '=' + escape(value);
        (daysTilExpire != null)(cookie += ';expires=' + exdate.toUTCString());
        document.cookie = cookie;
        return true;
      },
      title: function(title) {
        return document.title = title;
      },
      location: function(loc) {
        return window.location = loc;
      }
    },
    stop: function() {
      return window.stop();
    }
  });

}).call(this);
