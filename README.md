> Thrift model for auditing updates

# How to use

## Scala

in `build.sbt`

```scala
libraryDependencies ++= Seq(
    "com.gu" %% "auditing-thrift-model" % "0.3.0"
)
```

somewhere in your code

```scala
import com.gu.auditing.model.v1.{App, Notification}

Notification(
    app = App.YourAppHere,
    operation = "EatFruit",
    userEmail = "banana@email.com",
    date = new DateTime().toString(),
    resourceId = Some("apple"),
    message = Some("{json}")
)))
```

## node.js

You'll probably want to use [thrift-serializer](https://github.com/guardian/thrift-serializer) to handle the messages.

### Sending messages

```js
var Notification = require('auditing-thrift-model').Notification;
var App = require('auditing-thrift-model').App;

var message = new Notification({
    app = App.YourAppHere,
    operation = "EatFruit",
    userEmail = "banana@email.com",
    date = (new Date()).toISOString(),
    resourceId = "apple",
    message = JSON.stringify({json})
});

serializer.write(message, serializer.Compression.Gzip, function (err, bytes) {
    // use the buffer somehow
});
```

### Receiving notifications


```js
var serializer = require('thrift-serialize');
var Notification = require('auditing-thrift-model').Notification;

serializer.read(Notification, data, function (err, message) {
    console.log(message.operation, message.date);
    // You can have the full name of the source app calling
    console.log(message.getAppName());
});
```


# Develop

## Prerequisites

* Install `thrift` using `brew install thrift`


## Add an application

The list of allowed applications is kept as an `enum`, add new ones in `App`.

## Release

The model is used both by Scala applications and node.js lambda.

* `sbt release` to publish a new version on Sonatype
* `npm run compile` to compile the model for node.js
* update the version of `package.json` it should match the one you just released on Sonatype
* `npm publish ./` to publish the new version on npm
