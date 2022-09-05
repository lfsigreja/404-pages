import notFoundPage from '../data/notFoundPage.json'

export async function getStaticPaths() {
  const paths = notFoundPage.map((page) => ({
    params: { notFound: page.name },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const page = notFoundPage.find((page) => page.name === params.notFound)

  return { props: { page } }
}

export default function notFound({ page }) {
  return (
    <div className="color-page" style={{ backgroundColor: page.hex }}>
      <h1> {page.title} </h1>
      <p> {page.phrase}</p>
    </div>
  )
}
