# A browser library 
#
# @author Fleming Slone
# @since 6/29/2015

((root, factory) ->
	root.highbrow = factory(root.highbrow)
)(@,
	->(highbrow)
	root = @ || global
	highbrow = {} 
	highbrow =  
		alert: (msg) -> window.alert(msg)
		assign: -> window.location.assign()
		atob: (str) -> window.atob(str)
		back: -> window.history.back()
		blur: -> window.blur()
		btoa: (str) -> window.btoa(str)
		close: -> window.close()
		confirm: (msg) -> window.confirm(msg)
		forward: -> window.history.forward()
		go: (loc) -> window.history.go(loc)
		is:
			chrome: -> window.chrome?
			closed: -> window.closed
			firefox: -> highbrow.get.userAgentDowncase().indexOf('firefox') is not -1
			opera: -> highbrow.get.userAgentDowncase().indexOf('presto') is not -1
			safari: -> highbrow.get.userAgentDowncase().indexOf('chrome') is not -1 and highbrow.get.userAgentDowncase.indexOf('safari') is not -1
			ie: -> (!version) /msie/i.test(userAgent) || 'ActiveXObject' in window
			online: -> window.navigator.onLine
		get:
			appName: -> window.navigator.appName
			appVersion: -> window.navigator.appVersion
			hash: -> window.location.hash
			height: -> Math.max document.documentElement['clientHeight'], document.body['scrollHeight'], document.documentElement['scrollHeight'], document.body['offsetHeight'], document.documentElement['offsetHeight']
			host: -> window.location.host
			hostname: -> window.location.hostname
			href: -> window.location.href
			innerHeight: -> window.innerHeight
			innerWidth: -> window.innerWidth
			language: -> window.navigator.language
			location: -> window.navigator.geoLocation
			name: -> window.name
			opener: -> window.opener
			origin: -> window.location.origin
			pathname: -> window.location.pathname
			platform: -> window.navigator.platform
			port: -> window.location.port
			protocol: -> window.location.protocol
			referrer: -> document.referrer
			search: -> window.location.search
			scripts: -> window.document.scripts
			url: -> window.document.URL
			userAgent: -> window.navigator.userAgent
			userAgentDowncase: -> window.navigator.userAgent.toLowerCase()
			width: -> Math.max document.documentElement['clientWidth'], document.body['scrollWidth'], document.documentElement['scrollWidth'], document.body['offsetWidth'], document.documentElement['offsetWidth']
		not: (fnc) -> -> not fnc.apply(null, Array.slice arguments)
		prompt: (msg, def) -> window.prompt(msg, def)
		reload: -> window.location.reload()
		replace: -> window.location.replace()
		set:
			cookie: (name, value, daysTilExpire) -> 
				exdate = new Date().setDate exdate.getDate() + daysTilExpire
				cookie = name + '=' + escape(value) 
				(daysTilExpire?) cookie += ';expires=' + exdate.toUTCString()
				document.cookie = cookie
				true
			title: (title) ->
				document.title = title
			location: (loc) -> window.location = loc
		stop: -> window.stop()
)