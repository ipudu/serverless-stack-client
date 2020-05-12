const dev = {
  STRIPE_KEY: 'pk_test_bwLEEPCmvyYKPTf4qt895D5V00O2PvMFEw',
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'keepernote',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://api.keepernote.com/dev',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_8ssnNpHBX',
    APP_CLIENT_ID: '91eod2k3cq7fkh03stbpqhqo7',
    IDENTITY_POOL_ID: 'us-east-2:af239b6f-bfa8-4c17-92c9-1165825161ea',
  },
};

const prod = {
  STRIPE_KEY: 'pk_test_bwLEEPCmvyYKPTf4qt895D5V00O2PvMFEw',
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'keepernote',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://api.keepernote.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_8ssnNpHBX',
    APP_CLIENT_ID: '91eod2k3cq7fkh03stbpqhqo7',
    IDENTITY_POOL_ID: 'us-east-2:af239b6f-bfa8-4c17-92c9-1165825161ea',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
