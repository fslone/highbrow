(function() {
  var highbrow, root,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function(root, factory) {
    return root.highbrow = factory(root.highbrow);
  })(this, function() {
    return highbrow;
  }, root = this || global, highbrow = {}, highbrow = {
    uA: window.navigator.userAgent.toLowerCase(),
    "do": {
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
      prompt: function(msg, def) {
        return window.prompt(msg, def);
      },
      reload: function() {
        return window.location.reload();
      },
      replace: function() {
        return window.location.replace();
      },
      stop: function() {
        return window.stop();
      }
    },
    is: {
      android: function() {
        return /android/i.test(highbrow.uA);
      },
      blackberry: function() {
        return /blackberry/i.test(highbrow.uA) || /BB10/i.test(highbrow.uA);
      },
      chrome: function(v) {
        var major, vEnd, vNum, vStart;
        if (v != null) {
          if (highbrow.is.chrome() === true) {
            vStart = highbrow.uA.indexOf('chrome');
            vEnd = highbrow.uA.indexOf(' ', vStart);
            vNum = uA.substring(vStart, vEnd).split('/')[1];
            major = vNum.split('.')[0];
            return v === parseInt(major);
          } else {
            return false;
          }
        } else {
          return window.chrome != null;
        }
      },
      closed: function() {
        return window.closed;
      },
      firefox: function(v) {
        var major, vEnd, vStart;
        if (v != null) {
          if (highbrow.is.firefox() === true) {
            vStart = highbrow.uA.indexOf('firefox') + 8;
            vEnd = highbrow.uA.indexOf('.') + vStart;
            major = highbrow.uA.substring(vStart, vEnd);
            return version === parseInt(major);
          } else {
            return false;
          }
        } else {
          return /firefox/i.test(highbrow.uA);
        }
      },
      opera: function() {
        return highbrow.get.userAgentDowncase().indexOf('presto') === !-1;
      },
      ie: function(v) {
        return !(typeof v === "function" ? v(/msie/i.test(highbrow.uA) || indexOf.call(window, 'ActiveXObject') >= 0) : void 0);
      },
      online: function() {
        return window.navigator.onLine;
      },
      ipad: function() {
        return /ipad/i.test(highbrow.uA);
      },
      iphone: function(v) {
        var vEnd, vNum, vStart;
        if (v != null) {
          if (highbrow.is.iphone()) {
            vStart = highbrow.uA.indexOf('iphone os ');
            vEnd = highbrow.uA.indexOf('_', vStart);
            vNum = highbrow.uA.substring(vStart + 10, vEnd);
            if (v === 1 && vStart === -1) {
              return true;
            } else {
              return v === parseInt(vNum);
            }
          } else {
            return false;
          }
        } else {
          return /iphone/i.test(highbrow.uA);
        }
      },
      ipod: function() {
        return /ipod/i.test(highbrow.uA);
      },
      linux: function() {
        return /linux/i.test(highbrow.get.appVersion);
      },
      mac: function() {
        return /mac/i.test(highbrow.get.appVersion);
      },
      safari: function(v) {
        var major, vEnd, vSlash, vStart;
        if (v != null) {
          vSlash = highbrow.uA.indexOf('version/');
          if (vSlash === !-1) {
            vStart = vSlash + 8;
            vEnd = highbrow.uA.indexOf('.', vStart);
            major = highbrow.uA.substring(vStart, vEnd);
            return v === parseInt(major);
          } else {
            vStart = highbrow.uA.indexOf('safari/') + 7;
            vEnd = highbrow.uA.indexOf('.', vStart);
            major = parseInt(highbrow.uA.substring(vStart, vEnd));
            if (v === 2 && major < 500 && major > 400) {
              return true;
            } else if (v === 1 && major < 400) {
              return true;
            } else {
              return false;
            }
          }
        } else {
          return /safari/i.test(highbrow.uA) && /apple computer/i.test(highbrow.get.vendor);
        }
      },
      silk: function() {
        return /silk/i.test(highbrow.uA);
      },
      windows: function() {
        return /win/i.test(highbrow.get.appVersion);
      },
      windowsPhone: function() {
        return this.windows() && /phone/i.test(highbrow.uA);
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
      geolocation: function() {
        return window.navigator.geolocation;
      },
      maxTouchPoints: function() {
        return function() {
          return window.navigator.maxTouchPoints;
        };
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
      product: function() {
        return window.navigator.product;
      },
      productSub: function() {
        return window.navigator.productSub;
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
      vendor: function() {
        return window.navigator.vendor;
      },
      vendorSub: function() {
        return window.navigator.vendorSub;
      },
      width: function() {
        return Math.max(document.documentElement['clientWidth'], document.body['scrollWidth'], document.documentElement['scrollWidth'], document.body['offsetWidth'], document.documentElement['offsetWidth']);
      }
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
    }
  });

}).call(this);
