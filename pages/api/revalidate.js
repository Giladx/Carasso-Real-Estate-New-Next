import { revalidate } from '@teleporthq/cms-mappers/strapi/revalidate'

export default async function handler(req, res) {
  try {
    if (process.env.WEBHOOK_SECRET !== req.query['WEBHOOK_SECRET']) {
      return res.status(401).json({
        revalidated: false,
      })
    }
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'api::tag.tag': {
          try {
            await res.revalidate(`/tags/${data.id}`)
            await res.revalidate(`/tags`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
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
        case 'api::apartment.apartment': {
          try {
            await res.revalidate(`/apartments`)
            await res.revalidate(`/apartments/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::project.project': {
          try {
            await res.revalidate(`/projects`)
            await res.revalidate(`/projects/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::author.author': {
          try {
            await res.revalidate(`/authors/${data.id}`)
            await res.revalidate(`/authors`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::shop.shop': {
          try {
            await res.revalidate(`/shops/${data.id}`)
            await res.revalidate(`/shops`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::tab.tab': {
          try {
            await res.revalidate(`/tabs/${data.id}`)
            await res.revalidate(`/tabs`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::building.building': {
          try {
            await res.revalidate(`/buildings`)
            await res.revalidate(`/buildings/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::brand.brand': {
          try {
            await res.revalidate(`/brands/${data.Brand_name}`)
            await res.revalidate(`/brands`)
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
