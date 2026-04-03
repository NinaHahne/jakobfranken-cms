import {defineField, defineType} from 'sanity'

export const liveSectionType = defineType({
  name: 'liveSection',
  title: 'Live section ♫',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Kleiner Text über der Überschrift, z. B. "Live".',
      initialValue: 'Live',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Upcoming gigs',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showPastLabel',
      title: 'Button label: show past gigs',
      type: 'string',
      initialValue: 'Show past gigs',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hidePastLabel',
      title: 'Button label: hide past gigs',
      type: 'string',
      initialValue: 'Hide past gigs',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emptyStateLabel',
      title: 'Empty state label',
      type: 'string',
      initialValue: 'TBA',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emptyStateText',
      title: 'Empty state text',
      type: 'string',
      initialValue: 'New dates coming soon',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Live section ♫',
      }
    },
  },
})
