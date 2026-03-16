import {defineField, defineType} from 'sanity'

export const concertType = defineType({
  name: 'concert',
  title: 'Concert',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeLabel',
      title: 'Time',
      type: 'string',
      description: 'Optional display value like 20:00',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'venue',
      subtitle: 'city',
      date: 'date',
    },
    prepare({title, subtitle, date}) {
      return {
        title,
        subtitle: [subtitle, date].filter(Boolean).join(' · '),
      }
    },
  },
})
