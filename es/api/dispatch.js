import dispatch from '../core/base/dispatch';

export default function (action, payLoadWhenActionIsString, delay, identity, option) {
  return dispatch(false, action, payLoadWhenActionIsString, delay, identity, option);
}