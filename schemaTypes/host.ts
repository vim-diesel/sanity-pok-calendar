import {defineType} from 'sanity'

export default defineType({
  name: 'host',
  title: 'Host',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string', // You might want to validate this field later
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url', // Using 'url' type for validation
    },
    {
      name: 'profilePhoto',
      title: 'Profile Photo',
      type: 'image', // Add this image field for profile photos
      options: {
        hotspot: true, // Enable hotspot for better image cropping control
      },
    },
  ],
})
