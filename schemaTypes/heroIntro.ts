import {defineField, defineType} from 'sanity'

export const heroIntroType = defineType({
  name: 'heroIntro',
  title: 'Hero / Intro 👋',
  type: 'document',
  fields: [
    defineField({
      name: 'bioText',
      title: 'Bio text',
      type: 'text',
      rows: 4,
      description: 'Kurzer Intro-Text auf der Startseite. Textumbrüche werden hier berücksichtigt.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Das große Bild in der Hero-Sektion.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image alt text',
      type: 'string',
      description: 'Alternativtext für Barrierefreiheit.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageCredit',
      title: 'Image credit',
      type: 'string',
      description: 'z. B. "Picture by Joel Höglund"',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero / Intro 🗨️',
      }
    },
  },
})
