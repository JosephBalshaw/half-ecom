const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Hard Back',
  },
  {
    tag_name: 'Paper Back',
  },
  {
    tag_name: 'Metal',
  },
  {
    tag_name: 'Plastic',
  },
  {
    tag_name: '10 inch',
  },
  {
    tag_name: '12 inch',
  },
  {
    tag_name: '14 inch',
  },
  {
    tag_name: '16 inch',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Brown',    
  },
  {
    tag_name: 'Electronic',
  },
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
