import {Entry, createClient} from 'contentful'
import {
  ISobreNosotrosFields,
  IPaginaPrincipalFields,
  ICartaFields,
  ICartaInteractivaFields,
  IGalleryFields,
  IAnuncioFields,
} from '../generated/contentful'
import {useTranslation} from 'react-i18next'

export interface EntryTypes {
  Inicio: Entry<IPaginaPrincipalFields>
  SobreNosotros: Entry<ISobreNosotrosFields>
  Carta: Entry<ICartaFields>
  CartaInteractiva: Entry<ICartaInteractivaFields>
  Gallery: Entry<IGalleryFields>
  Anuncio: Entry<IAnuncioFields>
}

export interface CollectionTypes {
  Inicio: Entry<IPaginaPrincipalFields>[]
  SobreNosotros: Entry<ISobreNosotrosFields>[]
  Carta: Entry<ICartaFields>[]
  CartaInteractiva: Entry<ICartaInteractivaFields>[]
  Gallery: Entry<IGalleryFields>[]
  Anuncio: Entry<IAnuncioFields>[]
}

type ContentTypes = {
  anuncio: IAnuncioFields
}

export const ORDER_CRITERIA = {
  ASC: 'sys.createdAt',
  DESC: '-sys.createdAt',
  ORDER_NUMBER: 'fields.order',
}

export const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
    environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT as string,
  })

  const getEntry = async ({entryId, locale}: {entryId: string; locale?: string}) =>
    await client.getEntry(entryId, {locale})

  const getEntryByTitle = async <ContentType extends keyof ContentTypes>({
    contentType,
    title,
    locale,
  }: {
    contentType: ContentType
    title: string
    locale?: string
  }) => {
    const entries = await client.getEntries<ContentTypes[ContentType]>({
      content_type: contentType,
      'fields.slug[match]': title,
      locale,
    })

    return entries.items[0]
  }

  const getCollection = async <ContentType extends keyof ContentTypes>({
    contentType,
    limit,
    order = ORDER_CRITERIA.DESC,
    locale,
  }: {
    contentType: ContentType
    limit?: number
    order?: string
    locale?: string
  }) => {
    const entries = await client.getEntries<ContentTypes[ContentType]>({
      content_type: contentType,
      limit,
      order,
      locale,
    })

    return entries.items
  }

  return {
    getEntry,
    getCollection,
    getEntryByTitle,
  }
}
