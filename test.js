var test = require('tape')
  , transport = require('./index')
  , through = require('through')

test('works as expected', function(assert) {

  var client = transport(through())
    , message = 'hi there random-'+Math.random()

  client.on('data', function(d) {
    assert.equal(d.data+'', message+'\n')
    assert.end()
  })

  client.write(new Buffer(message, 'utf8'))
})

