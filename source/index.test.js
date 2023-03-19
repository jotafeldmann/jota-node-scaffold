import test from 'node:test'
import assert from 'node:assert'
import { init } from './index.js'

test('testing the test', () => {
    assert.strictEqual(init(), 123)
})

