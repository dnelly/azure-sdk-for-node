/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the FileStatusesResult class.
 * @constructor
 * Data Lake Store filesystem file status list information response.
 * @member {object} [fileStatuses] Gets the object representing the list of
 * file statuses.
 * 
 * @member {array} [fileStatuses.fileStatus] Gets the object containing the
 * list of properties of the files.
 * 
 */
function FileStatusesResult() {
}

/**
 * Defines the metadata of FileStatusesResult
 *
 * @returns {object} metadata of FileStatusesResult
 *
 */
FileStatusesResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FileStatusesResult',
    type: {
      name: 'Composite',
      className: 'FileStatusesResult',
      modelProperties: {
        fileStatuses: {
          required: false,
          readOnly: true,
          serializedName: 'FileStatuses',
          type: {
            name: 'Composite',
            className: 'FileStatuses'
          }
        }
      }
    }
  };
};

module.exports = FileStatusesResult;