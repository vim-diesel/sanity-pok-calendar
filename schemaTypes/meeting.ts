import { defineType } from 'sanity';

export default defineType({
  name: 'meeting',
  title: 'Meeting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'masterEventId',
      title: 'Google Calendar Master Event ID',
      type: 'string', // This stores the Google Calendar master event ID to link events
    },
    {
      name: 'host',
      title: 'Host',
      type: 'reference',
      to: [{ type: 'host' }],
    },
  ],
});
