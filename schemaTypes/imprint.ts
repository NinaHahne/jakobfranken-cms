import {defineField, defineType, defineArrayMember} from 'sanity'

export const imprintType = defineType({
  name: 'imprint',
  title: 'Imprint 📃',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Freitext mit optionalen Links',
      type: 'array',
      description:
        ' [Enter] für neuen Absatz / [Shift + Enter] für neue Zeile / Bei der Email-Adresse in der url bitte mailto: voranstellen, z.B. mailto:hello@example.com',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          marks: {
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }).required(),
                  }),
                ],
              }),
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Imprint 📃',
      }
    },
  },
})
