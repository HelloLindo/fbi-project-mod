module.exports = (require, ctx) => {
  return {
    transforms: {
      arrow: false,
      classes: false,
      defaultParameter: false,
      destructuring: false,
      forOf: false,
      generator: false,
      letConst: false,
      parameterDestructuring: false,
      spreadRest: false,
      templateString: false
    },
    objectAssign: 'Object.assign'
  }
}

/*
buble transforms options:

  arrow
  classes
  collections
  computedProperty
  conciseMethodProperty
  constLoop
  dangerousForOf
  dangerousTaggedTemplateString
  defaultParameter
  destructuring
  forOf
  generator
  letConst
  modules
  numericLiteral
  parameterDestructuring
  reservedProperties
  spreadRest
  stickyRegExp
  templateString
  unicodeRegExp
*/
