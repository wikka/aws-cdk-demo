const cdk = require('@aws-cdk/core')
const s3 = require("@aws-cdk/aws-s3")
const s3deploy = require("@aws-cdk/aws-s3-deployment")
const apigateway = require("@aws-cdk/aws-apigateway")
const lambda = require("@aws-cdk/aws-lambda")


class InfrastructureStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "WebsiteBucket",{
      publicReadAccess: true
    })

    new s3deploy.BucketDeployment(this, "deployWebsite", {
      sources: [s3deploy.Source.asset("../website_assets")],
      destinationBucket: websiteBucket,
      destinationKeyPrefix: 'static'
    })

    const handler = new lambda.Function(this, "WebsiteHandler", {
      functionName: 'myWebsite',
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("../website"),
      handler: "index.handler",
      environment: {
        STATICS_URL: `https://${websiteBucket.bucketRegionalDomainName}/static`
      }
    })

    const api = new apigateway.RestApi(this, "website-api", {
      restApiName: "Website Service",
      description: "This service serves website."
    })

    const getWebsiteIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "text/html": '{ "statusCode": "200" }' }
    })

    api.root.addMethod("GET", getWebsiteIntegration)
  }
}

module.exports = { InfrastructureStack }
