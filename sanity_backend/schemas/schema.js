// Import schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import abouts from './abouts'
import skills from './skills'
import contact from './contact'

// Give schema to the builder and provide the result to Sanity
export default createSchema({
  // Name schema
  name: 'default',
  // Concatenate document type to the ones provided by any plugins that are installed
  types: schemaTypes.concat([projects, abouts, skills, contact])
})
