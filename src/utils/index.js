/**
 * @param {string} stub - the string to be padded.
 * @param {string} pad - the filler which would be repeated.
 * @param {number} length - desired length of output.
 * @returns {string} - left-padded string.
 */
function leftPad (stub, pad, length) {
  return `${new Array(length).fill(pad).join('')}${stub}`.substr(-length);
}

function uniq(values) {
  const obj = {};
  return values.filter(function(x) {
    if(!obj[x]) {
      obj[x] = true;
      return true;
    }
  });
}

function classNamesInner(...args) {
  if(args.length === 0 && typeof args[0] === 'string')
    return args[0];

  const classes = [];
  args.forEach(function (a) {
    if (typeof a === 'string')
      classes.push(a);
    else if (Array.isArray(a))
      classes.push(...classNamesInner(...a));
    else if (typeof a === 'object') {
      for(let cName in a)
        a[cName] && classes.push(...classNamesInner(cName));
    }
  });
  return uniq(classes);
}

function classNames(...args) {
  return classNamesInner(args).join(' ');
}

module.exports = {
  leftPad,
  classNames,
  uniq,
  date: require('./date'),
  noop: () => undefined,
};
