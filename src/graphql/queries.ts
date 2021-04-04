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
      secaoDeContato {
        titulo {
          html
        }
        subtitulo
        telefone
        eMail
        localizacao {
          latitude
          longitude
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
      iconeColuna1 {
        url
      }
      tituloColuna1
      textoColuna1 {
        html
      }
      iconeColuna2 {
        url
      }
      tituloColuna2
      textoColuna2 {
        html
      }
      iconeColuna3 {
        url
      }
      tituloColuna3
      textoColuna3 {
        html
      }
      secaoQualLingua {
        titulo
        logos {
          url
          width
          height
        }
        textoFinal
      }
      secaoDeContato {
        titulo {
          html
        }
        subtitulo
        telefone
        eMail
        localizacao {
          latitude
          longitude
        }
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
      iconeColuna1 {
        url
      }
      tituloColuna1
      textoColuna1 {
        html
      }
      iconeColuna2 {
        url
      }
      tituloColuna2
      textoColuna2 {
        html
      }
      iconeColuna3 {
        url
      }
      tituloColuna3
      textoColuna3 {
        html
      }
      secaoQualLingua {
        titulo
        logos {
          url
          width
          height
        }
        textoFinal
      }
      secaoDeContato {
        titulo {
          html
        }
        subtitulo
        telefone
        eMail
        localizacao {
          latitude
          longitude
        }
      }
    }
  }
`
