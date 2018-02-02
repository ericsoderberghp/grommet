'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Calendar) {
  var DocumentedCalendar = (0, _reactDesc.describe)(Calendar).availableAt((0, _utils.getAvailableAtBadge)('Calendar')).description('Calendar of days in months.\n      It can be used to select a single date, a range of dates, or multiple\n      individual dates.').usage('import { Calendar } from \'grommet\';\n<Calendar />');

  DocumentedCalendar.propTypes = {
    bounds: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string).description('An array of two numbers indicating the limits on\n        navigation in ISO8601 format'),
    date: _reactDesc.PropTypes.string.description('The selected date in ISO8601 format'),
    dates: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string)])).description('Multiple selected dates in ISO8601 format.\n      Items that are an array indicate a range of dates.'),
    disabled: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string)])).description('Multiple dates in ISO8601 format that should not be\n        selectable. Items that are an array indicate a range of dates.'),
    locale: _reactDesc.PropTypes.string.description('The locale to use. It must already\n      have been loaded. See: https://momentjs.com/docs/#/i18n/'),
    onSelect: _reactDesc.PropTypes.func.description('Called with an ISO8601 date when\n      the user selects a day.\n      For single select, make this the subsequent `date` property value.\n      For multiple select or ranges, toggle values in `dates`.\n      Not specifying this property makes the component read only.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']).description('What size to make it.')
  };

  return DocumentedCalendar;
};