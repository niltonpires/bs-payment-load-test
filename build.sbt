scalaVersion := "3.3.0"

scalacOptions := Seq(
  "-encoding", "UTF-8", "-target:jvm-1.8", "-deprecation",
  "-feature", "-unchecked", "-language:implicitConversions", "-language:postfixOps")

val gatlingVersion = "3.6.1"
enablePlugins(GatlingPlugin)
libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % "MANUALLY_REPLACE_WITH_LATEST_VERSION" % "test"
libraryDependencies += "io.gatling"            % "gatling-test-framework"    % "MANUALLY_REPLACE_WITH_LATEST_VERSION" % "test"

val scalaDependency = "3.3.0"
// https://mvnrepository.com/artifact/org.scala-sbt/sbt
libraryDependencies += "org.scala-sbt" % "sbt" % "2.0.0-alpha7" % "provided"
// https://mvnrepository.com/artifact/org.scala-sbt/launcher-interface
libraryDependencies += "org.scala-sbt" % "launcher-interface" % "1.4.2" % "provided"




