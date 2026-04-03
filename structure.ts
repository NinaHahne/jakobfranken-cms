import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Hero / Intro 🗨️')
        .id('heroIntro')
        .child(
          S.document().schemaType('heroIntro').documentId('heroIntro').title('Hero / Intro 🗨️'),
        ),

      ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== 'heroIntro'),
    ])
