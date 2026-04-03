import swaggerJsdoc from 'swagger-jsdoc'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Redwood Hogs Farm CMS API',
      version: '1.0.0',
      description:
        'REST API for the Redwood Hogs Farm CMS. All endpoints except `/api/auth/login` require an `admin_token` HttpOnly cookie obtained from the login endpoint.',
    },
    servers: [{ url: 'http://localhost:3001', description: 'Development server' }],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'admin_token',
        },
      },
      schemas: {
        Pig: {
          type: 'object',
          properties: {
            id:          { type: 'integer', example: 1 },
            name:        { type: 'string',  example: 'Berkshire Boar' },
            description: { type: 'string',  example: 'A high-quality heritage breed.' },
            image_url:   { type: 'string',  example: '/images/uploads/pig1.jpg' },
            sort_order:  { type: 'integer', example: 0 },
            is_active:   { type: 'boolean', example: true },
            created_at:  { type: 'string',  format: 'date-time' },
            updated_at:  { type: 'string',  format: 'date-time' },
          },
        },
        PigInput: {
          type: 'object',
          required: ['name'],
          properties: {
            name:        { type: 'string',  example: 'Berkshire Boar' },
            description: { type: 'string',  example: 'A high-quality heritage breed.' },
            image_url:   { type: 'string',  example: '/images/uploads/pig1.jpg' },
            sort_order:  { type: 'integer', example: 0 },
            is_active:   { type: 'boolean', example: true },
          },
        },
        Service: {
          type: 'object',
          properties: {
            id:          { type: 'integer', example: 1 },
            title:       { type: 'string',  example: 'Pig Sales' },
            description: { type: 'string',  example: 'We sell quality breeding stock.' },
            icon_svg:    { type: 'string',  example: '<svg>...</svg>' },
            sort_order:  { type: 'integer', example: 0 },
            is_active:   { type: 'boolean', example: true },
            created_at:  { type: 'string',  format: 'date-time' },
            updated_at:  { type: 'string',  format: 'date-time' },
          },
        },
        ServiceInput: {
          type: 'object',
          required: ['title'],
          properties: {
            title:       { type: 'string',  example: 'Pig Sales' },
            description: { type: 'string',  example: 'We sell quality breeding stock.' },
            icon_svg:    { type: 'string',  example: '<svg>...</svg>' },
            sort_order:  { type: 'integer', example: 0 },
            is_active:   { type: 'boolean', example: true },
          },
        },
        GalleryImage: {
          type: 'object',
          properties: {
            id:         { type: 'integer', example: 1 },
            src:        { type: 'string',  example: '/images/uploads/photo.jpg' },
            alt:        { type: 'string',  example: 'Pigs grazing in the field' },
            sort_order: { type: 'integer', example: 0 },
            is_active:  { type: 'boolean', example: true },
            created_at: { type: 'string',  format: 'date-time' },
            updated_at: { type: 'string',  format: 'date-time' },
          },
        },
        FarmInfo: {
          type: 'object',
          properties: {
            id:              { type: 'integer', example: 1 },
            farm_name:       { type: 'string',  example: 'Redwood Hogs Farm' },
            location:        { type: 'string',  example: 'Musha, Rwamagana District, Rwanda' },
            email:           { type: 'string',  example: 'info@redwoodhogsfarm.com' },
            phone:           { type: 'string',  example: '+250 700 000 000' },
            hours_weekday:   { type: 'string',  example: 'Monday – Friday: 8:00 AM – 5:00 PM' },
            hours_saturday:  { type: 'string',  example: 'Saturday: 8:00 AM – 2:00 PM' },
            hours_sunday:    { type: 'string',  example: 'Sunday: Closed' },
            updated_at:      { type: 'string',  format: 'date-time' },
          },
        },
        AboutContent: {
          type: 'object',
          properties: {
            id:              { type: 'integer', example: 1 },
            story_heading:   { type: 'string',  example: 'Our Story' },
            story_text_1:    { type: 'string',  example: 'Redwood Hogs Farm began as a family dream…' },
            story_text_2:    { type: 'string',  example: '' },
            story_text_3:    { type: 'string',  example: '' },
            story_image_url: { type: 'string',  example: '/images/uploads/story.jpg' },
            mission_text:    { type: 'string',  example: 'To promote sustainable pig farming…' },
            vision_text:     { type: 'string',  example: 'To contribute to the growth of modern farming…' },
            updated_at:      { type: 'string',  format: 'date-time' },
          },
        },
        UploadResponse: {
          type: 'object',
          properties: {
            url: { type: 'string', example: '/images/uploads/1700000000000-photo.jpg' },
          },
        },
        MessageResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Success' },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Error description' },
          },
        },
      },
    },
    security: [{ cookieAuth: [] }],
  },
  apis: ['./src/routes/*.ts'],
}

export const swaggerSpec = swaggerJsdoc(options)
