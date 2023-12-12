import { revalidate } from '@teleporthq/cms-mappers/strapi/revalidate'

export default async function handler(req, res) {
  try {
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'api::post.post': {
          try {
            await res.revalidate(`/posts/${data.id}`)
            await res.revalidate(`/posts`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::author.author': {
          try {
            await res.revalidate(`/authors`)
            await res.revalidate(`/authors/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        default:
          throw new Error('Invalid content typ, received', contentType)
      }
    })
    return res.status(200).json({
      revalidated: true,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      revalidated: false,
    })
  }
}
