import { gql } from 'graphql-request'

export const GET_HOME = gql`
  query getHome {
    paginasHome {
      introPreTitulo
      introTitulo {
        html
      }
      introTexto {
        html
      }
      introScroll
      tituloServicos {
        html
      }
      subTituloServicos {
        html
      }
      colecoesServicos {
        icone {
          url
        }
        titulo
        texto {
          html
        }
        imagem {
          url
        }
      }
      sobreTitulo {
        html
      }
      textoSobre {
        html
      }
      parceriasLogos {
        url
        width
        height
      }
      clientesTitulo {
        html
      }
      clientesSubtitulo {
        html
      }
      colecoesDepoimento {
        titulo
        texto {
          html
        }
        nome
        cargo
      }
      logoClientes {
        url
        width
        height
      }
      colecaoContato {
        titulo {
          html
        }
        subtitulo {
          html
        }
        telefone
        eMail
        localizacao {
          longitude
          latitude
        }
      }
    }
  }
`

export const GET_SOBRE = gql`
  query getSobre {
    paginasSobre {
      tituloIntro {
        html
      }
      subtituloIntro {
        html
      }
      textoIntro {
        html
      }
      fotoIntro1 {
        url
      }
      fotoIntro2 {
        url
      }
      tituloPorQueA2Td
      textoPorQueA2Td {
        html
      }
      tituloResultado
      textoResultado {
        html
      }
    }
  }
`

export const GET_SERVICOS = gql`
  query getServicos {
    paginasServico {
      tituloIntro {
        html
      }
      subTituloIntro {
        html
      }
      textoIntro {
        html
      }
      fotoIntro1 {
        url
      }
      fotoIntro2 {
        url
      }
    }
  }
`
