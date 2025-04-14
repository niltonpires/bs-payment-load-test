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
            .header ( "x-customerid", "CUSTOMER:13104EEEE22A4B389A6F9DABB3F517E7")
            .header ("safepayUserId", "102213874")
            .header ("customerId", "13104eee-e22a-4b38-9a6f-9dabb3f517e7")
            .header ("User-Agent", "4.67.5")
            .header ("x-is-operator", "false")
            .header ("x-session-customer-id", "CUSTOMER:13104EEEE22A4B389A6F9DABB3F517E7")
            .header ("x-session-owner-customer-id", "13104eee-e22a-4b38-9a6f-9dabb3f517e7")
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