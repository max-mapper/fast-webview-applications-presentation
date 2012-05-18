window.plugins.pushNotification.register(
  function(data) {
    app.emitter.emit('deviceRegistered', data)
    localStorage.setItem('deviceUuid', data.deviceUuid)
    localStorage.setItem('deviceModel', data.deviceModel)
    localStorage.setItem('deviceToken', data.deviceToken)
  }, 
  function(e) {
    console.error('pushnotification error'+e)
  }, 
  [{ alert:true, badge:true, sound:true }]
)