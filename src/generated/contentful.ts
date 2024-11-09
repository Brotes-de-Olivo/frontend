// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAnuncioFields {
  /** Autor */
  autor: IAutor;

  /** Título */
  titulo: string;

  /** Descripcion */
  descripcion?: string | undefined;

  /** activo */
  activo: boolean;

  /** Fecha de evento */
  fechaDeEvento: string;

  /** ubicacion */
  ubicacion?: string | undefined;

  /** imagen */
  imagen: Asset;
}

export interface IAnuncio extends Entry<IAnuncioFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "anuncio";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IAutorFields {
  /** Nombre */
  nombre: string;

  /** Apellido */
  apellido: string;

  /** Cargo */
  cargo?: string | undefined;

  /** Imagen de perfil */
  imagenDePerfil: Asset;
}

export interface IAutor extends Entry<IAutorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "autor";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICartaFields {
  /** Titulo */
  titulo: string;

  /** Descripcion */
  descripcion: string;
}

export interface ICarta extends Entry<ICartaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "carta";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICartaInteractivaFields {
  /** Titulo */
  titulo: string;

  /** Descripcion */
  descripcion: string;

  /** Link */
  link?: string | undefined;

  /** variante */
  variante?: "default" | "secondary" | undefined;
}

export interface ICartaInteractiva extends Entry<ICartaInteractivaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "cartaInteractiva";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IGalleryFields {
  /** photos */
  photos?: Asset[] | undefined;

  /** Titulo */
  titulo: string;
}

export interface IGallery extends Entry<IGalleryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "gallery";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPaginaPrincipalFields {
  /** Titulo */
  titulo: string;

  /** Subtitulo */
  subtitulo: string;

  /** Segundo Titulo */
  segundoTitulo: string;

  /** Segundo Subtitulo */
  segundoSubtitulo: string;

  /** Cartas */
  cartas: ICarta[];

  /** Tercer Titulo */
  tercerTitulo: string;

  /** Cartas Interactivas */
  cartasInteractivas: ICartaInteractiva[];

  /** Titulo Anuncio */
  tituloAnuncio: string;

  /** Descripcion Anuncio */
  descripcionAnuncio: string;

  /** Tercer Subtitulo */
  tercerSubtitulo: string;
}

/** Información desplegada en la página principal */

export interface IPaginaPrincipal extends Entry<IPaginaPrincipalFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "paginaPrincipal";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISobreNosotrosFields {
  /** Descripcion principal */
  descripcionPrincipal: string;

  /** Nuestra Mision */
  nuestraMision: string;

  /** Nuestra vision */
  nuestraVision: string;

  /** Nuestra historia */
  nuestraHistoria: string;

  /** Descripcion servicios */
  descripcionServicios: string;

  /** Servicios */
  servicios: string[];

  /** sobreNosotros */
  sobreNosotros: string;
}

/** Información en la página de sobre nosotros */

export interface ISobreNosotros extends Entry<ISobreNosotrosFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sobreNosotros";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "anuncio"
  | "autor"
  | "carta"
  | "cartaInteractiva"
  | "gallery"
  | "paginaPrincipal"
  | "sobreNosotros";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
