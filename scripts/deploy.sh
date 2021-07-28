S3_BUCKET="tacosblaseball.com"

# copy _next and static folders, and make the files immutable
aws s3 cp ./out/ s3://$S3_BUCKET \
    --cache-control immutable,max-age=100000000,public \
    --acl public-read \
    --recursive

aws cloudfront create-invalidation \
    --distribution-id "E345OUQ93X7SW6" \
    --paths "/*"
