'use strict'

const { SuccessResponse, ErrorResponse } = require('../../lib/response')

async function handler (params, operation) {
  return new SuccessResponse('Success, user with email address: ' + params.email + ' registered successfully')
}

module.exports = { handler }
