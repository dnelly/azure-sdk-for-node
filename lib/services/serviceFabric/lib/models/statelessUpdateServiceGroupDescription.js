/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StatelessUpdateServiceGroupDescription class.
 * @constructor
 * The description of the stateless update service group
 * @member {number} [instanceCount]
 * 
 */
function StatelessUpdateServiceGroupDescription() {
  StatelessUpdateServiceGroupDescription['super_'].call(this);
}

util.inherits(StatelessUpdateServiceGroupDescription, models['UpdateServiceGroupDescription']);

/**
 * Defines the metadata of StatelessUpdateServiceGroupDescription
 *
 * @returns {object} metadata of StatelessUpdateServiceGroupDescription
 *
 */
StatelessUpdateServiceGroupDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Stateless',
    type: {
      name: 'Composite',
      className: 'StatelessUpdateServiceGroupDescription',
      modelProperties: {
        flags: {
          required: false,
          serializedName: 'Flags',
          type: {
            name: 'Number'
          }
        },
        ServiceKind: {
          required: true,
          serializedName: 'ServiceKind',
          type: {
            name: 'String'
          }
        },
        instanceCount: {
          required: false,
          serializedName: 'InstanceCount',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = StatelessUpdateServiceGroupDescription;
