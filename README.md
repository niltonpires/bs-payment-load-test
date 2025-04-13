# automatic-debit-test
automatic-debit-load-test

Adicionar em project/plugins.sbt: addSbtPlugin("io.gatling" % "gatling-sbt" % "MANUALLY_REPLACE_WITH_LATEST_VERSION")

Adicionar em build.sbt: 

enablePlugins(GatlingPlugin)
libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % "MANUALLY_REPLACE_WITH_LATEST_VERSION" % "test"
libraryDependencies += "io.gatling"            % "gatling-test-framework"    % "MANUALLY_REPLACE_WITH_LATEST_VERSION" % "test"


Executar todos os testes
-------------------
sbt gatling:test

Executar apenas um teste
-----------------------

> Gatling / testOnly computerdatabase.BasicSimulation
sbt gatling:testOnly register.RegisterController.scala
