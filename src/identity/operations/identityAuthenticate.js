'use strict'

const { SuccessResponse, ErrorResponse } = require('../../lib/response')
const cognito = require('../../lib/cognito')

async function handler (params, operation) {
  const resp = await cognito.authenticate(params.username, params.password, params.refreshToken)

  if (resp.accessToken) {
    return new SuccessResponse({
      idToken: resp.idToken,
      accessToken: resp.accessToken
    })
  }

  return new ErrorResponse({
    message: 'Authentication failed'
  })
}

module.exports = { handler }
