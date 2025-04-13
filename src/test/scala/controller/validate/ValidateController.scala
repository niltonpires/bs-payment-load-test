package controller.validate

import io.gatling.core.Predef.{bodyString, rampUsers, scenario, _}
import io.gatling.http.Predef.{http, status, _}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import config.Config

class ValidateController {

    val csvFeeder = csv("data/validate.csv").circular

     def getAllSuccess () = {
        repeat ( 1 ) {

             feed(csvFeeder)

            .exec ( http ( "Validate - Successo All" )
            .post ("/validatePaymentSlip")
            .header ( "x-customerid", "CUSTOMER:3E2DFEC1D7CA45C4B15FD1A86CDCB722")
            .header ("safepayUserId", "102213874")
            .header ("customerId", "3e2dfec1-d7ca-45c4-b15f-d1a86cdcb722")
            .header ("User-Agent", "4.67.5")
            .header ("x-is-operator", "false")
            .header ("x-session-customer-id", "CUSTOMER:3E2DFEC1D7CA45C4B15FD1A86CDCB722")
            .header ("x-session-owner-customer-id", "3e2dfec1-d7ca-45c4-b15f-d1a86cdcb722")
            //.check ( status.is ( 200 ) )
            .body(StringBody("""{"barCode": "${barCode}"}"""))
            check bodyString.saveAs ( "responseBody" ) )
            .exec { session =>
              println ( session ( "responseBody" ).as [String] )
              session
            }
        }
    }
} 