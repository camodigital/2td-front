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
      }
    }
  }
`
