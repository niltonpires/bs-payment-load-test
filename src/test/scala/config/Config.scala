package config

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import java.util.concurrent._

class Config {

 val semMIBPROD = http
      .baseUrl("https://paymentslip-api.intranet.pagseguro.uol")
      .header ("Content-Type", "application/json")
      .header ( "x-customerid", "CUSTOMER:3E2DFEC1D7CA45C4B15FD1A86CDCB722" )
      .header ("safepayUserId", "102213874")
      .header ("customerId", "3e2dfec1-d7ca-45c4-b15f-d1a86cdcb722")
      .header ("User-Agent", "4.67.5")
      .header ("x-is-operator", "false")
      .header ("x-session-customer-id", "CUSTOMER:3E2DFEC1D7CA45C4B15FD1A86CDCB722")
      .header ("x-session-owner-customer-id", "3e2dfec1-d7ca-45c4-b15f-d1a86cdcb722")

 val qtdUser = 50
 val duration = Duration(1, TimeUnit.MINUTES)

}
