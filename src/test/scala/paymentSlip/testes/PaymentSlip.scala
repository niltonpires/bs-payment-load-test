package PaymentSlip.testes
import controller.validate.ValidateController
import io.gatling.core.Predef.{configuration, constantUsersPerSec, css, csv, regex, scenario, substring}
import io.gatling.core.scenario.Simulation
import config.Config
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import scala.concurrent.duration._

class PaymentSlip extends Simulation {

  val validateController = new ValidateController
  val params = new Config
 
  def validateSuccess():ChainBuilder = {
    validateController.getAllSuccess()
  }
  
  val scn = scenario("Validate").exec(validateSuccess())

  setUp(scn.inject(
     constantUsersPerSec(params.qtdUser).during(60.seconds)
  ).protocols(params.semMIBQA))
}
