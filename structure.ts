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

      S.listItem()
        .title('Live section ♫')
        .id('liveSection')
        .child(
          S.document().schemaType('liveSection').documentId('liveSection').title('Live section ♫'),
        ),

      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'heroIntro' && listItem.getId() !== 'liveSection',
      ),
    ])
