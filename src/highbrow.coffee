# A browser library 
#
# @author Fleming Slone
# @since 6/29/2015
# todo: add document object methods

((root, factory) ->
	root.highbrow = factory(root.highbrow)
)(@,
	->(highbrow)
	root = @ || global
	w = window
	highbrow = {} 
	highbrow =
		uA: window.navigator.userAgent.toLowerCase()
		do: 
			alert: (msg) -> w.alert(msg)
			assign: -> w.location.assign()
			atob: (str) -> w.atob(str)
			back: -> w.history.back()
			blur: -> w.blur()
			btoa: (str) -> w.btoa(str)
			clearInterval: -> w.clearInterval()
			clearTimeout: -> w.clearTimeout()
			close: -> w.close()
			confirm: (msg) -> w.confirm(msg)
			createPopup: -> w.createPopup()
			focus: -> w.focus()
			forward: -> w.history.forward()
			go: (loc) -> w.history.go(loc)
			moveBy: (i) -> w.moveBy(i)
			moveTo: (i) -> w.moveTo(i)
			open: -> w.open()
			print: -> w.print()
			prompt: (msg,def) -> w.prompt(msg, def)
			resizeBy: (i) -> w.resizeBy(i)
			resizeTo: -> w.resizeTo(i)
			reload: -> w.location.reload()
			replace: -> w.location.replace()
			scrollTo: (x,y) -> w.scrollTo(x,y)
			setInterval: (fnc,m) -> w.setInterval(fnc,m)
			stop: -> w.stop()
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
					w.chrome?
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
			ie: (v) -> !v? /msie/i.test(highbrow.uA) || 'ActiveXObject' in w
			online: -> w.navigator.onLine
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
			activeElement: -> w.document.activeElement
			anchors: -> w.document.anchors
			appCodeName: -> w.navigator.appCodeName
			applets: -> w.document.applets
			appName: -> w.navigator.appName
			appVersion: -> w.navigator.appVersion
			availHeight: -> w.screen.availHeight
			availWidth: -> w.screen.availWidth
			baseURI: -> w.document.baseURI
			body: -> w.document.body
			closed: -> w.closed
			colorDepth: -> w.screen.colorDepth
			cookie: -> w.document.cookie
			cookieEnabled: -> w.document.cookieEnabled
			defaultState: -> w.defaultStatus
			doctype: -> w.document.doctype
			#obj
			document: -> w.document
			documentElement: -> w.documentElement
			documentMode: -> w.documentMode
			documentURI: -> w.documentURI
			domain: -> w.document.domain
			embeds: -> w.document.embeds
			forms: -> w.document.forms
			frameElement: -> w.frameElement
			frames: -> w.frames
			geolocation: -> w.navigator.geolocation
			hash: -> w.location.hash
			head: -> w.document.head
			#this height is taken from jQuery.height
			height: -> Math.max document.documentElement['clientHeight'], document.body['scrollHeight'], document.documentElement['scrollHeight'], document.body['offsetHeight'], document.documentElement['offsetHeight']
			#obj
			history: -> w.history
			historyLength: -> history.length
			host: -> w.location.host
			hostname: -> w.location.hostname
			href: -> w.location.href
			images: -> w.document.images
			implementation: -> w.document.implementation
			innerHeight: -> w.innerHeight
			innerWidth: -> w.innerWidth
			inputEncoding: -> w.document.inputEncoding
			language: -> w.navigator.language
			lastModified: -> w.navigator.lastModified
			length: -> w.length
			linkes: -> w.links
			#obj
			location: -> w.location
			geolocation: -> w.navigator.geolocation
			maxTouchPoints: -> -> w.navigator.maxTouchPoints
			name: -> w.name
			#obj
			navigator: -> w.navigator
			onLine: -> w.navigator.onLine
			opener: -> w.opener
			origin: -> w.location.origin
			outerHeight: -> w.outerHeight
			outerWidth: -> w.outerWidth
			pageXOffset: -> w.pageXOffset
			pageYOffset: -> w.pageYOffset
			parent: -> w.parent
			pathname: -> w.location.pathname
			pixelDepth: -> w.screen.pixelDepth
			platform: -> w.navigator.platform
			port: -> w.location.port
			product: -> w.navigator.product
			productSub: -> w.navigator.productSub
			protocol: -> w.location.protocol
			readyState: -> document.readyState
			referrer: -> document.referrer
			search: -> w.location.search
			#obj
			screen: -> w.screen
			screenLeft: -> w.screenLeft
			screenTop: -> w.screenTop
			screenX: -> w.screenX
			screenY: -> w.screenY
			scripts: -> w.document.scripts
			scrollX: -> w.scrollX
			scrollY: -> w.scrollY
			self: -> w.self
			status: -> w.status
			strictErrorChecking: -> w.strictErrorChecking
			title: -> w.title
			top: -> w.top
			url: -> w.document.URL
			userAgent: -> w.navigator.userAgent
			userAgentDowncase: -> w.navigator.userAgent.toLowerCase()
			vendor: -> w.navigator.vendor
			vendorSub: -> w.navigator.vendorSub
			#this is taken from jQuery.width
			width: -> Math.max document.documentElement['clientWidth'], document.body['scrollWidth'], document.documentElement['scrollWidth'], document.body['offsetWidth'], document.documentElement['offsetWidth']
		set:
			cookie: (name, value, daysTilExpire) -> 
				exdate = new Date().setDate exdate.getDate() + daysTilExpire
				cookie = name + '=' + escape(value) 
				(daysTilExpire?) cookie += ';expires=' + exdate.toUTCString()
				document.cookie = cookie
				true
			defaultStatus: (status) -> w.defaultStatus(status)
			title: (title) ->
				document.title = title
			location: (loc) -> w.location = loc
			hash: (i) -> w.location.hash(i)
			host: (i) -> w.location.host(i)
			hostname: (i) -> w.location.hostname(i)
			href: (i) -> w.location.href(i)
			pathname: (i) -> w.location.pathname(i)
			port: (i) -> w.location.port(i)
			protocol: (i) -> w.location.protocol(i)
			search: (i) -> w.location.search(i)
)