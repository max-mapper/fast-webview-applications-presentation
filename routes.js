Router({
  '/': {
    on: function() {
      if (app.pouchToken) {
        loadDefaultUI()
        redirect("#/following")
      } else {
        redirect("#/welcome")
      }
    }
  },
  '/:page': { 
    on: function(page) {
      loadDefaultUI()
      app.routes.pages[page]()
    }
  },
  '/delete/:id': {
    on: function(id) {
      app.eventCache.get(id, function(err, doc) {
        if (err) return redirect("#/following")
        var uri = app.baseURL + '/api/e/' + doc.shortened
        util.tokenRequest({json:true, uri: uri, method: 'DELETE'}, function(err, resp, body) {
          redirect("#/following")
        })
      })
    }
  }
})








