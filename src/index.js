require('./ssb-singleton-setup')
const ssbSingleton = require('ssb-browser-core/ssb-singleton')

// (isRelevantCB, resultCB)
ssbSingleton.getSimpleSSBEventually(() => true, function (err, SSB) {
    console.log('aaaaaa', err, SSB)
    console.log('**id**', SSB.net.id)
})

ssbSingleton.onError(function (err) {
    console.log('errrrr', err)
})
ssbSingleton.onSuccess(function () {
    console.log('success', arguments)
})
