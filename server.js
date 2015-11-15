module.exports = function(app, models) {

    var fs = require('fs');
    var AWS = require('aws-sdk');
    var accessKeyId =  process.env.AWS_ACCESS_KEY || "AKIAI5BFEWOMOIF73BXQ";
    var secretAccessKey = process.env.AWS_SECRET_KEY || "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";

    AWS.config.update({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    });

    var s3 = new AWS.S3();

    app.post('/upload', function(req, res){

        var params = {
            Bucket: 'nodefile',
            Key: 'myKey1234.xlsx',
            Body: "Hello"
        };

        s3.putObject(params, function (perr, pres) {
            if (perr) {
                console.log("Error uploading data: ", perr);
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    });

}