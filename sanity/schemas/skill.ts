export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 - 100',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'Skill Type',
      options: {
        list: [
          {title: 'Language', value: 'language'},
          {title: 'Tool', value: 'tool'},
          {title: 'Framework', value: 'framework'},
        ],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
