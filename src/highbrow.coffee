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
		uA: window.navigator.userAgent.toLowerCase()
		do: 
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
			prompt: (msg, def) -> window.prompt(msg, def)
			reload: -> window.location.reload()
			replace: -> window.location.replace()
			stop: -> window.stop()
		is:
			android: -> /android/i.test(highbrow.uA)
			blackberry: -> /blackberry/i.test(highbrow.uA) || /BB10/i.test(highbrow.uA)
			chrome: (v) ->
				if v? 
					if highbrow.is.chrome() is true 
						vStart = highbrow.uA.indexOf('chrome')
						vEnd = highbrow.uA.indexOf(' ', vStart)
						vNum = uA.substring(vStart, vEnd).split('/')[1]
						major = vNum.split('.')[0]
						v is parseInt major
					else 
						false
				else
					window.chrome?
			closed: -> window.closed
			firefox: (v) -> 
				if v?
					if highbrow.is.firefox() is true
						vStart = highbrow.uA.indexOf('firefox') + 8
						vEnd = highbrow.uA.indexOf('.') + vStart
						major = highbrow.uA.substring(vStart, vEnd)
						version is parseInt major
					else 
						false
				else
						/firefox/i.test(highbrow.uA)
			opera: -> highbrow.get.userAgentDowncase().indexOf('presto') is not -1
			ie: (v) -> !v? /msie/i.test(highbrow.uA) || 'ActiveXObject' in window
			online: -> window.navigator.onLine
			ipad: -> /ipad/i.test(highbrow.uA)
			iphone: (v) ->
				if v?
					if highbrow.is.iphone()
						vStart = highbrow.uA.indexOf('iphone os ')
						vEnd = highbrow.uA.indexOf('_', vStart)
						vNum = highbrow.uA.substring(vStart + 10, vEnd)
						#original iPhone doesn't have the os portion of the UA
						if v is 1 and vStart is -1 
							true
						else return v is parseInt vNum
					else
						false
				else
					/iphone/i.test highbrow.uA
			ipod: -> /ipod/i.test(highbrow.uA)
			linux: -> /linux/i.test(highbrow.get.appVersion)
			mac: -> /mac/i.test(highbrow.get.appVersion)
			safari: (v) -> 
				if v?
					#safari 3+ includes a version section
					vSlash = highbrow.uA.indexOf('version/')
					if vSlash is not -1
						vStart = vSlash + 8
						vEnd = highbrow.uA.indexOf('.', vStart)
						major = highbrow.uA.substring(vStart, vEnd)
						v is parseInt major
					#otherwise handle all the old UA string formats
					else
						vStart = highbrow.uA.indexOf('safari/') + 7
						vEnd = highbrow.uA.indexOf('.', vStart)
						major = parseInt highbrow.uA.substring(vStart, vEnd)
						#safari 2 has a block of version numbers from 400-500
						if v is 2 and major < 500 and major > 400 
							true
						#safari 1 has a block of version numbers less than 400
						else if v is 1 and major < 400 
							true
						else
							false
				else
					/safari/i.test(highbrow.uA) and /apple computer/i.test(highbrow.get.vendor)
			silk: ->/silk/i.test(highbrow.uA)
			windows: -> /win/i.test(highbrow.get.appVersion)
			windowsPhone: -> @.windows() and /phone/i.test(highbrow.uA)
		get:
			# cookie:
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
			geolocation: -> window.navigator.geolocation
			maxTouchPoints: -> -> window.navigator.maxTouchPoints
			name: -> window.name
			opener: -> window.opener
			origin: -> window.location.origin
			pathname: -> window.location.pathname
			platform: -> window.navigator.platform
			port: -> window.location.port
			product: -> window.navigator.product
			productSub: -> window.navigator.productSub
			protocol: -> window.location.protocol
			referrer: -> document.referrer
			search: -> window.location.search
			scripts: -> window.document.scripts
			url: -> window.document.URL
			userAgent: -> window.navigator.userAgent
			userAgentDowncase: -> window.navigator.userAgent.toLowerCase()
			vendor: -> window.navigator.vendor
			vendorSub: -> window.navigator.vendorSub
			width: -> Math.max document.documentElement['clientWidth'], document.body['scrollWidth'], document.documentElement['scrollWidth'], document.body['offsetWidth'], document.documentElement['offsetWidth']
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
)