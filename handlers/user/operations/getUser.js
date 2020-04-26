'use strict'

const { SuccessResponse, ErrorResponse } = require('../../../lib/response')

async function handler (params, operation) {
  if (params.userID) {
    return new SuccessResponse({
      message: 'User ' + params.userID + ' found! This is an update'
    })
  }

  return new ErrorResponse({
    message: 'No user found'
  })
}

module.exports = { handler }
