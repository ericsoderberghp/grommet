var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { focusStyle } from '../../utils';

var disabledStyle = '\n  opacity: 0.5;\n  cursor: default;\n';

export var StyledRadioButtonContainer = styled.label.withConfig({
  displayName: 'StyledRadioButton__StyledRadioButtonContainer'
})(['display:flex;flex-direction:row;align-items:center;cursor:pointer;user-select:none;', ' > div:first-child{', '}:hover input:not([disabled]) + div{border-color:', ';}'], function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return 'margin-right: ' + props.theme.global.edgeSize.small + ';';
}, function (props) {
  return props.theme.dark ? props.theme.global.colors.white : props.theme.global.colors.black;
});

export var StyledRadioButtonInput = styled.input.withConfig({
  displayName: 'StyledRadioButton__StyledRadioButtonInput'
})(['position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;z-index:1;:focus + div,:focus + span{', '}:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background:', ';}'], focusStyle, function (props) {
  return (props.theme.radioButton.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return (props.theme.radioButton.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
});

export var StyledRadioButtonButton = styled.div.withConfig({
  displayName: 'StyledRadioButton__StyledRadioButtonButton'
})(['box-sizing:border-box;position:relative;top:-1px;display:inline-block;width:', ';height:', ';vertical-align:middle;background:inherit;border:', ' solid;border-color:', ';border-radius:', ';> svg{box-sizing:border-box;position:absolute;top:-2px;left:-2px;display:none;width:', ';height:', ';fill:', ';}'], function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.border.width;
}, function (props) {
  return props.theme.radioButton.border.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.radioButton.border.radius;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return (props.theme.radioButton.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
});

var StyledRadioButton = styled.div.withConfig({
  displayName: 'StyledRadioButton'
})(['position:relative;']);

export default StyledRadioButton.extend(_templateObject, function (props) {
  return props.theme.radioButton && props.theme.radioButton.extend;
});