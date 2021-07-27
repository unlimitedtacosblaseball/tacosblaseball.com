# now, we move things around to work with the S3 config described above
# the goal is to be able to have this new directory structure reflect what
# we want in S3, so that we can do aws s3 cp ./out s3://$S3_BUCKET/$NAMESPACE/
# (even though, as you'll see, we don't exactly do that).
GITHASH=$(git rev-parse --short HEAD)

mv out/_next . # out/ contains only html files
mv out _out
mkdir -p out/builds/$GITHASH
mv _out/* out/builds/$GITHASH
rm -rf _out
mv _next out/
cp -r out/_next/static/ out/static/