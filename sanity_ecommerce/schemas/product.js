export default {
  name: 'product',
  title: 'Product',
  type: 'documents',
  fields:[
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{tpye: 'image'}],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug', //like url, unique string
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    }
  ]
}