import {defineField, defineType} from 'sanity'

export const siteTextsType = defineType({
  name: 'siteTexts',
  title: 'Site texts',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Name / Site title / Logo text',
      type: 'string',
      initialValue: 'Jakob Franken',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'albumNavLabel',
      title: 'Navigation label: link to album section',
      type: 'string',
      initialValue: 'New Album',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'liveNavLabel',
      title: 'Navigation label: link to live section',
      type: 'string',
      initialValue: 'Live',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imprintLabel',
      title: 'Footer label: imprint',
      type: 'string',
      initialValue: 'Imprint',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation texts 🧭',
      }
    },
  },
})
