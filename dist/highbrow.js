(function() {
  var highbrow, root, w,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function(root, factory) {
    return root.highbrow = factory(root.highbrow);
  })(this, function() {
    return highbrow;
  }, root = this || global, w = window, highbrow = {}, highbrow = {
    uA: window.navigator.userAgent.toLowerCase(),
    "do": {
      alert: function(msg) {
        return w.alert(msg);
      },
      assign: function() {
        return w.location.assign();
      },
      atob: function(str) {
        return w.atob(str);
      },
      back: function() {
        return w.history.back();
      },
      blur: function() {
        return w.blur();
      },
      btoa: function(str) {
        return w.btoa(str);
      },
      clearInterval: function() {
        return w.clearInterval();
      },
      clearTimeout: function() {
        return w.clearTimeout();
      },
      close: function() {
        return w.close();
      },
      confirm: function(msg) {
        return w.confirm(msg);
      },
      createPopup: function() {
        return w.createPopup();
      },
      focus: function() {
        return w.focus();
      },
      forward: function() {
        return w.history.forward();
      },
      go: function(loc) {
        return w.history.go(loc);
      },
      moveBy: function(i) {
        return w.moveBy(i);
      },
      moveTo: function(i) {
        return w.moveTo(i);
      },
      open: function() {
        return w.open();
      },
      print: function() {
        return w.print();
      },
      prompt: function(msg, def) {
        return w.prompt(msg, def);
      },
      resizeBy: function(i) {
        return w.resizeBy(i);
      },
      resizeTo: function() {
        return w.resizeTo(i);
      },
      reload: function() {
        return w.location.reload();
      },
      replace: function() {
        return w.location.replace();
      },
      scrollTo: function(x, y) {
        return w.scrollTo(x, y);
      },
      setInterval: function(fnc, m) {
        return w.setInterval(fnc, m);
      },
      stop: function() {
        return w.stop();
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
          return w.chrome != null;
        }
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
        return !(typeof v === "function" ? v(/msie/i.test(highbrow.uA) || indexOf.call(w, 'ActiveXObject') >= 0) : void 0);
      },
      online: function() {
        return w.navigator.onLine;
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
      activeElement: function() {
        return w.document.activeElement;
      },
      anchors: function() {
        return w.document.anchors;
      },
      applets: function() {
        return w.document.applets;
      },
      appName: function() {
        return w.navigator.appName;
      },
      appVersion: function() {
        return w.navigator.appVersion;
      },
      baseURI: function() {
        return w.document.baseURI;
      },
      body: function() {
        return w.document.body;
      },
      closed: function() {
        return w.closed;
      },
      cookie: function() {
        return w.document.cookie;
      },
      defaultState: function() {
        return w.defaultStatus;
      },
      doctype: function() {
        return w.document.doctype;
      },
      document: function() {
        return w.document;
      },
      documentElement: function() {
        return w.documentElement;
      },
      documentMode: function() {
        return w.documentMode;
      },
      documentURI: function() {
        return w.documentURI;
      },
      domain: function() {
        return w.document.domain;
      },
      embeds: function() {
        return w.document.embeds;
      },
      forms: function() {
        return w.document.forms;
      },
      frameElement: function() {
        return w.frameElement;
      },
      frames: function() {
        return w.frames;
      },
      hash: function() {
        return w.location.hash;
      },
      head: function() {
        return w.document.head;
      },
      height: function() {
        return Math.max(document.documentElement['clientHeight'], document.body['scrollHeight'], document.documentElement['scrollHeight'], document.body['offsetHeight'], document.documentElement['offsetHeight']);
      },
      history: function() {
        return w.history;
      },
      host: function() {
        return w.location.host;
      },
      hostname: function() {
        return w.location.hostname;
      },
      href: function() {
        return w.location.href;
      },
      images: function() {
        return w.document.images;
      },
      implementation: function() {
        return w.document.implementation;
      },
      innerHeight: function() {
        return w.innerHeight;
      },
      innerWidth: function() {
        return w.innerWidth;
      },
      inputEncoding: function() {
        return w.document.inputEncoding;
      },
      language: function() {
        return w.navigator.language;
      },
      lastModified: function() {
        return w.navigator.lastModified;
      },
      length: function() {
        return w.length;
      },
      linkes: function() {
        return w.links;
      },
      location: function() {
        return w.location;
      },
      geolocation: function() {
        return w.navigator.geolocation;
      },
      maxTouchPoints: function() {
        return function() {
          return w.navigator.maxTouchPoints;
        };
      },
      name: function() {
        return w.name;
      },
      navigator: function() {
        return w.navigator;
      },
      opener: function() {
        return w.opener;
      },
      origin: function() {
        return w.location.origin;
      },
      outerHeight: function() {
        return w.outerHeight;
      },
      outerWidth: function() {
        return w.outerWidth;
      },
      pageXOffset: function() {
        return w.pageXOffset;
      },
      pageYOffset: function() {
        return w.pageYOffset;
      },
      parent: function() {
        return w.parent;
      },
      pathname: function() {
        return w.location.pathname;
      },
      platform: function() {
        return w.navigator.platform;
      },
      port: function() {
        return w.location.port;
      },
      product: function() {
        return w.navigator.product;
      },
      productSub: function() {
        return w.navigator.productSub;
      },
      protocol: function() {
        return w.location.protocol;
      },
      readyState: function() {
        return document.readyState;
      },
      referrer: function() {
        return document.referrer;
      },
      search: function() {
        return w.location.search;
      },
      screen: function() {
        return w.screen;
      },
      screenLeft: function() {
        return w.screenLeft;
      },
      screenTop: function() {
        return w.screenTop;
      },
      screenX: function() {
        return w.screenX;
      },
      screenY: function() {
        return w.screenY;
      },
      scripts: function() {
        return w.document.scripts;
      },
      scrollX: function() {
        return window.scrollX;
      },
      scrollY: function() {
        return window.scrollY;
      },
      self: function() {
        return window.self;
      },
      status: function() {
        return window.status;
      },
      strictErrorChecking: function() {
        return window.strictErrorChecking;
      },
      title: function() {
        return window.title;
      },
      top: function() {
        return window.top;
      },
      url: function() {
        return w.document.URL;
      },
      userAgent: function() {
        return w.navigator.userAgent;
      },
      userAgentDowncase: function() {
        return w.navigator.userAgent.toLowerCase();
      },
      vendor: function() {
        return w.navigator.vendor;
      },
      vendorSub: function() {
        return w.navigator.vendorSub;
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
      defaultStatus: function(status) {
        return w.defaultStatus(status);
      },
      title: function(title) {
        return document.title = title;
      },
      location: function(loc) {
        return w.location = loc;
      }
    }
  });

}).call(this);
