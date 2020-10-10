import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  // useCDN === true, gives you fast response, it will get you cached data
  // useCDN === false, gives you slower response, but latest data
  useCdn: process.env.NODE_ENV === 'production',
};

export default sanityClient(options);
