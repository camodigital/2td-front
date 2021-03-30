import TheHeader from 'templates/TheHeader'
import TheFooter from 'templates/TheFooter'
import ThePage from 'templates/ThePage'

export default function Page() {
  return (
    <>
      <TheHeader />
      <ThePage
        title="Nossos Serviços"
        subtitle="Transformar o futuro com tecnologia e valores."
        text="Somos especialistas em observability e oferecemos monitoramento inteligente de aplicações para agregar valor ao negócio do cliente."
        photo1="images/product1.jpg"
        photo2="images/product2.jpg"
        titleCol1="Observality"
        textCol1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
        titleCol2="Cloud"
        textCol2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
        titleCol3="Machine Learning"
        textCol3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
      />
      <TheFooter />
    </>
  )
}
