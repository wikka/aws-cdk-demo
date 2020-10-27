# aws-cdk-demo
A demo project of infrastructure as code using AWS CDK JavaScript.

Before you start trying out this code by yourself, make sure you have:
- An AWS account: https://portal.aws.amazon.com/billing/signup#/start
- Credentials setup: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds
- Has installed aws-cdk globally: `npm install -g aws-cdk`  https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html

This project has 3 main folders:
```
./
├── infrastructure
├── website
└── website_assets
```

# Infrastructure folder

This folder contains the CDK Toolkit and all CDK commands should be executed from here.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

 * `npm run test`         perform the jest unit tests
 * `cdk bootstrap`        run this the first time to deploy the the CDK Toolkit stack. You need to have your credentials already setup
 * `cdk synth`            emits the synthesized CloudFormation template
 * `cdk diff`             compare deployed stack with current state
 * `cdk deploy`           deploy this stack to your default AWS account/region

# Website folder

Here you will find a very simple example using node express with aws-serverless-express.
Read more at https://github.com/awslabs/aws-serverless-express

As you can see, this code is built to run o AWS Lambda.

# Website_assets folder

Here is where all the assets should be. Our infrastructure code will copy all assets from here to a S3 bucket.

# References

AWS CDK Developer Guide
https://docs.aws.amazon.com/cdk/latest/guide/home.html

CDK Workshop
https://cdkworkshop.com

IAM user
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds

AWS Serverless Express
https://github.com/awslabs/aws-serverless-express

Express.js and AWS Lambda — a serverless love story
https://www.freecodecamp.org/news/express-js-and-aws-lambda-a-serverless-love-story-7c77ba0eaa35/

CDK Day 2020
https://www.youtube.com/watch?v=qJutZqXMdgM
